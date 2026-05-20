import Cart from './cartItem';
export default function Body(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-8 lg:px-4">
                <Cart
                    name="Heirloom tomato"
                    src="https://res.cloudinary.com/ddoeahbpv/image/upload/ed-o-neil-AvvdZlhDowA-unsplash_1_ldio1l"
                    place="San Juan Capistrano"
                    price="5.99"
                />
                <Cart
                    name="Organic ginger"
                    src="https://res.cloudinary.com/ddoeahbpv/image/upload/noonbrew-ziCb4_EKmak-unsplash_c6uvs6"
                    place="Huntington Beach"
                    price="12.99"
                />
                <Cart
                    name="Sweet onion"
                    src="https://res.cloudinary.com/ddoeahbpv/image/upload/k8-0_fkPHulv-M-unsplash_1_hk4mq9"
                    place="San Juan Capistrano"
                    price="2.99"
                />
            </div>
    )
}