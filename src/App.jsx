import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import * as S from "./styled";
import light1 from "./assets/light1.svg";
import light2 from "./assets/light2.svg";
import shake from "./assets/shake.svg";
import sleep from "./assets/sleep.svg";
import sound1 from "./assets/sound1.svg";
import sound2 from "./assets/sound2.svg";
import tired from "./assets/tired.svg";

function App() {
  const [data, setData] = useState([]);

  const rankIcons = [light1, light2, shake, sleep, sound1, sound2, tired];

  useEffect(() => {
    axios
      .get("http://api.yunjisang.me:8080/api/rankings")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Title>Ranking</S.Title>
        <S.SubTitle>
          <S.LankT>랭킹</S.LankT>
          <S.NameT>이름</S.NameT>
          <S.TimeT>걸린 시간</S.TimeT>
          <S.SoundT>소리</S.SoundT>
          <S.LightT>밝기</S.LightT>
          <S.ShakeT>흔들림</S.ShakeT>
        </S.SubTitle>
        {data.map((user, index) => (
          <S.Box key={user.id} isSmall={index > 2}>
            <S.Icon src={rankIcons[user.rank % rankIcons.length]} alt="icon" />
            <S.Lank>{user.rank}</S.Lank>
            <S.Name>{user.nickname}</S.Name>
            <S.Time>{user.clearTime}</S.Time>
            <S.Sound>{user.shouting.toFixed(1)}</S.Sound>
            <S.Light>{user.shining.toFixed(1)}</S.Light>
            <S.Shake>{user.shaking.toFixed(1)}</S.Shake>
          </S.Box>
        ))}
      </S.Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Pretendard-R";
    line-height: normal;
    font-style: normal;
    white-space: nowrap;
  }
`;

export default App;
