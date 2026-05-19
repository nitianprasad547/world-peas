import { inter } from '../fonts';

export default function Button({text}){
    return(
        <button className={`${inter.className} text-black text-center text-base font-normal leading-[130%] font-features-['liga'_off,'clig'_off] m-[1.667%]`}>{text}</button>
    )   
};

