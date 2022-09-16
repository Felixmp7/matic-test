import MaxContainer from '@templates/layouts/MainLayout';
import type { NextPage } from 'next';
import LogicalExercises from 'src/logicalExercises';

const LogicTestPage: NextPage = () => (
    <MaxContainer headerTitle="Logic Test Page">
        <LogicalExercises />
    </MaxContainer>
);

export default LogicTestPage;
