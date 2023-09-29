export function Single7DayForecast({day, img, condition, value1, value2}) {
    return (
        <div className="flex justify-between items-center">
            <span>{day}</span>
            <span className="flex items-center gap-3">
                    <img src={img} alt="" width="80px"/>
                    <span className="font-bold">{condition}</span>
                </span>
            <span><span className="font-bold">{value1}</span>/{value2}</span>
        </div>
    )
}
