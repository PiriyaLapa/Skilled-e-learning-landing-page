import {Component,ReactNode} from 'react';
import {StyledTabletHero} from './styles';

export default class TabletHero extends Component{
    render():ReactNode{
        return(
            <StyledTabletHero>
                {/* <OvalShap src={HeroImgTablet} /> */}
                <h1>Test Oval</h1>
            </StyledTabletHero>
        )
    }
}