import darkBg from '../Assets/Backgrounds/dark-bg.svg';
import checkIcon from '../Assets/Backgrounds/check.svg';

interface PanelProps {
    flip: boolean,
}
const PanelContent = (props: PanelProps) => {
    const flexDirection = props.flip ? "flex-row-reverse" : "flex-row";

    return(
        <div className={`grid ${flexDirection}`}>
            <img src={darkBg} alt={""}/>
            <div className={""}>
                <div className={""}>
                    Title
                </div>
                <div className={""}>
                    Some text
                </div>
                <div className={""}>
                    <img src={"check"} alt={""}/>
                    <p className={""}>Point 1</p>
                </div>
            </div>
        </div>
    )
}
export default PanelContent;