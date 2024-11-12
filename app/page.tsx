import Image from "next/image";
import FooterComponent from "../components/footer";
import HeroHomeComponent from "../components/home/hero";
import WorkForYouComponent from "../components/home/work_for_you";

export default function Home() {
  return (
    <div className="w-full">
      <HeroHomeComponent/>
      <WorkForYouComponent/>
    </div>
  );
}
