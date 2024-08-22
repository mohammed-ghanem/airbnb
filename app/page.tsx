import Banner from "./components/banner/Banner";
import Explore from "./components/explore/Explore";
import LiveSection from "./components/liveSection/LiveSection";

export default function Home() {
  return (
    <main>
      <Banner />
      <Explore />
      <LiveSection/>
    </main>
  );
}
