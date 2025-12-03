# PM-Test - Landing Page

A modern landing page implementation built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PM-Test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
PM-Test/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, and other assets
│   │   └── images/     # Image files
│   ├── components/     # Reusable React components
│   │   ├── Button.tsx  # Example button component
│   │   └── index.ts    # Component exports
│   ├── hooks/          # Custom React hooks
│   │   └── index.ts    # Hook exports
│   ├── pages/          # Page components
│   │   └── HomePage.tsx # Main landing page
│   ├── styles/         # Additional stylesheets
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/          # Utility functions
│   │   └── index.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles with Tailwind
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## 📝 Assumptions Made

- The landing page will be responsive and work on mobile, tablet, and desktop viewports
- All assets (images, icons) will be extracted from Figma and placed in `src/assets/images/`
- Colors, typography, and spacing will be configured in Tailwind based on Figma design tokens
- No backend integration is required - this is a static frontend implementation

## 🎨 Design Implementation

The landing page design is based on the provided Figma file:
[Figma Design Link](https://www.figma.com/design/wFgah66jxg7cbKv7NFLqWW/Landing-Page---PM?node-id=3787-43142&t=NNPF6mKgWTJQVj4k-1)

### Next Steps for Implementation:

1. Extract design tokens (colors, fonts, spacing) from Figma
2. Configure Tailwind theme with custom values
3. Create component structure matching the design:
   - Header/Navigation
   - Hero section
   - Feature sections
   - Footer
4. Implement responsive breakpoints
5. Add animations and transitions as per design
6. Optimize images and assets

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Component Architecture

Components are organized for reusability and maintainability:

- **Atomic Design Principles**: Components are structured to be reusable
- **Type Safety**: All components use TypeScript for type checking
- **Props Interface**: Clear prop definitions for each component
- **Styling**: Tailwind CSS for consistent styling

## 🚧 Future Improvements

With more time, I would:

1. **Performance Optimization**
   - Implement code splitting and lazy loading
   - Optimize images with next-gen formats (WebP, AVIF)
   - Add service worker for offline support

2. **Accessibility**
   - Enhanced ARIA labels and roles
   - Keyboard navigation improvements
   - Screen reader optimization
   - Focus management

3. **Testing**
   - Unit tests with Vitest
   - Component tests with React Testing Library
   - E2E tests with Playwright or Cypress

4. **Developer Experience**
   - Storybook for component documentation
   - Pre-commit hooks with Husky
   - Automated formatting with Prettier

5. **Features**
   - Smooth scroll animations
   - Intersection Observer for scroll-triggered animations
   - Form validation if contact forms are needed
   - Analytics integration

6. **Code Quality**
   - More comprehensive TypeScript types
   - Custom ESLint rules
   - Better error boundaries
   - Logging and error tracking

## 📄 License

This project is created for the Obermind technical assessment.
