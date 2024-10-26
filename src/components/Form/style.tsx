import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:  0.3rem;
  margin-top: -1.25rem;
  input {
    background-color: #333333;
    width: 32.5rem;
    color: #808080;
    border: none;
    outline: none;
    padding: 0.75rem 0.5rem;
    border-radius: 5px;
  }

  @media (max-width: 480px) {
    margin-left:  0.9rem;
    width: 25.6rem;
  }
  @media (max-width: 393px) {
    margin-left: 0.9rem;
    width: 19.5rem;
    margin-left: 3.1rem;
  }
`;

export const ButtonCreate = styled.button`
  background-color: #1e6f9f;
  border: none;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0.75rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  svg {
    font-size: 0.9rem;
  }
`;
