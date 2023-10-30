import { Link, NavLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import './Header.scss';

export const Header = () => {
  const tickersCount = useAppSelector(state => state.ticker.items.length);

  const getLinkClass = ({ isActive }: { isActive: boolean }) => isActive
    ? 'nav-link active'
    : 'nav-link';

  return (
    <header className="header">
      <div>
        <Link to="/">
          <img
            src="https://us.123rf.com/450wm/aquir/aquir2009/aquir200928373/155881848-finance-sign-rounded-isolated-sticker-white-button.jpg?ver=6"
            className="main-icon"
            alt=""
          />
        </Link>
      </div>

      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className={getLinkClass}>
            Finance
          </NavLink>
        </li>

        <li className="nav-item fav-container">
          <NavLink to="/favorites" className={getLinkClass}>
            Favorites
          </NavLink>
          {!!tickersCount && (
            <Link to="favorites">
              <div className="mini-count">
                {tickersCount <= 9 ? tickersCount : '9+'}
              </div>
            </Link>
          )}
        </li>

        <li className="nav-item">
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/contacts" className={getLinkClass}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </header>
  );
}