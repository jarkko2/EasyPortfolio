
import PerspectiveCardImage from './PerspectiveCardImage';
import ProjectTypeItem from './Types/ProjectTypeItem'

export default function ProjectImage({ item } : {item : ProjectTypeItem}) {
    const imgSrc : string = item.imgSrc == null ? "" : item.imgSrc
    return (
        imgSrc != "" ? (
            <PerspectiveCardImage item={item}/>
        ) : null
    );
}