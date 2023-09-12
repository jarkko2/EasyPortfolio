
import PerspectiveCardImage from './PerspectiveCardImage';
import image from '../Images/projTemp.png';

export default function ProjectImage({ item }) {
    return (
        <PerspectiveCardImage imgSrc={item.imgSrc}></PerspectiveCardImage>
    )
}