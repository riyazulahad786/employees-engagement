import { useState } from 'react';
import axios from 'axios'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/login', { email, password });
      console.log('Login successful:', response.data);
      
      localStorage.setItem('token', response.data.token); 

      window.location.href = '/home'; 

    } catch (err) {
      console.error('Error logging in:', err);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="card mt-4 shadow-lg">
      <div className="card-body">
        <h2 className="card-title py-2">Login Kudos</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  
            />
          </div>

          <button type="submit" className="btn btn-dark text-white fs-4 fw-bold w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
