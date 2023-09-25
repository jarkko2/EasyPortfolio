// Material UI
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import JsonTimelineItem from './JsonTimelineItem';
import { HistoryTypeItem } from '../Types/HistoryTypeItem'
import Item from '../CustomMUIStyles/PaperStyle'

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