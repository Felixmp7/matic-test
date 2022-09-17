import ErrorMessage from '@atoms/ErrorMessage';
import Label from '@atoms/Label';
import clsx from 'clsx';
import { inputStyles } from './FieldUtils';

type Props = {
    id: string,
    label: string,
    fieldProps: any,
    errorMessage?: string,
    containerClasses?: string,
    length?: number,
    maxLength?: number,
}

const TextAreaField = ({
    id,
    fieldProps,
    maxLength,
    label,
    errorMessage,
    containerClasses,
}: Props) => (
    <div className={`${containerClasses || ''} w-full`}>
        <div className="relative leading-none">
            <Label id={id} label={label} />
            <textarea
                {...fieldProps}
                id={id}
                maxLength={maxLength}
                rows={3}
                className={
                    clsx(
                        'resize-y max-h-80 min-h-40',
                        inputStyles.basic,
                        errorMessage
                            ? inputStyles.error
                            : inputStyles.noError,
                    )
                }
            />
        </div>
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
);

export default TextAreaField;
