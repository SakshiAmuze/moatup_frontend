import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../RegistrationForm.css'; 

const LogIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const[msg,setMsg] = useState("");
  const navigate = useNavigate();

  const notifySuccess = (username) => toast.success(`${username}!`);
  const notifyError = (message) => toast.error(message || 'An error occurred. Please try again.');

  const onSubmit = async (data) => {
      console.log(data);

      try {
          const response = await fetch('http://localhost:8090/user/loginuser', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include', 
              body: JSON.stringify({
                  useremail: data.email,
                  userpass: data.password
              })
          });

          const res = await response.json();
          console.log(res);

          if (res.success) {
              notifySuccess(res.message);  
              setTimeout(() => navigate('/home'), 3000);  
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
          <h2>LogIn</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group">
                  <input 
                      type="email" 
                      placeholder='Email Id'
                      id="email" 
                      {...register('email', { 
                          required: 'Email is required', 
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                      })} 
                  />
                  {errors.email && <p className="error">{errors.email.message}</p>}
              </div>

              <div className="input-group">
                  <input 
                      type="password"
                      placeholder='Password'
                      id="password" 
                      {...register('password', { required: 'Password is required' })} 
                  />
                  {errors.password && <p className="error">{errors.password.message}</p>}
              </div>

              <button type="submit" className="submit-button">Log In</button>
              <span className='acc'>Don't have an account? <Link to="/signin">Register</Link></span>
          </form>
              {msg && <p className="message">{msg}</p>}
      
    
      <ToastContainer />
      </div>
      </div>
  );
};

export default LogIn;



