import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './styles';

const Artist = ({ name, onInfoClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.artist}>
      <h6>{name}</h6>
      <Button
        variant="contained"
        color="primary"
        component="button"
        onClick={() => onInfoClick(name)}
      >
        More info
      </Button>
    </div>
  );
};

export default Artist;
