import { ExploreData } from "@/app/types/app"
import { getExplore } from "@/app/utils/api"
import ExploreCard from "./ExploreCard"




const Explore = async () => {
    const data: ExploreData = await getExplore()
    console.log(data)
    return (
        <section className="container mx-auto mt-8">
            <h1 className="font-bold ms-5">Explore Nearby</h1>
            <div className=" mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {data.map((item, index: number) =>
                    <ExploreCard
                        img={item.img}
                        location={item.location}
                        distance={item.distance}
                        key={index}
                    />
                )}
            </div>
        </section>
    )
}

export default Explore