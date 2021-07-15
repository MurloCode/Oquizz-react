// == Import npm
import React from 'react';
import Card from 'react-bootstrap/Card';

// == Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import scrubs from 'src/images/Scrubs Q1 .jpeg';


// == Import

// == Composant
const Quizz = () => (  
    <Card className="bg-white bgcard">
    <Card.Img className="imgscrubs" src={ scrubs } alt="Card image" />
    <Card.ImgOverlay className="text-quizz">
      <Card.Title>Question n°1</Card.Title>
      <Card.Text className="quizzbot">
      Dans Scrubs, Quel est le nom du scooter de JD ?
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
);

// == Export
export default Quizz;