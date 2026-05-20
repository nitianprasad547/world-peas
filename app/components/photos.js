import Image from 'next/image';
import {inter} from '../fonts';
const vegtable1 = "https://res.cloudinary.com/ddoeahbpv/image/upload/76f3f33d7951544296fe5516d1417ff7d33f1e60_nlcujy";

const vegtable2 = "https://res.cloudinary.com/dbu0vmqxa/image/upload/f_auto,q_auto/0df0723d98ed140baad5fa88103f2153d6fd6a19_stzek7";

export default function Photos() {
    return (
        <div className='lg:h-165 flex flex-col lg:flex-row gap-0 lg:gap-[4.167%] justify-center items-center mb-28'>
            <div className='w-full lg:w-[35%] overflow-hidden  lg:ml-[6.25%] pb-16 lg:pb-0 px-12 lg:px-0 '>
                <Image
                    src={vegtable1}
                    alt="Photo"
                    width={1225}
                    height={1633}
                />
            </div>
            <div className='flex flex-col w-full lg:w-[54.617%] items-center justify-center px-12 lg:px-0'>
                <div className='overflow-hidden mb-4'>
                    <Image
                        src={vegtable2}
                        alt="Photo"
                        width={780}
                        height={480}
                    />
                </div>
                <p className={`${inter.className} text-black text-[14px] font-medium leading-[160%] tracking-[-0.14px]`}>Central California <span className='font-light'>— The person who grew these was located in Central California and, er, hopefully very well-compensated.</span></p>
            </div>
        </div>

    )
}