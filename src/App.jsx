import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";
import './components/Styles.css'

function App() {
  const [result, setResult] = useState([]);
  return (
    <div className="wrapper">
      <SearchBar setResult={setResult}/>
      <SearchResultsList results={result}/>
    </div>
  );
}

export default App;
