import { Container, Typography, Box, List, ListItem } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>Привіт, я Андрій 👋</Typography>
        <Typography variant="body1" paragraph>
          Я програміст баз даних, спеціалізуюсь на інтеграції систем, Power BI, SQL, React, Node.js.
        </Typography>
        <Typography variant="h6">Мої навички:</Typography>
        <List>
          <ListItem>✅ SQL Server, оптимізація запитів</ListItem>
          <ListItem>✅ Power BI, Google Sheets, API інтеграції</ListItem>
          <ListItem>✅ JavaScript, React, Redux</ListItem>
          <ListItem>✅ Node.js, Express, MongoDB</ListItem>
        </List>
      </Box>
    </Container>
  );
}
