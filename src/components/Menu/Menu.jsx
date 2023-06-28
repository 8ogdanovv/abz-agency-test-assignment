import logo from './../../assets/logo.svg';
import Button from '../Button/Button.jsx';
import './Menu.css';
// import Tooltip from '@mui/material/Tooltip';
import Tooltip from '../Tooltip/Tooltip';

const Menu = () => {
  return (
    <div className="menu section">
      <Tooltip title="src/assets/logo.svg">
        <img src={logo} width={104} height={26} alt="main logo" className='logo'/>
      </Tooltip>

      <div className="buttons">
        <Tooltip title="Users" enterDelay={500} leaveDelay={200} placement="bottom-end" >
          <a href="#users-page">
            <Button title="Users" handleClick={() => console.log('Users Button clicked')} />
          </a>
        </Tooltip>

        <Tooltip title="Sign up" enterDelay={500} leaveDelay={200} placement="bottom-end" >
          <a href="#sign-up-page">
            <Button title="Sign up" handleClick={() => console.log('Sign-up Button clicked')} />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default Menu;