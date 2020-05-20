import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import { withStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';

const styles = theme => ({
    textPadding: {
        marginRight: '20px'
    },
    companyStyle: {
        width: '45%'
    },
    alignItems: {
        display: 'flex',
        justifyContent: 'space-between'
    }

});

function FormDialog(props) {
    const { open, setOpen, handleClickOpen, handleClose } = props
    const { classes } = props;


    return (
        <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
      </Button> */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Device</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add a device, please add all required device infomation.
          </DialogContentText>

                    {/* Parameter
    Field	Type	Description
    company	String	The company name
    company_id	Number The company id
    device_type_id	Number	The device type id
    location_id	Number	the location id
    manufacturer_id	Number	then manufacturer id 
    We will need to convert text to numbers 
    */}
                    <Box className={classes.alignItems}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="company"
                            label="Company Name"
                            type="text"
                            className={classes.companyStyle}

                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="company_id"
                            label="Company ID"
                            type="number"
                            className={classes.companyStyle}
                        />
                    </Box>
                    <Box>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="device_type_id"
                            label="Device ID"
                            type="number"
                            className={classes.textPadding}
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="location_id"
                            label="Location ID"
                            type="number"
                            className={classes.textPadding}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="manufacturer_id"
                            label="Manufacturer ID"
                            type="number"
                        />
                    </Box>

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}


export default withStyles(styles)(FormDialog);