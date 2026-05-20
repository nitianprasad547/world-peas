import { newsreader } from "@/app/fonts";
import { inter } from "@/app/fonts";
export default function Navbar(){
    return(
        <div className="w-full pb-14 flex flex-col lg:flex-row justify-between">
            <div className="flex flex-row font-features-['liga'_off,'clig'_off] lg:w-[50%] justify-start lg:pl-[6.667%] pl-8">
                <h1 className={`${newsreader.className} text-black items-center text-center text-[42px] lg:text-[64px] font-normal leading-[120%] tracking-[-1.28px] pt-6 lg:pt-14`}>Produce</h1>
                <p className={`${inter.className} text-black text-[12px] lg:text-[20px]  font-medium leading-[130%] pt-12 lg:pt-22.5  pl-6`}>Fresh <span className="font-light"> —  August 21, 2023</span></p>
            </div>
            <div className="pl-8 text-black text-[16px] font-semibold leading-[130%] justify-end">
                <button className={`${inter.className} text-white  px-4 py-2.5 bg-[#426B1F] inline-flex rounded-[20px]`}>Default</button>
                <button className={`${inter.className} px-4 ml-2 py-2.5 border border-solid border-[#C2C2C2] inline-flex rounded-[20px]`}>A-Z</button>
                <button className={`${inter.className} px-4 py-2.375 ml-2 lg:mr-24 border border-solid inline-flex rounded-[20px] border-[#C2C2C2] py-2.5 mt-10 lg:mt-19`}>List view</button>
            </div>
        </div>
    )
}