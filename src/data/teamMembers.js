/**
 * Team Members Data
 * Centralized data structure for all team members
 * 
 * To add a new team member:
 * 1. Add their image to /src/assets/images/team/ (e.g., JohnDoe.png)
 * 2. Import the image in teamImages.js
 * 3. Add the member object to the appropriate category below
 */

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
        image: teamImages.placeholder,
        category: ['Leadership'],
        order: 3
    },
    {
        id: 'domingo-jason',
        name: 'Domingo, Jason Florante',
        role: 'PM / UX Testing / EPMO',
        image: teamImages.placeholder,
        category: ['Project Management'],
        order: 4
    },
    {
        id: 'balaguer-sheera',
        name: 'Balaguer, Sheera Nister',
        role: 'Project Manager / Administrative',
        image: teamImages.placeholder,
        category: ['Project Management'],
        order: 5
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
