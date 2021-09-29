import { React, useState } from "react";
import { Avatar } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const ImagenUsuario = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [open, setOpen] = useState(false);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '20vh'}}>
        <Badge 
            badgeContent={<Fab color="primary" size="small" aria-label="edit">
                            <EditIcon />
                        </Fab>} 
            onClick={handleClickOpen}
            >
                
        <Avatar 
              src={selectedImage ? URL.createObjectURL(selectedImage) : null}
              style={{ height: '80px', width: '80px' }}
              size="big"
            />
        </Badge>   
        </div>
      {/* </div> */}

      <Dialog fullScreen onClose={handleClose} open={open}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            <input
          accept="image/*"
          type="file"
          onChange={imageChange}
        />
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
            
          </Toolbar>
        </AppBar>
        {selectedImage && (
          <div >
            <img
              sx={{ maxWidth: 100 }}
              src={URL.createObjectURL(selectedImage)}
              alt="Thumb"
            />
            <Button variant="contained" onClick={removeSelectedImage}>Remove This Image</Button>
          </div>
        )}
      
    </Dialog>
    </>
  );
};

export default ImagenUsuario;
