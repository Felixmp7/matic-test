import HeroDescription from '@atoms/HeroDescription';
import HeroTitle from '@atoms/HeroTitle';
import PrimaryButton from '@atoms/Buttons/PrimaryButton';

const HeroMainContent = () => (
    <div className="inline-block">
        <HeroTitle />
        <HeroDescription />
        <PrimaryButton isActive />
    </div>
);

export default HeroMainContent;
