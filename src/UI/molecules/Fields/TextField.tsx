import ErrorMessage from '@atoms/ErrorMessage';
import Input from '@atoms/Input';
import Label from '@atoms/Label';

type Props = {
    placeholder?: string,
    label: string,
    id: string,
    fieldProps: any,
    errorMessage?: string,
    containerClasses?: string,
}

const TextField = ({
    fieldProps,
    id,
    label,
    placeholder,
    errorMessage,
    containerClasses,
}: Props) => (
    <div className={`${containerClasses || ''} w-full`}>
        <div className="relative">
            <Label id={id} label={label} />
            <Input
                id={id}
                fieldProps={fieldProps}
                error={errorMessage}
                placeholder={placeholder}
            />
        </div>
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
);

export default TextField;
