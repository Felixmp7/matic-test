import SectionTitle from '@atoms/SectionTitle';
import SectionLayout from '@templates/layouts/SectionLayout';
import { StaticImageData } from 'next/image';
import onlineBankingIcon from 'public/assets/icons/online-banking.svg';
import simpleBudgetingIcon from 'public/assets/icons/simple-budgeting.svg';
import fastOnboardingIcon from 'public/assets/icons/fast-onboarding.svg';
import openAPIcon from 'public/assets/icons/openapi.svg';
import WhyChooseOption from '@molecules/WhyChooseOption';

export type ChooseOption = {
    imageSrc: StaticImageData,
    title: string,
    description: string,
}

const options: ChooseOption[] = [
    {
        imageSrc: onlineBankingIcon,
        title: 'Online Banking',
        description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    },
    {
        imageSrc: simpleBudgetingIcon,
        title: 'Simple Budgeting',
        description: 'See exactly where your money goes each month. Receive notifications when you\'re close to hitting your limits.',
    },
    {
        imageSrc: fastOnboardingIcon,
        title: 'Fast Onboading',
        description: 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.',
    },
    {
        imageSrc: openAPIcon,
        title: 'Open API',
        description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    },
];

const WhyChoose = () => (
    <SectionLayout className="bg-[#F4F5F7]">
        <SectionTitle title="Why choose Easybank?" />
        <p className="text-[17px] leading-[25px] text-primary-gray font-light mt-5">
            We leverage Open Banking to turn your bank acount into your financial hub.
            <br />
            {' '}
            Control your finances like never before.
        </p>

        <div className="grid w-full grid-cols-4 gap-[39px] mt-[82px]">
            {options.map((option, index) => (
                <WhyChooseOption key={index} {...option} />
            ))}
        </div>
    </SectionLayout>
);

export default WhyChoose;
