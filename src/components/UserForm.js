import React from 'react';
import { Form, Field } from 'react-final-form';
import '../App.css';

const validate = (values) => {
  const errors = {};

  if (!values.firstName || !/^[a-zA-Z\s]*$/.test(values.firstName)) {
    errors.firstName = 'Invalid first name';
  }

  if (!values.lastName || !/^[a-zA-Z\s]*$/.test(values.lastName)) {
    errors.lastName = 'Invalid last name';
  }

  if (!values.age || !/^\d+$/.test(values.age)) {
    errors.age = 'Invalid age';
  }

  if (values.notes && values.notes.length > 100) {
    errors.notes = 'Notes should not exceed 100 characters';
  }

  return errors;
};

const UserForm = () => {
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={{ stooge: 'Larry' }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label>First Name</label>
            <Field name="firstName" component="input" type="text" placeholder="First Name">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="text"
                    placeholder="First Name"
                    className={meta.error && meta.touched ? 'invalid-field' : ''}
                  />
                </div>
              )}
            </Field>
          </div>

          <div>
            <label>Last Name</label>
            <Field name="lastName" component="input" type="text" placeholder="Last Name">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="text"
                    placeholder="Last Name"
                    className={meta.error && meta.touched ? 'invalid-field' : ''}
                  />
                </div>
              )}
            </Field>
          </div>

          <div>
            <label>Age</label>
            <Field name="age" component="input" type="text" placeholder="Age">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="text"
                    placeholder="Age"
                    className={meta.error && meta.touched ? 'invalid-field' : ''}
                  />
                </div>
              )}
            </Field>
          </div>

          <div>
            <label>Employed</label>
            <Field name="employed" component="input" type="checkbox" />
          </div>

          <div>
            <label>Favorite Color</label>
            <Field name="favoriteColor" component="select">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </Field>
          </div>

          <div>
            <label>Sauces</label>
            <div>
              <label><Field name="ketchup" component="input" type="checkbox" /> Ketchup</label>
            </div>
            <div>
              <label><Field name="mustard" component="input" type="checkbox" /> Mustard</label>
            </div>
            <div>
              <label><Field name="mayonnaise" component="input" type="checkbox" /> Mayonnaise</label>
            </div>
            <div>
              <label><Field name="guacamole" component="input" type="checkbox" /> Guacamole</label>
            </div>
          </div>

          <div>
            <label>Best Stooge</label>
            <div>
              <label><Field name="stooge" component="input" type="radio" value="Larry" /> Larry</label>
            </div>
            <div>
              <label><Field name="stooge" component="input" type="radio" value="Moe" /> Moe</label>
            </div>
            <div>
              <label><Field name="stooge" component="input" type="radio" value="Curly" /> Curly</label>
            </div>
          </div>

          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes..." />
          </div>

          <button type="submit" disabled={submitting || pristine}>Submit</button>
          <button type="button" onClick={form.reset} disabled={submitting || pristine}>Reset</button>

          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
    />
  );
};

export default UserForm;