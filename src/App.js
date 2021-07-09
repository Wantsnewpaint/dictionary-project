import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary Word Search</header>
        <main>
          <Dictionary defaultKeyword="travel" />
        </main>
        <footer className="App-footer"><small><a href="https://github.com/Wantsnewpaint/dictionary-project" target="_blank" rel="noreferrer">Open-source</a> code by Bridget Young</small></footer>
      </div>
    </div>
  );
}