import React, {useState} from "react";
import CloseButton from "../images/close_button.png";

const Menu = (props) => {

    const [theme, setTheme] = useState(false);
    const [help, setHelp] = useState(false);

    const closeMenuBar = () => {
        props.menubarShow({menubarShow:false});
    };

    return (
        <div className="absolute w-full h-full bg-white inset-0 z-10 flex flex-col">
            <div className="w-full flex justify-end px-4 py-3 h-24">
                <img src={CloseButton} alt="" className="w-10 h-10" onClick={closeMenuBar}/>
            </div>
            <div className="w-full flex px-4 font-basic font-normal">
                <div className="flex flex-col w-3/5">
                    <span className="border-b border-t border-black text-xl py-2 pl-1 font-semibold" onClick={()=> {setTheme(!theme)}}>THEME</span>
                    {theme === true &&
                    <div className="py-2 pl-2">
                        <span>준비중입니다</span>
                    </div>}
                    <span className="border-b border-black text-xl py-2 pl-1 font-semibold" onClick={()=> {setHelp(!help)}}>HELP</span>
                    {help === true &&
                    <div className="py-2 pl-2">
                        <span className="text-xs">kjhwert11@gmail.com로 피드백을 보내주세요</span>
                    </div>}
                </div>
                <div className="flex flex-col w-2/5">

                </div>
            </div>
        </div>
    )
}

export default Menu;