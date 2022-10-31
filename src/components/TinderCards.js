import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards()
{
    const [people, setPeople] = useState([
        {
            name: "Thomas Middleditch",
            age: 22,
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebswiki.info%2Fwp-content%2Fuploads%2F2019%2F09%2F1568955953_365_Thomas-Middleditch-Biography.jpg&f=1&nofb=1&ipt=326cd24991941587ae74643ce9e6b52c8a0febefee61e4714f7cb59f4efe0ccc&ipo=images"
        },
        {
            name: "Josh Brener",
            age: 21,
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F91%2Fa9%2Fe0%2F91a9e02ef9f27a22c2228cd6a6e49d19.png&f=1&nofb=1&ipt=cf082053881322e69cc64ab1426dcd7c8fc6656a9f18a0f63f7090b9444592f9&ipo=images"
        },
        {
            name: "Martin Starr",
            age: 24,
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fimages%2Fmartin-starr-1.jpg&f=1&nofb=1&ipt=ec1ef55a0701126892032f4bc6292234f06604595b9a220605e9b3aa40ab4480&ipo=images"
        },
        {
            name: "Kumail Nanjiani",
            age: 25,
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcbsnews1.cbsistatic.com%2Fhub%2Fi%2F2018%2F11%2F15%2F9932c350-7d3e-4f6e-be3b-87b18e1cedc4%2Fgettyimages-1051925152.jpg&f=1&nofb=1&ipt=d41b1a224701c587faa277c68b1830b315102a118ff45f5f6f2dfdd992d42542&ipo=images"
        },
        {
            name: "Jimmy O. Yang",
            age: 20,
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcharactermedia.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fjimmyyang.jpg&f=1&nofb=1&ipt=ffee6664f128f8053f895048d13cde458035de0bf163e7f4caa4cc9b6ad3db12&ipo=images"
        }
    ]);

    return (
        <div>
            <div className='tinderCards-cardContainer'>
                {people.map( person => (
                    <TinderCard 
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{backgroundImage: `url(${person.url})`}} 
                            className='card'>
                            <h3>{person.name}<h2>{person.age}</h2></h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards