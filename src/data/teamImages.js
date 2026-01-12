import sirSyar from '../assets/images/SirSyar.png';
import sirPaul from '../assets/images/SirPol.png';
import sirDudz from '../assets/images/SirDudz.png';
import sirJas from '../assets/images/SirJas.png';
import mamShe from '../assets/images/MamShe.png';

import placeholder from '../assets/images/imgplchldr.jpg';
export const teamImages = {
    // Leadership
    sirSyar,
    sirPaul,
    sirDudz,
    sirJas,
    mamShe,
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
