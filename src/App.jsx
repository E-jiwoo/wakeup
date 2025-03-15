import { createGlobalStyle } from "styled-components";
import * as S from "./styled";

function App() {
  const data = [
    {
      id: 1,
      rank: 1,
      name: "이지우",
      time: "30.11",
      sound: "90%",
      light: "90%",
      shake: "90%",
    },
    {
      id: 2,
      rank: 2,
      name: "홍길동",
      time: "28.75",
      sound: "85%",
      light: "88%",
      shake: "92%",
    },
    {
      id: 3,
      rank: 3,
      name: "김철수",
      time: "32.00",
      sound: "80%",
      light: "87%",
      shake: "89%",
    },
    {
      id: 4,
      rank: 4,
      name: "박영희",
      time: "33.10",
      sound: "75%",
      light: "85%",
      shake: "88%",
    },
    {
      id: 5,
      rank: 5,
      name: "이민호",
      time: "29.50",
      sound: "78%",
      light: "86%",
      shake: "87%",
    },
    {
      id: 6,
      rank: 6,
      name: "최수현",
      time: "31.20",
      sound: "82%",
      light: "89%",
      shake: "91%",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Title>랭킹</S.Title>
        {data.map((user, index) => (
          <S.Box key={user.id} isSmall={index > 2}>
            <S.Lank>{user.rank}</S.Lank>
            <S.Name>{user.name}</S.Name>
            <S.Time>{user.time}</S.Time>
            <S.Sound>{user.sound}</S.Sound>
            <S.Light>{user.light}</S.Light>
            <S.Shake>{user.shake}</S.Shake>
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
