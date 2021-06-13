import React from "react";

function Characteristics({ singlePort }) {
  return (
    <div>
      {singlePort.kenmerken &&
        singlePort.kenmerken.map((kenmerk) => {
          return <div key={kenmerk}>- {kenmerk}</div>;
        })}
    </div>
  );
}
export default Characteristics;
