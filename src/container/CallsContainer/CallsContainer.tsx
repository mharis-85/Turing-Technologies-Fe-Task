import { DataGrid, GridColumns, GridToolbar } from "@mui/x-data-grid"
import React, { FC, useState } from "react"
import { Call, useGetCallQuery } from "../../services/calls"

import { CallsContainerProps } from "./CallsContainer.interface"

const VISIBLE_FIELDS: (keyof Call)[] = [
  "call_type",
  "direction",
  "duration",
  "from",
  "to",
  "via",
  "created_at",
  "is_archived",
]
const PAGESIZE = [5, 10, 20]

export const CallsContainer: FC<CallsContainerProps> = (props) => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(PAGESIZE[0])

  const calls = useGetCallQuery({ limit: pageSize, offset: page * pageSize })

  const col: GridColumns<Call> = [
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "call_type",
      headerName: "Call Type",
      sortable: true,
      flex: 1,
      filterable: true,
    },
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "direction",
      headerName: "Direction",
      sortable: true,
      flex: 1,
      filterable: true,
    },
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "duration",
      headerName: "Duration",
      sortable: true,
      flex: 1,
      filterable: true,
    },
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "from",
      headerName: "From",
      sortable: true,
      flex: 1,
      filterable: true,
    },
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "to",
      headerName: "To",
      sortable: true,
      flex: 1,
      filterable: true,
    },
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "via",
      headerName: "Via",
      sortable: true,
      flex: 1,
      filterable: true,
    },
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "created_at",
      headerName: "Created At",
      sortable: true,
      flex: 1,
      filterable: true,
    },
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "is_archived",
      headerName: "Status",
      sortable: true,
      flex: 1,
      filterable: true,
    },
  ]

  const columns = React.useMemo(
    () => col.filter((column) => VISIBLE_FIELDS.includes(column.field as keyof Call)),
    [col]
  )

  return (
    <div className="flex-grow">
      <DataGrid<Call>
        autoHeight
        loading={calls.isFetching}
        rows={calls.data?.nodes ?? []}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: { showQuickFilter: true, quickFilterProps: { debounceMs: 500 } },
        }}
        pageSize={pageSize}
        page={page}
        paginationMode="server"
        onPageChange={(page) => setPage(page)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={PAGESIZE}
        pagination
        rowCount={calls.data?.totalCount}
      />
    </div>
  )
}
