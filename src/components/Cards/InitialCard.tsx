import {Component, ReactNode} from 'react';
import { StyledInitialCard } from './styleds';
import { CARDDATA } from '../../apis/dataCards';

interface apisProps{
    data:CARDDATA;
}
export default class InitialCard extends Component<apisProps>{
    render():ReactNode{
        const {title} = this.props.data;
        return(
            <StyledInitialCard>
                <span>{title}</span>
            </StyledInitialCard>
        )
    }
}