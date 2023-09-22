// Material UI
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import JsonTimelineItem from './JsonTimelineItem';

import { HistoryTypeItem } from './Types/HistoryTypeItem'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

export default function JsonTimeline({ jsonData }: { jsonData: HistoryTypeItem[] }) {
    const enum ImageType {
        School = "school",
        Work = "work"
    }

    const imageToUse = (img: string) => {
        const imageType: ImageType = img as ImageType; // Type assertion to ImageType

        switch (imageType) {
            case ImageType.School:
                return <SchoolOutlinedIcon />;
            case ImageType.Work:
                return <WorkOutlineOutlinedIcon />;
            default:
                return <WorkOutlineOutlinedIcon />;
        }
    };

    return (
        <Item>
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                {jsonData.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator
                            style={{ height: '150px' }}
                            color="primary"
                        >
                            <TimelineDot variant="outlined" color="primary">{imageToUse(item.dotimg)}</TimelineDot>
                            {index !== jsonData.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <JsonTimelineItem item={item} />
                    </TimelineItem>
                ))}
            </Timeline>
        </Item>
    )
}