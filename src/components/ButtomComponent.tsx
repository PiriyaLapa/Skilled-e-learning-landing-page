import {Component, ReactNode} from 'react';
import styled from 'styled-components';

interface PrimaryBtnProps{

}

export default class PrimaryBtn extends Component<PrimarnyBtnProps>{
    render():ReactNode{
        return(
            <StyledPrimaryBtn></StyledPrimaryBtn>
        )
    }
}


