import { useEffect, useState } from "react";
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
      <h1>hello</h1>
      <h2>world</h2>
    </>
  );
};

export default App;
