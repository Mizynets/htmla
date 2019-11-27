import React from "react";
import Header from "../Header";
import styled from "styled-components";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ChildrenWrap>{children}</ChildrenWrap>
      <Footer />
    </>
  );
};

export default Layout;

const ChildrenWrap = styled.div`
  /* height: 100vh; */
`;
