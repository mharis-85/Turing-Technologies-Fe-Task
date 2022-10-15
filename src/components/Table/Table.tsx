import RcTable from "rc-table"
import { DefaultRecordType } from "rc-table/lib/interface"
import { FC } from "react"

import { DataNotFound } from "../DataNotFound"
import { TableProps } from "./Table.interfaces"

const cell: FC<any> = (props) => {
  return <td {...props} className={`${props.className} h-16 px-4 py-2`} />
}

const headcell: FC<any> = (props) => {
  return (
    <td
      {...props}
      className={`${props.className} h-16 px-4 py-2 font-medium text-sm text-slate-900 border-b-2`}
    />
  )
}

export function Table<T extends DefaultRecordType>(props: TableProps<T>) {
  const { data, ...rest } = props

  return (
    <RcTable<T>
      components={{ body: { cell }, header: { cell: headcell } }}
      className="w-full"
      emptyText={<DataNotFound className="pt-10 pb-6" />}
      rowClassName="text-black py-20 hover:bg-gray-100 align-middle border-t"
      {...rest}
      data={data?.map((datum, index) => ({
        ...datum,
        key:
          (datum as T & { id?: string; key?: string }).key ??
          (datum as T & { id?: string; key?: string }).id ??
          index,
      }))}
    />
  )
}
