import { Component, ReactNode } from 'react';
import { StyledCards } from './styleds';
import { CARDDATA } from '../../apis/dataCards';
import AnimationIcon from '../Icons/AnimationIcon';
import BusinessIcon from '../Icons/BusinessIcon';
import PhotographIcon from '../Icons/PhotographIcon';
import DesignIcon from '../Icons/DesignIcon';
import CryptoIcon from '../Icons/CryptoIcon';

interface dataProps {
    data: CARDDATA,
    index:number;
}
export default class Card extends Component<dataProps>{
    render(): ReactNode {
        const { title, content } = this.props.data
        const index =this.props.index
        
        
        
        return (
            <StyledCards>
                <AnimationIcon />
                <BusinessIcon />
                <PhotographIcon /> 
                <DesignIcon /> 
                <CryptoIcon />
                <span>{title}</span>
                <span>{content}</span>
                <span>Get Start</span>
                <span>Index:{index}</span>
            </StyledCards>
        )
    }
}