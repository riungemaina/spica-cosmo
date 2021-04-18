import React from "react";
import styled from "styled-components";

export default function personCards() {
  return (
    <>
      <Wrapper>
        <p>Hello World</p>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 10px;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 10px;
  background: rgb(239 249 255);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
  }
`;
