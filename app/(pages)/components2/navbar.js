import { newsreader } from "@/app/fonts";
import { inter } from "@/app/fonts";
export default function Navbar(){
    return(
        <div className="w-full mb-12.5 flex flex-row justify-between">
            <div className="flex flex-row font-features-['liga'_off,'clig'_off] w-[41.32%] justify-between">
                <h1 className={`${newsreader.className} text-black items-center text-center text-[64px] font-normal leading-[120%] tracking-[-1.28px] mt-14 ml-[6.667%]`}>Produce</h1>
                <p className={`${inter.className} text-black text-[20px] font-medium leading-[130%] mt-22.5  ml-[1.667%]`}>Fresh <span className="font-light"> —  August 21, 2023</span></p>
            </div>
            <div className="">
                <button className={`${inter.className} text-white text-center text-[16px] font-semibold leading-[130%] px-4 ml-2 py-2.5 inline-flex rounded-[20px] bg-[#426B1F]`}>Default</button>
                <button className={`${inter.className} text-black text-center text-[16px] font-semibold leading-[130%] px-4 ml-2 py-2.5 inline-flex rounded-[20px] border border-solid border-[#C2C2C2]`}>A-Z</button>
                <button className={`${inter.className} text-black text-center text-[16px] font-semibold leading-[130%] px-4 py-2.375 ml-2 mr-24 border border-solid border-[#C2C2C2] rounded-[20px] py-2.5 mt-19 inline-flex`}>List view</button>
            </div>
        </div>
    )
}