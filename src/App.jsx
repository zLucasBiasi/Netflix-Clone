import { useEffect, useState } from "react";
import { Movie } from "./components/MovieRow/MovieRow";
import GlobalStyle from "./styles/global";

import Tmdb from "./Tmdb";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);
  return (
    <>
      <GlobalStyle />
      <div className="page">
        <section className="lists">
          {movieList.map((item, key) => (
            <Movie key={key} title={item.title} items={item.item} />
          ))}
        </section>
      </div>
    </>
  );
};

export default App;
