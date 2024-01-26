import { Component, ReactNode } from 'react';
import { StyledCards } from './styleds';
import { CARDDATA } from '../../apis/dataCards';
import AnimationIcon from '../Icons/AnimationIcon';

interface dataProps {
    data: CARDDATA
}
export default class Card extends Component<dataProps>{
    render(): ReactNode {
        const {  id,title, content } = this.props.data
        return (
            <StyledCards>
                    <AnimationIcon />
                    <p>{title}</p>
                    <p>{content}</p>
            </StyledCards>
        )
    }
}