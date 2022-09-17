import Footer from '@organisms/Footer';
import WhyChoose from '@organisms/WhyChoose';
import HeroSection from '@templates/HeroSection';
import Layout from '@templates/layouts/Layout';
import type { NextPage } from 'next';

const EasyBankHomePage: NextPage = () => (
    <Layout headerTitle="EasyBank" className="overflow-hidden">
        <HeroSection />
        <WhyChoose />
        <Footer />
    </Layout>
);

export default EasyBankHomePage;
