import {Component,ReactNode} from 'react';
import { Navbar } from '../../../components/Navbars/Navbar';
import {StyledHeader} from './styles';

export default class Header extends Component{
    render():ReactNode{
        return(
            <StyledHeader>
                <Navbar />
            </StyledHeader>
        )
    }
}