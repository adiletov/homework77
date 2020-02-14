import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import {Button} from "reactstrap";
const Header = (props) => {
    return (
        <header className="header">
            <img src={logo} alt="logotip" className="imgHeader"/>
            <div className="btnHeader">
                <Button onClick={props.onClickModal} color="danger">ADD</Button>
            </div>
        </header>
    );
};

export default Header;