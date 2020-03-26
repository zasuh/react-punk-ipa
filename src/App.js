import React from 'react';
import styled from 'styled-components';

import Footer from './components/Footer';

import { BeerService } from './services';

const AppWrapper = styled.div`
  text-align: center;
`

const HeaderText = styled.h1`
  font-size: 5rem;
`

const BeerGenerator = styled.button`
  position: relative;
  background: none;
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid black;
  padding: 0.5em 1em;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #222;
    height: 0.3em;
    right: 20%;
    top: -0.21em;
    transform: skewX(-45deg);
    -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #222;
    height: 0.3em;
    left: 20%;
    bottom: -0.25em;
    transform: skewX(45deg);
    -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &:hover {
    &::before {
      right: 80%;
    }
    &::after {
      left: 80%;
    }
  }
`

const getABeer = () => {
  BeerService.getRandom().then(data => console.log(data));
};

function App() {
  return (
    <AppWrapper>
      <HeaderText>Grab an IPA <span aria-label="" role="img">🍻</span></HeaderText>
      <BeerGenerator onClick={() => { getABeer() }}>Generate some beers!</BeerGenerator>
      <p>Click the button above to generate a list of IPA beers and their information!</p>
      <Footer />
    </AppWrapper>
  );
}

export default App;
