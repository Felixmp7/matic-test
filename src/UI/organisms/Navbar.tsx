import PrimaryButton from '@atoms/PrimaryButton';
import paths from '@helpers/paths';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import easyBankLogo from 'public/assets/logo/easybank-logo.svg';

type NavLink = {
    linkName: string,
    path: string,
}

const navLinks: NavLink[] = [
    { linkName: 'Home', path: paths.landing.index },
    { linkName: 'About', path: paths.landing.about },
    { linkName: 'Contact', path: paths.landing.contact },
    { linkName: 'Blog', path: paths.landing.blog },
    { linkName: 'Carrers', path: paths.landing.carrers },
];

const Navbar = () => {
    const { pathname } = useRouter();
    return (
        <header className="flex items-center justify-between h-20 landing-container">
            <Image
                src={easyBankLogo}
                width={141}
                height={22}
            />
            <nav className="space-x-[30px] h-full">
                {navLinks.map(({ linkName, path }) => {
                    const isActive = pathname === path;

                    return (
                        <Link key={linkName} href={path}>
                            <a className={
                                clsx(
                                    'h-full inline-flex flex-col justify-center relative',
                                    isActive ? 'text-[#2D314D]' : 'text-[#99989D]',
                                )
                            }
                            >
                                {linkName}
                                {isActive && (
                                    <div className="absolute inset-x-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary-green to-primary-cyan" />
                                )}
                            </a>
                        </Link>
                    );
                })}
            </nav>
            <PrimaryButton type="button" />
        </header>
    );
};

export default Navbar;
