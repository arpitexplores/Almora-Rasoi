
export type View = 'home' | 'privacy' | 'terms' | 'refund' | 'full-menu' | 'gifting' | 'story';

export interface MenuItem {
  name: string;
  price?: string;
  unit?: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}
