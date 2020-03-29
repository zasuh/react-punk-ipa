import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`max-w-sm rounded overflow-hidden shadow-lg mt-0 m-auto p-10 bg-teal-500`}
`
const Image = styled.img`
  width: 50%;
  height: 50%;
`
const TextWrapper = styled.div`
  ${tw`px-6 py-4`}
`
const Header = styled.div`
  ${tw`font-bold text-2xl mb-2`}
`
const Desc = styled.p`
  ${tw`text-left text-black text-base`}
`
const Tagline = styled.p`
  ${tw`text-2xl`}
`
const Alcohol = styled.p`
  ${tw`font-bold`}
`

const Info = (d) => {
  return (
    <div>
      <Tagline>{d.props.tagline}</Tagline>
      <Desc>{d.props.description}</Desc>
      <Alcohol>Alcohol %: {d.props.abv}</Alcohol>
    </div>
  );
};

export default function Card({ data }) {
  return (
    <Wrapper>
      <Image src={data[0].image_url !== null ? data[0].image_url : '../assets/beer-main-0.jpg'} alt="Generated beer"/>
      <TextWrapper>
        <Header>{data[0].name}</Header>
        <Info props={data[0]} />
      </TextWrapper>
    </Wrapper>
  )
};
