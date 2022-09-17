import clsx from 'clsx';

type Props = {
    id?: string,
    label: string,
    className?: string
}

const Label = ({ id, label, className }: Props) => (
    <label
        htmlFor={id}
        className={clsx('text-sm text-primary-dark-blue', className)}
    >
        {label}
    </label>
);

export default Label;
