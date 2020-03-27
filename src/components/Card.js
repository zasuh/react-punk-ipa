import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`max-w-sm rounded overflow-hidden shadow-lg mt-0 m-auto p-10 bg-white`}
`

const Image = styled.img`
  ${tw`w-full`}
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

export default function Card() {
  return (
    <Wrapper>
      <Image src="../assets/logo192.png" alt="Generated beer"/>
      <TextWrapper>
        <Header>Header</Header>
        <Desc>Some description text</Desc>
      </TextWrapper>
    </Wrapper>
  )
};
