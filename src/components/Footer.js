import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <small><a href="https://github.com/zasuh/react-punk-ipa">GitHub</a></small>
      <br />
      <small>Made with <span role="img" aria-label="">🧡</span> by Zane</small>
    </FooterWrapper>
  )
}
