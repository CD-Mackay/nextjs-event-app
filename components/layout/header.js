import Link from 'next/link';
import classes from './header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <Link href="/events">All Events</Link>
        </ul>
      </nav>
    </header>
  )
};

export default Header;