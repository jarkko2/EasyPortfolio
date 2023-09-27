// Material UI
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import Introduction from './Introduction/Introduction';
import Projects from './Projects/Projects';
import { Typography } from '@mui/material';
import Item from './CustomMUIStyles/PaperStyle'

// Json data
import jobJsonData from '../JsonCVData/jobhistory.json'
import studyJsonData from '../JsonCVData/studyhistory.json'

import JsonTimeline from './JsonTimeline/JsonTimeline';
import Showcase from './Introduction/Showcase';

//@ts-ignore
import Fade from 'react-reveal/Fade';

export default function MainView() {
    const ImgItem = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "100%",
        width: "100%",
        lineHeight: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Center vertically and horizontally
    }));

    interface TextDividerProps {
        title: string;
        id: string
    }

    const TextDivider: React.FC<TextDividerProps> = ({ title, id }) => {
        return (
            <Fade left>
                <Divider textAlign="left" sx={{ marginTop: 5, marginBottom: 5 }} id={id}>
                    <Typography variant="h4">{title}</Typography>
                </Divider>
            </Fade>
        );
    };

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ marginTop: 5 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8} lg={8}>
                            <Item>
                                <Introduction />
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} style={{ display: 'flex', alignItems: 'stretch' }}>
                            <ImgItem>
                                <img src={require('../Images/naama.jpg')} alt="Face of me" style={{ margin: '0 auto', width: "95%", borderRadius: "25px" }} />
                            </ImgItem>
                        </Grid>
                    </Grid>
                </Box>
                <TextDivider title="Näyteikkuna" id="showcase" />
                <Box sx={{ width: "100%" }}>
                    <Showcase/>
                </Box>
                <TextDivider title="Työhistoria" id="job" />
                <Box sx={{ width: "100%" }}>
                    <JsonTimeline jsonData={jobJsonData}></JsonTimeline>
                </Box>

                <TextDivider title="Opinnot" id="study"/>
                <Box sx={{ width: "100%" }}>
                    <JsonTimeline jsonData={studyJsonData}></JsonTimeline>
                </Box>

                <TextDivider title="Projektit" id="projects"/>
                <Box sx={{ width: "100%" }}>
                    <Projects />
                </Box>
            </Container>
        </div>

    )
}