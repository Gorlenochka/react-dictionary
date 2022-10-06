import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        Don't worry, be happy... and translate new words 😘
      </header>
      <main className="App-main">
        <Dictionary />
      </main>
      <footer className="App-footer">
        Created with love by{" "}
        <a href="https://eclectic-kringle-cd3e49.netlify.app/" target="blank">
          Olena Gorlenko
        </a>
      </footer>
    </div>
  );
}
