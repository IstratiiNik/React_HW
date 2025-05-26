import React from "react";
import { useForm } from "react-hook-form";
import styles from "./DynamicForm.module.css";

// Component for rendering a dynamic form with conditional fields
const DynamicForm = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form data: ", data);
  };

  // Watch the value of the first field to conditionally render the second field
  const firstFieldValue = watch("firstField");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {/* First input field */}
      <div className={styles.formGroup}>
        <label>First Field</label>
        <input
          type="text"
          {...register("firstField", { required: "This field is required" })}
        />
        {/* Display error for first field */}
        {errors.firstField && (
          <p className={styles.error}>{errors.firstField.message}</p>
        )}
      </div>

      {/* Conditionally render the second field if firstFieldValue is "show" */}
      {firstFieldValue === "show" && (
        <div className={styles.formGroup}>
          <label>Second Field</label>
          <input
            type="text"
            {...register("secondField", {
              required: "Second field is required when visible",
            })}
          />
          {/* Display error for second field */}
          {errors.secondField && (
            <p className={styles.error}>{errors.secondField.message}</p>
          )}
        </div>
      )}

      {/* Submit button */}
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
