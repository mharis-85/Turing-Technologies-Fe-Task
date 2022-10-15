import { Call } from "../../services/calls"

export interface AddNoteProps {
  className?: string
  call?: Call
  onCancel: (value?: Call) => void
  onSave: (value?: Call) => void
}

export interface FormState {
  content: string
}
