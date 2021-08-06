export enum LogType {
  Spend = 'Spend',
  Income = 'Income',
}

export interface Log {
  title: string;
  date: string;
  amount: number;
  type: LogType;
  categoryId: number;
}

export interface LogsState {
    logs: Log[];
    loading: {
      list: boolean;
      add: boolean;
    };
}

export const initialState: LogsState = {
  logs: [],
  loading: {
    list: false,
    add: false,
  },
};
