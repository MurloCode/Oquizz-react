// == Import npm
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
//import Header from 'src/containers/Header';

// == Composant
const Header = () => (
  <div className="header">
    <Navbar collapseOnSelect expand="lg" >
      <Navbar.Brand href="#home">O'Quizz</Navbar.Brand>
    </Navbar>
  </div>
);

// == Export
export default Header;
