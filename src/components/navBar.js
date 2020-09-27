import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <StyledNavBar>
      <h4 className="py-3 text-center">Hello from Nav Bar</h4>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  font-family: var(--font-script);
  background: var(--color-primary-2);
  color: var(--color-white);
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
`;
