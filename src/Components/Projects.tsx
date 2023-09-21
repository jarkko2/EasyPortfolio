import ProjectItem from './ProjectItem'
import jsonData from '../JsonCVData/projects.json'
import ProjectTypeItem from './ProjectTypeItem';

// Material UI
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
}));

export default function Projects() {
    return (
        <Item key="projects">
            {jsonData.map((item: ProjectTypeItem, index: number) => (
                <div key={item.name + index} >
                    <ProjectItem item={item} />
                    <Divider sx={{ marginTop: 5, marginBottom: 5 }}></Divider>
                </div>
            ))}
        </Item>

    )
}