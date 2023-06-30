import logo from './../../../assets/logo.svg';
import Button from '../../Utility/Button/Button.jsx';
import './Menu.css';
import Tooltip from '../../Utility/Tooltip/Tooltip';

const Menu = () => (
  <div className="menu">
    <div className="menu-content">
      <Tooltip tooltip="logo">
        <p style={{ display: 'relative', zIndex: '-1', opacity: '0', marginBottom: '-16px' }}>Logo</p>
        <img src={logo} width={104} height={26} alt="main logo" className='logo' />
      </Tooltip>

      <div className="buttons">
        <Tooltip tooltip="Users">
          <a href="#users-page">
            <Button title="Users" handleClick={() => console.log('Users Button clicked')} />
          </a>
        </Tooltip>

        <Tooltip tooltip="Sign up">
          <a href="#sign-up-page">
            <Button title="Sign up" handleClick={() => console.log('Sign-up Button clicked')} />
          </a>
        </Tooltip>
      </div>
    </div>
  </div>
);

export default Menu;