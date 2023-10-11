/* eslint-disable no-unused-vars */
import style from './signInStyle.module.css';
import { useState } from 'react';
import AdminSignIn from './AdminSignIn.jsx';
import EmpSignIn from './EmpSignIn.jsx';
import Panel from './Panel.jsx';
const SignIn = () => {
  const [togglePanel, setTogglePanel] = useState(true);

  const handelPanel = () => setTogglePanel((togglePanel) => !togglePanel);

  const checkToggle = togglePanel
    ? `${style.container}`
    : `${style.container} ${style.empSignInMode}`;

  return (
    <div className={checkToggle}>
      <div className={style.formsContainer}>
        <div className={style.signin}>
          <AdminSignIn />
          <EmpSignIn />
        </div>
      </div>
      <Panel onToggle={handelPanel} />
    </div>
  );
};

export default SignIn;
