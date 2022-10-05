import Image from 'next/image';
import phonesFrame from 'public/assets/backgrounds/frames/phones-frame.svg';
import mainFrame from 'public/assets/backgrounds/frames/main-section-frame.svg';

const HeroFrames = () => (
    <>
        <div className="absolute top-0 hidden laptopLg:block -right-10">
            <Image
                src={mainFrame}
                alt="main frame"
                width={1100.96}
                height={680}
            />
        </div>
        <div className="absolute top-0 hidden laptop:block -right-16">
            <Image
                src={phonesFrame}
                alt="phones frame"
                width={767}
                height={818}
            />
        </div>
    </>
);

export default HeroFrames;
