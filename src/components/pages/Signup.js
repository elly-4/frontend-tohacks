import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Signup.css";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import firebase from "firebase";
import { useHistory } from "react-router";

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

async function handleSubmit(db, lat, lng, history) {
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var range = document.getElementById("range").value;
  var calorie = document.getElementById("calorie").value;
  var cuisine = [];
  cuisines.forEach((element) => {
    if (document.getElementById(element).checked) {
      cuisine.push(element);
    }
  });
  var health = [];
  healths.forEach((element) => {
    if (document.getElementById(element).checked) {
      health.push(element);
    }
  });
  console.log(health, cuisine);
  var creds = await firebase.auth().createUserWithEmailAndPassword(email, pass);
  var uid = creds.user.uid;
  db.collection("users").doc(uid).set({
    name: name,
    lastName: lastName,
    lat: lat,
    lng: lng,
    range: range,
    calorie: calorie,
    cuisine: cuisine,
    health: health,
  });
  if (creds.user.uid) {
    history.push("/pickrecipes");
    console.log("/pickrecipes");
  }
}

function SignUp() {
  const history = useHistory();

  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZ3JlZW5yb2JvdDE2IiwiYSI6ImNrazAweTc2czBjeTMydmxlcGY3ZmlzcTgifQ.mxjUkTOCY8uPyvnUNB_AOQ",
  });

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

  var db = firebase.firestore();

  var lat = 0;
  var lng = 0;

  return (
    <div style={{ color: "#33333", backgroundColor: "#333333", height: 140 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(db, lat, lng, history);
        }}
      >
        <h1 className="signUp"> Sign up </h1>
        <label className="firstName"> First Name </label>{" "}
        <input
          id="name"
          type="text"
          className="enterValue"
          placeholder="First Name "
        />
        <br />
        <label className="lastName"> Last Name</label>{" "}
        <input
          id="lastName"
          type="text"
          className="enterValue"
          placeholder="Last Name"
        />
        <br />
        <label className="emailAddress"> Email Address</label>{" "}
        <input
          id="email"
          type="email"
          className="enterValue"
          placeholder="Email Address"
        />
        <br />
        <label className="password"> Password</label>{" "}
        <input
          id="pass"
          type="password"
          className="enterValue"
          placeholder="Password"
        />{" "}
        <br />
        <label className="password"> Your location</label>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "200px",
            width: "200px",
          }}
          onDrag={(e) => {
            console.log(lat);
            console.log(lng);
            lat = e["transform"]["_center"]["lat"];
            lng = e["transform"]["_center"]["lng"];
          }}
          center={[-79.3, 43.6]}
        ></Map>
        <label className="password"> Max Range</label>{" "}
        <input
          id="range"
          type="number"
          className="enterValue"
          placeholder="Max Range"
        />{" "}
        <label className="password"> Cuisine Type</label>{" "}
        <div style={{ width: "300px", margin: "0 auto" }}>
          {cuisines.map((element) => {
            return (
              <>
                <input type="checkbox" id={element} />
                <label for={element}>{element}</label>
                <br />
              </>
            );
          })}
        </div>
        <label className="password"> Calorie max</label>{" "}
        <input
          id="calorie"
          type="number"
          className="enterValue"
          placeholder="Calorie Max"
        />{" "}
        <label className="password"> Health Restrictions</label>{" "}
        <div style={{ width: "300px", margin: "0 auto" }}>
          {healths.map((element) => {
            return (
              <>
                <input type="checkbox" id={element} />
                <label for={element}>{element}</label>
                <br />
              </>
            );
          })}
        </div>
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUp;
