import { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const add = () => {
    if (text.trim()) {
      setItems([
        ...items,
        { id: Date.now(), text: text.trim(), completed: false },
      ]);
      setText('');
    }
  };

  const toggle = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const remove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          TODO список
        </Typography>

        <Box display="flex" gap={1} mb={2}>
          <TextField
            label="Нова задача"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={add}>
            Додати
          </Button>
        </Box>

        <List>
          {items.map((item) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => remove(item.id)}>
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <Checkbox
                checked={item.completed}
                onChange={() => toggle(item.id)}
              />
              <ListItemText
                primary={item.text}
                sx={{
                  textDecoration: item.completed ? 'line-through' : 'none',
                  ml: 1,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
