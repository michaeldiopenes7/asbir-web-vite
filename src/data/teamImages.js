import syar from '../assets/images/team/Executives/Syar.png';
import paul from '../assets/images/team/Executives/Paul.png';
import dudz from '../assets/images/team/Executives/Dudz.png';
import jas from '../assets/images/team/ProjectManagement/Jas.png';
import she from '../assets/images/team/ProjectManagement/She.png';
import lloyd from '../assets/images/team/ProjectManagement/Lloyd.png';
import rigo from '../assets/images/team/Engineering/Rigo.png';
import anot from '../assets/images/team/Engineering/Anot.png';
import jed from '../assets/images/team/Engineering/Jed.png';
import ryan from '../assets/images/team/Engineering/Ryan.png';
import jf from '../assets/images/team/Engineering/Jf.png';
import juni from '../assets/images/team/Engineering/Juni.png';
import leonil from '../assets/images/team/Engineering/Leonil.png';
import ed from '../assets/images/team/Engineering/Ed.png';
import chum from '../assets/images/team/Engineering/Chum.png';
import sylv from '../assets/images/team/Engineering/Sylv.png';
import ronald from '../assets/images/team/Engineering/Ronald.png';
import ads from '../assets/images/team/ProductDesign/Ads.png';
import ken from '../assets/images/team/ProductDesign/Ken.png';
import mike from '../assets/images/team/ProductDesign/Mike.png';
import claire from '../assets/images/team/ProductDesign/claire.png';
import fabe from '../assets/images/team/Admin/Fabe.png';
import rigie from '../assets/images/team/Engineering/Rigie.png';
import emman from '../assets/images/team/Engineering/Emman.png';
import der from '../assets/images/team/Engineering/Der.png';
import richy from '../assets/images/team/Engineering/Richy.png';
import ely from '../assets/images/team/Engineering/Ely.png';
import arnoldjr from '../assets/images/team/Engineering/ArnoldJr.png';
import allen from '../assets/images/team/Engineering/Allen.png';
import hamuel from '../assets/images/team/Engineering/Hamuel.png';
import frances from '../assets/images/team/Engineering/Frances.png';

// Placeholder Img
import placeholder from '../assets/images/imgplchldr.jpg';

export const teamImages = {
    // Leadership
    syar,
    paul,
    dudz,
    jas,
    she,
    lloyd,
    rigo,
    anot,
    jed,
    ryan,
    jf,
    juni,
    leonil,
    ed,
    chum,
    sylv,
    ronald,
    ads,
    ken,
    mike,
    claire,
    fabe,
    rigie,
    emman,
    der,
    richy,
    ely,
    arnoldjr,
    allen,
    hamuel,
    frances,
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
