import React, { memo, useMemo, useState, useEffect } from "react";
import { colors } from './constants';

function getBg() {
  return colors[Math.floor(Math.random() * (colors.length - 1))];
}

function ListItem({ item, style }) {
  const { title } = item;
  const bg = useMemo(getBg, []);
  const [newStyle, setStyle] = useState(style ? style : {});

  useEffect(() => {
    setStyle(style ? style : {})
  }, [style]);

  return (
    <div
      className="list-item"
      style={{
        ...newStyle,
        background: bg,
      }}
    >
      <p>{title}</p>
      <div
        style={{
          background: "black",
          color: "white",
          padding: "16px"
        }}
      >
        <span>{bg}</span>
      </div>
    </div>
  );
}

export default memo(ListItem);
