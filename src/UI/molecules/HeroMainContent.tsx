import HeroDescription from '@atoms/HeroDescription';
import HeroTitle from '@atoms/HeroTitle';
import PrimaryButton from '@atoms/PrimaryButton';

const HeroMainContent = () => (
    <div className="inline-block">
        <HeroTitle />
        <HeroDescription />
        <PrimaryButton />
    </div>
);

export default HeroMainContent;
