import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
  return (
    <header className="footer">
      <Link to="/contacts" className="footer__link">
        Contacts
      </Link>
    </header>
  );
}
