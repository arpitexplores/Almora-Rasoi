
import { NavItem } from './types';

/**
 * Linked to the live Almora Rasoi Google Sheet:
 * https://docs.google.com/spreadsheets/d/1QoE3xYAxiB_YuVe5m4_XjwuSdAxWOKogP-S_osL8Igo/edit
 */
export const GOOGLE_SHEET_ID = '1QoE3xYAxiB_YuVe5m4_XjwuSdAxWOKogP-S_osL8Igo'; 

export const SHOP_GALLERY = [
  {
    url: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800', 
    caption: 'Our Signature Sweet Counter'
  },
  {
    url: 'https://images.unsplash.com/photo-1628088062854-d1870b4553ad?auto=format&fit=crop&q=80&w=800', 
    caption: 'Industrial Brick Decor'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', 
    caption: 'Modern Seating Space'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/#story' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gifting & Bulk', href: '/gifting' },
  { label: 'Contact', href: '/#contact' },
];
