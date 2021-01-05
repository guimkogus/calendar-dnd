import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  card: {
    border: '1px solid black',
    borderRadius: '8px',
    marginTop: '100px',
    padding: '40px'
  },
  title: {
    color: 'orange'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.card}>
          <Typography variant="h2" className={classes.title}>
            Hello world!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Home;
