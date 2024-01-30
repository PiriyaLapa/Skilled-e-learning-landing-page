import { Component, ReactNode } from 'react';
import { StyledFreenIcon } from './styleds';

export default class FreeIcon extends Component {
    render(): ReactNode {
        return (
            <StyledFreenIcon>
                <svg height="56" width="56">
                    <circle cx="50" cy="50" r="40" stroke="none" stroke-width="3" fill="transparent" />
                </svg>
            </StyledFreenIcon>
        )
    }
}
