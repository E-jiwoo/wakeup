import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Title = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  font-family: "Pretendard-B";
  font-size: 30px;
`;

export const Box = styled.div`
  width: ${(props) => (props.isSmall ? "900px" : "1130px")};
  height: ${(props) => (props.isSmall ? "100px" : "120px")};
  border: 3px solid black;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px;
`;

export const Lank = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 200px;
`;

export const Time = styled.div`
  font-size: 18px;
`;

export const Sound = styled.div`
  font-size: 18px;
`;

export const Light = styled.div`
  font-size: 18px;
`;

export const Shake = styled.div`
  font-size: 18px;
`;
