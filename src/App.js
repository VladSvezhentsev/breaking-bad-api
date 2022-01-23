import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CharactersGrid from "./components/CharactersGrid";
import "./App.css";

function App() {
   const [items, setItems] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [query, setQuery] = useState("");

   useEffect(() => {
      getData();
   }, [query]);

   async function getData() {
      const response = await fetch(
         `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
   }

   return (
      <div className="container">
         <Header />
         <Search getQuery={(q) => setQuery(q)} />
         <CharactersGrid items={items} isLoading={isLoading} />
      </div>
   );
}

export default App;
