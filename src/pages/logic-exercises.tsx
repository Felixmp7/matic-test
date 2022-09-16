import Layout from '@templates/layouts/Layout';
import type { NextPage } from 'next';
import LogicalExercises from 'src/logicalExercises';

const LogicTestPage: NextPage = () => (
    <Layout headerTitle="Logic Test Page">
        <LogicalExercises />
    </Layout>
);

export default LogicTestPage;
