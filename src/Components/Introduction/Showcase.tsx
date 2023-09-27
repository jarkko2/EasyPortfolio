// Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider'

import Item from '../CustomMUIStyles/PaperStyle'
import ProjectYoutubeVideo from '../Projects/ProjectYoutubeVideo';
import ProjectTypeItem from '../Types/ProjectTypeItem';
import showcaseJsonData from '../../JsonCVData/showcase.json'

//@ts-ignore
import Fade from 'react-reveal/Fade';

export default function Showcase() {

    const showCaseItem: ShowcaseTypeItem = showcaseJsonData
    const projectItem: ProjectTypeItem = {
        name: showcaseJsonData.name,
        ytVidId: showcaseJsonData.ytVidId
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Item>
                            <Fade>
                                <ProjectYoutubeVideo item={projectItem}></ProjectYoutubeVideo>
                            </Fade>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} style={{ display: 'flex', alignItems: 'stretch' }}>
                        <Item>
                            <Fade>
                                <Typography variant="h4" sx={{ margin: 2 }}>{showCaseItem.name}</Typography>
                                <Divider sx={{ margin: 2 }} />
                                <Typography variant="body1" sx={{ margin: 1 }}>{showCaseItem.body1} </Typography>
                                <Typography variant="body1" sx={{ margin: 1 }}>{showCaseItem.body2} </Typography>
                            </Fade>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );

}