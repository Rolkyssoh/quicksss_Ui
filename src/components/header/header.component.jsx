import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { moveCurrentUser } from '../../redux/user/user.actions';

import './header.styles.scss';
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';

const Header = (props) => (
    <div className='header'>
    <Link className='logo-container' to="/">
        <Logo className='logo' />
    </Link>
    <div className='options'>
        <Link className='option' to='/new_annonce'>DEPOSER UNE ANNONCE</Link>
        <Link className='option' to='/listing'>LISTING</Link>
        <Link className='option' to='/listing'>CONTACT</Link> 
        {/* <Link className='option' to='/signin'>SIGN IN</Link> */}
        {
            props.currentUser ? 
                (
                    <div className="dropdown-container">
                        <CustomDropdown logout={() => props.moveCurrentUser(props.currentUser)} />
                        <div className='option' onClick={() => props.moveCurrentUser(props.currentUser)}>SIGN OUT</div>
                    </div>
                )
                :
                <Link className='option' to='/signin'>  
                    AUTHENTICATION
                </Link> 
        }
    </div>
</div>
);

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
  });

const mapDispatchToProps = dispatch => ({
    moveCurrentUser: user => dispatch(moveCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);