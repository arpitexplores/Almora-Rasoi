# Almora Rasoi - Digital Storefront

## Overview

Almora Rasoi is a premium digital storefront for an authentic Indian sweets shop based in Dehradun, Uttarakhand. The application showcases traditional Desi Ghee sweets, snacks, and festive hampers with a modern, visually-rich user experience. Key features include a dynamic menu fetched from Google Sheets, multiple content pages (Home, Story, Menu, Gifting), and WhatsApp-based ordering integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- Single Page Application (SPA) with client-side routing via state management

### Styling Approach
- **Tailwind CSS** loaded via CDN for utility-first styling
- Custom fonts: Playfair Display (headings) and Inter (body text)
- Responsive design with mobile-first considerations

### Code Organization
- **Component-based architecture** with components in `/components` directory
- **Lazy loading** for heavy page components (FullMenuPage, GiftingPage, LegalPage, StoryPage) to improve initial load performance
- **Error Boundary** implementation for graceful error handling
- Types defined in `types.ts` for consistent data structures
- Constants centralized in `constants.tsx`

### Data Management
- **Google Sheets as CMS**: Menu data is fetched dynamically from a public Google Sheet using the gviz CSV API
- No backend server - purely client-side data fetching
- Menu structure: Categories with items containing name, price, unit, and description

### Navigation Pattern
- View-based routing managed through React state (`View` type)
- Hash-based scrolling for same-page navigation (e.g., `#contact`)
- Navigation state passed down through props

### External Integrations
- **WhatsApp Business** for order placement (click-to-chat links)
- **Google Maps** integration for location display
- Social media links (Instagram, Facebook, Twitter)

## External Dependencies

### Third-Party Services
- **Google Sheets**: Live menu data source (Sheet ID: `1QoE3xYAxiB_YuVe5m4_XjwuSdAxWOKogP-S_osL8Igo`)
- **WhatsApp Business API**: Order communication channel (+91 96543 25380)
- **Google Fonts**: Playfair Display and Inter font families
- **Unsplash**: Stock images for visual content

### NPM Packages
- `react` / `react-dom`: UI framework
- `lucide-react`: Icon library
- `@google/genai`: Google AI integration (available but usage not visible in current codebase)

### CDN Resources
- Tailwind CSS via CDN (`cdn.tailwindcss.com`)

### SEO & Schema
- Open Graph and Twitter meta tags for social sharing
- JSON-LD structured data for local business (Bakery type)
- Semantic HTML with proper heading hierarchy