import { Route } from "vue-router";

export interface NavItem {
    title: string;
    route: Route;
    subitems: NavItem;
}