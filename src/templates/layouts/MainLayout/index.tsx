import { ReactNode } from 'react';
import PageHead from '@atoms/PageHead';

type Props = {
    children: ReactNode | ReactNode[],
    className?: string,
    headerTitle: string,
}

const MaxContainer = ({ children, headerTitle, className }: Props) => (
    <div className="container">
        <PageHead title={headerTitle} />
        <main className={className}>{children}</main>
    </div>
);

export default MaxContainer;
