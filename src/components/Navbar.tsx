import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import de from '../../dictionaries/de.json';
import ru from '../../dictionaries/ru.json';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link href={to} className="mx-4 text-gray-600 hover:text-gray-800" passHref>
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'de' ? de : ru;

  return (
    <nav className="flex items-center justify-between bg-gray-200 p-6 w-full border-b border-gray-400 shadow font-serif">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-gray-600 text-lg font-bold hover:text-gray-800" passHref>
              {t.logo}
            </Link>
          </div>
          <div className="hidden md:block flex-grow">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">{t.startseite}</NavLink>
              <NavLink to="/social-media">{t.sozialeNetzwerke}</NavLink>
              <NavLink to="/bund-junges-ostpreussen">{t.bjo}</NavLink>
              <NavLink to="/aktivitaeten">{t.aktivitaeten}</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
