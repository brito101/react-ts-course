import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import Resume from "./Pages/Resume";
import "./Style.css";

function App() {
  return (
    <div>
      <SideNav />
      <main>
        <Header />
        <Resume />
      </main>
    </div>
  );
}

export default App;
