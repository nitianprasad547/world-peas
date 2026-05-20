import { newsreader } from '../fonts';
import { inter } from '../fonts';
import Link from 'next/link';
export default function Body(){
    return(
        <div className="items-center justify-center h-70 lg:h-147.25 w-full flex flex-col">
            <h1 className={`${newsreader.className} text-black items-center text-center text-[28px] lg:text-[64px] font-normal leading-[120%] tracking-[-1.28px] font-features-['liga'_off,'clig'_off]`}>We’re <span className='italic'>farmers, purveyors, and eaters</span> of organically grown food.</h1>
            <Link href="/product" className={`${inter.className} text-white text-[16px] lg:text-[20px] font-semibold leading-[130%] font-features-['liga'_off,'clig'_off] px-6 lg:px-8 py-3.5 lg:py-4.75 bg-[#426B1F] inline-flex rounded-xl mt-8 lg:mt-12`}>
                <button>Browse our shop</button>
            </Link>
        </div>
    )
}