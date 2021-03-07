import React from 'react';
import { Link } from 'react-router-dom';

import './custom-dropdown.styles.scss';

const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

const CustomDropdown = ({logout}) => {
    return (
        <div>
            <div className="dropdown">
              <button onClick={myFunction} className="dropbtn">Dropdown</button>
              <div id="myDropdown" className="dropdown-content">
                <Link to='/account'>Mes annonces</Link>
                <Link to='#'>Mes Favoris</Link>
                <Link to='#'>Chat</Link>
                <Link to='#'>Réglages</Link>
                <Link onClick={logout}>Déconnexion</Link>
              </div>
            </div>
        </div>
    )
}

export default CustomDropdown;