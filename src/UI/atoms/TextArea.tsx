import clsx from 'clsx';
import { commonStyles } from '@molecules/Fields/FieldUtils';

type Props = {
    id: string,
    fieldProps: any,
    error?: string,
}

const TextArea = ({ id, fieldProps, error }: Props) => (
    <textarea
        {...fieldProps}
        id={id}
        rows={3}
        className={
            clsx(
                'resize-y max-h-80 min-h-40',
                commonStyles.basic,
                error
                    ? commonStyles.error
                    : commonStyles.noError,
            )
        }
    />
);

export default TextArea;
