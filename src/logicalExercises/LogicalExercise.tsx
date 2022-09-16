import { ReactNode } from 'react';

type Props = {
    title: string,
    description: string,
    children: ReactNode
}

const LogicExercise = ({ title, description, children }: Props) => (
    <div className="p-2">
        <h3 className="text-xl">{title}</h3>
        <p className="text-sm text-slate-600 italic mb-8">{description}</p>
        {children}
    </div>
);

export default LogicExercise;
