import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2열 종대
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center; // 안에 4개의 원 중간 정렬
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5, // 네모 크기 설정
  },
  end: {
    scale: 1, // 네모 크기 설정
    opacity: 1,
    transition: {
      type: "spring", // 에니메이션 끝나고 반동
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5, // 자식 컴포넌트에 delay 주는 법
      staggerChildren: 0.2, // 자식들 사이 약간의 delay를 주어 순서대로 나오도록 하는 법
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10, // 위치 조정하는 법
  },
  end: {
    opacity: 1,
    y: 0, // 위치 조정하는 법
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
