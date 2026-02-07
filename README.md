# Search Pokemon - FM Tech

A modern, production-ready Next.js application for searching and exploring Pokemon data using GraphQL.

## 🚀 Live Demo

[View Deployment on Vercel](https://search-pokemon-fm-tech.vercel.app)

## ✨ Features

- **🔍 Pokemon Search**: Search Pokemon by name with real-time suggestions
- **📊 Comprehensive Data Display**: View detailed Pokemon information including:
  - Basic stats (height, weight, CP, HP)
  - Types, resistances, and weaknesses
  - Fast and special attacks
  - Evolution chains
- **🔄 Evolution Navigation**: Click on evolutions to instantly view their details
- **🎨 Modern UI**: Clean, responsive design with smooth animations
- **⚡ Performance Optimized**: 
  - Server-Side Rendering (SSR) for initial page loads
  - Apollo Client caching for instant subsequent searches
  - Code splitting and lazy loading
  - localStorage for search history
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **♿ Accessible**: ARIA labels and semantic HTML for better accessibility
- **🧪 Tested**: Comprehensive test suite with Jest

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (TypeScript)
- **GraphQL Client**: [Apollo Client](https://www.apollographql.com/docs/react/)
- **Styling**: CSS Modules
- **Testing**: Jest + React Testing Library
- **Data Source**: [Pokemon GraphQL API](https://graphql-pokemon2.vercel.app/)

## 📁 Project Structure

```
search-pokemon-fm-tech/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── SearchInput/     # Search input with autocomplete
│   │   ├── PokemonResult/   # Main Pokemon data display
│   │   ├── EvolutionList/   # Evolution cards
│   │   ├── PokemonNotFound/ # Not found state
│   │   └── LoadingSpinner/  # Loading state
│   ├── hooks/               # Custom React hooks
│   │   ├── usePokemon.ts    # Pokemon data fetching
│   │   ├── useQueryParam.ts # URL query management
│   │   └── useSearchHistory.ts # LocalStorage history
│   ├── lib/                 # Library configurations
│   │   └── apollo-client.ts # Apollo Client setup
│   ├── graphql/             # GraphQL queries
│   │   └── queries.ts       # Pokemon queries
│   ├── types/               # TypeScript type definitions
│   │   └── pokemon.ts       # Pokemon interfaces
│   ├── pages/               # Next.js pages
│   │   ├── _app.tsx         # App wrapper with Apollo Provider
│   │   ├── _document.tsx    # HTML document structure
│   │   └── index.tsx        # Home page with SSR
│   ├── styles/              # Global and module CSS
│   ├── __tests__/           # Test files
│   └── __mocks__/           # Test mocks
├── package.json
├── tsconfig.json
├── next.config.js
└── jest.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/search-pokemon-fm-tech.git
   cd search-pokemon-fm-tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Running Tests

```bash
npm test
# or
yarn test
```

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🎯 Key Features Implementation

### 1. Server-Side Rendering (SSR)
- Initial Pokemon data is fetched server-side using `getServerSideProps`
- Improves SEO and initial page load performance
- Reduces time to interactive

### 2. Apollo Client Caching
- Implements cache-first strategy for instant repeated searches
- Type policies for optimized cache normalization
- Background refetching for data freshness

### 3. URL Query Parameters
- Search state is synced with URL using custom `useQueryParam` hook
- Enables sharing of specific Pokemon results
- Browser back/forward navigation works seamlessly

### 4. Component Architecture
- Clear separation of concerns
- Reusable, composable components
- Each component has its own module CSS
- Proper TypeScript typing throughout

### 5. Custom Hooks
- `usePokemon`: Data fetching with loading/error states
- `useQueryParam`: URL state management
- `useSearchHistory`: localStorage persistence

### 6. Performance Optimizations
- React.memo for component memoization
- useCallback for function stability
- Lazy loading of images
- CSS animations with GPU acceleration

## 🧪 Testing

The project includes comprehensive tests for:

- **Pokemon Type Validation**: Tests for Bulbasaur (Grass), Charmander (Fire), Squirtle (Water)
- **Component Structure**: Validates Pokemon data structure
- **Evolution Chains**: Ensures evolution data is correct

Run tests with:
```bash
npm test
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

The application is optimized for Vercel's Edge Network and supports:
- Automatic HTTPS
- Global CDN
- Zero-config deployments

## 🎨 Design Decisions

### SSR over CSR
- Server-Side Rendering provides better SEO and faster initial loads
- Client-side navigation for subsequent interactions
- Hybrid approach: SSR for first load, CSR for evolution navigation

### Apollo Client
- Excellent caching capabilities reduce API calls
- Type-safe GraphQL queries
- Automatic loading/error state management

### CSS Modules
- Scoped styling prevents conflicts
- Co-located with components
- Type-safe class names

### Component Structure
- Each component is self-contained
- Clear props interfaces
- Separation of presentational and container logic

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is created as a technical test submission for Future Makers.

## 👨‍💻 Author

Created as part of the FM Full Stack Developer Test

## 🙏 Acknowledgments

- Pokemon data provided by [Pokemon GraphQL API](https://graphql-pokemon2.vercel.app/)
- Pokemon images from Pokemon Database
- Built with Next.js and Apollo Client
