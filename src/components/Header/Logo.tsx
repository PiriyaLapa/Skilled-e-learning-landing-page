import {Component,ReactNode} from 'react';
import { StyledLogo } from '../Buttons/style';
import { MessageProps } from '../interface';

export default class Logo extends Component<MessageProps>{
    render():ReactNode{
        const {message} = this.props;
        return(
            <StyledLogo>{message}</StyledLogo>
        )
    }
}