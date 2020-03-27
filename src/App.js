import React from 'react';
import styled from 'styled-components';
import tw from "tailwind.macro";

import Footer from './components/Footer';
import Card from './components/Card';

import { BeerService } from './services';

/* Styling */
const AppWrapper = styled.div`
  ${tw`text-center`}
`
const HeaderText = styled.h1`
  ${tw`text-6xl`}
`
const Button = styled.button`
  ${tw`bg-gray-300 text-yellow-900 px-4 m-4 rounded h-10 text-2xl`}
`

/* Methods */
const getABeer = () => {
  BeerService.getRandom().then(data => console.log(data));
};

function App() {
  return (
    <AppWrapper>
      <HeaderText>Grab an IPA <span aria-label="" role="img">🍻</span></HeaderText>
      <Button onClick={() => { getABeer() }}>Generate some beers!</Button>
      <Card />
      <p>Click the button above to generate a list of IPA beers and their information!</p>
      <Footer />
    </AppWrapper>
  );
}

export default App;
