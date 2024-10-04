import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Red Hat Display", sans-serif;
`;

export const AppBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AppBarLink = styled.div`
  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
    margin-right: 20px;
    &:hover {
      color: grey;
    }
  }
`;

export const AppBarIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-right: 20px;
`;

export const SearchInput = styled.input`
  font-family: "Red Hat Display", sans-serif;
  padding: 5px 10px;
  padding-left: 30px;
  border: 1px solid;
  border-radius: 20px;
  outline: none;
`;

export const SearchIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: grey;
`;

export const Icon = styled.i`
  font-size: 22px;
  color: black;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;
