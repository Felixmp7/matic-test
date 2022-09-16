import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
    className?:string,
    children: ReactNode
}

const SectionLayout = ({ children, className }: Props) => (
    <section className={clsx('py-24', className)}>
        <div className="landing-container">
            {children}
        </div>
    </section>
);

export default SectionLayout;
