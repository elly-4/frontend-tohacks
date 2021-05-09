import React from 'react';
import "../../App.css";
import './Home.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

function Home () {
    return (
        <div style={{ color: '#33333',backgroundColor: '#333333', height: 60 }}>

    
    <h1 className = "home">  Company Name  </h1>
    <img src = "/images/home.png" alt = "" className = "homeImage"></img>

    <CardColumns>
    <Card>
    <Card.Img variant="top" src="/images/food.8jpeg.png" />
    </Card>

    <Card>
    <Card.Img variant="top" src="/images/123.jpeg" />
    </Card>

    <Card>
    <Card.Img variant="top" src="/images/d1.jpeg" />
    </Card>

        
    </CardColumns>

    <h2 className = "aboutSection"> About us</h2>
        <p>
             meowmeow
        </p> 
 



</div>

            
    )

}

export default Home;




