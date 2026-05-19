import { newsreader } from '../fonts';
import { inter } from '../fonts';
export default function Body(){
    return(
        <div className="items-center justify-center h-147.25 w-full flex flex-col">
            <h1 className={`${newsreader.className} text-black items-center text-center text-[64px] font-normal leading-[120%] tracking-[-1.28px] font-features-['liga'_off,'clig'_off]`}>We’re <span className='italic'>farmers, purveyors, and eaters</span> of organically grown food.</h1>
            <button className={`${inter.className} text-white text-[20px] font-semibold leading-[130%] font-features-['liga'_off,'clig'_off] px-8 py-4.75 bg-[#426B1F] inline-flex rounded-xl mt-12`}>Browse our shop</button>
        </div>
    )
}