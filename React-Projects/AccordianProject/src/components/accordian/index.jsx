import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  const handleMultiSelection = (getCurrId) => {
    const cpyMultiSelection = [...multiSelection];
    console.log("Copying multiSelection =", cpyMultiSelection);
    const findIndexof = cpyMultiSelection.indexOf(getCurrId);
    console.log("Index of =", findIndexof);
    cpyMultiSelection.indexOf(getCurrId) !== -1
      ? cpyMultiSelection.splice(findIndexof, 1)
      : cpyMultiSelection.push(getCurrId);
    setMultiSelection(cpyMultiSelection);
    // cpyMultiSelection.indexOf(getCurrId)
  };
  console.log(multiSelect)
  console.log("MultiSelection=", multiSelection);
  const handleSingleSelection = (getCurrId) => {
    setSelected(getCurrId === selected ? null : getCurrId);
  };
  console.log("Selected ", selected);
  return (
    <>
      <div className="Container">
        <button
          onClick={() => setMultiSelect(!multiSelect)}
          className="multiSelectBtn"
        >
          Enable Multi Select
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={() =>
                multiSelect
                  ? handleMultiSelection(dataItem.id)
                  : handleSingleSelection(dataItem.id)
              }
              key={dataItem.id}
              className="item"
            >
              <h1 className="title">{dataItem.question} +</h1>
              {
              multiSelect ? multiSelection.indexOf(dataItem.id)!==-1 && (<span className="answer">{dataItem.answer}</span>)
              :
              selected == dataItem.id &&(<span className="answer">{dataItem.answer}</span>)
              }
            </div>
          ))
        ) : (
          <div>Data Not Found</div>
        )}
      </div>
    </>
  );
};
export default Accordian;
