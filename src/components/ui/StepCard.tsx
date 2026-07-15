import { IconType } from 'react-icons';

interface Step {
  icon: IconType;
  title: string;
  description: string;
}

interface StepCardProps {
  step: Step;
  index: number;
}

const StepCard = ({ step, index }: StepCardProps) => {
  const Icon = step.icon;

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-rose-100 bg-white/80 px-6 py-6 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 ">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 text-xl text-white shadow-lg shadow-rose-200/50">
          <Icon />
        </div>
        <span className="text-5xl font-black text-rose-100">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
      </div>
    </div>
  );
};

export default StepCard;