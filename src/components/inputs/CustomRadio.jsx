import classNames from "classnames";
import { Field } from "formik";
import PropTypes from "prop-types";
import styles from "../../comons/styles/base.module.scss";

const CustomRadio = ({ name, label, classes, options, ...restProps }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });

        return (
          <div
            className={styles.radioContainer}
            role="group"
            aria-labelledby={`${name}-label`}
          >
            <p>Join as a :</p>
            {options.map((option) => (
              <label key={option.value} className={styles.radioLabel}>
                <input
                  type="radio"
                  {...field}
                  value={option.value}
                  className={inputClassNames}
                  {...restProps}
                />
                <span>{option.value}</span>
              </label>
            ))}
          </div>
        );
      }}
    </Field>
  );
};

CustomRadio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomRadio;
