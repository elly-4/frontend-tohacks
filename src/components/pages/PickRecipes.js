import React, { useState, useRef } from "react";
import "../../App.css";
import "./PickRecipes.css";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import firebase from "firebase";

// loadData(query, mealType, cuisineType, calorieRange, healthLabels, callback) {

// // only for showing examples
// const examples = [
//   "chicken",
//   "egg",
//   "parmesan",
//   "pizza",
//   "tofu"
// ]

const cuisines = [
  "American",
  "Asian",
  "British",
  "Caribbean",
  "Central Europe",
  "Chinese",
  "Eastern Europe",
  "French",
  "Indian",
  "Italian",
  "Japanese",
  "Kosher",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "South American",
  "South East Asian",
];

const healths = [
  "alcohol-free",
  "immuno-supportive",
  "celery-free",
  "crustacean-free",
  "dairy-free",
  "egg-free",
  "fish-free",
  "fodmap-free",
  "gluten-free",
  "keto-friendly",
  "kidney-friendly",
  "kosher",
  "low-potassium",
  "lupine-free",
  "mustard-free",
  "low-fat-abs",
  "no-oil-added",
  "low-sugar",
  "paleo",
  "peanut-free",
  "pecatarian",
  "pork-free",
  "red-meat-free",
  "sesame-free",
  "shellfish-free",
  "soy-free",
  "sugar-conscious",
  "tree-nut-free",
  "vegan",
  "vegetarian",
  "wheat-free",
];

async function cardGenerator() {
  var db = firebase.firestore();
  console.log(firebase.auth());
  var data = await (
    await db.collection("users").doc(firebase.auth().currentUser.uid).get()
  ).data();
  var cards = [];
  for (var i = 0; i < 5; i++) {
    console.log("", "lunch", data["cuisine"], data["calorie"], data["health"]);
    cards.push(
      <Card className="p-3">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title that wraps to a new line</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return cards;
}

function PickRecipes() {
  var firebaseConfig = {
    apiKey: "AIzaSyDbSRA0MIJSW4eio57gwD8qqHSpx86tcYc",
    authDomain: "tohacks-2021-project.firebaseapp.com",
    databaseURL: "https://tohacks-2021-project-default-rtdb.firebaseio.com",
    projectId: "tohacks-2021-project",
    storageBucket: "tohacks-2021-project.appspot.com",
    messagingSenderId: "683203357547",
    appId: "1:683203357547:web:a9a940281a508a282ffa2e",
    measurementId: "G-KTH83RX1MS",
  };
  // Initialize Firebase

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var [cards, setCards] = useState();
  var hasRun = useRef(false);
  //var cards = [];
  console.log(hasRun);
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      if (hasRun.current === false) {
        setCards(await cardGenerator());
      }
      hasRun.current = true;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  console.log(cards);
  return <div>{cards}</div>;
}

//return <img src={logo} alt="Logo" />;
export default PickRecipes;
