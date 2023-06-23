import logo from './../../assets/logo.svg';
import Button from '../Button/Button.jsx';
import './Menu.css';

const Menu = () => {
  return (
    <header className="header">
      <img src={logo} width={104} height={26} alt="main logo" className='logo'/>

      <div className="buttons">
        <Button title="Users" handleClick={() => console.log('clicked')} />

        <Button title="Sign up" handleClick={() => console.log('clicked')} />
      </div>
    </header>
  );
};

export default Menu;