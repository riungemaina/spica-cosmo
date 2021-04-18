import React from "react";
import styled from "styled-components";

export default function sideBar() {
  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 250px;
  height: 90vh;
  position: sticky;
  top: 5vh;
  right: 20px;
  float: right;
  border-radius: 10px;
  background: rgb(239 249 255);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 5vh 20px;
`;
