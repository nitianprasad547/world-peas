import CartItem from "./cartItem";
import Payment from './payment';
export default function Main() {
    return (
        <div className="w-full flex flex-col lg:flex-row px-8 lg:px-[3.333%] flex-wrap justify-between">
            <Payment/>
            <div className="w-full lg:w-[57%] flex flex-col">
                <CartItem
                    src="https://res.cloudinary.com/ddoeahbpv/image/upload/ed-o-neil-AvvdZlhDowA-unsplash_1_1_ifwowy"
                    name='Heirloom tomato'
                    price='5.99'
                    weight="1"
                />
                <CartItem
                    src="https://res.cloudinary.com/ddoeahbpv/image/upload/noonbrew-ziCb4_EKmak-unsplash_1_puiqrm"
                    name='Organic ginger'
                    price='12.99'
                    weight="0.5"
                />
                <CartItem
                    src="https://res.cloudinary.com/ddoeahbpv/image/upload/k8-0_fkPHulv-M-unsplash_2_urxlxb"
                    name='Sweet onion'
                    price='2.99'
                    weight="5"
                />
            </div>
        </div>
    )
}