import facebookIcon from 'public/assets/icons/facebook.svg';
import twitterIcon from 'public/assets/icons/twitter.svg';
import pinterestIcon from 'public/assets/icons/pinterest.svg';
import instagramIcon from 'public/assets/icons/instagram.svg';
import youtubeIcon from 'public/assets/icons/youtube.svg';
import { SocialLink } from '@atoms/SocialMediaLink';
import paths from '@helpers/paths';

export const socialLinks: SocialLink[] = [
    { imageSrc: facebookIcon, href: 'https://es-la.facebook.com/', alt: 'facebook icon' },
    { imageSrc: youtubeIcon, href: 'https://www.youtube.com/', alt: 'youtube icon' },
    { imageSrc: twitterIcon, href: 'https://twitter.com/?lang=es', alt: 'twitter icon' },
    { imageSrc: pinterestIcon, href: 'https://www.pinterest.es/', alt: 'pinterest icon' },
    { imageSrc: instagramIcon, href: 'https://www.instagram.com/', alt: 'instagram icon' },
];

type FooterLink = {
    linkName: string,
    path: string,
}

export const footerLinks: FooterLink[] = [
    { linkName: 'About Us', path: paths.landing.about },
    { linkName: 'Contact', path: paths.landing.contact },
    { linkName: 'Blog', path: paths.landing.blog },
    { linkName: 'Carrers', path: paths.landing.carrers },
    { linkName: 'Support', path: paths.landing.index },
    { linkName: 'Privacy Policy', path: paths.landing.index },
];
