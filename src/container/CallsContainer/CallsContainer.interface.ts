import { Call } from "../../services/calls"

export interface CallsContainerProps {
  className?: string
  onEdit?: (value: Call) => void
  onRowClick?: (value: Call) => void
}
