import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {PowerBtn} from '../components/AllSvgr'


const Power = styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);

    background-color: #FCF6F4;
    padding: .3rem;
    border-radius: 50%;
    border: 1px solid #000;
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    cursor: pointer;

    &:hover{
      background-color: ${props => `rgba(${props.theme.colorRgba}, 0.8)`};
      box-shadow: 0 0 8px 6px ${props => `rgba(${props.theme.colorRgba}, 0.6)`};
    }

    &>*:first-child{
      text-decoration: none;
      color: inherit;
      
    }

`

const PowerButton = () => {
  return (
    <Power>
    <NavLink to="/">
    <PowerBtn width={30} height={30} fill='currentColor' />
    </NavLink>
    </Power>
  )
}

export default PowerButton