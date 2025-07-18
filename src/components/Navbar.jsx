import './Navbar.css';
import headerImage from '../assets/icons/header.png'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={headerImage} alt="Imperial Grand Hotel" className="header-image" />
    </nav>
  );
}
