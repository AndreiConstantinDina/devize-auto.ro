import React from 'react';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function EstimateError({error, refreshOn, setRefreshOn} ) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setRefreshOn(false)
    };
    useEffect(
        () => {
            setOpen(true);
        }, [refreshOn])
    return (

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {error}
            </Alert>
        </Snackbar>

    );
}