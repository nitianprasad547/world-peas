import {Button} from './button';
import { newsreader } from '../fonts';
import { inter } from '../fonts';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="w-full h-28 flex flex-row items-center">
            <div className="w-[50%] flex">
                <Link href="/" className={`${newsreader.className} text-[#426B1F] text-[32px] font-medium leading-[100%] tracking-[-0.32px] font-features-['liga'_off,'clig'_off] ml-[6.25%]`}>
                    <h1>
                        World Peas
                    </h1>
                </Link>

            </div>
            <div className="w-[50%] flex justify-end">
                <Button text='Shop' href='/product' />
                <Button text='Newstand' />
                <Button text='Who we are' />
                <Button text='My profile' />
                <Link href="/shooping" className='ml-[1.667%] mr-[6.667%]'>
                    <button className={`${inter.className} text-white text-center text-base font-normal leading-[130%] font-features-['liga'_off,'clig'_off]  bg-[#426B1F] w-31.5 rounded-xl h-full py-2`}>Basket(3)</button>
                </Link>
                
            </div>

        </div>

    )
}