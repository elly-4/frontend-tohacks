import React, { useEffect, useState } from 'react';
import "../../App.css";
import './Signup.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import firebase from "firebase";

function handleSubmit() {

}

function SignUp () {
    const Map = ReactMapboxGl({
        accessToken:
            "pk.eyJ1IjoiZ3JlZW5yb2JvdDE2IiwiYSI6ImNrazAweTc2czBjeTMydmxlcGY3ZmlzcTgifQ.mxjUkTOCY8uPyvnUNB_AOQ",
    });

    var firebaseConfig = {
        apiKey: "AIzaSyDbSRA0MIJSW4eio57gwD8qqHSpx86tcYc",
        authDomain: "tohacks-2021-project.firebaseapp.com",
        databaseURL:
            "https://tohacks-2021-project-default-rtdb.firebaseio.com",
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
        <div
            style={{ color: "#33333", backgroundColor: "#333333", height: 140 }}
        >
            <form onSubmit={handleSubmit}>
                <h1 className="signUp"> Sign up </h1>
                <label className="firstName"> First Name </label>{" "}
                <input
                    type="text"
                    className="enterValue"
                    placeholder="First Name "
                />
                <br />
                <label className="lastName"> Last Name</label>{" "}
                <input
                    type="text"
                    className="enterValue"
                    placeholder="Last Name"
                />
                <br />
                <label className="emailAddress"> Email Address</label>{" "}
                <input
                    type="text"
                    className="enterValue"
                    placeholder="Email Address"
                />
                <br />
                <label className="password"> Password</label>{" "}
                <input
                    type="text"
                    className="enterValue"
                    placeholder="Password"
                />{" "}
                <br />
                <label className="password">
                    {" "}
                    Your location
                </label>
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
                ></Map>
                <input className="submitButton" type="submit" value="Submit" />
            </form>
        </div>
    );
    
}




export default SignUp