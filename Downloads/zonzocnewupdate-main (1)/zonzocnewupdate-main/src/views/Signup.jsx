'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import '../styles/AuthFigma.css';


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { register } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await register(formData);

    setLoading(false);

    if (result.success) {
      router.push('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="auth-figma-container">
      {/* Left Side - Background Image */}
      <div className="auth-figma-left">
        <img src="/images/login-bg.png" alt="Background" className="auth-bg-image" />
      </div>

      {/* Right Side - Form */}
      <div className="auth-figma-right">
        <div className="auth-figma-header">
          <div className="language-dropdown">
            <span>English (United States)</span>
          </div>
          <div className="signup-text">
            Already have an account? <Link href="/login" className="signup-btn">Log in</Link>
          </div>
        </div>

        <div className="auth-form-wrapper">
          <div className="avatar-circle-figma"></div>

          <h2 className="auth-title-figma">Create an account</h2>
          <p className="auth-subtitle-figma">
            Join us today! Please fill in your details to get started.
          </p>

          {error && <div className="error-msg-figma">{error}</div>}

          <form onSubmit={handleSubmit} className="form-figma">
            <div className="input-group-figma">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="input-group-figma">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group-figma">
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="input-group-figma">
              <label htmlFor="password">
                Password
                <button
                  type="button"
                  className="hide-show-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a strong password"
                minLength="6"
              />
            </div>

            <div className="terms-checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                By creating an account, I agree to our <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className="login-btn-figma" disabled={loading}>
              {loading ? 'Creating account...' : 'Sign up'}
            </button>
          </form>

          <div className="divider-or">
            <span>OR</span>
          </div>

          <div className="social-btns">
          <button type="button" className="social-btn-figma google">
          <img src="/images/google-icon-logo.svg" alt="Google" className="social-logo" />
          Continue with Google
          </button>

          <button type="button" className="social-btn-figma apple">
          <img src="/images/apple-logo.svg" alt="Apple" className="social-logo" />
          Continue with Apple
          </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
