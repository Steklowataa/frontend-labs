export interface TableRowData {
  user?: { id: number; name: string };
  post: { id: number; title: string; userId: number; body: string; }; 
  comments: any[];
}

interface ReducerState {
  originalData: TableRowData[]; 
  sortedData: TableRowData[];
}


type SortKey = 'user' | 'post' | 'comments';
type SortDirection = 'ascending' | 'descending' | 'none';

type Action =
  | { type: 'SET_DATA'; payload: TableRowData[] }
  | { type: 'SORT'; payload: { key: SortKey; direction: SortDirection } };

export function tableDataReducer(state: ReducerState, action: Action): ReducerState {
  switch (action.type) {
    case 'SET_DATA':
      return {
        originalData: action.payload,
        sortedData: action.payload,
      };

    case 'SORT':
      const { key, direction } = action.payload;
      if (direction === 'none') {
        return { ...state, sortedData: [...state.originalData] };
      }

      const dataToSort = [...state.sortedData];
      dataToSort.sort((a, b) => {
        let aValue: any, bValue: any;
        if (key === 'user') {
          aValue = a.user?.name || '';
          bValue = b.user?.name || '';
        } else if (key === 'post') {
          aValue = a.post.title;
          bValue = b.post.title;
        } else { 
          aValue = a.comments.length;
          bValue = b.comments.length;
        }

        if (aValue < bValue) return direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return direction === 'ascending' ? 1 : -1;
        return 0;
      });

      return { ...state, sortedData: dataToSort };

    default:
      return state;
  }
}