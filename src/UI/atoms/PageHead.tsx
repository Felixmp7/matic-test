import Head from 'next/head';

type Props = {
    title: string;
    config?: {
        keywords?: string,
        description?: string,
        ogTitle?:string,
        ogDescription?: string,
        ogImage?: string,
        ogLocale?: string,
    }
}

const PageHead = ({ title, config }: Props) => (
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        {config?.description && (
            <meta
                name="description"
                content={config?.description}
            />
        )}
        {config?.description && (
            <meta
                name="keywords"
                content={config?.keywords}
            />
        )}
        {config?.description && (
            <meta
                property="og:title"
                content={config?.ogTitle}
            />
        )}
        {config?.description && (
            <meta
                property="og:description"
                content={config?.ogDescription}
            />
        )}
        {config?.description && (
            <meta property="og:type" content="website" />
        )}
        {config?.description && (
            <meta
                property="og:image"
                content={config?.ogImage}
            />
        )}
        {config?.description && (
            <meta property="og:locale" content={config?.ogLocale} />
        )}
    </Head>
);

export default PageHead;
