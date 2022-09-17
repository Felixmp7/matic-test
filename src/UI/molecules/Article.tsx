import Image from 'next/image';
import { Article } from '@services/api/clients/public/interfaces';

const ArticleItem = ({
    imageUrl,
    author,
    content,
    title,
}:Article) => (
    <article className="overflow-hidden bg-white rounded-lg">
        <header className="relative w-full h-40">
            <Image
                src={imageUrl}
                alt={`${title} image`}
                layout="fill"
            />
        </header>
        <div className="p-[26px] text-primary-gray -tracking-[0.02em]">
            <span className="text-[10px] leading-[18px]">{`By ${author}`}</span>
            <h3 className="mt-1.5 mb-1 leading-[22px] text-primary-dark-blue">{title}</h3>
            <p className="text-[13px] leading-[18px] line-clamp-4">{content}</p>
        </div>
    </article>
);

export default ArticleItem;
