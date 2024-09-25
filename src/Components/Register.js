import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // Display a success toast notification
  const notifySuccess = () => toast.success('Registration Successful!');
  
  // Display an error toast notification
  const notifyError = (message) => toast.error(message || 'An error occurred. Please try again.');

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await fetch('http://localhost:8090/user/registeruser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const res = await response.json();
      console.log(res);

      if (res.status) {
        notifySuccess();
        setTimeout(() => navigate('/login'), 1000);  // Wait 3 seconds before redirecting
      } else {
        setMsg(res.msg);
        notifyError(res.msg);
      }
    } catch (err) {
      console.log(err);
      setMsg('An error occurred. Please try again.');
      notifyError();
    }
  };

  return (
    <div className="center-wrapper">
    <div className="form-container">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">      
          <input 
            type="text"
            placeholder='Name' 
            id="username" 
            {...register('username', { required: 'Name is required' })} 
          />
          {errors.username&& <p className="error">{errors.username.message}</p>}
        </div>

        <div className="input-group">  
          <input 
            type="email" 
            placeholder='EmailId'
            id="useremail" 
            {...register('useremail', { 
              required: 'Email is required', 
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid Email' }
            })} 
          />
          {errors.useremail && <p className="error">{errors.useremail.message}</p>}
        </div>

        <div className="input-group">
          <input 
            type="password" 
            placeholder='Password' 
            id="userpass" 
            {...register('userpass', { required: 'Password is required' })} 
          />
          {errors.userpass && <p className="error">{errors.userpass.message}</p>}
        </div>

        <button type="submit" className="submit-button">Sign Up</button>
        <span className='acc'>Already have an account? <Link to="/login">LogIn</Link></span>
      </form>
      {msg && <p className="message">{msg}</p>}
      
      {/* Toast Container for displaying toasts */}
      <ToastContainer />
    </div>
    </div>
  );
};

export default RegistrationForm;



