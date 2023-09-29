import {BsFillCloudSunFill, BsFillMapFill} from 'react-icons/bs';
import {FaListUl} from 'react-icons/fa'
import {LuSettings2} from 'react-icons/lu'

export function LeftSidebar({width}) {
    return (
        <div className={`${width} dark:bg-[#202b3b] dark:text-[#b6bcc5] rounded-xl flex mx-auto p-5 flex-col gap-5 text-center`}>
            <div className="mb-5">Hello world</div>
            <button className="text-white">
                <BsFillCloudSunFill size="30px" className="mx-auto mb-2"/>
                <span className="font-bold">Weather</span>
            </button>
            <button>
                <FaListUl size="30px" className="mx-auto mb-2"/>
                <span>Cities</span>
            </button>
            <button>
                <BsFillMapFill size="30px" className="mx-auto mb-2"/>
                <span>Map</span>
            </button>
            <button>
                <LuSettings2 size="30px" className="mx-auto mb-2"/>
                <span>Settings</span>
            </button>
        </div>
    )
}
