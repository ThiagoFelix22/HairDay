import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { format } from 'date-fns'
import { type Appointment, type Period } from '@/types/appointment'

type AppointmentsStore = {
  appointments: Appointment[]
  addAppointment: (date: Date, time: string, clientName: string) => void
  removeAppointment: (id: string) => void
  getByDate: (date: Date) => Appointment[]
  getByDateAndPeriod: (date: Date, period: Period) => Appointment[]
}

export const useAppointments = create<AppointmentsStore>()(
  persist(
    (set, get) => ({
      appointments: [],

   addAppointment: (date, time, clientName) => {
   const hour = parseInt(time.split(':')[0])
   const period: Period = hour >= 19 ? 'noite' : hour >= 13 ? 'tarde' : 'manha'
   set((state) => ({
    appointments: [
      ...state.appointments,
      {
        id: crypto.randomUUID(),
        date: format(date, 'yyyy-MM-dd'),
        time,
        clientName: clientName.trim(),
        period,
      },
    ],
  }))
},

      removeAppointment: (id) =>
        set((state) => ({
          appointments: state.appointments.filter((a) => a.id !== id),
        })),

      getByDate: (date) => {
        const key = format(date, 'yyyy-MM-dd')
        return get().appointments.filter((a) => a.date === key)
      },

      getByDateAndPeriod: (date, period) =>
        get()
          .getByDate(date)
          .filter((a) => a.period === period),
    }),
    { name: 'hairday:appointments' }
  )
)
