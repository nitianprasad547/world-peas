import Header from '../../components/header'; 
import Navbar from '../components2/navbar';
import Body  from '../components2/body';
export default function Product (){
    return(
        <div className="flex flex-col w-full">
            <Header/>
            <Navbar/>
            <Body/>
        </div>

    )
} 