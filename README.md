# Devtify Infinity Scroll

A modern React + Vite implementation of infinite scrolling functionality with automatic pagination. This project demonstrates best practices for lazy-loading content as users scroll through a feed or list, similar to social media platforms like Twitter, Instagram, and Facebook.

## Features

- **Infinite Scroll Implementation**: Automatically loads new content as users scroll to the bottom of the page
- **Fast Development**: Built with Vite for rapid hot module replacement (HMR) during development
- **React 18+**: Modern React with hooks support
- **ESLint Integration**: Pre-configured linting rules for code quality
- **TypeScript Ready**: Full TypeScript support for type safety
- **Production Optimized**: Lean build configuration focused on performance

## Prerequisites

- Node.js v16 or higher
- npm v7 or higher (or yarn/pnpm as alternatives)

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/hyu-uit/devtify-infinity-scroll.git
   cd devtify-infinity-scroll
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (if needed)
   - Create a `.env.local` file in the root directory if API endpoints or configuration options are required
   - Refer to `.env.example` for available configuration options

## Running the Project

### Development Server

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The compiled files will be output to the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Lint Code

Check code quality with ESLint:

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint --fix
```

## Project Structure

```
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page-level components
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # CSS/SCSS files
│   ├── App.tsx             # Main App component
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.js        # ESLint configuration
└── package.json            # Project dependencies
```

## Key Decisions & Trade-offs

### Technology Stack

**Vite over Create React App**: Vite provides significantly faster build times and HMR compared to traditional bundlers. The trade-off is a smaller ecosystem, though this is rapidly expanding.

**TypeScript**: Included for type safety and better developer experience. While it adds a compilation step, the benefits in catching errors early outweigh the minor development overhead.

### Performance Considerations

**Lazy Loading**: The infinite scroll implementation uses lazy loading to avoid loading all content at once. This keeps memory usage low but requires careful management of scroll events to prevent excessive API calls.

**Pagination Strategy**: Content is loaded in pages/batches rather than individual items. This reduces API request overhead and network traffic, though it means users must wait for a batch to load rather than items appearing instantly.

### Architecture Choices

**No State Management Library**: The implementation uses React hooks and local state management. This keeps the project lightweight for small to medium-scale applications. For larger projects requiring complex state synchronization, adding Redux or Zustand may be beneficial.

**Event Listener Throttling**: Scroll events are throttled to prevent performance degradation. The trade-off is a slight delay in detecting when the user has scrolled near the bottom, but the performance improvement justifies this.

### Development Experience

**ESLint Configuration**: Pre-configured with sensible defaults but intentionally lightweight. As the project grows, consider enabling type-aware linting rules mentioned in the configuration for stricter type checking.

**React Compiler Disabled**: Not enabled by default due to potential impact on build times. Enable it in production only if performance metrics justify the trade-off.

## Troubleshooting

**Issue**: Port 5173 is already in use
- **Solution**: Run `npm run dev -- --port 3000` to use a different port

**Issue**: Build fails with TypeScript errors
- **Solution**: Check `tsconfig.json` configuration and ensure all imports are properly typed

**Issue**: ESLint warnings in IDE
- **Solution**: Ensure ESLint extension is installed and pointing to the correct config file

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [ESLint Configuration Guide](https://eslint.org/docs/latest/use/configure/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
