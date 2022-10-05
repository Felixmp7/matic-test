import Image from 'next/image';
import easyBankLogo from 'public/assets/logo/easybank-logo-white.svg';
import SocialMediaLink from '@atoms/SocialMediaLink';
import PrimaryButton from '@atoms/Buttons/PrimaryButton';
import Link from 'next/link';
import { socialLinks, footerLinks } from './helpers';

const Footer = () => (
    <footer className="w-full mobileXl:h-[190px] bg-primary-dark-blue py-14">
        <div className="flex flex-col items-center h-full mobileXl:justify-between mobileXl:flex-row mobileXl:items-start landing-container">
            <div className="grid mobileXl:grid-cols-2 gap-x-20 text-[14px] leading-[18px]">
                <div className="relative w-full h-full text-center mobileXl:text-start">
                    <Image
                        src={easyBankLogo}
                        width={138.76}
                        height={19.7}
                    />
                    <div className="my-6 space-x-3 leading-none mobileXl:my-0 mobileXl:absolute mobileXl:bottom-0">
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
            <div className="mt-6 text-center mobileXl:mt-0 mobileXl:pl-4 mobileXl:text-right">
                <PrimaryButton isActive />
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
