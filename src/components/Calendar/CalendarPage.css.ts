import styled from "styled-components";
import { colors } from "../../config/theme/colors";

const Button = styled.button`
  background-color: ${colors.success};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${colors.success};
  }
`;
