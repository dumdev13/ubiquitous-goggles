const TextSection = () => {
    // const titleText = "This is the title";
    const bodyText = "Motivated and creative Part 107 pilot looking to photograph, film, map, or dive the location of your choice.";

    return(
        <div className={"flex flex-col items-center text-center text-warmGrey-900 mx-8"}>
            {/*<div className={"text-sm opacity-60 uppercase mb-4"}></div>*/}
            <div className={"text-center text-3xl px-4 leading-relaxed font-md mb-24 lg:w-4/6"}>{bodyText}</div>
        </div>
    )
}
export default TextSection;