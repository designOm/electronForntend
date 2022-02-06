import { ContentContainer, Sidebar } from "../../components";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const PrimaryLayoutContainer = styled.main`
  display: flex;
  height:100vh;
`;

export default function PrimaryLayout() {
  return (
    <PrimaryLayoutContainer className="layout primary" id="primary-layout">
      <Sidebar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </PrimaryLayoutContainer>
  );
}
