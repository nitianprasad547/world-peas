import { inter } from '../../fonts';
import Image from 'next/image';
export default function Payment(){
    return(
        <div className={`${inter.className} w-[27.43%] h-79.5 text-black border-2 border-solid border-[#0000000F] rounded-3xl bg-[#FAFAF5]`}>
            <h1 className='text-[20px] font-semibold leading-[130%] mt-6 ml-6'>
                Order summary
            </h1>
            <div className='text-[16px] font-normal leading-[130%] justify-between flex flex-row mx-6 mt-8'>
                <div className='gap-4 flex flex-col'>
                    <p>Subtotal</p>
                    <p>Shipping</p>
                    <p>Tax</p>
                    <p className='font-semibold'>Total</p>
                </div>
                <div className='gap-4 flex flex-col'>
                    <p>$27.44</p>
                    <p>$3.99</p>
                    <p>$2.00</p>
                    <p className='font-semibold'>$33.43</p>
                </div>
            </div>
            <div className='mt-8.75 mx-6 text-white bg-[#426B1F] py-2 pl-6 pr-4 w- flex flex-row rounded-xl justify-between items-center'>
                <p>Continue to payment</p>
                <Image
                    src="https://res.cloudinary.com/ddoeahbpv/image/upload/Icon_1_ztrbpq"
                    alt="icon"
                    width={32}
                    height={32}
                />
            </div>
        </div>
    )
}