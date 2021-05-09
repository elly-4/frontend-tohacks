import React, { useState, useRef } from "react";
import "../../App.css";
import "./PickRecipes.css";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import firebase from "firebase";
import { loadMapData } from '../get_stores';

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
  var locations = await loadMapData(-75, 45, 50000);
  console.log(locations);
  console.log(data["lng"], data["lat"], data["range"]);

  for (var i = 0; i < 5; i++) {
    cards.push(
      <Card className="p-3">
        <Card.Body>
          <a href={locations[i]["web"]}>
            <Card.Title>{locations[i]["name"]}</Card.Title>
          </a>
          <Card.Text>
            Address: {locations[i]["address"]["label"]}
            <br />
            Categories: {locations[i]["categories"][0]}
            <br />
            Is it open: {locations[i]["isOpen"] ? "Open" : "Closed"}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return cards;
}

function BrowseMeals() {
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
  var [cards, setCards] = useState(<p>Loading....</p>);
  var hasRun = useRef(false);
  //var cards = [];
  //console.log(hasRun);
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
//mealpog is the real name:)
  //console.log(cards);
  return (
    <div>
      <CardColumns>{cards}</CardColumns>
    </div>
  );
}

//return <img src={logo} alt="Logo" />;
export default BrowseMeals;
