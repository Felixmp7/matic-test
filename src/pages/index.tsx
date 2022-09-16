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
        <div className="text-center ">
            <Image
                src={logo}
                width={100}
                height={100}
            />
            <div className="mt-4">
                <Link href={paths.logicExercises}>
                    <a className="mr-10 hover:underline hover:text-blue-700">
                        Ejercicios de lógica
                    </a>
                </Link>
                <Link href={paths.landing.index}>
                    <a className="hover:underline hover:text-green-700">
                        Landing Page
                    </a>
                </Link>
            </div>
        </div>
    </Layout>
);

export default Home;
