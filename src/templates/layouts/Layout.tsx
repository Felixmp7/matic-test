import { ReactNode } from 'react';
import PageHead from '@atoms/PageHead';

type Props = {
    children: ReactNode | ReactNode[],
    className?: string,
    headerTitle: string,
}

const Layout = ({ children, headerTitle, className }: Props) => (
    <div className="max-container">
        <PageHead title={headerTitle} />
        <main className={className}>{children}</main>
    </div>
);

export default Layout;
