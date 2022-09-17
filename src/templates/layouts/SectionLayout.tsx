import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
    sectionClassName?:string,
    landingContainerClassName?:string,
    children: ReactNode
}

const SectionLayout = ({ children, landingContainerClassName, sectionClassName }: Props) => (
    <section className={clsx('py-24', sectionClassName)}>
        <div className={clsx('landing-container', landingContainerClassName)}>
            {children}
        </div>
    </section>
);

export default SectionLayout;
