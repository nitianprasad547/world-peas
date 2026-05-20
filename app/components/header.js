import {Button} from './button';
import { newsreader } from '../fonts';
import { inter } from '../fonts';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="w-full py-5 lg:py-10 flex flex-col items-center lg:flex-row px-[6.667%] justify-between">
            <div className=" flex mb-5  lg:mb-0 ">
                <Link href="/" className={`${newsreader.className} text-[#426B1F] text-[32px] font-medium leading-[100%] tracking-[-0.32px] font-features-['liga'_off,'clig'_off] `}>
                    <h1>
                        World Peas
                    </h1>
                </Link>
            </div>
            <div className="w-full lg:w-[76.4%] flex justify-around lg:justify-end">
                <Button text='Shop' href='/product' />
                <Button text='Newstand' />
                <Button text='Who we are' />
                <Button text='My profile' />
                <Link href="/shooping" className=''>
                    <button className={`${inter.className} text-white text-center text-[12px] lg:text-[16px] font-normal leading-[130%] font-features-['liga'_off,'clig'_off]  bg-[#426B1F] px-4.5 lg:px-5.75 rounded-xl h-full py-[1.667%]`}>Basket(3)</button>
                </Link>
            </div>

        </div>

    )
}