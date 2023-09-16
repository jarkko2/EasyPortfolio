import React, {useState} from 'react'
import jsonData from '../JsonCVData/introduction.json'

// Material UI
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Introduction() {
    const currentDate = new Date();

    // Format "yyyy-MM-dd"
    const dateOfBirth = new Date(jsonData.dateOfBirth);

    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();

    // Check if the birthdate has occurred this year or not
    if (
        currentDate.getMonth() < dateOfBirth.getMonth() ||
        (currentDate.getMonth() === dateOfBirth.getMonth() &&
            currentDate.getDate() < dateOfBirth.getDate())
    ) {
        age--; // Subtract 1 year if the birthdate hasn't occurred yet this year
    }

    const chipColors = {
        hobbyandschool: '#9c27b0',
        school: '#7cb342',
        hobby: '#1e88e5',
        mostused: '#311b92'
    };

    const chipDescriptions = {
        mostused: 'Suurin käyttökokemus',
        hobbyandschool: 'Harrastus ja koulu',
        hobby: 'Harrastus',
        school: 'Koulu',
    };

    const [open, setOpen] = useState(false);
    const handleClick = (url) => {
        window.location.href = url;
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const introduction = `${jsonData.initialIntroduction.replace('birthYear', age)} ${jsonData.introduction}`;
    return (
        <div>
            <Typography variant="h4">{jsonData.title}</Typography>
            <Typography>{introduction}</Typography>
            <Divider textAlign="left" sx={{ marginTop: 5 }}>
                <Typography variant="h6">Teknologiaosaamiset</Typography>
            </Divider>
            {Object.keys(chipDescriptions).map((name) => {
                const color = chipColors[name];
                return (
                    <Chip
                        key={name}
                        label={chipDescriptions[name]}
                        style={{ backgroundColor: color || '#9c27b0', color: 'white' }}
                        variant="outlined"
                        sx={{ margin: '5px' }}
                    />
                );
            })}
            <Divider sx={{ marginBottom: "10px" }}></Divider>
            {jsonData.knownTechnologies.map((name) => {
                const parts = name.split(":");
                const color = chipColors[parts[1]] || '#9c27b0';
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
            <Divider sx={{ marginBottom: "10px", marginTop: "10px" }}></Divider>
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
        </div>
    );

}