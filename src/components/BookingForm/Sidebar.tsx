  // formulário de agendamento
  import { Label } from "@/components/ui/label"
  import { Calendar } from "lucide-react"
  import TimeSlotGrid from "./TimeSlotGrid"
  import { useState } from "react"
  import { SquareUserRound } from 'lucide-react';
  import { useAppointments } from "@/hooks/useAppointments"
  export default function Sidebar() {
    const [selectedTime, setSelectedTime] = useState("")
    const [clienteName, setClienteName] = useState("")
    const [date, setDate] = useState("")
    const addAppointment = useAppointments((s) => s.addAppointment)
   function handleSubmit(){
      if (!date || !selectedTime || !clienteName.trim()) return
     addAppointment(new Date(date + 'T12:00:00'), selectedTime, clienteName)
     setSelectedTime("")
      setClienteName("")
      setDate("")
      
   }

      return (
          <div className="p-20 bg-gray-700 rounded-xl max-w-124.5 w-full flex flex-col gap-6">
              <div className="space-y-1 w-full">
                <h2 className="font-sans text-2xl/8 font-bold text-gray-100">Agende um atendimento</h2>
                <p className="font-sans text-sm/5 font-normal text-gray-300">
                  Selecione data, horário e informe o nome do cliente para criar o agendamento
                </p>
              </div>
              <div>
                <form className="space-y-8">
                <Label className="flex flex-col gap-2 w-full">
                <span className="font-sans text-base/6 font-bold text-gray-200">Data</span>
                <div className="cursor-pointer focus-within:border-yellow-500 transition-colors rounded-xl border border-gray-500 flex items-center gap-2 px-3 py-2">
                <Calendar size={16} className="text-yellow-500" />
                <input
                type="date"
                className="bg-transparent text-white text-sm flex-1 outline-none"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                />
                </div>
              </Label>
              </form>
              
              </div>
              <TimeSlotGrid selected={selectedTime} onSelectTime={setSelectedTime} />
              
              <Label className="flex flex-col gap-2 w-full">
                  <p className="font-sans text-base/6 font-bold text-gray-200">Cliente</p>
                  <Label className="has-[:focus]:border-yellow-dark trasition-colors p-3 rounded-xl border border-gray-500 flex items-center justify-center gap-2">
                  <SquareUserRound size={16} className="text-yellow-500" />
                    <input type="text"
                    placeholder="Helena Souza"
                    name="cliente"
                    value={clienteName}
                    onChange={(e) => setClienteName(e.target.value)}
                    className="font-sans text-base/6 font-normal w-full outline-none text-gray-200"
                    />
                  </Label>
                      <button onClick={handleSubmit} className="flex items-center justify-center cursor-pointer w-full select-none transition-colors py-4.5 px-6 bg-yellow border-2 border-transparent rounded-lg hover:border-yellow-light " type="submit">
                      <p className="font-sans text-sm/5 font-bold text-gray-900 uppercase">Agendar</p>
                    </button>
              </Label>
          </div>
      )
  }