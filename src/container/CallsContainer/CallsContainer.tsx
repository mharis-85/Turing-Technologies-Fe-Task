import { Button } from "@mui/material"
import { DataGrid, GridColumns, GridToolbar } from "@mui/x-data-grid"
import { intervalToDuration } from "date-fns"
import React, { FC, useState } from "react"
import { Call, useGetCallsQuery } from "../../services/calls"

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
  "notes",
]
const PAGESIZE = [5, 10, 20]

export const CallsContainer: FC<CallsContainerProps> = (props) => {
  const { onEdit } = props
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(PAGESIZE[0])

  const calls = useGetCallsQuery({ limit: pageSize, offset: page * pageSize })

  const col: GridColumns<Call> = [
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "call_type",
      headerName: "Call Type",
      renderCell: ({ value, row }) => {
        if (row.call_type === "answered") return <span className="text-cyan-500">Answered</span>
        if (row.call_type === "missed") return <span className="text-red-500">Missed</span>
        if (row.call_type === "voicemail") return <span className="text-primary">Voice mail</span>
        return value
      },
      sortable: true,
      flex: 1,
      filterable: true,
    },
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "direction",
      cellClassName: "text-primary",
      headerName: "Direction",
      sortable: true,
      flex: 1,
      filterable: true,
    },
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "duration",
      renderCell: ({ value, row }) => {
        const duration = intervalToDuration({ start: 0, end: value * 1000 })
        let str = ""
        if (duration.years) str += ` ${duration.years} year${duration.years > 1 ? "s" : ""}`
        if (duration.days) str += ` ${duration.days} day${duration.days > 1 ? "s" : ""}`
        if (duration.hours) str += ` ${duration.hours} hour${duration.hours > 1 ? "s" : ""}`
        if (duration.minutes) str += ` ${duration.minutes} minute${duration.minutes > 1 ? "s" : ""}`
        if (duration.months) str += ` ${duration.months} month${duration.months > 1 ? "s" : ""}`
        return (
          <div className="whitespace-normal">
            <div>{str}</div>
            <div className="text-primary">({value} seconds)</div>
          </div>
        )
      },
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
      renderCell: ({ value }) => new Date(value).toLocaleDateString(),
      flex: 1,
      filterable: true,
    },
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "is_archived",
      headerName: "Status",
      renderCell: ({ value }) => {
        if (value) return <div className="py-2 px-5 bg-cyan-100 text-cyan-600">Archived</div>
        return <div className="py-2 px-5 bg-slate-200">UnArchived</div>
      },
      sortable: true,
      flex: 1,
      filterable: true,
    },
    {
      headerClassName: "bg-slate-200 uppercase font-bold",
      field: "notes",
      headerName: "Actions",
      renderCell: ({ row }) => (
        <Button variant="contained" onClick={() => onEdit?.(row)}>
          Add Note
        </Button>
      ),
      sortable: false,
      flex: 1,
      filterable: false,
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
        isRowSelectable={() => false}
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
