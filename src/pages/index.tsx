import paths from '@helpers/paths';
import MaxContainer from '@templates/layouts/MainLayout';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/assets/logo/gray.png';

const Home: NextPage = () => (
    <MaxContainer
        headerTitle="Home"
        className="grid place-items-center bg-gradient-to-br from-slate-100 to-slate-300 h-screen w-full"
    >
        <div className=" text-center">
            <Image
                src={logo}
                width={100}
                height={100}
            />
            <div className="mt-4">
                <Link href={paths.logicExercises}>
                    <a className="hover:underline hover:text-blue-700 mr-10">
                        Ejercicios de lógica
                    </a>
                </Link>
                <Link href={paths.logicExercises}>
                    <a className="hover:underline hover:text-green-700">
                        Landing Page
                    </a>
                </Link>
            </div>
        </div>
    </MaxContainer>
);

export default Home;
