import React from 'react';
import './App.css';
import AccountsPage from './components/AccountsPage';

function App() {
  return (
    <article className="grid">
      <header className="grid">
        <div className="title-container">
          <h1>Coding Test</h1>
        </div>
      </header>
      <AccountsPage />
      <footer className="grid">
        <p className="copy">&copy;<script>document.write(new Date().getFullYear())</script></p>
      </footer>
    </article>
  );
}

export default App;
