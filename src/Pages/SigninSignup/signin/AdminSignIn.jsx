/* eslint-disable no-unused-vars */
import style from './signInStyle.module.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { PiIdentificationCardFill } from 'react-icons/pi';

const AdminSignIn = () => {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let id = sessionStorage.getItem('id');
    if (id) {
      navigate('/');
    }
  });

  const handelSignIn = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/admin/${id}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resp) => {
        if (Object.keys(resp).length === 0) {
          toast.error('Please enter valid ID');
        } else {
          if (resp.pass === pass) {
            toast.success('Success');
            sessionStorage.setItem('id', id);
            navigate('/App/Dashboard');
          } else {
            toast.error('Please enter valid credentials');
          }
        }
      })
      .catch((err) => toast.error(`Signin Failed due to : ${err.message}`));
  };

  return (
    <form action="" className={style.adminSignInForm} onSubmit={handelSignIn}>
      <h2 className={style.title}>Sign in as Admin</h2>
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
        <FaLock className={style.icon} />
        <input
          required
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
        />
      </div>
      <input type="submit" value="Sign in" className={style.myBtn} />
      <p style={{ fontWeight: 'bold', marginTop: '20px' }}>
        Don't have an account?
        <Link to="/admin-sign-up" style={{ marginLeft: '10px' }}>
          Click Here
        </Link>
      </p>
    </form>
  );
};

export default AdminSignIn;
