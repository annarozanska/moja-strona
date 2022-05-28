import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { LightTheme } from './Themes'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'

import owl from '../assets/Images/owl-158414.png'
import { keyframes } from 'styled-components'
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
  backgroung-color: ${props => props.theme.text};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
const float = keyframes`
  0% {transform translateY(-5px)}
  50% {transform translateY(-15px) translateX(-15px)}
  100% {transform translateY(-5px)}
`

const Owl = styled.div`
  position: absolute;
  top: 30%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img{
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-constent: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blure(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box >
      <LogoComponent theme='light' />
      <SocialIcons theme='light' />
      <PowerButton />
      <ParticleComponent theme='light'/>

      <Owl>
        <img src={owl} alt="sowa" />
      </Owl>

      <Main>
      Ubwielbiam piękne a zarazem proste i intuicyjne dla odbiorcy strony internetowe.
      <br />  <br /> 
      Interesuje mnie świat forntendu i staram się cały czas zgłębiać tę dziedzinę. W wolnych chwilach uwielbiam jeździć na rowerze, chodzić do kina, czytać książki.    
      <br />  <br /> 
      Możesz się ze mną skontaktować poprzez formularz kontaktowy wysyłając wiadomość mailem.
      </Main>
        
      <BigTitle text='O MNIE' top='10%' left='10%' />

      </Box>
    </ThemeProvider>
  )
}

export default AboutPage