import ProjectItem from './ProjectItem'
import jsonData from '../../JsonCVData/projects.json'
import ProjectTypeItem from '../Types/ProjectTypeItem';
import Item from '../CustomMUIStyles/PaperStyle'

// Material UI
import Divider from '@mui/material/Divider';


//@ts-ignore
import Fade from 'react-reveal/Fade';

export default function Projects() {
    const Projects: React.FC = () => {
        return (
            <>
                {jsonData.map((item: ProjectTypeItem, index: number) => (
                    <Fade key={item.name + index} >
                        <ProjectItem item={item} />
                        <Divider sx={{ marginTop: 5, marginBottom: 5 }}></Divider>
                    </Fade>
                ))}
            </>
        )
    }
    return (
        <Item key="projects">
            <Projects/>
        </Item>
    )
}