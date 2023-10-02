import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img
          src="https://oceanbrasil.com/assets/logo.svg"
          alt="Logo do Ocean"
        />
      </a>

      <nav>
        <a href="/">Home</a>

        <a href="/criar-personagem">Criar personagem</a>
      </nav>
    </header>
  );
}
