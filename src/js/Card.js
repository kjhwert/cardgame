import React, {useState} from "react";
import "../css/card.css";
import ReactCardFlip from 'react-card-flip';
import data from "./Data";
import image02 from "../images/card_image02.png";

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
            <div className="logo w-full mt-10 mb-16 text-center">
                <span className="font-semibold text-4xl">나랑놀자</span>
            </div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.5}>
                <div onClick={handleToggle} style={{width:300, height:400}} className="card-container rounded shadow-2xl">
                    <div
                        className="pt-10 mb-20 text-2xl flex justify-center">
                        <span className="font-semibold mr-2">Q</span>
                        <span className="border-b-2 border-white">{front.q}</span>
                    </div>
                    <div
                        style={{backgroundImage:`url(${image02})`, backgroundSize:'100%'}}
                        className="pb-10 flex flex-col mx-10 bg-no-repeat">
                        <span className="text-left text-2xl">{front.y}</span>
                        <div className="w-full h-16"></div>
                        <span className="text-right text-2xl">{front.n}</span>
                    </div>
                </div>
                <div onClick={handleToggle} style={{width:300, height:400}} className="card-container rounded shadow-2xl">
                    <div className="pt-10 mb-20 text-2xl flex justify-center">
                        <span className="font-semibold mr-2">Q</span>
                        <span className="border-b-2 border-white">{back.q}</span>
                    </div>
                    <div
                        style={{backgroundImage:`url(${image02})`, backgroundSize:'100%'}}
                        className="pb-10 flex flex-col mx-10 bg-no-repeat">
                        <span className="text-left text-2xl">{back.y}</span>
                        <div className="w-full h-16"></div>
                        <span className="text-right text-2xl">{back.n}</span>
                    </div>
                </div>
            </ReactCardFlip>
            <div className="mb-20">

            </div>
        </div>
    )
}