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
    index: number;
}
export default class Card extends Component<dataProps>{
    render(): ReactNode {
        const { id, title, content } = this.props.data
        let iconComponent = getIconComponent(id);
        return (
            <StyledCards>
                {iconComponent}
                <span>{title}</span>
                <span>{content}</span>
                 <span>Get Start</span>
            </StyledCards>
        )
    }
}

// function icon
const getIconComponent = (id: number): ReactNode => {
    switch (id) {
        case 0:
            return '';
        case 1:
            return <AnimationIcon />;
        case 2:
            return <DesignIcon />;
        case 3:
            return <PhotographIcon />;
        case 4:
            return <CryptoIcon />;
        case 5:
            return <BusinessIcon />;
        default:
            return '';
    }
};