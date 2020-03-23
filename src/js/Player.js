import React, {useState} from "react";
import "../css/card.css";
import { Link } from "react-router-dom";
import Play from "../images/play.png"
import Header from "./Header";

export default function Player() {

    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const handlePlayer1 = (e) => {
        setPlayer1(e.target.value);
    };

    const handlePlayer2 = (e) => {
        setPlayer2(e.target.value);
    };

    return (
        <div className="container max-w-full">
            <Header/>
            <div className="w-full text-center mb-16">
                <p>연인과 즐기는 카드게임!</p>
            </div>
            <div className="w-full">
                <input
                    placeholder="플레이어 1"
                    value={player1}
                    onChange={handlePlayer1}
                    className="w-full border-b bg-transparent border-white pb-1 text-2xl text-center"
                />
                <input
                    placeholder="플레이어 2"
                    value={player2}
                    onChange={handlePlayer2}
                    className="w-full border-b bg-transparent border-white pb-1 text-2xl text-center"
                />
                <div className="flex justify-end w-full mt-5 pr-5">
                    <Link to={{
                        pathname:'/play',
                        state : {
                            player1:player1,
                            player2:player2,
                        }
                    }}>
                        <div style={
                            player1 !== '' && player2 !== '' ?
                                {width:'40px', height:'40px', backgroundColor:'#FFFFFF', borderRadius:'20px'} :
                                {width:'40px', height:'40px', backgroundColor:'#534847', borderRadius:'20px'}}
                             className="shadow-lg"
                        >
                            <img src={Play} style={{width:'20px', paddingTop:'10px', marginLeft:'10px'}} alt={""} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}