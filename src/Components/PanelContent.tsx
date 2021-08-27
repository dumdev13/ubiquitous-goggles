import darkBg from '../Assets/Backgrounds/dark-bg.svg';
import checkIcon from '../Assets/Backgrounds/check.svg';

interface PanelProps {
    flip: boolean,
}
const PanelContent = (props: PanelProps) => {
    const flexDirection = props.flip ? "lg:flex-row-reverse" : "lg:flex-row";

    return(
        <div className={`flex mx-4 lg:mx-7 flex-col ${flexDirection} py-8 lg:py-18 lg:justify-between`}>
            <img className={"max-w-full lg:w-3/5"} src={darkBg} alt={""}/>
            <div className={"flex flex-col pt-6 lg:w-1/3 lg:pr-6"}>
                <div className={"text-sm opacity-60 uppercase mb-2 text-center lg:text-left"}>
                    Title
                </div>
                <div className={"text-3xl text-center lg:text-left leading-relaxed mb-5"}>
                    Some text
                </div>
                <div className={"text-base leading-loose"}>
                    <img src={"check"} alt={""}/>
                    <p className={""}>This is where the text about this section will go. You can make it pretty much as long as you want, but it will probably look best if we make it fit with the height of the image.</p>
                </div>
            </div>
        </div>
    )
}
export default PanelContent;