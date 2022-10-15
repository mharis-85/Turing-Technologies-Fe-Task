import { FC, useState } from "react"
import { AddNote } from "../../components/AddNote"
import { Option, Select } from "../../components/Select"
import { Call } from "../../services/calls"
import { CallsContainer } from "../CallsContainer"

import { DashboardProps } from "./Dashboard.interface"

export const Dashboard: FC<DashboardProps> = (props) => {
  const { className } = props

  const [filter, setFilter] = useState("")
  const [edit, setEdit] = useState<Call | undefined>(undefined)

  return (
    <main className={`${className} bg-white flex-grow p-5 space-y-3 flex flex-col`}>
      <section>
        <h3 className="text-2xl mb-10">Turing Technologies Frontend Test</h3>
        <div className="flex items-center space-x-2">
          <div>Filter by: </div>
          <Select
            className="min-w-[100px]"
            value={filter}
            onChange={(_, value) => value && setFilter(value as string)}
          >
            <Option value="" hidden>
              Status
            </Option>
            <Option value="10">All</Option>
            <Option value="20">Archive</Option>
            <Option value="30">UnArchive</Option>
          </Select>
        </div>
      </section>

      <CallsContainer onEdit={(val) => setEdit(val)} />

      <AddNote call={edit} onCancel={() => setEdit(undefined)} onSave={() => setEdit(undefined)} />
    </main>
  )
}
