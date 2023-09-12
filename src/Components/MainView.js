// Material UI
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import JobHistory from './JsonTimeline';
import Introduction from './Introduction';
import image from '../logo.svg';
import face from '../Images/naama.jpg';
import Projects from './Projects';
import { Typography } from '@mui/material';

// Json data
import jobJsonData from '../JsonCVData/jobhistory.json'
import studyJsonData from '../JsonCVData/studyhistory.json'
import JsonTimeline from './JsonTimeline';

export default function MainView() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.primary,
    }));

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
                                <img src={face} alt="Face of me" style={{ margin: '0 auto', width: "95%", borderRadius: "25px"}} />
                            </ImgItem>
                        </Grid>
                    </Grid>
                </Box>
                <Divider textAlign="left" sx={{ marginTop: 5, marginBottom: 5 }} id="job">
                    <Typography variant="h4">Työhistoria</Typography>
                </Divider>
                <Box
                    sx={{
                        width: "100%"
                    }}
                >
                    <JsonTimeline jsonData={jobJsonData}></JsonTimeline>
                </Box>
                <Divider textAlign="left" sx={{ marginTop: 5, marginBottom: 5 }} id="study">
                    <Typography variant="h4">Opinnot</Typography>
                </Divider>
                <Box
                    sx={{
                        width: "100%"
                    }}
                >
                    <JsonTimeline jsonData={studyJsonData}></JsonTimeline>
                </Box>
                <Divider textAlign="left" sx={{ marginTop: 5, marginBottom: 5 }} id="projects">
                    <Typography variant="h4">Projektit</Typography>
                </Divider>
                <Box
                    sx={{
                        width: "100%"
                    }}
                >
                    <Projects />
                </Box>
            </Container>
        </div>

    )
}