# Portfolio Website - Replit Configuration

## Overview

This is a full-stack portfolio website built for a Senior Software Engineer specializing in Apache Kafka, streaming systems, and distributed architecture testing. The application showcases real-time data processing expertise, event-driven architecture, and comprehensive testing frameworks through an interactive and visually compelling interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### Analytics Dashboard (January 2025)
- Implemented comprehensive analytics dashboard with interactive charts
- Added real-time data visualization using Recharts library
- Created backend API endpoints for analytics data
- Integrated time-range filtering and responsive design

### Personalized Welcome Animation (January 2025)
- Developed multi-step welcome animation for first-time visitors
- Added personalized greetings based on user location/timezone
- Implemented localStorage-based first-visit detection
- Created development controls for testing welcome states
- Added smooth Framer Motion animations with professional styling

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations
- **3D Graphics**: Three.js (via @react-three/fiber) for interactive background elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Icons**: React Icons (Feather icons) and Simple Icons for technology logos

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Build Tool**: Vite for frontend bundling, esbuild for backend compilation
- **Development**: Hot module reloading with Vite middleware integration

### Database Schema
The application uses a comprehensive schema for portfolio content:
- **users**: Basic user authentication structure
- **projects**: Featured projects with metrics, technologies, and media
- **experiences**: Professional work history with timeline data
- **skills**: Technical skills categorized by domain with proficiency levels
- **blog_posts**: Technical blog content with categories and metadata

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated introduction with floating particles and 3D background
2. **Projects**: Interactive project cards with GitHub/demo links and performance metrics
3. **Experience**: Timeline-based work history with technology stacks
4. **Skills**: Categorized technical skills with visual proficiency indicators
5. **Blog**: Technical articles focused on Kafka, testing, and distributed systems
6. **Contact**: Contact form with social media integration

### UI/UX Features
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Dark Theme**: Professional dark color scheme with electric blue accents
- **Smooth Scrolling**: Section navigation with active state tracking
- **Interactive Elements**: Hover effects, animated cards, and scroll-triggered animations
- **Performance Optimized**: Lazy loading, code splitting, and optimized asset delivery

### Technical Highlights
- **Real-time Animations**: Particle systems and 3D star fields
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: User feedback system for form submissions
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## Data Flow

1. **Static Content**: Portfolio data is pre-seeded in the database schema
2. **Dynamic Rendering**: React components fetch and display portfolio content
3. **User Interactions**: Contact forms and navigation trigger client-side updates
4. **Animation System**: Framer Motion handles scroll-based and user-triggered animations
5. **API Integration**: Express routes handle form submissions and data retrieval

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Hook Form
- **Styling**: Tailwind CSS, Radix UI primitives, shadcn/ui components
- **Animations**: Framer Motion, Three.js, @react-three/fiber
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Development**: Vite, TypeScript, esbuild

### UI Components
- **shadcn/ui**: Complete component library with Radix UI primitives
- **Lucide Icons**: Modern icon set for UI elements
- **Class Variance Authority**: Type-safe component variants
- **Tailwind Merge**: Utility class merging for dynamic styling

## Deployment Strategy

### Build Process
1. **Frontend**: Vite bundles React application with optimized assets
2. **Backend**: esbuild compiles TypeScript server code to ES modules
3. **Database**: Drizzle migrations handle schema updates
4. **Assets**: Static files served through Express with proper caching headers

### Production Configuration
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **File Structure**: Compiled assets in `/dist`, client files in `/dist/public`
- **Server Setup**: Express serves both API routes and static frontend files
- **Database**: Neon Database provides serverless PostgreSQL hosting

### Development Features
- **Hot Reloading**: Vite middleware integration for seamless development
- **TypeScript**: Full type safety across frontend and backend
- **Path Aliases**: Clean imports with @ for client, @shared for common types
- **Error Handling**: Runtime error overlay and comprehensive error boundaries

The application is designed to showcase technical expertise while providing a smooth, engaging user experience that reflects the professional capabilities of a senior engineer in streaming systems and distributed architecture.