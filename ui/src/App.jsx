import './App.css'
import {LeftSidebar} from "./layout/LeftSidebar/LeftSidebar.jsx";
import {Main} from "./layout/Main/Main.jsx";
import {RightSidebar} from "./layout/RightSidebar/RightSidebar.jsx";

function App() {

  return (
    <div className="p-5 flex flex-row gap-10 font-sans font-normal text-base">
        <LeftSidebar width="w-1/12"/>
        <Main width="w-8/12" />
        <RightSidebar width="w-3/12" />
    </div>
  )
}

export default App
