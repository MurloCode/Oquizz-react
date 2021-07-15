// == Import npm
import React from 'react';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// == Import
import Header from 'src/components/Header';
import Quizz from 'src/components/Quizz';
import Answer from 'src/components/Answer';

// == Composant
const Oquizz = () => (
  
  <div className="oquizz">
    <Header />
    <h1>Homepage disconnected</h1>
    <Quizz />
    <Answer />
  </div>
);

// == Export
export default Oquizz;
