import styled from "styled-components";

export const ContainerCountTask = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 2.5rem auto;

  > p:first-child {
    color: #4ea8de;
  }
  > p:last-child {
    color: #8284fa;
  }

  span {
    background-color: #333333;
    padding: 0.2rem 0.5rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    p {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 393px) {
    p {
      font-size: 0.5rem;
    }
  }
`;
