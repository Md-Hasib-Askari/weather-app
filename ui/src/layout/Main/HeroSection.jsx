import sunny from "../../assets/weather-icons/sunny.png";

export function HeroSection() {
    return (
        <div className="flex flex-row justify-around">
            <div className="py-10">
                <div className="flex flex-col gap-4 mb-10">
                    <span className="text-white text-4xl font-bold">Narsingdi</span>
                    <span className="text-gray-700 dark:text-[#b6bcc5]">Chance of rain: 0%</span>
                </div>
                <span className="dark:text-white text-6xl font-bold">31°</span>
            </div>
            <div className="my-auto">
                <img src={sunny} alt="" height="200px" width="200px"/>
            </div>
        </div>
    )
}
