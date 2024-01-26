import { Component, ReactNode } from 'react';
import { StyledCards } from './styleds';
import { CARDDATA } from '../../apis/dataCards';
import AnimationIcon from '../Icons/AnimationIcon';

interface dataProps {
    data: CARDDATA
}
export default class Card extends Component<dataProps>{
    render(): ReactNode {
        const { title, content } = this.props.data
        return (
            <StyledCards>
                <AnimationIcon />
                <span>{title}</span>
                <span>{content}</span>
            </StyledCards>
        )
    }
}