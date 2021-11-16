import { NAVIGATION_ITEMS } from "@/common/constants/navigation";

import { Route } from "vue-router";
import { NavItem } from "@/common/types/navigation";

export function findCurrentNavigationItemIndex(currentRoute: Route): number {
    return NAVIGATION_ITEMS.findIndex((item: NavItem) => item.route.name === currentRoute.name);
}

export function findCurrentNavigationItem(currentRoute: Route): NavItem {
    return NAVIGATION_ITEMS[findCurrentNavigationItemIndex(currentRoute)];
}

export function findNextRoute(currentRoute: Route, direction: number): NavItem | undefined {
    const currentIndex = findCurrentNavigationItemIndex(currentRoute);
    const targetIndex = currentIndex + direction;
    if (targetIndex > NAVIGATION_ITEMS.length - 1) {
        return NAVIGATION_ITEMS[targetIndex - (NAVIGATION_ITEMS.length -1)];
    } else if (targetIndex < 0) {
        return NAVIGATION_ITEMS[NAVIGATION_ITEMS.length - targetIndex];
    } else {
        return NAVIGATION_ITEMS[targetIndex]
    }
}
