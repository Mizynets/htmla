import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ jscontent }) => jscontent};
  align-items: ${({ aligItems }) => aligItems};
  padding-bottom: ${({ pad }) => pad};
  flex-direction: ${({ flxdirect }) => flxdirect};
`;

export const FlexItem = styled.div`
  width: ${({ wid }) => wid};
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ pad }) => pad};
`;
