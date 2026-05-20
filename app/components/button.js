import { inter } from '../fonts';
import Link from 'next/link';

export function Button({ text, href = '#' }) {
    return (
        <Link href={href} className={`${inter.className} text-black text-center text-base font-normal leading-[130%] font-features-['liga'_off,'clig'_off] p-[1.667%] text-[12px] lg:text-[16px]`}>
            <button>{text}</button>
        </Link>

    )
};

