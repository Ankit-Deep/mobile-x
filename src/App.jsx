import { useState } from "react";
// import "./App.css";
import { Header, Footer, Navigation } from "./components";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
// import { useSidebar } from "./context/SidebarContext";

function App() {
  const [count, setCount] = useState(0);

  // const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      <SidebarProvider>
        <div className="md:w-screen w-full h-screen ">
          <Header />
          <Navigation />

          <Outlet />

          <Footer />
        </div>
      </SidebarProvider>
    </>
  );
}

export default App;
