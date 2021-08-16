import darkBg from '../Assets/Backgrounds/cloud-hero.jpg';

const Hero = () => {
    return(<div className={'hero-container flex flex-col mx-4 lg:mx-7 mb-24 h-3/4 lg:h-1/2 bg-no-repeat bg-right bg-cover items-center justify-end'} style={{backgroundImage: `url(${darkBg})`}}>
        <div className={'hero-overlay w-4/5 text-center text-white pb-16'}>
            <div className={'hero-heading font-md text-4xl lg:text-7xl mb-3 lg:leading-relaxed'}>Gain Perspective</div>
            <div className={'hero-heading font-md opacity-60'}>This is the text that would go here. It'll be cooler though.</div>
        </div>
    </div>)
}
export default Hero;