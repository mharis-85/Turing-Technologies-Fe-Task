import { FC, useState } from "react"
import { CallDetail } from "../../components/CallDetail"
import { Option, Select } from "../../components/Select"
import { Call } from "../../services/calls"
import { CallsContainer } from "../CallsContainer"

import { DashboardProps } from "./Dashboard.interface"

export const Dashboard: FC<DashboardProps> = (props) => {
  const { className } = props

  const [filter, setFilter] = useState("")
  const [selected, setSelected] = useState<(Call & { edit?: boolean }) | undefined>(undefined)

  return (
    <main className={`${className} bg-white flex-grow p-5 space-y-3 flex flex-col`}>
      <section>
        <h3 className="text-2xl mb-10">Turing Technologies Frontend Test</h3>
        // This one isnt working: how can we expect to filter on server side without querypram
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

      <CallsContainer
        onEdit={(val) => setSelected({ ...val, edit: true })}
        onRowClick={(val) => setSelected({ ...val, edit: false })}
      />

      <CallDetail
        call={selected}
        onCancel={() => setSelected(undefined)}
        onSave={() => setSelected(undefined)}
      />
    </main>
  )
}
