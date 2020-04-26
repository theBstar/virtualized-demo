import React, { useMemo } from "react";
import { NAIVE_LIST, VIRTUAL_LIST } from './constants';
import { createItemArray } from "./getData";
import useRadioValue from './hooks';
import List from "./List";
import "./styles.css";

const getData = () => createItemArray(5000);

export default function App() {
  const data = useMemo(
    getData,
    [],
  );

  const [radioVal, setRadioVal] = useRadioValue(NAIVE_LIST);

  return (
    <div className="App">
      <h1>A really big list</h1>
      <div>
        <label>
          {NAIVE_LIST}
          <input
            type="radio"
            name="switch-mode"
            value={NAIVE_LIST}
            checked={radioVal === NAIVE_LIST}
            onChange={setRadioVal}
          />
        </label>
        <label>
          {VIRTUAL_LIST}
          <input
            type="radio"
            name="switch-mode"
            value={VIRTUAL_LIST}
            checked={radioVal === VIRTUAL_LIST}
            onChange={setRadioVal}
          />
        </label>
      </div>
      <List
        title={radioVal}
        items={data}
        virtual={radioVal === VIRTUAL_LIST}
      />
    </div>
  );
}
