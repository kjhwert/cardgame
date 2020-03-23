import React, {useState} from "react";
import MenuImg from "../images/menu.png";
import Menu from "./Menu";

const Header = () => {

    const [state, setState] = useState({
        menubarShow : false,
    });

    const menuHandler = () => {
        setState({menubarShow: !state.menubarShow});
    };

    return (
        <div className="w-full py-3 px-4 flex items-center mb-16">
            <div className="w-1/3">
                <img src={MenuImg} alt={""} style={{'width':'24px', 'height':'24px'}} onClick={menuHandler}/>
            </div>
            <div className="w-1/3 text-center">
                <span className="font-bold text-2xl">나랑놀자</span>
            </div>
            <div className="w-1/3">

            </div>
            {state.menubarShow && <Menu menubarShow={menuHandler}/>}
        </div>
    )

};

export default Header;