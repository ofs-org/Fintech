import type React from 'react'
import { DateInputStyles, DateLabel } from './date-input-styles'

type IDateInput = React.ComponentProps<'input'> & {
  label: string
}

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <DateLabel htmlFor={label}>{label}</DateLabel>
      <DateInputStyles {...props} name={label} type="date" id={label} />
    </div>
  )
}

export default DateInput
