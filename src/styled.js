import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  position: sticky;
  padding-top: 100px;
  padding-bottom: 70px;
  font-family: "Pretendard-B";
  font-size: 38px;
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
  font-size: 30px;
  font-family: "Pretendard-B";
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

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const SubTitle = styled.div`
  position: sticky;
  left: 550px;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const LankT = styled.div`
  font-size: 18px;
  margin-right: 20px;
`;

export const NameT = styled.div`
  font-size: 18px;
  margin-right: 190px;
`;

export const TimeT = styled.div`
  font-size: 18px;
  margin-left: 27px;
`;

export const SoundT = styled.div`
  font-size: 18px;
`;

export const LightT = styled.div`
  font-size: 18px;
`;

export const ShakeT = styled.div`
  font-size: 18px;
`;
