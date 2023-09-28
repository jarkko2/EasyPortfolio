import { useState } from 'react'
import jsonData from '../../JsonCVData/introduction.json'
import chips from '../../JsonCVData/chips.json'

// Material UI
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ChipType from '../Types/ChipType';

import localizations from '../../JsonCVData/localizations.json'

export default function Introduction() {
    const currentDate = new Date();

    // Format "yyyy-MM-dd"
    const dateOfBirth = new Date(jsonData.dateOfBirth);

    let age: number = currentDate.getFullYear() - dateOfBirth.getFullYear();

    // Check if the birthdate has occurred this year or not
    if (
        currentDate.getMonth() < dateOfBirth.getMonth() ||
        (currentDate.getMonth() === dateOfBirth.getMonth() &&
            currentDate.getDate() < dateOfBirth.getDate())
    ) {
        age--; // Subtract 1 year if the birthdate hasn't occurred yet this year
    }

    function FindChip(name: string): ChipType {
        for (const chip of chips) {
            if (name === chip.name) {
                return chip;
            }
        }
        // Return red to highlight error situation
        const defaultChip: ChipType = {
            name: "ChipNotFound",
            desc: "ChipNotFound",
            color: "#ff1100",
        };
        return defaultChip
    }

    const ChipDescriptions: React.FC = () => {
        return (
            <>
                {chips.map((chip) => (
                    <Chip
                        key={chip.name}
                        label={chip.desc}
                        style={{ backgroundColor: chip.color || '#9c27b0', color: 'white' }}
                        variant="outlined"
                        sx={{ margin: '5px' }}
                    />
                ))}
            </>
        );
    };

    const KnownTechnologies: React.FC = () => {
        return (
            <>
                {jsonData.knownTechnologies.map((name) => {
                    const parts: string[] = name.split(":");
                    const color = FindChip(parts[1].toString()).color
                    return (
                        <Chip
                            key={name}
                            label={`${parts[0]}`}
                            style={{ backgroundColor: color, color: "white" }}
                            variant="outlined"
                            sx={{ margin: "5px" }}
                        />
                    );
                })}
            </>
        )
    }

    const [open, setOpen] = useState(false);
    const handleClick = (url: string) => {
        window.location.href = url;
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const introduction = `${jsonData.initialIntroduction.replace('birthYear', age.toString())} ${jsonData.introduction}`;
    return (
        <>
            <Typography variant="h4">{jsonData.title}</Typography>
            <Typography>{introduction}</Typography>
            <Divider textAlign="left" sx={{ marginTop: 5 }}>
                <Typography variant="h6">{localizations.knownTechnologiesText}</Typography>
            </Divider>
            <ChipDescriptions />
            <Divider sx={{ marginBottom: "10px" }}></Divider>
            <KnownTechnologies/>
            <Divider sx={{ marginBottom: "10px", marginTop: "10px" }}></Divider>
            <GitHubIcon sx={{ margin: "5px" }} onClick={() => handleClick(jsonData.githubUrl)} />
            <LinkedInIcon sx={{ margin: "5px" }} onClick={() => handleClick(jsonData.linkedInUrl)} />
            <EmailIcon sx={{ margin: "5px" }} onClick={() => handleClickOpen()} />

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Gmail osoite"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {jsonData.email}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );

}