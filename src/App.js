import HeaderContent from './components/HeaderContent/HeaderContent';
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Main from "./components/Main/Main";
import Collections from './components/Collections/Collections';

function App() {
  return (
    <>
      <HeaderContent />
      <div className="container">
        <NavBar />
        <Main />

      </div>
      <div className="table-small">
        <Collections />
      </div>
    </>
  );
}

export default App;

