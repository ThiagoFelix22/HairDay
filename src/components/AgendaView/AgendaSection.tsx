// seção de um período (manhã / tarde / noite)
import { useAppointments } from "@/hooks/useAppointments";
import type { Appointment } from "@/types/appointment"
import AppointmentCard from "./AppointmentCard";

 export interface AgendaSectionProps {
   title: string,
   hours: string,
   icon:  React.ComponentType<{size?: number; className?: string}>,
   appointments: Appointment[],
}

export default function AgendaSection({ title, hours, icon: Icon, appointments }: AgendaSectionProps){
    const removeAppointment = useAppointments((s) => s.removeAppointment)
    return(
       <div>
            <div className="space-y-3">
              <section className="border rounded-lg border-gray-600">
                  <div className="px-5 py-3 flex items-center justify-between gap-6 border-b border-gray-600">
                    <div className="flex items-center gap-3">
                        <Icon size={18} className="text-yellow-400" />
                        <h2 className="font-sans text-sm/5 font-normal text-gray-300">{title}</h2>
                    </div>
                     <p className="font-sans text-base/6 font-normal text-gray-400">{hours}</p>
                  </div>
                   <div className="flex flex-col p-5 gap-0.5">
                     {appointments.length === 0 ?(
                     <p className="font-sans text-sm/5 font-normal text-gray-300">Nenhum agendamento para este periodo</p>
                     ): (         
                        appointments.map((appointment) => (
                            <AppointmentCard key={appointment.id} appointment={appointment} onRemove={removeAppointment} />
                        ))
                     )}
                   </div>
              </section>
            </div>
       </div>
    )
}