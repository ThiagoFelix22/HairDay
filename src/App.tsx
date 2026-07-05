import AgendaView from "./components/AgendaView/AgendaView"
import Sidebar from "./components/BookingForm/Sidebar"
import MainContent from "./components/layout/main-content"
import hairday from "../public/logo-_yWQDxWv.svg"
function App() {
  return (
     <div>
       <MainContent>
        <img 
        src={hairday}
        alt="HairDay Logo"
        className="py-3 px-5 bg-gray-600 rounded-br-xl absolute top-0 left-0"
         />
       <Sidebar /> 
       <AgendaView />
       </MainContent>
      
     </div>
  )
}

export default App
