import ProjectItem from './ProjectItem'
import jsonData from '../JsonCVData/projects.json'
import ProjectTypeItem from './Types/ProjectTypeItem';
import Item from './PaperStyle'

// Material UI
import Divider from '@mui/material/Divider';

export default function Projects() {
    const Projects: React.FC = () => {
        return (
            <>
                {jsonData.map((item: ProjectTypeItem, index: number) => (
                    <div key={item.name + index} >
                        <ProjectItem item={item} />
                        <Divider sx={{ marginTop: 5, marginBottom: 5 }}></Divider>
                    </div>
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