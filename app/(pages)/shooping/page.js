import Header from '../../components/header';
import Navbar from '../components3/navbar';
import Main from '../components3/cart';
export default function Cart() {
    return (
        <div className="flex flex-col w-full">
            <Header />
            <Navbar />
            <Main />
        </div>
    )
}