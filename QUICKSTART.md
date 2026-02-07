# 🚀 Quick Start Guide

Get your Pokemon Search application running in 3 minutes!

## ⚡ Quick Commands

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser to http://localhost:3000
```

## 🧪 Run Tests

```bash
npm test
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 What to Try First

1. **Search for Pokemon**: Try "Pikachu", "Charizard", or "Mewtwo"
2. **View Details**: See attacks, stats, and evolution chains
3. **Click Evolutions**: Click on any evolution to view its details
4. **Check URL**: Notice how the URL updates with ?search= parameter
5. **Search History**: Type in the search box to see previous searches

## 📱 Test on Mobile

```bash
# Get your local IP
ipconfig  # On Windows
ifconfig  # On Mac/Linux

# Access from your phone
http://YOUR_IP:3000
```

## 🔧 Troubleshooting

### Port 3000 is already in use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### TypeScript errors

```bash
# Check all type errors
npx tsc --noEmit
```

## 📚 Project Features

### ✅ Implemented Requirements

- ✅ Search Pokemon by name
- ✅ URL query parameter sync
- ✅ Display all Pokemon information
- ✅ Show attacks (fast & special)
- ✅ Display evolutions
- ✅ Clickable evolutions with URL update
- ✅ "Not found" state
- ✅ Server-Side Rendering (SSR)
- ✅ Apollo Client with caching
- ✅ Tests for Bulbasaur, Charmander, Squirtle
- ✅ Clean component separation
- ✅ Custom hooks for state management
- ✅ localStorage for search history
- ✅ Responsive design

### 🎨 UI Features

- **Search Input**: Autocomplete from search history
- **Pokemon Card**: Beautiful display with image and stats
- **Type Tags**: Color-coded Pokemon types
- **Attack Cards**: Organized fast/special attacks
- **Evolution Grid**: Clickable evolution cards
- **Loading States**: Smooth loading spinners
- **Error Handling**: Clear error messages
- **Responsive**: Works on all screen sizes

### ⚡ Performance Features

- **SSR**: Initial page loads server-side
- **Caching**: Apollo Client caches all queries
- **Memoization**: React.memo on all components
- **Lazy Loading**: Images load on demand
- **Code Splitting**: Automatic by Next.js
- **Optimized CSS**: Module CSS with scoped styles

## 🗂️ Key Files to Review

### Components
- `src/components/SearchInput/` - Search with autocomplete
- `src/components/PokemonResult/` - Main Pokemon display
- `src/components/EvolutionList/` - Evolution cards

### Hooks
- `src/hooks/usePokemon.ts` - Data fetching
- `src/hooks/useQueryParam.ts` - URL management
- `src/hooks/useSearchHistory.ts` - localStorage

### Pages
- `src/pages/index.tsx` - Home page with SSR
- `src/pages/_app.tsx` - Apollo Provider setup

### GraphQL
- `src/lib/apollo-client.ts` - Apollo configuration
- `src/graphql/queries.ts` - GraphQL queries

### Testing
- `src/__tests__/pokemon.test.ts` - Pokemon type tests
- `src/__mocks__/pokemon.ts` - Test mocks

## 🎓 Code Highlights

### Server-Side Rendering
```typescript
// pages/index.tsx
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch Pokemon data server-side
  const apolloClient = createApolloClient();
  const { data } = await apolloClient.query({
    query: GET_POKEMON_BY_NAME,
    variables: { name: searchTerm },
  });
  return { props: { initialPokemon: data.pokemon } };
};
```

### Custom Hook with URL Sync
```typescript
// hooks/useQueryParam.ts
export const useQueryParam = (key: string) => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  
  const updateQueryParam = (newValue: string) => {
    router.push({ query: { [key]: newValue } }, undefined, { shallow: true });
  };
  
  return [value, updateQueryParam] as const;
};
```

### Apollo Client Caching
```typescript
// lib/apollo-client.ts
export const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: { /* cache configuration */ }
    }),
    defaultOptions: {
      query: { fetchPolicy: 'cache-first' }
    }
  });
};
```

## 📊 Test Coverage

```bash
# Run tests with coverage
npm test -- --coverage

# Expected results:
✓ Bulbasaur has Grass type
✓ Charmander has Fire type
✓ Squirtle has Water type
✓ All Pokemon have required properties
✓ All Pokemon have attack structures
```

## 🚀 Next Steps

1. **Install dependencies**: `npm install`
2. **Run dev server**: `npm run dev`
3. **Test the app**: Try searching for Pokemon
4. **Run tests**: `npm test`
5. **Build for production**: `npm run build`
6. **Deploy to Vercel**: See DEPLOYMENT.md

## 📞 Support

- **Next.js Docs**: https://nextjs.org/docs
- **Apollo Client**: https://www.apollographql.com/docs/react/
- **Pokemon API**: https://graphql-pokemon2.vercel.app/

---

**Ready to start?** Run `npm install` followed by `npm run dev`! 🎉