import React, {useState} from "react";
import "../css/card.css";
import ReactCardFlip from 'react-card-flip';
import data from "./Data";

export default function Card() {

    const [isFlipped, setIsFlipped] = useState(false);
    let items = data;

    const hasItems = () => {
        return items.length > 0;
    };

    const getRandomQuestion = () => {
        if (!hasItems())
            return {};

        return items.splice(Math.floor(Math.random() * items.length),1)[0];
    };

    const [front, setFront] = useState(getRandomQuestion);
    const [back, setBack] = useState(getRandomQuestion);

    const handleToggle = () => {
        if (!hasItems())
            return;

        setTimeout(()=>{
            if (isFlipped)
                setBack(getRandomQuestion);

            if (!isFlipped)
                setFront(getRandomQuestion);

        },500);

        return setIsFlipped(!isFlipped);
    };

    return (
        <div className="container w-full h-full flex flex-col items-center font-melody">
            <div className="logo w-full my-20">

            </div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.5} flipSpeedBackToFront={0.5}>
                <div onClick={handleToggle} style={{width:300, height:400}} className="card-container rounded shadow-2xl">
                    <div className="pt-10 mb-32 text-2xl flex justify-center">
                        <span className="font-semibold mr-2">Q</span>
                        <span className="border-b-2 border-white">{front.q}</span>
                    </div>
                    <div className="pb-10 flex flex-col mx-10 text-3xl">
                        <span className="text-left">{front.y}</span>
                        <span className="text-center">VS</span>
                        <span className="text-right">{front.n}</span>
                    </div>
                </div>
                <div onClick={handleToggle} style={{width:300, height:400}} className="card-container rounded shadow-2xl">
                    <div className="pt-10 mb-32 text-2xl flex justify-center">
                        <span className="font-semibold mr-2">Q</span>
                        <span className="border-b-2 border-white">{back.q}</span>
                    </div>
                    <div className="pb-10 flex flex-col mx-10 text-3xl">
                        <span className="text-left">{back.y}</span>
                        <span className="text-center">VS</span>
                        <span className="text-right">{back.n}</span>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    )
}