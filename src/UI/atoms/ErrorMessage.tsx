type ErrorMessageProps = {
    errorMessage: string;
}

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => (
    <span className="block w-full px-4 pt-2 text-sm text-red-400">{errorMessage}</span>
);

export default ErrorMessage;
