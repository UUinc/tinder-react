import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import database from "./firebase";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // database
        //     .collection("people")
        //     .onSnapshot((snapshot) =>
        //         setPeople(snapshot.docs.map((doc) => doc.data()))
        //     );

        let peopleArr = new Array();
        const querySnapshot = getDocs(collection(database, "people"));
        querySnapshot.then((querySnapshot) => {
            querySnapshot.forEach((doc) => peopleArr.push(doc.data()));
        });
        setPeople(peopleArr);
    }, []);

    return (
        <div>
            <div className="tinderCards-cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>
                                {person.name}
                                <h2>{person.age}</h2>
                            </h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
