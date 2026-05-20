import Image from 'next/image';
import { inter } from '../../fonts';

export default function CartItem({ name, price, weight, src }) {
  const totalPrice = (Number(weight) * Number(price)).toFixed(2);

  return (
    <div className={`${inter.className} text-black w-full mb-6 flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-[#FAFAF5] border border-[#0000000F]`}>
      
      {/* Image */}
      <div className="w-full sm:w-40 h-48 sm:h-auto relative">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:flex-1 p-4 gap-3">
        
        {/* Left: name, price, weight */}
        <div className="flex flex-col gap-2">
          <h1 className="text-base sm:text-[20px] font-semibold leading-snug">{name}</h1>
          <p className="text-base sm:text-[20px] font-semibold text-[#426B1F]">${price} / lb</p>

          {/* Weight pill */}
          <div className="border border-[#0000000F] rounded-[20px] w-28 h-9 flex flex-row bg-white py-1 pl-2 pr-3 justify-between items-center">
            <p className="text-sm">{weight} lb</p>
            <Image
              src="https://res.cloudinary.com/ddoeahbpv/image/upload/Icon_zoun29"
              alt="edit weight"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Right: total */}
        <div className="text-base sm:text-[20px] font-semibold flex sm:justify-end sm:items-start">
          ${totalPrice}
        </div>

      </div>
    </div>
  );
}