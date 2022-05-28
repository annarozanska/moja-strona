import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from "framer-motion"


const Box = styled(motion.li)`
    width: 16rem;
    height: 40vh;
    background-color: ${props => props.theme.text}; 
    color: ${props => props.theme.body};
    padding: 1.5rem 2rem;
    margin-right: 8rem;
    border-radius: 0 50px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.body};
    transition: all 0.2s ease;

    &:hover{
        background-color: ${props => props.theme.body}; 
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
    }
`

const Title = styled.h2`
    font-size: calc(1em + 0.5vw);
`

const Description = styled.h2`
    font-size: calc(0.8em + 0.3vw);
    font-family: 'Karla', sans-serif;
    font-weight: 500;
`

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
`

const Link = styled(NavLink)`
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    border-radius: 0 0 0 50px;
    font-size: calc(1em + 0.5vw);

    &:hover{
        color: rgba(221, 127, 175, 0.8);
    }

    ${Box}:hover &{
        border: 1px solid ${props => props.theme.text};   
    }
`

const HashTags = styled.div`
    padding: 0.5rem 0;
`

const Tag = styled.span`
    padding-right: 0.5rem;
    border-top: 1px solid ${props => props.theme.body};

    ${Box}:hover &{
        border-top: 1px solid ${props => props.theme.text};
    }
`

//motion
const Item = {
    hidden: {
        scale: 0   
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}


const Card = (props) => {

    const {id, name, description, demo, tags} = props.data

  return (
    <Box key={id} variants={Item} >
        <Title>{name}</Title>
        <Description>{description}</Description>
        <HashTags>
            {
                tags.map((t,id) => {
                    return <Tag key={id}>#{t}</Tag>
                })
            }
        </HashTags>
        <Footer>
            <Link to={{pathname: `${demo}`}} target="_blank">
                Wyświetl
            </Link>
            
        </Footer>
    </Box>
  )
}

export default Card