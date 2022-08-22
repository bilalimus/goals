import React from "react";
import Input from "../UI/Input";
import classes from "./MealsForm.module.css";

function MealsForm() {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "ss",
          defaultValue: "1",
          min: "1",
          max: "5",
          type: "number",
        }}
      />
      <button> + Add</button>
    </form>
  );
}

export default MealsForm;
