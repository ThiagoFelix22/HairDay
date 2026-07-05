export type Period = 'manha' | 'tarde' | 'noite'

export type TimeSlot = {
  time: string
  available: boolean
  period: Period
}

export type Appointment = {
  id: string
  date: string
  time: string
  clientName: string
  period: Period
}
