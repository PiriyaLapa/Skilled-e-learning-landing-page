import {Component,ReactNode} from 'react';
import { StyledTabletHero2 } from '../../../pages/LandingPage/sections/styles';

interface urlImgProps {
    urlImg:string;
}

export default class TabletHero2 extends Component<urlImgProps>{
    render():ReactNode{
            const  {urlImg} = this.props;
        return(
            <StyledTabletHero2 src={urlImg} alt="tableHeroImg"/>
        )
    }
}