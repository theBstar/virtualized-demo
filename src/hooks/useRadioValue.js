import React from "react";

export default function useRadioValue(initialVal) {
  const [checkedRadio, setCheckedRadio] = React.useState(initialVal);
  const setActive = React.useCallback(
    (event) => {
      setCheckedRadio(event.target.value);
    },
    [],
  );

  return [checkedRadio, setActive]
}
