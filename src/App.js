import React, { useEffect, useState } from 'react';
import { Snackbar } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import lastFM from './utils/last-fm';
import { ArtistModal, Artist } from './components';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const [q, setQ] = useState('');
  const [error, setError] = useState();
  const [artists, setArtists] = useState([]);
  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    if (!q) {
      setArtists([]);
      return;
    }
    lastFM.artistSearch({ q }, (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.warn('Error with api: ', err);
        setError('An error has occurred getting artists.');
        return;
      }
      const {
        // meta,
        result,
      } = data;
      setError('Successfully retrieved artist listing.');
      setArtists([...result]);
    });
  }, [q]);

  const getMoreInfo = async (name) =>
    lastFM.artistInfo({ name }, (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.warn('Error with api: ', err);
        setError('An error has occurred getting artist info.');
        return;
      }
      setError('Successfully retrieved artist info.');
      setArtistInfo({ ...data });
    });
  const renderArtists = () =>
    artists &&
    artists.length > 0 && (
      <div className={classes.artistListing}>
        {artists.map((info) => (
          <Artist {...info} onInfoClick={getMoreInfo} />
        ))}
      </div>
    );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Favorite Artist Search</h1>

        <input
          className={classes.search}
          onChange={({ target: { value } }) => setQ(value)}
          value={q}
          placeholder="Search for your favorite artist..."
        />
      </header>
      {renderArtists()}
      {artistInfo && (
        <ArtistModal {...artistInfo} handleClose={() => setArtistInfo(null)} />
      )}

      {error && (
        <Snackbar
          open
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          autoHideDuration={5000}
          onClose={() => setError(null)}
          message={error}
        />
      )}
    </div>
  );
};

export default App;
