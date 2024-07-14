import HeaderContent from './components/HeaderContent/HeaderContent';
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import Collections from './components/Collections/Collections';

function App() {
  return (
    <>
      <HeaderContent />
      <div className="container">
        <NavBar />
        <MainSection />

      </div>
      <div className="table-small">
        <Collections />
      </div>
    </>
  );
}

export default App;

