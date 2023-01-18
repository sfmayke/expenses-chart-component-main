export default function BalanceWidgetHeader() {
  return (
    <div className="flex justify-between rounded-xl bg-orange p-5 text-white shadow-xl">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-light">My Balance</span>
        <span className="text-xl font-semibold">$ 921.48</span>
      </div>
      <div className="flex items-center">
        <span className="absolute -m-4 inline-block h-7 w-7 rounded-full border-[1.9px] border-white"></span>
        <span className="inline-block h-7 w-7 rounded-full bg-black"></span>
      </div>
    </div>
  );
}
