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

    const showCaseItems: ShowcaseTypeItem[] = showcaseJsonData
    const projectTypeItems: ProjectTypeItem[] = showCaseItems.map((item) => ({
        name: item.name,
        ytVidId: item.ytVidId,
        imgSrc: item.imgSrc
    }));


    return (
        <>
            {showCaseItems.map((showcaseItem: ShowcaseTypeItem, index: number) => (
                <Box sx={{ flexGrow: 1, marginBottom: "8px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={6}>
                            {projectTypeItems[index].ytVidId !== "" && (
                                <Item>
                                    <Fade>
                                        <ProjectYoutubeVideo item={projectTypeItems[index]}></ProjectYoutubeVideo>
                                    </Fade>
                                </Item>
                            )}
                            {projectTypeItems[index].imgSrc !== "" && (
                                <Item>
                                    <Fade>
                                        {/* TODO FIX DYNAMIC IMPORT */}
                                       <img src={require("../../Images/angular.jpg")} alt="Face of me" style={{ margin: '0 auto', width: "95%", borderRadius: "25px" }} />
                                    </Fade>
                                </Item>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} style={{ display: 'flex', alignItems: 'stretch' }}>
                            <Item>
                                <Fade>
                                    <Typography variant="h4" sx={{ margin: 2 }}>{showcaseItem.name}</Typography>
                                    <Divider sx={{ margin: 2 }} />
                                    <Typography variant="body1" sx={{ margin: 1 }}>{showcaseItem.body1} </Typography>
                                    <Typography variant="body1" sx={{ margin: 1 }}>{showcaseItem.body2} </Typography>
                                </Fade>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>

            ))}
        </>
    );

}