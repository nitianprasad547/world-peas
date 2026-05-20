import { newsreader , inter } from '@/app/fonts';
export default function Navbar() {
    return (
            <div className={`justify-start w-full mb-14 text-black font-features-['liga'_off,'clig'_off] flex flex-row pl-[3.333%]`}>
                <h1 className={`${newsreader.className} text-[64px] items-center text-center font-normal  mt-14 leaing-[120%] tracking-[-1.28px]`}>Basket</h1>
                <p className={`${inter.className} text-[20px] font-light ml-6 mt-22.5 leading-[130%]`}>3 items</p>
            </div>
    )
}