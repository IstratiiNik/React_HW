import React, { useEffect, useRef, useState } from "react";

// Component to display current and previous value
function ValueDisplay({ value }) {
  // State to store the previous value
  const [prevValue, setPrevValue] = useState("");
  // Ref to keep track of the last value
  const prevValueRef = useRef(value);

  // Update previous value when value changes
  useEffect(() => {
    setPrevValue(prevValueRef.current);
    prevValueRef.current = value;
  }, [value]);

  return (
    <div className="value-display">
      <p>
        <strong>Current Value:</strong> {value}
      </p>
      <p>
        <strong>Previous Value:</strong> {prevValue}
      </p>
    </div>
  );
}

export default ValueDisplay;
