import { SvgIconName } from '@core/icons/types/svg-icon-name';

export interface Sidebar {
  title: string;
  items: SidebarItem[];
}

export interface SidebarItem {
  label: string;
  icon: SvgIconName;
  route: string;
  exact: boolean;
}
