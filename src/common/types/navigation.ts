import { RawLocation } from "vue-router";

export interface NavItem {
    title: string;
    route: RawLocation;
    subitems: NavItem;
}