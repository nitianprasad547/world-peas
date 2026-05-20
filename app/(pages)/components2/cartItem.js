import Image from 'next/image';
import {inter} from '@/app/fonts';
export default function Cart({ name, src, price, place }) {
    const image = src;
    return (
        <div className={`${inter.className}w-full flex-wrap flex flex-col rounded-3xl text-black mb-10 overflow-hidden border border-[#E6E6E6] border-solid bg-[#FAFAF5] pb-7`}>
            <div className='flex items-center justify-center'>
                <Image
                    src={image}
                    alt="image"
                    width={600}
                    height={600}
                />
            </div>

            <div>
                <h1 className="text-black text-[20px] font-semibold leading-[130%] mt-6 ml-6">{name}</h1>
                <p className="text-[20px] font-semibold leading-[130%] mt-1 ml-6 text-[#426B1F]">${price} / lb</p>
                <p className='text-[#6D6D6D] text-[16px] font-normal leading-[150%] ml-6 mt-4'>Grown in {place}, CA</p>
            </div>

        </div>
    )
}