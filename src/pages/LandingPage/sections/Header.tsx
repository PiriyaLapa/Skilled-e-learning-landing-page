import {Component,ReactNode} from 'react';
import { Navbar } from '../../../components/Navbars/Navbar';
import {StyledHeader} from './styles';
import {stateProps} from '../interface';



export default class Header extends Component<stateProps>{
    
    render():ReactNode{
        const {windowWidthState} = this.props
        return(
            <StyledHeader>
                <Navbar windowWidthState = {windowWidthState}/>
            </StyledHeader>
        )
    }
}