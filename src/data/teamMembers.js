import { teamImages } from './teamImages';

const CATEGORIES = {
    LEADERSHIP: 'Leadership',
    PROJECT_MANAGEMENT: 'Project Management',
    PRODUCT_DESIGN: 'Product Design',
    ENGINEERING: 'Engineering',
    MARKETING: 'Marketing',
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
    ['asbir-syarief', 'Asbir, Muhammad Syarief', 'Chief Executive Officer', CATEGORIES.LEADERSHIP, teamImages.sirSyar],
    ['orozco-paul', 'Orozco, Paul Brett', 'Chief Operations Officer', CATEGORIES.LEADERSHIP, teamImages.sirPaul],
    ['llena-eduard', 'Llena, Eduard', 'Marketing OIC', CATEGORIES.LEADERSHIP, teamImages.sirDudz],
    ['domingo-jason', 'Domingo, Jason Florante', 'PM / UX Testing / EPMO', CATEGORIES.PROJECT_MANAGEMENT, teamImages.sirJas],
    ['balaguer-sheera', 'Balaguer, Sheera Nister', 'Project Manager / Administrative', CATEGORIES.PROJECT_MANAGEMENT, teamImages.mamShe],
    ['member-6', 'Jo, Kenanaiah Joseph', 'Product Designer', CATEGORIES.PRODUCT_DESIGN],
    ['member-7', 'Alumbre, Claire', 'UI/UX Designer', CATEGORIES.PRODUCT_DESIGN],
    ['member-8', 'Abines, Ada Katrina', 'Backend Developer', CATEGORIES.PRODUCT_DESIGN],
    ['member-9', 'Santos, Maria', 'QA Specialist', CATEGORIES.PROJECT_MANAGEMENT],
    ['member-10', 'Gonzales, Kevin', 'Frontend Developer', CATEGORIES.ENGINEERING],
    ['member-11', 'Marjun Dequito', 'Content Strategist', CATEGORIES.MARKETING],
];

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
