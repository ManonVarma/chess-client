import React from 'react' 

import DialogActions from '@material-ui/core/DialogActions' 
import DialogContent from '@material-ui/core/DialogContent' 
import DialogTitle from '@material-ui/core/DialogTitle' 
import DialogContentText from '@material-ui/core/DialogContentText' 
import Dialog from '@material-ui/core/Dialog' 
import Button from '@material-ui/core/Button' 

const DialogueBox = ({ openDialogueBox, handleClose, message, options }) => {
    return (
        <div className='dialogue-box'>
            <Dialog open={openDialogueBox} onClose={handleClose}>
                <DialogTitle>
                    Message from Shatranj
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        {options.option1}
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        {options.option2}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    ) 
}

export default DialogueBox 
