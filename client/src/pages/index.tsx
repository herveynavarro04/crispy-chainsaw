'use client';

import type React from 'react';

import { useState } from 'react';
import { LockIcon, UserIcon } from 'lucide-react';

export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      username,
      password,
    });

    const response = await fetch(
      `http://localhost:8080/user/SignIn?${queryParams.toString()}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    );
    const data = response.json();
    console.log(data);
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-header">
          <h1 className="signin-title">Sign in to your account</h1>
          <p className="signin-description">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="signin-content">
          <form onSubmit={handleSubmit} className="signin-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-container">
                <span className="input-icon">
                  <UserIcon />
                </span>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <span className="input-icon">
                  <LockIcon />
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="signin-button">
              Sign in
            </button>
          </form>
        </div>
        <div className="signin-footer">
          <button className="forgot-password-button">Forgot password?</button>
          <div className="signup-prompt">
            Don&apos;t have an account?{' '}
            <button className="signup-button">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
