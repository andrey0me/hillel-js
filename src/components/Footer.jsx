import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ textAlign: 'center', py: 2, backgroundColor: '#eee', mt: 4 }}>
      <Typography variant="body2">
        Контакти: andrey@email.com | +380671234567
      </Typography>
    </Box>
  );
}
