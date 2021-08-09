import darkBg from '../Assets/Backgrounds/dark-bg.svg';

const Hero = () => {
    return(<div className={'hero-container flex flex-col mx-4 mb-32 h-3/4 bg-no-repeat bg-left-top bg-cover items-center justify-center'} style={{backgroundImage: `url(${darkBg})`}}>
        <div className={'hero-overlay w-4/5 text-center text-white'}>
            <div className={'hero-heading font-md text-4xl mb-3'}>Gain Perspective</div>
            <div className={'hero-heading font-md opacity-60'}>This is the text that would go here. It'll be cooler though.</div>
        </div>
    </div>)
}
export default Hero;