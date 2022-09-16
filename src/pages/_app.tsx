import '../globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@organisms/Navbar';
import { useRouter } from 'next/router';
import paths from '@helpers/paths';

function MyApp({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter();
    return (
        <>
            {pathname.includes(paths.landing.index) && <Navbar />}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
