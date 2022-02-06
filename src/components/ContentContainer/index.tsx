import React from "react";
import styled from "styled-components";

interface PropTypes {
  children: React.ReactNode;
  className?: string;
}

const ContentContainer = (props: PropTypes)  => {
  const { children, className } = props;
  return (
    <StyledMainContainer className={className ?? ""}>
      {children}
    </StyledMainContainer>
  );
}

const StyledMainContainer = styled.section`
    flex-basis:0;
    flex-grow:1;
    max-width:100%;
`;

export default ContentContainer