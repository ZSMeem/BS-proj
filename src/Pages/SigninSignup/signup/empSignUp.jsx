/* eslint-disable no-unused-vars */
import style from '../signin/signInStyle.module.css';
import { useEffect, useState } from 'react';
import BSLogo from './BSLogo';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { PiIdentificationCardFill } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmpSignUp = () => {
  const [id, setId] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    let id = sessionStorage.getItem('id');
    if (id) {
      navigate('/');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let adminObj = { id, fName, lName, email, pass };
    // console.log(adminObj);
    fetch('http://localhost:5000/employee', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(adminObj),
    })
      .then((res) => {
        toast.success('Sign Up Successfully.');
        navigate('/signin');
      })
      .catch((err) => {
        toast.error('Sign Up Error');
      });
  };

  return (
    <div className="p-3 m-3 d-flex flex-wrap">
      <div className="col-sm-12 col-md-6">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Register as Employee</h2>
          <div className={style.inputField}>
            <PiIdentificationCardFill className={style.icon} />
            <input
              required
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Employee ID"
            />
          </div>
          <div className={style.inputField}>
            <FaUserAlt className={style.icon} />
            <input
              required
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className={style.inputField}>
            <FaUserAlt className={style.icon} />
            <input
              required
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className={style.inputField}>
            <IoMdMail className={style.icon} />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className={style.inputField}>
            <FaLock className={style.icon} />
            <input
              required
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password"
            />
          </div>
          <input type="submit" value="Sign up" className={style.myBtn} />
          <p
            style={{
              fontWeight: 'bold',
              marginTop: '20px',
            }}
          >
            Already have an account?
            <Link to="/signin" style={{ marginLeft: '10px' }}>
              Click Here
            </Link>
          </p>
        </form>
      </div>
      <div className="col-sm-12 col-md-6">
        <BSLogo />
      </div>
    </div>
  );
};

export default EmpSignUp;
