import { inputStyles } from '@molecules/Fields/FieldUtils';
import clsx from 'clsx';

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
                inputStyles.basic,
                error ? inputStyles.error : inputStyles.noError,
            )
        }
        placeholder={placeholder}
    />
);

export default Input;
