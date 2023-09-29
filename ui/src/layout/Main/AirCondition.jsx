import {BsThermometerHalf} from 'react-icons/bs';
import {PiWindFill} from 'react-icons/pi';
import {FaDroplet, FaSun} from 'react-icons/fa6';
import {SingleAirCondition} from "../../components/SingleAirCondition.jsx";

export function AirCondition() {
    return (
        <div className="dark:bg-[#202b3b] dark:text-[#b6bcc5] font-bold rounded-xl p-6">
            <div className="flex justify-between">
                <span>AIR CONDITION</span>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">See more</button>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-5">
                <SingleAirCondition icon={(<BsThermometerHalf size="25px" />)} title="Real Feel" value="30°" />
                <SingleAirCondition icon={(<PiWindFill size="25px" />)} title="Wind" value="0.2 km/h" />
                <SingleAirCondition icon={(<FaDroplet size="25px" />)} title="Chance of rain" value="0%" />
                <SingleAirCondition icon={(<FaSun size="25px" />)} title="UV Index" value="3" />
            </div>
        </div>
    )
}
