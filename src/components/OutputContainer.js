import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled.div`
  padding: 0 2rem 2rem 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  width: 100%;

  overflow-y: scroll;
  /* hide the scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  background-color: var(--col375);
  > h1 {
    position: sticky;
    top: 0;

    background-image: linear-gradient(
      0deg,
      rgba(255, 240, 229, 0.284),
      hsl(25, 100%, 95%) 25%
    );
    padding: 3rem;
    width: 100%;

    color: var(--ncol150);
    span {
      color: var(--col500);
      cursor: pointer;
    }
  }
  .results-container {
    overflow-wrap: break-word;
    p {
      font-size: 1.6rem;
    }
  }

  @media screen and (min-width: 600px) {
    width: 50%;
    border-radius: 3rem;
  }
`;

const OutputContainer = ({ apiData, userWord }) => {
  return (
    <StyledContainer>
      <h1>
        Here's the meaning of
        <span> "{userWord}"</span>
        <audio></audio>
      </h1>
      <div className='results-container'>
        <p>{JSON.stringify(apiData)}</p>
      </div>
    </StyledContainer>
  );
};

export default OutputContainer;