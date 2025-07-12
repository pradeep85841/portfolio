# Portfolio Website - Local Setup Guide

A professional portfolio website for a Senior Software Engineer specializing in Apache Kafka, streaming systems, and distributed architecture testing.

## Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5000`
   - The application will automatically reload when you make changes

## Project Structure

```
portfolio-website/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage interface
├── shared/                 # Shared types and schemas
└── package.json           # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run type-check` - Run TypeScript type checking

## Features

### Core Sections
- **Hero Section** - Animated introduction with floating particles
- **Projects** - Interactive project showcase with GitHub links
- **Experience** - Professional timeline with technology stacks
- **Skills** - Categorized technical skills with proficiency levels
- **Blog** - Technical articles and insights
- **Contact** - Contact form with validation
- **Analytics Dashboard** - Portfolio performance metrics

### Technical Features
- **Welcome Animation** - Personalized first-visit experience
- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Professional dark color scheme
- **Smooth Animations** - Framer Motion powered transitions
- **Form Validation** - React Hook Form with Zod schemas
- **Real-time Charts** - Interactive analytics with Recharts

## Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **shadcn/ui** component library
- **React Hook Form** for form handling
- **TanStack Query** for data fetching
- **Recharts** for data visualization

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Drizzle ORM** for database operations
- **Zod** for schema validation

### Build Tools
- **Vite** for fast development and building
- **esbuild** for backend compilation
- **PostCSS** for CSS processing

## Environment Variables

Create a `.env` file in the root directory for any required environment variables:

```env
# Database (if using PostgreSQL)
DATABASE_URL=your_database_url

# Analytics (optional)
VITE_GA_MEASUREMENT_ID=your_google_analytics_id
```

## Development Tips

### Testing Welcome Animation
- Use the dev controls button (bottom right) to reset the welcome state
- This allows you to test the first-visit experience repeatedly

### Customizing Content
- Edit the data in `client/src/components/sections/` to customize portfolio content
- Modify colors in `client/src/index.css` for custom theming
- Update personal information in the Hero section

### Adding New Pages
1. Create a new component in `client/src/pages/`
2. Add the route in `client/src/App.tsx`
3. Update navigation in `client/src/components/navigation.tsx`

## Production Deployment

### Build the application
```bash
npm run build
```

### Start production server
```bash
npm start
```

The built application will be served from the `dist` directory.

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Change the port in `server/index.ts` if port 5000 is occupied
   - Or kill the process using that port

2. **Dependencies not installing**
   - Try deleting `node_modules` and `package-lock.json`
   - Run `npm install` again

3. **TypeScript errors**
   - Run `npm run type-check` to see detailed type errors
   - Ensure all dependencies are properly installed

### Development Mode Not Working
- Ensure Node.js version is 18 or higher
- Check that all dependencies installed successfully
- Verify no firewall is blocking port 5000

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The application is optimized for performance with:
- Code splitting and lazy loading
- Optimized images and assets
- Efficient animations
- Minimal bundle size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for portfolio purposes. Please respect the code and design.

---

For questions or support, please open an issue in the repository.