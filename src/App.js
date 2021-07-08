import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">WantsNewPaint WebDesign</header>
        <main>
          <Dictionary defaultKeyword="nothing" />
        </main>
        <footer className="App-footer"><small><a href="https://github.com/Wantsnewpaint/dictionary-project" target="_blank" rel="noreferrer">Open-source</a> code by Bridget Young</small></footer>
      </div>
    </div>
  );
}