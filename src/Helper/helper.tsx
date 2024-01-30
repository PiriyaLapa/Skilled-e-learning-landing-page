import AnimationIcon from "../components/Icons/AnimationIcon";
import DesignIcon from "../components/Icons/DesignIcon";
import PhotographIcon from "../components/Icons/PhotographIcon";
import CryptoIcon from "../components/Icons/CryptoIcon";
import BusinessIcon from "../components/Icons/BusinessIcon";
import FreeIcon from '../components/Icons/FreeIcon';
import {ReactNode} from 'react';
// Iconrender
export const getIconComponent = (id: number): ReactNode => {
    switch (id) {
        case 0:
            // return <AnimationIcon/>;
            return <FreeIcon/>;
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