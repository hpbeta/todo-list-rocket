import styled from "styled-components";

export const ContainerListTask = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & svg {
    color: #808080;
    cursor: pointer;
    transition: 0.3s;
  }
  & svg:hover {
    color: #d30b0b;
  }
`;
export const Task = styled.li<{ isChecked: boolean }>`
  background-color: #262626;
  margin-bottom: 0.6rem;
  min-width: 40%;
  padding: 0.9rem 1.25rem;
  border-radius: 0.4rem;
  color: #f2f2f2;
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};

  label {
    display: flex;
    justify-content: space-between;
  }
`;
