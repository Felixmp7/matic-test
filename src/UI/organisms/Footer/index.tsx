import Image from 'next/image';
import easyBankLogo from 'public/assets/logo/easybank-logo-white.svg';
import SocialMediaLink from '@atoms/SocialMediaLink';
import PrimaryButton from '@atoms/PrimaryButton';
import Link from 'next/link';
import { socialLinks, footerLinks } from './helpers';

const Footer = () => (
    <footer className="w-full h-[190px] bg-primary-dark-blue py-14">
        <div className="flex items-start justify-between h-full landing-container">
            <div className="grid grid-cols-2 gap-x-20 text-[14px] leading-[18px]">
                <div className="relative w-full h-full">
                    <Image
                        src={easyBankLogo}
                        width={138.76}
                        height={19.7}
                    />
                    <div className="absolute bottom-0 space-x-3 leading-none">
                        {socialLinks.map((link) => (
                            <SocialMediaLink key={link.href} {...link} />
                        ))}
                    </div>
                </div>
                <ul className="relative inline-grid h-full grid-cols-2 text-white gap-x-10 gap-y-5">
                    {footerLinks.map(({ path, linkName }, index) => (
                        <li key={index}>
                            <Link href={path}>
                                <a>{linkName}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pl-4 text-right">
                <PrimaryButton />
                <span
                    className="block text-white mt-7 -tracking-[0.01em]"
                >
                    © Easybank. All Rights Reserved
                </span>
            </div>
        </div>
    </footer>
);

export default Footer;
