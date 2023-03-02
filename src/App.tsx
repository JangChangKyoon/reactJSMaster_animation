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
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box
        transition={{ type: "spring", delay: 0.5 }} // 변화 속도
        // spring : 에니메이션 끝나면서 약간 반동을 주는 것
        initial={{ scale: 0 }} // 변화 전 모습
        animate={{ scale: 1, rotateZ: 360 }} // 변화 후 모습
      />
    </Wrapper>
  );
}

export default App;
