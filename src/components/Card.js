import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`max-w-sm rounded overflow-hidden shadow-lg mt-0 m-auto p-10 bg-#d69738`}
`
const Image = styled.img`
  width: 50%;
  height: 50%;
`
const TextWrapper = styled.div`
  ${tw`px-6 py-4`}
`
const Header = styled.div`
  ${tw`font-bold text-xl mb-2`}
`
const Desc = styled.p`
  ${tw`text-gray-700 text-base`}
`

export default function Card({ data }) {
  return (
    <Wrapper>
      <Image src={data[0].image_url !== null ? data[0].image_url : '../assets/beer-main-0.jpg'} alt="Generated beer"/>
      <TextWrapper>
        <Header>{data[0].name}</Header>
        <Desc>{data[0].tagline}</Desc>
      </TextWrapper>
    </Wrapper>
  )
};
