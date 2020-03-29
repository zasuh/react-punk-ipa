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
const Desc = styled.p`
  ${tw`text-2xl`}
`
const Button = styled.button`
  ${tw`bg-gray-300 text-yellow-900 px-4 m-4 rounded h-10 text-2xl`}
`

const App = () => {
  const [beers, setBeers] = React.useState(null);
  const getABeer = () => {
    BeerService.getRandom().then(data => {
      setBeers(data)
    });
  };

  const Description = () => {
    return <Desc>Click the button above to generate an IPA beer!</Desc>
  }

  return (
    <AppWrapper>
      <HeaderText>Grab an IPA <span aria-label="" role="img">🍻</span></HeaderText>
      <Button onClick={() => { getABeer() }}>Generate a beer!</Button>
      {beers !== null ? <Card data={beers}/> : null }
      {beers === null ? <Description /> : null}
      <Footer />
    </AppWrapper>
  );
}

export default App;
