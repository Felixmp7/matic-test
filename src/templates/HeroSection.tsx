import SectionLayout from '@templates/layouts/SectionLayout';
import HeroFrames from '@molecules/HeroFrames';
import HeroMainContent from '@molecules/HeroMainContent';

const HeroSection = () => (
    <SectionLayout
        sectionClassName="bg-white h-[655px] relative"
        landingContainerClassName="h-full flex items-center"
    >
        <HeroMainContent />
        <HeroFrames />
    </SectionLayout>
);

export default HeroSection;
