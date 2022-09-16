import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export type SocialLink = {
    imageSrc: StaticImageData,
    href: string,
    alt: string,
}

const SocialMediaLink = ({ imageSrc, href, alt }: SocialLink) => (
    <Link href={href}>
        <a>
            <Image
                src={imageSrc}
                alt={alt}
                width={20}
                height={20}
            />
        </a>
    </Link>
);

export default SocialMediaLink;
