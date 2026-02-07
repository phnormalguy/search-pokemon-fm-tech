import { PokemonCacheItem } from './types/pokemon';
import { PokemonDropdown } from './components/PokemonDropdown';

function App() {
  const handlePokemonSelect = (pokemon: PokemonCacheItem) => {
    console.log('Selected Pokemon:', pokemon);
    // ทำอะไรกับ pokemon ที่เลือก เช่น fetch รายละเอียดเพิ่มเติม
  };

  return (
    <div className="App">
      <h1>Search Pokemon</h1>
      
      <PokemonDropdown 
        onSelect={handlePokemonSelect} 
        placeholder="ค้นหาโปเกมอน..."
      />
      
      <div>
        <h2>Search Results</h2>
        <p>Search for Pokemon...</p>
      </div>
    </div>
  );
}

export default App; 