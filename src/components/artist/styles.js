import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  artist: {
    flex: '1 0 21%',
    margin: 50,
    padding: 50,
    color: 'white',
    background: '#282c34',
    '& h6': {
      margin: '0 0 32px 0',
      fontSize: 40,
      // color: "#282c34"
    },
    '& Button': {
      display: 'block',
      margin: ' 20px auto 0 auto',
    },
  },
});

export default useStyles;
