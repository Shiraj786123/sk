'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { adminAPI } from '../utils/api';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { user, logout, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin) {
      router.push('/login');
      return;
    }

    fetchData();
  }, [isAdmin, router]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Fetch users
      const usersResponse = await adminAPI.getAllUsers();
      setUsers(usersResponse.data);

      // Fetch contacts
      const contactsResponse = await adminAPI.getAllContacts();
      setContacts(contactsResponse.data);

      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.response?.data?.msg || 'Failed to load data');
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await adminAPI.deleteUser(userId);
        setUsers(users.filter(u => u._id !== userId));
        alert('User deleted successfully');
      } catch (err) {
        alert('Failed to delete user');
      }
    }
  };

  const handleDeleteContact = async (contactId) => {
    if (window.confirm('Are you sure you want to delete this contact message?')) {
      try {
        await adminAPI.deleteContact(contactId);
        setContacts(contacts.filter(c => c._id !== contactId));
        alert('Contact message deleted successfully');
      } catch (err) {
        alert('Failed to delete contact message');
      }
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (loading) {
    return <div className="admin-loading">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {/* Stats Cards */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{users.length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Contacts</h3>
          <p className="stat-number">{contacts.length}</p>
        </div>
        <div className="stat-card">
          <h3>Admin Users</h3>
          <p className="stat-number">
            {users.filter(u => u.role === 'admin').length}
          </p>
        </div>
      </div>

      {/* Registered Users Section */}
      <div className="section">
        <h2>Registered Users</h2>
        {users.length === 0 ? (
          <p>No users registered yet.</p>
        ) : (
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Registered</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone || 'N/A'}</td>
                    <td>
                      <span className={`role-badge ${user.role}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="delete-btn"
                        disabled={user.role === 'admin'}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Contact Messages Section */}
      <div className="section">
        <h2>Contact Messages</h2>
        {contacts.length === 0 ? (
          <p>No contact messages yet.</p>
        ) : (
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(contact => (
                  <tr key={contact._id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td className="message-cell">{contact.message}</td>
                    <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteContact(contact._id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;