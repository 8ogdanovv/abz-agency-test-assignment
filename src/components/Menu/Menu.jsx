import Button from '../Button/Button.jsx';
import logo from '../../assets/logo.svg';
import './Menu.css';

const Menu = () => {
  return (
    <header className="header">
      <img src={logo} className='logo' alt="logo" />

      <Button title="Users" />

      <Button title="Sign up" />
    </header>
  );
};

export default Menu;
