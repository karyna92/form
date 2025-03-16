import classNames from "classnames";
import { Field } from "formik";
import PropTypes from "prop-types";

const CustomCheckbox = (props) => {
  const { name, classes, ...restProps } = props;

  return (
    <>
      <Field type="ckeckbox" name={name}>
        {({ field, meta }) => {
          const inputClassNames = classNames(classes.checkbox, {
            [classes.valid]: !meta.error && meta.touched,
            [classes.invalid]: meta.error && meta.touched,
          });

          return (
            <label>
              <input className={inputClassNames} {...restProps} {...field} />
              {meta.error && meta.touched && (
                <span className={classes.error}>{meta.error}</span>
              )}
            </label>
          );
        }}
      </Field>
    </>
  );
};
CustomCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default CustomCheckbox;
