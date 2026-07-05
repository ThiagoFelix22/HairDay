// card individual de um agendamento

import type { Appointment } from "@/types/appointment";
import { TrashIcon } from "@phosphor-icons/react";

interface AppointmentCardProps {
    appointment: Appointment;
    onRemove: (id: string) => void;
}


export default function AppointmentCard({appointment, onRemove}: AppointmentCardProps) {
     return(
      <div>
        <div className="flex items-center justify-between gap-5 py-1">
        <span className="font-bold text-gray-200 font-sans text-base/6">{appointment.time}</span>
        <span className="font-normal text-gray-200 font-sans text-base/6 w-full">{appointment.clientName}</span>
       <button onClick={() => onRemove(appointment.id)}>
       <TrashIcon size={16} className={`size-full transition-colors cursor-pointer text-yellow hover:fill-yellow-dark`} />
       </button>
       </div>
      </div>
     )
}