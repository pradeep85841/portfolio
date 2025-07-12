# Local Development Setup

## Step-by-Step Instructions

### 1. Prerequisites Check

First, verify you have the required tools installed:

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check Git
git --version
```

If any are missing, install them:
- **Node.js**: Download from [nodejs.org](https://nodejs.org/)
- **Git**: Download from [git-scm.com](https://git-scm.com/)

### 2. Get the Code

#### Option A: Download ZIP
1. Download the project as a ZIP file
2. Extract to your desired location
3. Open terminal/command prompt in the extracted folder

#### Option B: Git Clone
```bash
git clone <repository-url>
cd portfolio-website
```

### 3. Install Dependencies

```bash
# Install all project dependencies
npm install

# This will install both frontend and backend dependencies
```

**Note**: This may take a few minutes depending on your internet connection.

### 4. Start Development Server

```bash
# Start the development server
npm run dev
```

You should see output like:
```
[express] serving on port 5000
[vite] server started at http://localhost:5000
```

### 5. Open in Browser

- Navigate to `http://localhost:5000`
- You should see the portfolio website
- The page will automatically reload when you make changes

## Folder Structure Explanation

```
portfolio-website/
├── client/                 # Frontend code (React)
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Utilities
│   └── index.html          # HTML template
├── server/                 # Backend code (Express)
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API endpoints
│   └── storage.ts         # Data handling
├── shared/                 # Shared code
├── package.json           # Dependencies
└── README.md              # This file
```

## Development Workflow

### Making Changes

1. **Edit Files**: Use any code editor (VS Code recommended)
2. **See Changes**: The browser will automatically reload
3. **Check Console**: Open browser dev tools for any errors

### Testing Features

- **Welcome Animation**: Use the dev controls button (bottom right) to reset
- **Analytics**: Visit `/analytics` to see the dashboard
- **Responsive**: Test on different screen sizes

### Common Commands

```bash
# Start development (most common)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for TypeScript errors
npm run type-check
```

## Customization Guide

### Changing Personal Information

Edit these files to customize the portfolio:

1. **Hero Section**: `client/src/components/sections/hero.tsx`
2. **Projects**: `client/src/components/sections/projects.tsx`
3. **Experience**: `client/src/components/sections/experience.tsx`
4. **Skills**: `client/src/components/sections/skills.tsx`
5. **Contact**: `client/src/components/sections/contact.tsx`

### Changing Colors/Theme

Edit `client/src/index.css` to change:
- Primary colors (electric blue, cyan)
- Background gradients
- Typography

### Adding New Pages

1. Create new component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation in `client/src/components/navigation.tsx`

## Troubleshooting

### Port 5000 Already in Use

If you get an error about port 5000:

1. Find what's using the port:
   ```bash
   # On macOS/Linux
   lsof -i :5000
   
   # On Windows
   netstat -ano | findstr :5000
   ```

2. Kill the process or change the port in `server/index.ts`

### Dependencies Won't Install

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete node_modules and try again:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### TypeScript Errors

Run type checking to see detailed errors:
```bash
npm run type-check
```

Common fixes:
- Ensure all dependencies are installed
- Check import paths are correct
- Verify component props match interfaces

### Browser Won't Load

1. Check the terminal for errors
2. Try a different browser
3. Clear browser cache
4. Ensure firewall isn't blocking port 5000

## Editor Setup (VS Code)

Recommended VS Code extensions:
- **TypeScript**: Built-in
- **Tailwind CSS IntelliSense**: Autocomplete for CSS classes
- **ES7+ React/Redux/React-Native snippets**: Code snippets
- **Prettier**: Code formatting
- **Auto Rename Tag**: Automatically rename paired HTML tags

## Next Steps

After setup:
1. Explore the codebase
2. Make small changes to understand the structure
3. Customize content with your own information
4. Test all features thoroughly
5. Deploy when ready

## Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Check the terminal for server errors
3. Review this documentation
4. Search for similar issues online

## Performance Tips

- Keep the dev server running while coding
- Use browser dev tools to debug
- Test on different devices/browsers
- Optimize images before adding them

---

Happy coding! 🚀