import cloudy from "../../assets/weather-icons/cloudy.png";
import sunny from "../../assets/weather-icons/sunny.png";

export function TodayForecast() {
    return (
        <div className="dark:bg-[#202b3b] dark:text-[#b6bcc5] font-bold rounded-xl p-5">
            <span>TODAY'S FORECAST</span>
            <div className="flex flex-row justify-around text-center mt-5">
                <div className="flex flex-col gap-2">
                    <span>6.00 AM</span>
                    <img src={cloudy} alt="" width="80px"/>
                    <span className="text-[24px] text-white">25°</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>6.00 AM</span>
                    <img src={sunny} alt="" width="80px"/>
                    <span className="text-[24px] text-white">25°</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>6.00 AM</span>
                    <img src={cloudy} alt="" width="80px"/>
                    <span className="text-[24px] text-white">25°</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>6.00 AM</span>
                    <img src={sunny} alt="" width="80px"/>
                    <span className="text-[24px] text-white">25°</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>6.00 AM</span>
                    <img src={cloudy} alt="" width="80px"/>
                    <span className="text-[24px] text-white">25°</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>6.00 AM</span>
                    <img src={sunny} alt="" width="80px"/>
                    <span className="text-[24px] text-white">25°</span>
                </div>
            </div>
        </div>
    )
}
