import Footer from '@organisms/Footer';
import WhyChooseSection from '@templates/WhyChooseSection';
import HeroSection from '@templates/HeroSection';
import Layout from '@templates/layouts/Layout';
import type { NextPage } from 'next';
import ArticleSection from '@templates/LatestArticles';

const EasyBankContactPage: NextPage = () => (
    <Layout headerTitle="EasyBank | Contact" className="overflow-hidden">
        <HeroSection />
        <WhyChooseSection />
        <ArticleSection />
        <Footer />
    </Layout>
);

export default EasyBankContactPage;
