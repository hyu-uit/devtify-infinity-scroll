import React from 'react';
import type { STATES } from '../../../constants/enums';
import { STATES as STATESEnum } from '../../../constants/enums';

interface StateBadgeProps {
  state: STATES;
}

const StateBadge: React.FC<StateBadgeProps> = ({ state }) => {
  const getStatusClasses = (state: STATES) => {
    switch (state) {
      case STATESEnum.LA:
        return 'bg-red-100 text-red-600 border border-red-200';
      case STATESEnum.MN:
        return 'bg-blue-100 text-blue-600 border border-blue-200';
      case STATESEnum.KS:
        return 'bg-green-100 text-green-600 border border-green-200';
      case STATESEnum.MO:
        return 'bg-yellow-100 text-yellow-600 border border-yellow-200';
      case STATESEnum.PA:
        return 'bg-purple-100 text-purple-600 border border-purple-200';
      case STATESEnum.SD:
        return 'bg-emerald-100 text-emerald-600 border border-emerald-200';
      case STATESEnum.CT:
        return 'bg-red-100 text-red-600 border border-red-200';
      case STATESEnum.CA:
        return 'bg-sky-100 text-sky-600 border border-sky-200';
      case STATESEnum.MS:
        return 'bg-yellow-100 text-yellow-600 border border-yellow-200';
      case STATESEnum.TN:
        return 'bg-pink-100 text-pink-600 border border-pink-200';
      case STATESEnum.ND:
        return 'bg-green-100 text-green-600 border border-green-200';
      case STATESEnum.WA:
        return 'bg-slate-100 text-slate-600 border border-slate-200';
      case STATESEnum.KY:
        return 'bg-orange-100 text-orange-600 border border-orange-200';
      case STATESEnum.CO:
        return 'bg-cyan-100 text-cyan-600 border border-cyan-200';
      case STATESEnum.OR:
        return 'bg-gray-100 text-gray-600 border border-gray-200';
      case STATESEnum.FL:
        return 'bg-violet-100 text-violet-600 border border-violet-200';
      case STATESEnum.RI:
        return 'bg-lime-100 text-lime-600 border border-lime-200';
      default:
        return 'bg-gray-100 text-gray-600 border border-gray-200';
    }
  };

  const classes = getStatusClasses(state);

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium capitalize inline-block text-center min-w-[80px] ${classes}`}
    >
      {state}
    </span>
  );
};

export default StateBadge;
