import { Formik, Form } from 'formik';
import initialValuesRegistration from '../../constans/initialVal';
import {registrationSchema} from '../../utils/validate/validationSchema'
import CustomInput from '../inputs/CustomInput';
import CustomCheckbox from '../inputs/CustomCheckbox';
import CustomRadio from '../inputs/CustomRadio';
import classes from '../../constans/classnames';
import options from '../../constans/options';
import styles from '../../comons/styles/base.module.scss'

const RegistrationForm = () => {
  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values:', values);
    formikBag.resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <h2>New traveler</h2>
      <h1>Explore your travel destinations</h1>
      <Formik initialValues={initialValuesRegistration} validationSchema={registrationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.inputParts}>
              <CustomInput
                label="Name:"
                type="text"
                name="name"
                autoFocus
                classes={classes}
              />
              <CustomInput
                label="Country:"
                type="text"
                name="country"
                classes={classes}
              />
            </div>
            <CustomInput
              label="Email:"
              type="email"
              name="email"
              classes={classes}
            />
            <CustomInput
              label="Password:"
              type="password"
              name="password"
              classes={classes}
            />
            <CustomInput
              label="Confirm Password:"
              type="password"
              name="confirmPassword"
              classes={classes}
            />
            <CustomRadio
              name="pickedRole"
              label="Choose an option"
              classes={classes}
              options={options}
            />
            <div>
              <CustomCheckbox
                type="checkbox"
                name="checkbox"
                classes={classes}
              />
              <span className={styles.checkboxText}>
                I have read and accept<a href="#"> terms of service</a>
              </span>
            </div>
            <button
              disabled={isSubmitting}
              className={styles.submitBtn}
              type="submit"
            >
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;

