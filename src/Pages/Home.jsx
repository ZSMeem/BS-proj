/* eslint-disable no-unused-vars */
import logo from './home.svg';
import { Link, useNavigation } from 'react-router-dom';
import style from './SigninSignup/signin/signInStyle.module.css';
import BSLogo from './SigninSignup/signup/BSLogo';

let id = sessionStorage.getItem('id');

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.panelsContainer}>
        <div className={`${style.panel} ${style.leftPanel}`}>
          <div className={style.content}>
            <h3>Welcome to Brainstation 23</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              qui sapiente odio mollitia architecto sint aut nulla non facilis
              perferendis.
            </p>
          </div>
          <img src={logo} className={style.image} alt="" />
        </div>
        <div style={{ marginTop: '15%' }} className={style.homeText}>
          <BSLogo />
          {!id ? (
            <Link
              to="/signin"
              className="btn btn-primary"
              style={{ marginLeft: '4%' }}
            >
              Get Started
            </Link>
          ) : (
            <Link
              to="/App/Dashboard"
              className="btn"
              style={{
                marginLeft: '4%',
                backgroundColor: '#A3C8D2',
              }}
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
