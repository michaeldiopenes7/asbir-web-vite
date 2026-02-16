import sirSyar from '../assets/images/SirSyar.png';
import sirPaul from '../assets/images/SirPaul.png';
import sirDudz from '../assets/images/SirDudz.png';
import sirJas from '../assets/images/SirJas.png';
import mamShe from '../assets/images/MamShe.png';
import sirLloyd from '../assets/images/SirLloyd.png';
import sirRigo from '../assets/images/SirRigo.png';
import sirAnot from '../assets/images/sirAnot.png';
import sirJed from '../assets/images/SirJed.png';
import sirRyan from '../assets/images/SirRyan.png';
import sirJf from '../assets/images/SirJf.png';
import sirJuni from '../assets/images/SirJuni.png';
import sirLeonil from '../assets/images/SirLeonil.png';
import sirEd from '../assets/images/SirEd.png';
import chum from '../assets/images/Chum.png';
import SirSylv from '../assets/images/SirSylv.png';
import SirRonald from '../assets/images/SirRonald.png';
import MamAds from '../assets/images/MamAds.png';
import sirKen from '../assets/images/SirKen.png';
import Mike from '../assets/images/Mike.png';
import claire from '../assets/images/claire.png';

import placeholder from '../assets/images/imgplchldr.jpg';
export const teamImages = {
    // Leadership
    sirSyar,
    sirPaul,
    sirDudz,
    sirJas,
    mamShe,
    sirLloyd,
    sirRigo,
    sirAnot,
    sirJed,
    sirRyan,
    sirJf,
    sirJuni,
    sirLeonil,
    sirEd,
    chum,
    SirSylv,
    SirRonald,
    MamAds,
    sirKen,
    Mike,
    claire,
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
