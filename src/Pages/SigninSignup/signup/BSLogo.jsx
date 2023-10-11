import logo from './bs.png';

const style = {
  textAlign: 'center',
  padding: '20px',
  margin: '10px',
};

const BSLogo = () => {
  return (
    <div style={style}>
      <img
        src={logo}
        alt=""
        style={{ height: '70%', width: '40%', marginBottom: '15px' }}
      />
      <p style={{textAlign:'justify'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam
        accusamus, neque, quo deleniti, sapiente iure aspernatur quidem ducimus
        in quis vel officiis adipisci labore velit beatae facilis! Sunt
        accusamus veritatis mollitia minus ducimus laudantium, nemo cupiditate
        commodi doloribus amet rerum quam quo a pariatur, corrupti aliquam
        officia minima quasi!
      </p>
    </div>
  );
};

export default BSLogo;
