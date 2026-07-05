// painel direito com a agenda do dia
import { SunHorizonIcon, CloudSunIcon, MoonStarsIcon } from "@phosphor-icons/react"
import { Calendar } from "lucide-react"
import AgendaSection from "./AgendaSection"
import { useState } from "react"
import { format } from "date-fns"
import { useAppointments } from "@/hooks/useAppointments"
export default function AgendaView() {
    const appointments = useAppointments((s) => s.appointments)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const getByDateAndPeriod = (date: Date, period: string) => {
  const key = format(date, 'yyyy-MM-dd')
  return appointments.filter((a) => a.date === key && a.period === period)
}
    return (
        <div className="mx-auto flex flex-col gap-8 max-w-170.5 w-full py-20">
            <div className="flex justify-between gap-6">
               <div className="flex  flex-col gap-1">
                 <h2 className="font-sans text-2xl/8 font-bold text-gray-100">Sua agenda</h2>
                  <p className="text-sm/5 font-normal text-gray-300">Consulte os seus cortes de cabelo agendados por dia</p>
               </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer focus-within:border-yellow-dark transition-colors p-3 rounded-xl border border-gray-500">
                  <Calendar size={20} className="mb-0.5 text-yellow"/>
                 <input type="date" 
                 className=
                 "font-sans text-base/6 font-normal bg-transparent outline-none border-none text-gray-200 outline-none w-full" value={format(selectedDate, "yyyy-MM-dd")} onChange={(e) => setSelectedDate(new Date(e.target.value + "T12:00:00"))}/>
                </div>
            </div>
            <AgendaSection title="Manhã" hours="9h-12h" icon={SunHorizonIcon} appointments={(getByDateAndPeriod(selectedDate, "manha"))} />
            <AgendaSection title="Tarde" hours="13h-18h" icon={CloudSunIcon} appointments={(getByDateAndPeriod(selectedDate, "tarde"))} />
            <AgendaSection title="Noite" hours="19h-21h" icon={MoonStarsIcon} appointments={(getByDateAndPeriod(selectedDate, "noite"))} />
        </div>
    )
}