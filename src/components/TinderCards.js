import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import database from "./firebase";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const querySnapshot = getDocs(collection(database, "people"));
        querySnapshot.then((querySnapshot) => {
            querySnapshot.forEach((element) => {
                var data = element.data();
                data.key = element.id;
                setPeople((arr) => [...arr, data]);
            });
        });
    }, []);

    return (
        <div>
            <div className="tinderCards-cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.key}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>
                                {person.name}
                                <br />
                                {person.age}
                            </h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
