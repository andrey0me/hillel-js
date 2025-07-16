import React, { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinationList, submitSearchForm } from '../redux/actions';
import Spinner from '../components/Spinner';

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
    localStorage.setItem('formData', JSON.stringify(values));
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
    <div className="bg-light-blue p-4 rounded shadow-sm">
      <h2 className="text-primary mb-4">Find a Hotel</h2>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initial}
        render={({ handleSubmit, touched, errors }) => (
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Destination</label>
              <Field name="destination" component="select" className="form-select">
                <option value="" disabled hidden>Select</option>
                {destinations
                  .filter((d, index, self) =>
                    index === self.findIndex(t => t.label === d.label)
                  )
                  .map(d => (
                    <option key={d.id} value={d.label}>{d.label}</option>
                  ))}
              </Field>
              {touched.destination && errors.destination && (
                <div className="text-danger">{errors.destination}</div>
              )}
            </div>

            <div className="col-md-3">
              <label className="form-label">Check-in</label>
              <Field name="checkin" component="input" type="date" className="form-control" />
              {touched.checkin && errors.checkin && (
                <div className="text-danger">{errors.checkin}</div>
              )}
            </div>

            <div className="col-md-3">
              <label className="form-label">Check-out</label>
              <Field name="checkout" component="input" type="date" className="form-control" />
              {touched.checkout && errors.checkout && (
                <div className="text-danger">{errors.checkout}</div>
              )}
            </div>

            <div className="col-md-1">
              <label className="form-label">Adults</label>
              <Field name="adults" component="input" type="number" className="form-control" />
              {touched.adults && errors.adults && (
                <div className="text-danger">{errors.adults}</div>
              )}
            </div>

            <div className="col-md-1">
              <label className="form-label">Children</label>
              <Field name="children" component="input" type="number" className="form-control" />
            </div>

            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary px-4">Search</button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default MainPage;
