import Image from 'next/image';
import { inter } from '../../fonts';
export default function CartItem({ name, price, weight, src }) {
    const totalPrice = (Number(weight) * Number(price)).toFixed(2);
    const image1 = src;
    return (
        <div className={`${inter.className} text-black w-full h-40 mb-7.75 flex flex-wrap flex-row overflow-hidden rounded-3xl bg-[#FAFAF5] justify-between border-[#0000000F] border-2 border-solid`}>
            <div className='flex flex-row'>
                <div>
                    <Image
                        src={image1}
                        alt="image"
                        height={160}
                        width={160}
                    />
                </div>
                <div>
                    <h1 className='text-[20px] font-semibold leading-[130%] ml-6 mt-6'>{name}</h1>
                    <p className='text-[20px] font-semibold leading-[130%] ml-6 mt-1 text-[#426B1F]'>${price} / lb</p>
                    <div className='border-2 border-solid rounded-[20px] w-32 h-10 flex flex-row ml-6 mt-3.75 border-[#0000000F] bg-[#FFFFFF] py-1 pl-2 pr-4 justify-between'>
                        <p>{weight} lb</p>
                        <Image
                            src="https://res.cloudinary.com/ddoeahbpv/image/upload/Icon_zoun29"
                            alt="edit"
                            width={32}
                            height={32}
                        />
                    </div>
                </div>
            </div>
            <div className='mr-6 mt-6 text-[20px] font-semibold leading-[130%]'>
                ${totalPrice}
            </div>
        </div>
    )
}