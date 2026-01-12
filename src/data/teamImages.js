import sirSyar from '../assets/images/SirSyar.png';
import sirPaul from '../assets/images/SirPol.png';

import placeholder from '../assets/images/placeholderprtnr.png';
export const teamImages = {
    // Leadership
    sirSyar,
    sirPaul,

    // Fallback
    placeholder
};

/**
 @param {string} key
 @returns {string} 
 */
export const getTeamImage = (key) => {
    return teamImages[key] || teamImages.placeholder;
};
