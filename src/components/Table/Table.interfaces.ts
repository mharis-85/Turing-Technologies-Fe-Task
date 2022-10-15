import { ColumnType, DefaultRecordType } from "rc-table/lib/interface"
import { TableProps as RCTableProps } from "rc-table/lib/Table"

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>

export type Require<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export interface TableProps<T> extends Omit<RCTableProps<T>, "columns" | "dataSource"> {
  data: T[] | undefined
  columns?: Column<T>[]
}

export interface Column<T> extends ColumnType<T>, DefaultRecordType {
  dataIndex?: TKey<T> | string[]
  key?: TKey<T>
}

type TKey<T> = (keyof T & React.Key) | ""
