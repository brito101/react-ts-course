import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import { DataContextProvider } from "./Context/DataContext";
import Resume from "./Pages/Resume";
import Sales from "./Pages/Sales";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <SideNav />
        <main>
          <Header />
          <Resume />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
