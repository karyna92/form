import { Formik, Form } from 'formik';
import initialValuesRegistration from '../../constans/initialVal';
import {authenticationSchema } from '../../utils/validate/validationSchema'
import CustomInput from '../inputs/CustomInput';
import classes from '../../constans/classnames';
import styles from '../../comons/styles/base.module.scss'

 function AuthenticationForm() {
  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values:', values);
    formikBag.resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <h2>Wellcome back</h2>
      <h1>Explore your travel destinatins today</h1>
      <Formik initialValues={initialValuesRegistration} validationSchema={authenticationSchema } onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
        <Form className={styles.form}>
            <CustomInput
               label='Name:'
              type='text'
              name='name'
              autoFocus
              classes={classes}
            />
          <CustomInput
              label='Email:'
              type='email'
              name='email'
              classes={classes}
            />
             <CustomInput
              label='Password:'
              type='password'
              name='password'
              classes={classes}
            />
            <button disabled={isSubmitting}  className={styles.submitBtn} type="submit">Sing up</button>
        </Form>
        )}
      </Formik>
    </div>
  )
}
export default AuthenticationForm;