import React from 'react';
import ListItem from './ListItem';

export default function NaiveList({ items }) {
  return (
    <div className="list-content">
      {items.map((item, index) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );

}
