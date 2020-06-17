import React from 'react';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';

import useStyles from './styles';

const ArtistModal = ({
  listeners,
  name,
  // bio,
  // similar,
  summary,
  tags,
  // type,
  // images,
  handleClose,
}) => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in>
        <div className={classes.paper}>
          {/* <div className={classes.imageContainer}>
            {images &&
              images.length > 0 &&
              images.map((image) => <img src={image} alt={image} />)}
          </div> */}
          <h2>{name}</h2>
          <p>
            <b>Summary: </b>
            {summary}
          </p>
          <p>
            <b>Tags: </b>
            {tags.join(', ')}
          </p>
          <p>
            <b># of Listeners: </b>
            {listeners}
          </p>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Close Modal
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default ArtistModal;
