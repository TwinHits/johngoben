import { Location } from 'vue-router';

export interface NavItem {
    title: string;
    route: Location;
    subitems: NavItem;
}
