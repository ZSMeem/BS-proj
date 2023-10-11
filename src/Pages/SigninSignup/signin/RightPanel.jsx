import style from './signInStyle.module.css';
import logo from './admin.svg';
const RightPanel = ({ onToggle }) => {
  return (
    <div className={`${style.panel} ${style.rightPanel}`}>
      <div className={style.content}>
        <h3>Admin ?</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex
          ratione. Aliquid!
        </p>
        <button
          className={`${style.myBtn} ${style.transparent}`}
          onClick={onToggle}
        >
          Sign in
        </button>
      </div>
      <img src={logo} className={style.image} alt="" />
    </div>
  );
};

export default RightPanel;
