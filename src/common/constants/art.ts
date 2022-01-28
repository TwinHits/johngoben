import { ArtPortfolioItem } from '@/common/types/art';

export const ART_FULL_PATH = 'https://john-goben-portfolio.s3.us-east-2.amazonaws.com/art/full/';
export const ART_CLIP_PATH = 'https://john-goben-portfolio.s3.us-east-2.amazonaws.com/art/clip/';
export const ART_FILENAMES = [
    {
        name: 'Abandoned Farmhouse',
        filename: 'Abandoned+Farmhouse.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: "The Archmage's Tower",
        filename: "Archmage's+Tower.jpg",
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: ' Brunch, Courtside at the Arena',
        filename: 'Brunch+Courtside+at+the+Arena.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: "Clan Hearteater's Skyship",
        filename: 'Clan+Hearteater+Skyship.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: ' This is the End Concert Venue',
        filename: 'Concert+Venue.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'Corporate Hellscape',
        filename: 'Corporate+Hellscape.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Dawnforge Rotunda',
        filename: 'Dawnforge_Rotunda.png',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'Deck of the Nautiloid',
        filename: 'Deck+of+the+Nautiloid.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: "Delight's Laboratory",
        filename: "Delight's+Laboratory.jpg",
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'Fortified Mountop Ritual, or The Ten Thousand Year Storm',
        filename: 'Fortified+Mountaintop+Ritual.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'Freewind Outpost',
        filename: 'Freewind+Outpost.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Golemworks',
        filename: 'Golemworks.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: "Halfway Haverford's Apothecary and Accourtrements",
        filename: 'Halfway+Haverfords+Apothecary+and+Accoutrements.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Dawnforge Mines, East',
        filename: 'Mines_East.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Dawnforge Mines, West',
        filename: 'Mines_West.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: " Moradin's Temple",
        filename: 'Moradins_Temple.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'Fortified Orc Fortress',
        filename: 'orc_fortress.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'Illithid Worldship',
        filename: 'Outsider+Lair.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: "The Queen's Guard Arena",
        filename: "Queen's+Guard+Arena.jpg",
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The River Styx, Part I',
        filename: 'RiverStyx1.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The River Styx, Part II',
        filename: 'RiverStyx2.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The River Styx, Part III',
        filename: 'RiverStyx3.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: "Ruined Dragon's Court",
        filename: 'Ruined+Dragon+Court.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Sewers, East',
        filename: 'Sewers_East.png',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Sewers, West',
        filename: 'Sewers_West.png',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Dawnforge Summit',
        filename: 'Summit.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Astral Sea',
        filename: 'The+Astral+Sea.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Heart of the Jungle',
        filename: 'The+Heart+of+the+Jungle.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Mind Cathedral',
        filename: 'The+Mind+Cathedral.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: "The Queen's Chambers",
        filename: "The+Queen's+Chambers.jpg",
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Ricinus Family Estate',
        filename: "Noble's+Estate.jpg",
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Robed Throne',
        filename: 'The+Robed+Throne.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Union, Inverted',
        filename: 'The+Union,+Inverted.PNG',
        tags: ['D&D', 'Digital', 'Isometric'],
    },
    {
        name: "What's Left of the Great Hall",
        filename: 'The_Great_Hall.png',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Stacks',
        filename: 'The_Mountain_Library.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Church of St. Andral',
        filename: 'The-Church-Of-St.-Andral.png',
        tags: ['D&D', 'Digital', 'Isometric'],
    },
    {
        name: "Thoradin's Descent",
        filename: 'Thoradins_Descent.png',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'Walter Durst, the Master of the House',
        filename: 'Walter+Durst,+Master+of+the+House.png',
        tags: ['D&D', 'Digital', 'Isometric'],
    },
    { name: 'August: Osage County', filename: 'august.JPG', tags: ['Set Design', 'Wood'] },
    { name: 'A Streetcar Named Desire, I', filename: 'dreamcar1.jpg', tags: ['Set Design', 'Wood'] },
    { name: 'A Streetcar Named Desire, II', filename: 'dreamcar2.jpg', tags: ['Set Design', 'Wood'] },
    { name: 'Medea', filename: 'medea.jpg', tags: ['Set Design', 'Wood'] },
    { name: 'The Order Ruins, I', filename: 'OR1.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, II', filename: 'OR11.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, III', filename: 'OR12.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, IV', filename: 'OR14.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, V', filename: 'OR15.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, VI', filename: 'OR16.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, VII', filename: 'OR18.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, VIII', filename: 'OR19.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, IX', filename: 'OR2.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, X', filename: 'OR4.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, XI', filename: 'OR5.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, XII', filename: 'OR6.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, XIII', filename: 'OR7.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The Order Ruins, XIV', filename: 'OR9.jpg', tags: ['Level Design', 'Digital', '3D'] },
    { name: 'The 25th Annual Putnam County Spelling Bee', filename: 'putnam.jpg', tags: ['Set Design', 'Wood'] },
    { name: 'Red', filename: 'red.jpg', tags: ['Set Design', 'Pen & Paper'] },
    { name: 'Rumors', filename: 'rumors.jpg', tags: ['Set Design', 'Wood'] },
    { name: 'The Order Ruins, XV', filename: 'thegreathall.jpg', tags: ['Pen & Paper'] },
    { name: 'TIE Advanced', filename: 'tieadvanced.jpg', tags: ['Pen & Paper'] },
    { name: 'The Vault of the Dawnforge', filename: 'vaultofthedawnforge.jpg', tags: ['Pen & Paper'] },
    { name: 'The Chasm Beneath Tresendar Manor', filename: 'The+Chasm+Beneath+Tresendar+Manor.png', tags: ['D&D', 'Digital', 'Isometric']}
] as ArtPortfolioItem[];
