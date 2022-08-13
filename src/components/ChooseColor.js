import React from "react";

export default function ChooseColor() {
  const a = ["Chalk Pink", "Royal Gray", "Eucalyptus"];
  return (
    <div>
      <div>Colors</div>

      <div>
        {a.map((x) => (
          <div>
            <div>0</div>
            <div>{x}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
