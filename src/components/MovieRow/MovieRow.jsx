import * as S from "./style.js";

export const Movie = ({ title, items }) => {
  return (
    <S.MovieRow>
      <S.TitleMovieRow>{title}</S.TitleMovieRow>
      <S.MovieRowListArea>
        <S.MovieRowList>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <S.MovieRowItem key={key}>
                <S.Image
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </S.MovieRowItem>
            ))}
        </S.MovieRowList>
      </S.MovieRowListArea>
    </S.MovieRow>
  );
};
