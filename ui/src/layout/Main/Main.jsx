import {SearchBar} from "../../components/SearchBar.jsx";
import {HeroSection} from "./HeroSection.jsx";
import {TodayForecast} from "./TodayForecast.jsx";
import {AirCondition} from "./AirCondition.jsx";

export function Main({width}) {
    return (
        <main className={`flex flex-col gap-4 ${width}`}>
            <SearchBar />
            <HeroSection />
            <TodayForecast />
            <AirCondition />
        </main>
    )
}
