import styled from "styled-components/native";

export const Container = styled.View`
  height: 1px;

  margin: 20px 0;

  background-color: ${({ theme }) => theme.colors.placeholder_text};
`;
