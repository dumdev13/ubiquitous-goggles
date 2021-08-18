import React from "react";
import phoneIcon from "../Assets/Icons/phone.svg";
import emailIcon from "../Assets/Icons/email.svg";

const MainFooter = () => {
    return(<footer className={'sm:flex-row lg:flex-col p-5 justify-between bg-warmGrey-100'}>
        <div className={'flex sm:flex-row lg:flex-col text-sm lg:text-md text-warmGrey-900 font-md flex-initial'}>
            <div className={'flex items-center py-2 lg:pr-6'}><img className={'max-h-5 pr-2'} src={phoneIcon} alt={'call us'}/>810-610-0000</div>
            <div className={'flex items-center'}><img className={'max-h-5 pr-2'} src={emailIcon} alt={'call us'}/>email@gmail.com</div>
        </div>
        <div className={'font-md pt-5 text-sm'}>Color Cloud & Sound © 2021</div>
    </footer>)
}
export default MainFooter;