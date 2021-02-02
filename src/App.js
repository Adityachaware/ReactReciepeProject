import logo from "./logo.svg";
import "./App.css";
import HEADER from "./HEADER";
import RECIEPE from "./RECIEPE";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("chicken");
  const [reciepe, setReciepe] = useState([]);

  const API_ID = "107632ea";
  const API_KEY = "8330f75152cbe705314dafd00ad9f285";

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = (e) => {
    ReciepeResponse();
  };

  useEffect(() => {
    ReciepeResponse();
  }, []);

  const ReciepeResponse = async () => {
    const result = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    setReciepe(result.data.hits);
  };
  return (
    <div className="App">
      <header className="App-header">
        <HEADER search={search} handleInputChange={handleInputChange} onSearchClick={onSearchClick}></HEADER>
      </header>
      <div className="container">
        <RECIEPE reciepe={reciepe}></RECIEPE>
      </div>
    </div>
  );
}

export default App;
