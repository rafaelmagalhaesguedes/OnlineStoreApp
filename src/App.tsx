import { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <main className="search-container">

        <form className="search-form">
          <input
            className="search-input"
            type="text"
            name="search"
            value={ search }
            onChange={ handleChange }
          />
        </form>

        <div className="search-result">
          {search ? (
            <h2>Resultado</h2>
          ) : (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
        </div>

      </main>
    </div>
  );
}

export default App;
