import { useState } from "react";
// import "./App.css";
import { Header, Footer, Navigation } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="md:w-screen w-full h-screen ">
        <Header />
        <Navigation />

        <Outlet />

        <Footer />
      </div>
    </>
  );
}

export default App;
