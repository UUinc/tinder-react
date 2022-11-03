import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import database from "./firebase";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const q = query(collection(database, "people"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const tmpPeople = [];
            querySnapshot.forEach((doc) => {
                var data = doc.data();
                data.key = doc.id;
                tmpPeople.push(data);
            });
            setPeople(tmpPeople);
        });

        return unsubscribe;
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
                                <b>{person.name}</b> {person.age}
                            </h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
