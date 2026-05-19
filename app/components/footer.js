import {inter} from '../fonts';
export default function Foot(){
    return(
        <div className="flex flex-row w-full items-start gap-[2.22%]">
            <div className={`ml-[6.67%] w-[12.57%]`}>
                <p className={`${inter.className} text-black text-[14px] font-semibold leading-[160%] tracking-[0.56px] pt-1.5`}>WHAT WE BELIEVE</p>
            </div>
            <div className={`w-[57%] ${inter.className} text-black text-[20px] font-normal leading-[160%] mb-7.5`}>
                <p className='mb-6'>We believe in produce. Tasty produce. Produce like:</p>
                <p className='mb-8'>Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. </p>
                <p className='mb-8'>What are we forgetting?</p>
                <p>Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...</p>
            </div>
            <div></div>
        </div>
    )
}