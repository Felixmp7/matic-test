import clsx from 'clsx';
import { commonStyles } from '@molecules/Fields/FieldUtils';

type Props = {
    id: string,
    fieldProps: any,
    placeholder?: string,
    error?: string,
}

const Input = ({
    fieldProps,
    id,
    placeholder,
    error,
}: Props) => (
    <input
        {...fieldProps}
        id={id}
        type="text"
        className={
            clsx(
                'h-12',
                commonStyles.basic,
                error ? commonStyles.error : commonStyles.noError,
            )
        }
        placeholder={placeholder}
    />
);

export default Input;
