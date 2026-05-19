import Image from 'next/image';
import {inter} from '../fonts';
const vegtable1 = "https://res.cloudinary.com/dbu0vmqxa/image/upload/f_auto,q_auto/jonathan-kemper-1HHrdIoLFpU-unsplash_1_anbap3";

const vegtable2 = "https://res.cloudinary.com/dbu0vmqxa/image/upload/f_auto,q_auto/0df0723d98ed140baad5fa88103f2153d6fd6a19_stzek7";

export default function Photos() {
    return (
        <div className='h-165 flex flex-row gap-[4.167%] justify-center mb-28'>
            <div className='w-[35%] overflow-hidden ml-[6.25%]'>
                <Image
                    src={vegtable1}
                    alt="Photo"
                    width={504}
                    height={693}
                />
            </div>
            <div className='flex flex-col w-[54.617%] items-center justify-center'>
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