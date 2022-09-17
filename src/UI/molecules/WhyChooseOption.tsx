import Image from 'next/image';
import { ChooseOption } from '@templates/WhyChooseSection';

const WhyChooseOption = ({ imageSrc, title, description }: ChooseOption) => (
    <div>
        <Image
            src={imageSrc}
            width={72}
            height={72}
        />

        <h3 className="mt-6 mb-2 text-[23px] leading-[62px] text-primary-dark-blue">{title}</h3>
        <p className="leading-[26px] text-primary-gray -tracking-[0.04em]">{description}</p>
    </div>
);

export default WhyChooseOption;
