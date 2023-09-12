import TimelineContent from '@mui/lab/TimelineContent';
import { Typography } from '@mui/material';

export default function JsonTimelineItem({ item }) {
    return (
        <div>
            <TimelineContent>
                <Typography variant="h6"> {item.title}</Typography>
                <Typography variant="h6"> {item.year} </Typography>
                <Typography variant="p">{item.description}</Typography>
            </TimelineContent>

        </div>

    )
}