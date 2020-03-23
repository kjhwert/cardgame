import React, {useState, useEffect} from "react";
import "../css/card.css";
import ReactCardFlip from 'react-card-flip';
import data from "./Data";
import image02 from "../images/card_image02.png";
import Header from "./Header";

const Card = (props) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const {history} = props;
    const {state} = props.location;

    let items = data;

    const hasItems = () => {
        return items.length > 0;
    };

    useEffect(() => {
        if (!state || !state.player1 || !state.player2) {
            return history.push('/');
        }

        setPlayer1(state.player1);
        setPlayer2(state.player2);
    },[state, history]);

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
        <div className="container flex flex-col items-center max-w-full">
            <Header/>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.5}>
                <div onClick={handleToggle} style={{width:300, height:400}} className="card-container rounded shadow-2xl">
                    <div
                        className="pt-10 mb-20 pl-10 text-2xl flex flex-col">
                        <div>
                            <span className="font-semibold">Q. {player1} </span>
                            <span className="font-hairline text-base">은(는)</span>
                        </div>
                        <span className="border-b-2 border-white font-hairline text-right pr-10 text-xl">{front.q}</span>
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
                    <div className="pt-10 mb-20 pl-10 text-2xl flex flex-col">
                        <div>
                            <span className="font-semibold">Q. {player2} </span>
                            <span className="font-hairline text-base">은(는)</span>
                        </div>
                        <span className="border-b-2 border-white font-hairline text-right pr-10 text-xl">{back.q}</span>
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

export default Card;