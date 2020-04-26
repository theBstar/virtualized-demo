import React, { useCallback } from 'react';
import ListItem from './ListItem';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";


export default function VirtualList({ items }) {
  const listItem = useCallback(
    ({ index, style }) => {
      const item = items[index];
      return (
        <ListItem key={item.id} item={item} style={style} />
      );
    },
    [items],
  );

  const listRender = useCallback(
    ({ height, width }) => (
      <List
        className="list-content"
        itemCount={items.length}
        itemSize={150}
        height={height}
        width={width}
      >
        {listItem}
      </List>

    ),
    [items],
  );

  return (
    <AutoSizer style={{ height: '90vh' }} >
      {listRender}
    </AutoSizer>
  );
}

