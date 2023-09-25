import TimelineContent from '@mui/lab/TimelineContent';
import { Typography } from '@mui/material';
import { HistoryTypeItem } from '../Types/HistoryTypeItem'

export default function JsonTimelineItem({ item }: { item: HistoryTypeItem }) {
    return (
        <TimelineContent>
            <Typography variant="h6"> {item.title}</Typography>
            <Typography variant="h6"> {item.year} </Typography>
            <Typography variant="body1">{item.description}</Typography>
        </TimelineContent>
    )
}