import { useState } from 'react';
import axios from 'axios';
import { Box, Container, TextField, Button, Typography } from '@mui/material';

export default function Swapi() {
  const [url, setUrl] = useState('https://swapi.py4e.com/api/people/1');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await axios.get(url);
    setData(res.data);
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h5">SWAPI</Typography>
        <Box display="flex" gap={1} mt={2}>
          <TextField
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            fullWidth
          />
          <Button variant="outlined" onClick={fetchData}>Get info</Button>
        </Box>
        {data && (
          <Box mt={3}>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Box>
        )}
      </Box>
    </Container>
  );
}
