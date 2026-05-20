import { newsreader , inter } from '@/app/fonts';
export default function Navbar() {
    return (
            <div className={`justify-start w-full pb-2 lg:pb-14 text-black font-features-['liga'_off,'clig'_off] flex flex-row pl-8 lg:pl-[3.333%]`}>
                <h1 className={`${newsreader.className} text-[42px] lg:text-[64px] items-center text-center font-normal lg:pt-14 leaing-[120%] tracking-[-1.28px]`}>Basket</h1>
                <p className={`${inter.className} text-[20px] font-light pl-6 pt-5 lg:pt-24 leading-[130%]`}>3 items</p>
            </div>
    )
}