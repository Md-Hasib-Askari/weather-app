export function SingleAirCondition(props) {
    return (
        <div className="flex gap-5 text-[20px] p-2">
            <div>
                {props.icon}
            </div>
            <div className="flex flex-col">
                <span>{props.title}</span>
                <span className="text-[30px] text-white">{props.value}</span>
            </div>
        </div>
    )
}
