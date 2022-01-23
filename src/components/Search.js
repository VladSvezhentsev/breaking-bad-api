import React, { useState } from "react";

function Search({ getQuery }) {
   const [text, setText] = useState("");

   function onChange(q) {
      setText(q);
      getQuery(q);
   }

   return (
      <section className="search">
         <form>
            <input
               value={text}
               onChange={(e) => onChange(e.target.value)}
               type="text"
               placeholder="Find your character"
               autoFocus
            />
         </form>
      </section>
   );
}

export default Search;
