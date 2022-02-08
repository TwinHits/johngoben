import { ArtPortfolioItem } from '@/common/types/art';

import * as Common from '@/common/constants/common';

export const ART_FULL_PATH = Common.ASSETS_PATH + 'art/full/';
export const ART_CLIP_PATH = Common.ASSETS_PATH + 'art/clips/';
export const ART_FILENAMES = [
    {
        name: 'Freewind Outpost',
        filename: 'freewind.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Union, Inverted',
        filename: 'windmill.jpg',
        tags: ['D&D', 'Digital', 'Isometric'],
    },
    {
        name: 'The Ricinus Family Estate',
        filename: 'estate.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    //
    {
        name: 'The Chasm Beneath Tresendar Manor',
        filename: 'chasm.jpg',
        tags: ['D&D', 'Digital', 'Isometric'],
    },
    {
        name: 'Abandoned Farmhouse',
        filename: 'farmhouse.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'Walter Durst, the Master of the House',
        filename: 'walterdurst.jpg',
        tags: ['D&D', 'Digital', 'Isometric'],
    },
    //
    {
        name: "Halfway Haverford's Apothecary and Accourtrements",
        filename: 'store.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Church of St. Andral',
        filename: 'church.jpg',
        tags: ['D&D', 'Digital', 'Isometric'],
    },
    {
        name: 'Deck of the Nautiloid',
        filename: 'nautiloid.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    //
    {
        name: "The Archmage's Tower",
        filename: 'archmage.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: "Ruined Dragon's Court",
        filename: 'ruinedcourt.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'Corporate Hellscape',
        filename: 'corporate.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    //
    {
        name: "Delight's Laboratory",
        filename: 'lab.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'Illithid Worldship',
        filename: 'illithidlair.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Heart of the Jungle',
        filename: 'jungleheart.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    //
    {
        name: 'This is the End Concert Venue',
        filename: 'concert.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: "Clan Hearteater's Skyship",
        filename: 'skyship.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'Brunch, Courtside at the Arena',
        filename: 'brunch.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    //
    {
        name: 'The Mind Cathedral',
        filename: 'cathedral.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: "The Queen's Chambers",
        filename: 'queenchambers.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Robed Throne',
        filename: 'robedthrone.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    //
    {
        name: 'Fortified Mountop Ritual, or The Ten Thousand Year Storm',
        filename: 'mountain.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: "The Queen's Guard Arena",
        filename: 'arena.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: 'The Astral Sea',
        filename: 'astralsea.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    //
    {
        name: 'The Dawnforge Rotunda',
        filename: 'rotunda.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Golemworks',
        filename: 'golemworks.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Dawnforge Mines, East',
        filename: 'mines_east.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Dawnforge Mines, West',
        filename: 'mines_west.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: "Moradin's Temple",
        filename: 'moradin.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'Fortified Orc Fortress',
        filename: 'orc_fortress.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The River Styx, Part I',
        filename: 'styx1.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The River Styx, Part II',
        filename: 'styx2.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The River Styx, Part III',
        filename: 'styx3.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Sewers, East',
        filename: 'sewers_east.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Sewers, West',
        filename: 'sewers_west.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Dawnforge Summit',
        filename: 'summit.jpg',
        tags: ['D&D', 'Pen & Paper', 'Isometric'],
    },
    {
        name: "What's Left of the Great Hall",
        filename: 'ruinedhall.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'The Stacks',
        filename: 'library.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: "Thoradin's Descent",
        filename: 'descent.jpg',
        tags: ['D&D', 'Pen & Paper', '2D'],
    },
    {
        name: 'TIE Advanced',
        filename: 'tieadvanced.jpg',
        tags: ['Pen & Paper'],
    },
    {
        name: 'The Vault of the Dawnforge',
        filename: 'vaultofthedawnforge.jpg',
        tags: ['Pen & Paper'],
    },
    {
        name: 'Red',
        filename: 'red.jpg',
        tags: ['Set Design', 'Pen & Paper'],
    },
    {
        name: 'The Order Ruins, Concept',
        filename: 'thegreathall.jpg',
        tags: ['Pen & Paper'],
    },
    {
        name: 'The Order Ruins, I',
        filename: 'OR1.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, II',
        filename: 'OR11.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, III',
        filename: 'OR12.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, IV',
        filename: 'OR14.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, V',
        filename: 'OR15.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, VI',
        filename: 'OR16.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, VII',
        filename: 'OR18.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, VIII',
        filename: 'OR19.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, IX',
        filename: 'OR2.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, X',
        filename: 'OR4.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, XI',
        filename: 'OR5.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, XII',
        filename: 'OR6.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, XIII',
        filename: 'OR7.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'The Order Ruins, XIV',
        filename: 'OR9.jpg',
        tags: ['Level Design', 'Digital', '3D'],
    },
    {
        name: 'August: Osage County',
        filename: 'august.jpg',
        tags: ['Set Design', 'Wood'],
    },
    {
        name: 'A Streetcar Named Desire, I',
        filename: 'dreamcar1.jpg',
        tags: ['Set Design', 'Wood'],
    },
    {
        name: 'A Streetcar Named Desire, II',
        filename: 'dreamcar2.jpg',
        tags: ['Set Design', 'Wood'],
    },
    {
        name: 'Medea',
        filename: 'medea.jpg',
        tags: ['Set Design', 'Wood'],
    },
    {
        name: 'Rumors',
        filename: 'rumors.jpg',
        tags: ['Set Design', 'Wood'],
    },
    {
        name: 'The 25th Annual Putnam County Spelling Bee',
        filename: 'putnam.jpg',
        tags: ['Set Design', 'Wood'],
    },
] as ArtPortfolioItem[];
