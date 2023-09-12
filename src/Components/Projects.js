import ProjectItem from './ProjectItem'
import jsonData from '../JsonCVData/projects.json'

// Material UI
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body,
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
}));

export default function Projects() {
    return (
        <Item>
            {jsonData.map((item, index) => (
                <div>
                    <ProjectItem key={index} item={item}>

                    </ProjectItem>
                    <Divider sx={{ marginTop: 5, marginBottom: 5 }}></Divider>
                </div>
            ))}
        </Item>

    )
}