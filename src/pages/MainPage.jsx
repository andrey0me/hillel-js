import React, { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinationList, submitSearchForm } from '../redux/actions';
import Spinner from '../components/Spinner';
import {
  Box, Typography, Button, MenuItem, TextField, Paper, Grid
} from '@mui/material';

const MainPage = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(state => state.booking.destinations);
  const isLoading = useSelector(state => state.booking.isLoading);

  useEffect(() => {
    dispatch(fetchDestinationList());
  }, [dispatch]);

  const validate = (values) => {
    const errors = {};
    if (!values.destination) errors.destination = 'Required';
    if (!values.checkin) errors.checkin = 'Required';
    if (!values.checkout) errors.checkout = 'Required';
    if (values.checkin && values.checkout && values.checkout < values.checkin) {
      errors.checkout = 'Check-out must be after check-in';
    }
    if (!values.adults || values.adults < 1) {
      errors.adults = 'At least one adult';
    }
    return errors;
  };

  const onSubmit = (values) => {
    dispatch(submitSearchForm(values));
  };

  const initial = JSON.parse(localStorage.getItem('formData')) || {
    destination: '',
    checkin: '',
    checkout: '',
    adults: 1,
    children: 0,
  };

  if (isLoading) return <Spinner />;

  return (
    <Paper sx={{ padding: 4, backgroundColor: '#f0f8ff' }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Find a Hotel
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initial}
        render={({ handleSubmit }) => (
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Field name="destination">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      select
                      label="Destination"
                      fullWidth
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                      sx={{
                        minWidth: 250,    
                        maxWidth: 400     
                      }}
                    >
                      <MenuItem value="" disabled>Select</MenuItem>
                      {[...new Set(destinations.map(d => d.label))].map(label => (
                        <MenuItem key={label} value={label}>{label}</MenuItem>
                      ))}
                    </TextField>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={4} md={2}>
                <Field name="checkin">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      type="date"
                      label="Check-in"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={4} md={2}>
                <Field name="checkout">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      type="date"
                      label="Check-out"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>

              <Grid item xs={6} sm={3} md={1.5}>
                <Field name="adults">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      type="number"
                      label="Adults"
                      fullWidth
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>

              <Grid item xs={6} sm={3} md={1.5}>
                <Field name="children">
                  {({ input }) => (
                    <TextField
                      {...input}
                      type="number"
                      label="Children"
                      fullWidth
                    />
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={12} md={3}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ height: '100%' }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      />
    </Paper>
  );
};

export default MainPage;
