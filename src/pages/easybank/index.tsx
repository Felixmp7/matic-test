import WhyChoose from '@organisms/WhyChoose';
import Layout from '@templates/layouts/Layout';
import type { NextPage } from 'next';

const EasyBankHomePage: NextPage = () => (
    <Layout headerTitle="EasyBank">
        <WhyChoose />
    </Layout>
);

export default EasyBankHomePage;
