import { teamImages } from './teamImages';

export const teamMembers = [
    {
        id: 'asbir-syarief',
        name: 'Asbir, Muhammad Syarief',
        role: 'Chief Executive Officer',
        image: teamImages.sirSyar,
        category: ['Leadership'],
        order: 1
    },
    {
        id: 'orozco-paul',
        name: 'Orozco, Paul Brett',
        role: 'Chief Operations Officer',
        image: teamImages.sirPaul,
        category: ['Leadership'],
        order: 2
    },
    {
        id: 'llena-eduard',
        name: 'Llena, Eduard',
        role: 'Marketing OIC',
        image: teamImages.sirDudz,
        category: ['Leadership'],
        order: 3
    },
    {
        id: 'domingo-jason',
        name: 'Domingo, Jason Florante',
        role: 'PM / UX Testing / EPMO',
        image: teamImages.sirJas,
        category: ['Project Management'],
        order: 4
    },
    {
        id: 'balaguer-sheera',
        name: 'Balaguer, Sheera Nister',
        role: 'Project Manager / Administrative',
        image: teamImages.mamShe,
        category: ['Project Management'],
        order: 5
    },
    {
        id: 'member-6',
        name: 'Jo, Kenanaiah Joseph',
        role: 'Product Designer',
        image: teamImages.placeholder,
        category: ['Product Design'],
        order: 6
    },
    {
        id: 'member-7',
        name: 'Alumbre, Claire',
        role: 'UI/UX Designer',
        image: teamImages.placeholder,
        category: ['Product Design'],
        order: 7
    },
    {
        id: 'member-8',
        name: 'Abines, Ada Katrina',
        role: 'Backend Developer',
        image: teamImages.placeholder,
        category: ['Product Design'],
        order: 8
    },
    {
        id: 'member-9',
        name: 'Santos, Maria',
        role: 'QA Specialist',
        image: teamImages.placeholder,
        category: ['Project Management'],
        order: 9
    },
    {
        id: 'member-10',
        name: 'Gonzales, Kevin',
        role: 'Frontend Developer',
        image: teamImages.placeholder,
        category: ['Engineering'],
        order: 10
    },
    {
        id: 'member-11',
        name: 'Lim, Sarah',
        role: 'Content Strategist',
        image: teamImages.placeholder,
        category: ['Creative'],
        order: 11
    }
];

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
 * Get team member by ID
 * @param {string} id - Member ID
 * @returns {Object|null} Team member object or null
 */
export const getTeamMemberById = (id) => {
    return teamMembers.find(member => member.id === id) || null;
};
