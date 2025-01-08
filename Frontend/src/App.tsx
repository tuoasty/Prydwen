import Navbar from "./components/navbar/Navbar.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import {SidebarProvider} from "./context/SidebarContext.tsx";
import { HorizontalLine, VerticalLine } from './components/details/Lines.tsx';
import { Route, Routes } from 'react-router-dom';
import { Content } from './components/content/Content.tsx';
import HomePage from './pages/HomePage.tsx';
import CharacterPage from './pages/CharacterPage.tsx';


function App(){
  return (
    <div className="h-screen w-auto flex-col overflow-hidden">
      <SidebarProvider>
        <Navbar />
        <HorizontalLine additionalClass="fixed mt-[4.45rem]"/>
        <div>
          <Sidebar/>
          <VerticalLine additionalClass="pt-[4.5rem]"/>
          <Content>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/characters" element={<CharacterPage/>}/>
            </Routes>
          </Content>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default App;