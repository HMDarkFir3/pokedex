import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.background};
  border-color: ${({ theme }) => theme.colors.placeholder_text};
  border-width: 1px;
  border-radius: 20px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Wrapper = styled.View`
  justify-content: space-between;
`;

export const Index = styled.Text`
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.placeholder_text};
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.placeholder_text};
`;
