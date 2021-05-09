import React from "react";
import "../../App.css";
import "./Home.css";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

function Home() {
  return (
    <div>
      <img src="/images/23.png" alt="" className="homeImage"></img>

      <CardColumns>
        <Card>
          <Card.Img variant="top" src="/images/6.png" />
          <Card.Body>
            <Card.Title className="cardTextBold">Eat Locally</Card.Title>
            <Card.Text className="cardText">
              With the rise of COVID-19, many independently owned grocers are
              facing difficulties remaining in business. Eating with Freshify
              helps support your local community!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="/images/pla.png" />
          <Card.Body>
            <Card.Title className="cardTextBold">Sustainable Meals</Card.Title>
            <Card.Text className="cardText">
              Canadian food consumption habits are unsustainable, in fact
              mass-agriculture contributes to over 600 Million Metric Tons of
              annual CO2 equivalents. [1] Using ingredients from independent
              grocers helps support sustainable and ethical farming practices.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="/images/88.png" />
          <Card.Body>
            <Card.Title className="cardTextBold">Easy to use</Card.Title>
            <Card.Text className="cardText">
              Freshify is designed to be a simple for users to shop locally.
              With simple interfaces and a network of indpendent grocers, local
              grocery pick up has never been so easy!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>

      <h2 className="aboutSection"> About us</h2>

      <p classname="homeAbout">
        Here at Freshify, we strive to empower local grocers and farmers, and
        their communities to work together in creating a better and more
        sustainable Canada. Freshify allows you to make and select their meal
        plans from ingredients from independently owned grocers. Shopping
        locally not only supports the local economy during times of difficulty,
        but it also supports the environment!
      </p>
    </div>
  );
}

export default Home;
