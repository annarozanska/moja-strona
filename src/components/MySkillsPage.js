import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from './Themes'
import { Design, Develope } from './AllSvgr'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'


const Box = styled.div`
  backgroung-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);

  ${Main}:hover &{
    &>*{
      fill:${props => props.theme.body};
    }
  }

  &>*:first-child{
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem;

  ${Main}:hover &{
      color:${props => props.theme.body};
  }

  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,p{
    margin-left: 2rem;
  }
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
      <LogoComponent theme='light' />
      <SocialIcons theme='light' />
      <PowerButton />
      <ParticleComponent theme='light'/>


        <Main>
          <Title>
            <Design width={40} height={40} /> User Experience
          </Title>
          <Description>
              Uwielbiam minimalistyczny design i strony, które są intuicyjne dla użytkownika
          </Description>
          <Description>
              <strong>CO MNIE INTERESUJĘ:</strong>
              <ul>
                <li>Tworzenie stron internetowych z myślą o użytkownikach, które będą proste w obsłudze i piękne wizualnie</li>
              </ul>
          </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Dev
          </Title>
          <Description>
              Uwielbiam tworzyć coś z niczego. Cały czas uczę się nowych rzeczy i zwiększam zakres swoich umiejętności
          </Description>
          <Description>
              <strong>UMIEJĘTNOŚCI:</strong>
              <p>Html, Css, JavaScript, React</p>
          </Description>
          <Description>
              <strong>Z CZEGO KORZYSTAM:</strong>
              <p>VScode, Github, Codepen</p>
          </Description>
        </Main>
        <BigTitle text='CO ROBIĘ' top='80%' right='30%' />
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage