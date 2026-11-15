// grid de horários disponíveis

export interface TimeSlotGridProps {
  selected: string;
  onSelectTime: (time: string) => void;
}

export default function TimeSlotGrid({ selected, onSelectTime }: TimeSlotGridProps) {
   const timeSlots = {
      Manhã: ["09:00", "10:00", "11:00", "12:00"],
      Tarde: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      Noite: ["19:00", "20:00", "21:00"]
   }
    return(
         <>
        <span className="font-sans text-base/6 font-bold text-gray-200">Horários</span>
        <div className="space-y-3">
          {Object.entries(timeSlots).map(([period, slots]) => (
            <div key={period} className="flex flex-col gap-2">
              <p className="font-sans text-base/6 font-normal text-gray-200 mt-1">{period}</p>
              <div className="flex flex-wrap gap-2">
                {slots.map((slot) => (
                  <button key={slot} className={`w-fit py-2 px-5 rounded-lg border transition-colors cursor-pointer font-sans text-base/6 font-normal ${
    selected === slot
    ? 'border-yellow-600 text-black text-yellow' 
    : 'bg-gray-600 border-gray-500 text-gray-200 hover:bg-gray-500'
  }`} onClick={() => onSelectTime(slot)}>
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    )
}