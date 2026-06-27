import Sidebar from "../components/Sidebar";
import About from "./About";


export default function Home() {
  return (
    <div className="main">
      
      <Sidebar />
<div className="home-content">
        <About />
        
      </div>

    </div>
  );
}