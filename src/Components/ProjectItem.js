import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'https://esm.sh/remark-gfm@3'
import axios from 'axios';

// Material UI
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProjectYoutubeVideo from './ProjectYoutubeVideo';
import Divider from '@mui/material/Divider';
import ProjectImage from './ProjectImage';
import Chip from '@mui/material/Chip';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ProjectItem({ item }) {
    const [expanded, setExpanded] = useState(false);
    const [readmeContent, setReadmeContent] = useState('');

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const githubRepoUrl = item.readMeUrl;

        if (githubRepoUrl === "") {
            console.warning("Github repo not set")
            return
        }

        axios.get(githubRepoUrl)
            .then((response) => {
                // The README content is base64 encoded in the response
                const decodedContent = atob(response.data.content);
                setReadmeContent(decodedContent);
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    console.error('Could not get README.md for ' + githubRepoUrl + ' Is the repository private?')
                } else {
                    console.error('Error fetching README:', error);
                }
            });
    }, [item.readMeUrl]);

    return (
        <Card key={item.name}>
            <CardHeader title={item.name}/>
            <ProjectImage item={item}> </ProjectImage>
            <CardContent>
                {item.usedTechnologies.map((name) => (
                    <Chip key={"chip_" + item.name + "_" + name} label={name} color="primary" variant="outlined" sx={{ margin: "5px" }} />
                ))}

            </CardContent>
            <CardActions disableSpacing>
                <Typography variant="body2" color="text.primary"> {item.desc} </Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2" color="text.primary"> Link to project <a href={item.url}>{item.url}</a> </Typography>
                    {item.ytVidId != null && <div><Divider sx={{ marginTop: 5, marginBottom: 5 }}></Divider> <ProjectYoutubeVideo item={item}></ProjectYoutubeVideo></div>}
                    <Divider sx={{ marginTop: 5, marginBottom: 5 }}></Divider>
                    <Typography variant="h5"> Project README.md file content </Typography>
                    <Divider sx={{ marginTop: 5, marginBottom: 5 }}></Divider>
                    <ReactMarkdown children={readmeContent} remarkPlugins={[remarkGfm]} disallowedElements={['img']} />
                </CardContent>
            </Collapse>
        </Card>
    )
}