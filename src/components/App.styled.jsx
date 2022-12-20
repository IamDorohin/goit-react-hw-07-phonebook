import styled from 'styled-components';

export const AppContainer = styled.main`
  background-color: white;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  position: relative;
`;

export const AppSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 80%;
  padding: 50px;
  border: 1px solid black;
  border-radius: 20px;
  /* background-color: rgba(173, 164, 169, 0.8); */
  background: linear-gradient(56deg, #000, #323232, #656363, #e3e1e1, #0f0c0c) 0
    0/300% 300%;
`;
