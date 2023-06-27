import logo from './../../assets/logo.svg';
import Button from '../Button/Button.jsx';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu section">
      <img src={logo} width={104} height={26} alt="main logo" className='logo'/>

      <div className="buttons">
        <a href="#users-page">
          <Button title="Users" handleClick={() => console.log('clicked')} />
        </a>

        <a href="#sign-up-page">
          <Button title="Sign up" handleClick={() => console.log('clicked')} />
        </a>
      </div>
    </div>
  );
};

export default Menu;