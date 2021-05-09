import React from "react";
import "../../App.css";
import "./Home.css";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

function Home() {
  return (
    <div>
      <img src="/images/home.png" alt="" className="homeImage"></img>

      <CardColumns>
        <Card>
          <Card.Img variant="top" src="/images/food.8jpeg.png" />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="/images/123.jpeg" />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="/images/d1.jpeg" />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>

      <h2 className="aboutSection"> About us</h2>
      <p>meowmeow</p>
    </div>
  );
}

export default Home;
