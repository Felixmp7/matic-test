import paths from '@helpers/paths';
import Layout from '@templates/layouts/Layout';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/assets/logo/gray.png';

const Home: NextPage = () => (
    <Layout
        headerTitle="Home"
        className="grid w-full h-screen place-items-center bg-gradient-to-br from-slate-100 to-slate-300"
    >
        <div className="text-center">
            <Image
                src={logo}
                alt="Felix logo"
                width={100}
                height={100}
            />
            <span className="block text-xl font-light text-slate-700">Felix Pacheco | React Developer</span>
            <div className="mt-10">
                <Link href={paths.logicExercises}>
                    <a className="inline-block px-5 py-10 mr-10 text-blue-400 bg-blue-200 rounded shadow w-52 hover:bg-blue-300 hover:text-blue-100">
                        Ejercicios de lógica
                    </a>
                </Link>
                <Link href={paths.landing.index}>
                    <a className="inline-block px-5 py-10 text-green-400 bg-green-200 rounded shadow w-52 hover:bg-green-300 hover:text-green-100">
                        Landing Page
                    </a>
                </Link>
            </div>
        </div>
    </Layout>
);

export default Home;
