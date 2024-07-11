import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInputs: () => void
    openGuestsInputs: () => void
}

export function DestinationAndDateStep ({
    closeGuestsInputs,
    isGuestsInputOpen,
    openGuestsInputs,
}: DestinationAndDateStepProps) {
   return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
    <div className='flex items-center gap-2 flex-1'>
        < MapPin className='size-5 text-zinc-400' />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
    </div>
    <div className='flex items-center gap-2'>
        < Calendar className='size-5 text-zinc-400' />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
    </div>

    <div className='w-px h-6 bg-zinc-800' />

    {isGuestsInputOpen ? (
        <button onClick={closeGuestsInputs} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-zinc-700 transition-all'>
            Alterar local/data
            <Settings2 className='size-5' />
        </button>
    ) : (
        <button onClick={openGuestsInputs} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-500 transition-all'>
            Continuar
            <ArrowRight className='size-5' />
        </button>
    )}
</div>
   )
}