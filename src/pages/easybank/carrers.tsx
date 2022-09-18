import Footer from '@organisms/Footer';
import WhyChooseSection from '@templates/WhyChooseSection';
import HeroSection from '@templates/HeroSection';
import Layout from '@templates/layouts/Layout';
import type { NextPage } from 'next';
import ArticleSection from '@templates/LatestArticles';

const EasyBankCarrersPage: NextPage = () => (
    <Layout headerTitle="EasyBank | Carrers" className="overflow-hidden">
        <HeroSection />
        <WhyChooseSection />
        <ArticleSection />
        <Footer />
    </Layout>
);

export default EasyBankCarrersPage;
