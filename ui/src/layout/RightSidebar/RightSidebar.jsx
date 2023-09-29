import {BsFillSunFill} from 'react-icons/bs';

import sunny from '../../assets/weather-icons/sunny.png';
import {Single7DayForecast} from "../../components/Single7DayForecast.jsx";

export function RightSidebar({width}) {
    return (
        <div className={`${width}`}>
            <button className="w-full h-16 flex justify-end pt-2">
                <BsFillSunFill className="text-white text-4xl " />
            </button>
            <div className="dark:bg-[#202b3b] dark:text-[#b6bcc5] rounded-xl flex mx-auto flex-col gap-5 p-12">
                <div className="font-bold mb-5">7-DAY FORECAST</div>
                <Single7DayForecast day="Today" img={sunny} condition="Sunny" value1="36" value2="22" />
                <hr className="dark:border-t-gray-600 border-t-1 border-x-0 border-b-0" />            <Single7DayForecast day="Tue" img={sunny} condition="Sunny" value1="36" value2="22" />
                <hr className="dark:border-t-gray-600 border-t-1 border-x-0 border-b-0" />            <Single7DayForecast day="Wed" img={sunny} condition="Sunny" value1="36" value2="22" />
                <hr className="dark:border-t-gray-600 border-t-1 border-x-0 border-b-0" />            <Single7DayForecast day="Thu" img={sunny} condition="Sunny" value1="36" value2="22" />
                <hr className="dark:border-t-gray-600 border-t-1 border-x-0 border-b-0" />            <Single7DayForecast day="Fri" img={sunny} condition="Sunny" value1="36" value2="22" />
                <hr className="dark:border-t-gray-600 border-t-1 border-x-0 border-b-0" />            <Single7DayForecast day="Sat" img={sunny} condition="Sunny" value1="36" value2="22" />
            </div>
        </div>
    )
}
