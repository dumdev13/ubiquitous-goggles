const TextSection = () => {
    const titleText = "This is the title";
    const bodyText = "This is the text that goes into the callout, say whatever you want";

    return(
        <div className={"flex flex-col items-center text-center text-warmGrey-900 mx-8"}>
            <div className={"text-sm opacity-60 uppercase mb-4"}>{titleText}</div>
            <div className={"text-center text-3xl px-4 leading-relaxed font-md mb-24 lg:w-4/6"}>{bodyText}</div>
        </div>
    )
}
export default TextSection;