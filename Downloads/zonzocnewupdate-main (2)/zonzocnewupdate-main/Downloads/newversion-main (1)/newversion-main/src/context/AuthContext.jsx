'use client';
// client/src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

// Safe localStorage access — guards against react-snap pre-render environment
const safeStorage = {
  get: (key) => {
    try { return typeof window !== 'undefined' ? localStorage.getItem(key) : null; }
    catch { return null; }
  },
  set: (key, value) => {
    try { if (typeof window !== 'undefined') localStorage.setItem(key, value); }
    catch { /* noop */ }
  },
  remove: (key) => {
    try { if (typeof window !== 'undefined') localStorage.removeItem(key); }
    catch { /* noop */ }
  },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = safeStorage.get('user');
    try { return storedUser ? JSON.parse(storedUser) : null; }
    catch { return null; }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = safeStorage.get('token');
    if (token && !user) loadUser(token);
    else setLoading(false);
  }, []);

  const loadUser = async (token) => {
    try {
      const res = await axios.get(`${API}/api/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      safeStorage.set('user', JSON.stringify(res.data));
    } catch (err) {
      console.error('Failed to load user:', err);
      safeStorage.remove('token');
      safeStorage.remove('user');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      const res = await axios.post(`${API}/api/auth/login`, { email, password });
      safeStorage.set('token', res.data.token);
      safeStorage.set('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      return { success: true, user: res.data.user };
    } catch (err) {
      const errorMsg = err.response?.data?.msg || 'Login failed';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    }
  };

  const register = async (userData) => {
    try {
      setError(null);
      const res = await axios.post(`${API}/api/auth/register`, userData);
      safeStorage.set('token', res.data.token);
      safeStorage.set('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      return { success: true, user: res.data.user };
    } catch (err) {
      const errorMsg = err.response?.data?.msg || 'Registration failed';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    }
  };

  const logout = () => {
    safeStorage.remove('token');
    safeStorage.remove('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
