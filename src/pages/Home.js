import Sidebar from "../components/Sidebar";
import About from "./About";


export default function Home() {
  return (
    <div className="main">
      
      <Sidebar />

      <div style={{flex:1}}>
        <About />
        
      </div>

    </div>
  );
}