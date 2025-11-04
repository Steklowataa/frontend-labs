import React from 'react';
import SortableHeaderCell from './SortableHeaderCell';

type SortKey = 'user' | 'post' | 'comments';
type SortDirection = 'ascending' | 'descending' | 'none';

interface TableHeaderProps {
  onSort: (key: SortKey, direction: SortDirection) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ onSort }) => {
  return (
    <thead>
      <tr>
        <SortableHeaderCell title="User" sortKey="user" sortType="alpha" onSort={onSort} />
        <SortableHeaderCell title="Post Title" sortKey="post" sortType="alpha" onSort={onSort} />
        <SortableHeaderCell title="Comments" sortKey="comments" sortType="numeric" onSort={onSort} />
      </tr>
    </thead>
  );
};

export default TableHeader;