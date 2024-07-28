import { TExploreData } from "@/app/types/app"
import Image from "next/image"

type ExploreCardProps = TExploreData

const ExploreCard = ({ img, location, distance }: ExploreCardProps) => {
    return (
        <div className="flex justify-center items-center transform transition duration-150 hover:scale-105 ease-in-out cursor-pointer">
            <div className=" relative w-20 h-20">
                <Image src={img} alt="image card" fill />
            </div>
            <div className="ps-4">
                <h2>{location}</h2>
                <p className="text-gray-500">{distance}</p>
            </div>
        </div>
    );
};



export default ExploreCard