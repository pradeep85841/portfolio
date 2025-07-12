// Windows-compatible development script
process.env.NODE_ENV = 'development';

// Import and run the server
import('./server/index.ts').then((module) => {
  console.log('Development server starting...');
}).catch((error) => {
  console.error('Failed to start development server:', error);
  process.exit(1);
});