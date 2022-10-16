import { Call } from "../../services/calls"

export interface CallListProps {
  className?: string
  onEdit?: (value: Call) => void
  onRowClick?: (value: Call) => void
}
