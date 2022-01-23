import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "./Spinner";

function CharactersGrid({ items, isLoading }) {
   return isLoading ? (
      <Spinner />
   ) : (
      <section className="cards">
         {items.map((item) => (
            <CharacterItem key={item.char_id} item={item}>
               {item.name}
            </CharacterItem>
         ))}
      </section>
   );
}

export default CharactersGrid;
