import React from 'react';
import './Header.css';
import Button from '../../Utility/Button/Button.jsx';
import Tooltip from '../../Utility/Tooltip/Tooltip';

const Header = () => {
  return (
    <header className='header'>
      <div className="header-text">
        <p className="h1">
          Test assignment for front-end developer
        </p>

        <p className="p1">
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>
      </div>
        <Tooltip tooltip="Sign up">
          <a href="#sign-up-page">
            <Button title="Sign up" handleClick={() => console.log('Sign-up Button clicked')} />
          </a>
        </Tooltip>
    </header>
  )
}

export default Header;