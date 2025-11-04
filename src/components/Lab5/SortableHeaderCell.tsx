import React, { useState } from 'react';

type SortKey = 'user' | 'post' | 'comments';
type SortDirection = 'ascending' | 'descending' | 'none';
type SortType = 'alpha' | 'numeric';

interface SortableHeaderCellProps {
  title: string;
  sortKey: SortKey;
  sortType: SortType;
  onSort: (key: SortKey, direction: SortDirection) => void;
}

const SortableHeaderCell: React.FC<SortableHeaderCellProps> = ({ title, sortKey, sortType, onSort }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const headerCellStyle: React.CSSProperties = { padding: '0.5rem 1rem', textAlign: 'center'};
  const dropdownContainerStyle: React.CSSProperties = { position: 'relative', display: 'flex', backgroundColor: "green", width: "120px", height: "50px", borderRadius: "16px",  alignItems: "center", justifyContent: "center" };
  const dropdownButtonStyle: React.CSSProperties = { cursor: 'pointer', padding: '5px', border: 'none', background: 'transparent', fontSize: 'inherit', color: "white" };
  const dropdownMenuStyle: React.CSSProperties = {
    display: dropdownOpen ? 'block' : 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '180px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    listStyle: 'none',
    padding: '0',
    margin: '0',
    border: '1px solid #ddd',
    borderRadius: '4px'
  };
  const dropdownItemStyle: React.CSSProperties = { padding: '12px 16px', cursor: 'pointer' };


  const handleSort = (direction: SortDirection) => {
    onSort(sortKey, direction);
    setDropdownOpen(false);
  };

  const alphaOptions = (
    <>
      <li style={dropdownItemStyle} onClick={() => handleSort('ascending')}>Sort A-Z</li>
      <li style={dropdownItemStyle} onClick={() => handleSort('descending')}>Sort Z-A</li>
    </>
  );

  const numericOptions = (
    <>
      <li style={dropdownItemStyle} onClick={() => handleSort('ascending')}>Sort Ascending</li>
      <li style={dropdownItemStyle} onClick={() => handleSort('descending')}>Sort Descending</li>
    </>
  );

  return (
    <th style={headerCellStyle}>
      <div style={dropdownContainerStyle} onMouseLeave={() => setDropdownOpen(false)}>
        <button onMouseEnter={() => setDropdownOpen(true)} style={dropdownButtonStyle}>
          {title} ▾
        </button>
        <ul style={dropdownMenuStyle}>
          {sortType === 'alpha' ? alphaOptions : numericOptions}
          <li style={dropdownItemStyle} onClick={() => handleSort('none')}>Reset Sort</li>
        </ul>
      </div>
    </th>
  );
};

export default SortableHeaderCell;