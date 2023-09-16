
import PerspectiveCardImage from './PerspectiveCardImage';
import image from '../Images/projTemp.png';

export default function ProjectImage({ item }) {
    return (
        item.imgSrc != null ? (
            <PerspectiveCardImage imgSrc={item.imgSrc}></PerspectiveCardImage>
        ) : null
    );
}