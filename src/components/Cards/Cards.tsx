import { Component, ReactNode } from 'react';
import { StyledCards } from './styleds';
import { CARDDATA } from '../../apis/dataCards';

interface dataProps {
    data: CARDDATA
}
export default class Card extends Component<dataProps>{
    render(): ReactNode {
        const { id, title, content } = this.props.data
        return (
            <StyledCards>
                <h1>{id}</h1>
                <p>{title}</p>
                <p>{content}</p>
            </StyledCards>
        )
    }
}