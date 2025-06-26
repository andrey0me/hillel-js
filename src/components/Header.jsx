import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <nav className="navbar navbar-expand bg-primary p-3">
      <div className="container d-flex align-items-center">
        <div className="navbar-nav flex-row">
          <Link to="/" className="nav-link text-white me-3">Головна</Link>
          <Link to="/contacts" className="nav-link text-white me-3">Контакти</Link>
          <Link to="/about" className="nav-link text-white">Про мене</Link>
        </div>
        <div className="ms-auto">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}