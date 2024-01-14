import {Component,ReactNode} from 'react';
import { StyledLogo } from '../Buttons/styles';
import { MessageProps } from '../interface/Button';

export default class Logo extends Component<MessageProps>{
    render():ReactNode{
        const {message} = this.props;
        return(
            <StyledLogo>{message}</StyledLogo>
        )
    }
}