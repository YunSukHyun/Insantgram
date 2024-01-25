'use client';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import ColorButton from './ColorButton';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const menu = [
  { href: '/', icon: <HomeIcon />, clickIcon: <HomeFillIcon /> },
  { href: '/search', icon: <SearchIcon />, clickIcon: <SearchFillIcon /> },
  { href: '/new', icon: <NewIcon />, clickIcon: <NewFillIcon /> },
];
const Navbar = () => {
  const pathName = usePathname();
  const { data: session } = useSession();

  return (
    <div className='flex justify-between items-center px-4'>
      <Link href={'/'}>
        <h1 className='text-3xl font-bold'>Instantgram</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickIcon : item.icon}
              </Link>
            </li>
          ))}
          <ColorButton
            text={`Sign ${session ? 'out' : 'in'}`}
            onClick={() => (session ? signOut() : signIn())}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
