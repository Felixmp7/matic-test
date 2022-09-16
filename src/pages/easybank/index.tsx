import Footer from '@organisms/Footer';
import WhyChoose from '@organisms/WhyChoose';
import Layout from '@templates/layouts/Layout';
import type { NextPage } from 'next';

const EasyBankHomePage: NextPage = () => (
    <Layout headerTitle="EasyBank">
        <WhyChoose />
        <Footer />
    </Layout>
);

export default EasyBankHomePage;
