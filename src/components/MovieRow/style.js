import styled from "styled-components";

export const MovieRow = styled.div`
  margin-bottom: 30px;
`;
export const TitleMovieRow = styled.h2`
  margin: 0 0 0 30px;
`;
export const MovieRowListArea = styled.div`
  overflow-x: hidden;
`;
export const MovieRowList = styled.div`
  width: 9999px;
`;
export const MovieRowItem = styled.div`
  display: inline-block;
  width: 150px;
`;
export const Image = styled.img`
  width: 100%;

  transform: scale(0.9);
  transition: all ease 0.5s;
  &:hover {
    transform: scale(1);
  }
`;
