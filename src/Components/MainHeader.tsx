import menuIcon from "../Assets/Icons/menu.svg";
import {Transition} from "@tailwindui/react";
import React, {useState} from "react";

const MainHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(<div>
        <header className="flex p-5 justify-between">
            <div className={'text-xl text-warmGrey-900 font-bold border-b-4 border-warmGrey-900 flex-initial'}>Color Cloud & Sound</div>
            <button className={'flex-2 bg-green-500'} onClick={() => setIsOpen(!isOpen)}><img src={menuIcon} alt={'Menu'}/></button>
        </header>
    <Transition show={isOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100 bg-warmGrey-200"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className={''}>
        <div className={'p-5 mb-5 bg-warmGrey-200'}>
            Contact
        </div>
    </Transition>
        </div>
    )
}
export default MainHeader;