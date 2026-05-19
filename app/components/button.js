import { inter } from '../fonts';
import Link from 'next/link';

export function Button({ text, href = '#' }) {
    return (
        <Link href={href} className={`${inter.className} text-black text-center text-base font-normal leading-[130%] font-features-['liga'_off,'clig'_off] m-[1.667%]`}>
            <button>{text}</button>
        </Link>

    )
};

