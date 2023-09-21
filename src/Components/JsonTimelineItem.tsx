import TimelineContent from '@mui/lab/TimelineContent';
import { Typography } from '@mui/material';
import { HistoryItem } from './HistoryItem'

export default function JsonTimelineItem({ item } : { item: HistoryItem }) {
    return (
        <div>
            <TimelineContent>
                <Typography variant="h6"> {item.title}</Typography>
                <Typography variant="h6"> {item.year} </Typography>
                <Typography variant="body1">{item.description}</Typography>
            </TimelineContent>

        </div>

    )
}