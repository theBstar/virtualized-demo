import React from "react";
import ListHeader from './ListHeader';
import NaiveList from './NaiveList';
import VirtualList from './VirtualList';

export default function List({ items, title, virtual }) {
  if (virtual) {
    return (
      <div className="list">
        <ListHeader title={title} />
        <VirtualList items={items} />
      </div>
    );
  }
  return (
    <div className="list">
      <ListHeader title={title} />
      <NaiveList items={items} />
    </div>
  )
}
