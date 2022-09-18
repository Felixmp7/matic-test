import ErrorMessage from '@atoms/ErrorMessage';
import Label from '@atoms/Label';
import TextArea from '@atoms/TextArea';

type Props = {
    id: string,
    label: string,
    fieldProps: any,
    errorMessage?: string,
    containerClasses?: string,
}

const TextAreaField = ({
    id,
    fieldProps,
    label,
    errorMessage,
    containerClasses,
}: Props) => (
    <div className={`${containerClasses || ''} w-full`}>
        <div className="relative leading-none">
            <Label id={id} label={label} />
            <TextArea
                id={id}
                fieldProps={fieldProps}
                error={errorMessage}
            />
        </div>
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
);

export default TextAreaField;
