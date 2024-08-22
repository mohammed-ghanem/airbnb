import LiveSectionCard from "./LiveSectionCard"
import { getLive } from "@/app/utils/api"
import { LiveSectionData } from "@/app/types/app"

const LiveSection = async () => {

    const data: LiveSectionData = await getLive();
    console.log(data)


    return (
        <section>
            <h2>Live anywhere</h2>
            {data.map(({ img, title }, idx) =>
                <LiveSectionCard key={idx} img={img} title={title} />
            )}
        </section>
    )
}

export default LiveSection