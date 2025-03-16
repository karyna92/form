import classNames from "classnames";
import { Field } from "formik";
import PropTypes from "prop-types";
import styles from "../../comons/styles/base.module.scss";

const CustomInput = (props) => {
  const { name, label, classes, ...restProps } = props;
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });

        return (
          <label>
            <span
              className={`${styles.label} ${field.value ? styles.hidden : ""}`}
            >
              {label}{" "}
            </span>
            <input className={inputClassNames} {...restProps} {...field} />
            {meta.error && meta.touched && (
              <span className={classes.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
};
CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default CustomInput;
