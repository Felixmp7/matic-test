type Props = {
    title: string
}

const SectionTitle = ({ title }: Props) => (
    <h2 className="text-primary-dark-blue text-[40px] leading-[62px] -tracking-[0.02em]">{title}</h2>
);

export default SectionTitle;
