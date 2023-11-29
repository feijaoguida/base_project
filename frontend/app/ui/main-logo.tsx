import { GlobeAltIcon } from '@heroicons/react/24/outline';


export default function MainLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-themeorangeligth`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[26px]">BossBarber</p>
    </div>
  );
}
