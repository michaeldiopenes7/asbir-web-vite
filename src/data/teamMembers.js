import { teamImages } from './teamImages';

const CATEGORIES = {
    LEADERSHIP: 'Executives',
    PROJECT_MANAGEMENT: 'Project Management',
    PRODUCT_DESIGN: 'Product Design',
    ENGINEERING: 'Engineering',
    MARKETING: 'Marketing',
    QA: 'Quality Assurance',
    ADMIN: 'Research & Admin Works',
};

// Helper to create member objects cleanly
const createMember = (order, id, name, role, category, image = teamImages.placeholder) => ({
    id,
    name,
    role,
    image,
    category: Array.isArray(category) ? category : [category],
    order
});

const membersData = [
    // [id, name, role, category, image]
    // Executives
    ['asbir-syarief', 'Asbir, Muhammad Syarief', 'Chief Executive Officer', CATEGORIES.LEADERSHIP, teamImages.sirSyar],
    ['orozco-paul', 'Orozco, Paul Brett', 'Chief Operations Officer', CATEGORIES.LEADERSHIP, teamImages.sirPaul],
    ['llena-eduard', 'Llena, Eduard', 'Marketing OIC', [CATEGORIES.LEADERSHIP, CATEGORIES.MARKETING], teamImages.sirDudz],

    // Project Management
    ['domingo-jason', 'Domingo, Jason Florante', 'PM / UX Testing / EPMO', CATEGORIES.PROJECT_MANAGEMENT, teamImages.sirJas],
    ['balaguer-sheera', 'Balaguer, Sheera Nister', 'Project Manager / Administrative', CATEGORIES.PROJECT_MANAGEMENT, teamImages.mamShe],
    ['maypa-lloyd', 'Maypa, Lloyd Kenneth', 'Project Manager / Scrum Master', CATEGORIES.PROJECT_MANAGEMENT, teamImages.sirLloyd],

    // Staff Engineers
    ['talinting-rigo', 'Talinting, Rigo Rey', 'Staff Engineer', CATEGORIES.ENGINEERING, teamImages.sirRigo],
    ['labastilla-arnold', 'Labastilla, Arnold', 'Staff Engineer', CATEGORIES.ENGINEERING, teamImages.sirAnot],
    ['salazar-jed', 'Salazar, Jed Justin', 'Staff Engineer', CATEGORIES.ENGINEERING, teamImages.sirJed],

    // Senior Software/Game/Security Engineers
    ['abuyabor-jose', 'Abuyaboy, Jose Ryan', 'Senior Software Engineer', CATEGORIES.ENGINEERING, teamImages.sirRyan],
    ['brosas-john', 'Brosas, John Fiel', 'Senior Security Engineer', CATEGORIES.ENGINEERING, teamImages.sirJf],
    ['brosas-juni', 'Brosas, Juni', 'Senior Software Engineer', CATEGORIES.ENGINEERING, teamImages.sirJuni],
    ['cid-raymond', 'Cid, Raymond Adrian', 'Senior Game Engineer', CATEGORIES.ENGINEERING],
    ['dayado-leonil', 'Dayado, Leonil', 'Senior Software Engineer', CATEGORIES.ENGINEERING, teamImages.sirLeonil],
    ['valencia-edpaul', 'Valencia, Ed Paul', 'Senior Software Engineer', CATEGORIES.ENGINEERING, teamImages.sirEd],

    // Software Engineers / Server Admin
    ['amaro-lanice', 'Amaro, Lanice', 'Software Engineer', CATEGORIES.ENGINEERING, teamImages.chum],
    ['bergado-sylv', 'Bergado, Sylvester', 'Software Engineer', CATEGORIES.ENGINEERING, teamImages.SirSylv],
    ['dogomeo-ronald', 'Dogomeo, Ronald', 'Software Engineer', CATEGORIES.ENGINEERING, teamImages.SirRonald],
    ['duhaylungsod-rigie', 'Duhaylungsod, Rigie', 'Software Engineer', CATEGORIES.ENGINEERING],
    ['morimonte-emmanuel', 'Morimonte, Emmanuel', 'Server Administrator', CATEGORIES.ENGINEERING],
    ['pascua-ronald', 'Pascua, Ronald', 'Software Engineer', CATEGORIES.ENGINEERING],
    ['talingting-richy', 'Talingting, Richy RV', 'Software Engineer', CATEGORIES.ENGINEERING],
    ['valencia-ely', 'Valencia, Ely Jose', 'Software Engineer', CATEGORIES.ENGINEERING],

    // Junior Software Engineers
    ['arnesto-arnold', 'Arnesto, Arnold', 'Junior Software Engineer', CATEGORIES.ENGINEERING],
    ['pagnanawon-allen', 'Pagnanawon, Allen', 'Junior Software Engineer', CATEGORIES.ENGINEERING],
    ['palallos-hamuel', 'Palallos, Hamuel', 'Junior Software Engineer', CATEGORIES.ENGINEERING],
    ['pasulohan-frances', 'Pasulohan, Frances', 'Junior Software Engineer', CATEGORIES.ENGINEERING],

    // Marketing Team
    ['albiso-johnrey', 'Albiso, John Rey', 'Content Strategist', CATEGORIES.MARKETING],
    ['jul-bennajir', 'Jul, Bennajir', 'Content Writer', CATEGORIES.MARKETING],
    ['dacua-jeanluis', 'Dacua, Jean Luis', 'Marketing Specialist', CATEGORIES.MARKETING],
    ['dequito-marjun', 'Dequito, Marjun', 'Graphics Designer', CATEGORIES.MARKETING],
    ['fernando-niko', 'Fernando, Niko Angelo', '3D Artist (Animator)', CATEGORIES.MARKETING],
    ['rio-john', 'Rio, John', 'Multimedia Designer', CATEGORIES.MARKETING],

    // Product Design
    ['abines-ada', 'Abines, Ada Katrina', 'Product Design Manager', CATEGORIES.PRODUCT_DESIGN, teamImages.MamAds],
    ['jo-kenanaiah', 'Jo, Kenanaiah', 'UI/UX Designer', CATEGORIES.PRODUCT_DESIGN, teamImages.sirKen],
    ['diopenes-michael', 'Diopenes, Michael John', 'UI/UX Designer', CATEGORIES.PRODUCT_DESIGN, teamImages.Mike],
    ['alumbre-claire', 'Alumbre, Claire', 'Junior UI/UX Designer', CATEGORIES.PRODUCT_DESIGN, teamImages.claire],

    // Quality Assurance
    ['salazar-may', 'Salazar, May Faith', 'Quality Assurance Manager', CATEGORIES.QA],
    ['beschorner-patric', 'Beschorner, Patric', 'Quality Assurance Analyst', CATEGORIES.QA],
    ['mercado-elmer', 'Mercado, Elmer', 'Quality Assurance Analyst', CATEGORIES.QA],

    // Research & Admin Works
    ['infante-fabe', 'Infante, Fabe Hillary', 'Researcher / Admin Works', CATEGORIES.ADMIN, teamImages.MamFabe],];

export const teamMembers = membersData.map((data, index) => {
    const [id, name, role, category, image] = data;
    return createMember(index + 1, id, name, role, category, image);
});

/**
 * Filter team members by category
 * @param {string} category - Category to filter by ('All', 'Leadership', 'Project Management', etc.)
 * @returns {Array} Filtered team members
 */
export const getTeamByCategory = (category) => {
    if (category === 'All') return teamMembers;
    return teamMembers.filter(member => member.category.includes(category));
};

/**
 * @param {string} id - Member ID
 * @returns {Object|null} Team member object or null
 */
export const getTeamMemberById = (id) => {
    return teamMembers.find(member => member.id === id) || null;
};
