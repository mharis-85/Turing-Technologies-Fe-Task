import { Call } from "../../services/calls"

export interface CallDetailProps {
  className?: string
  call?: Call & { edit?: boolean }
  onCancel: (value?: Call) => void
  onSave: (value?: Call) => void
}

export interface FormState {
  content: string
}
