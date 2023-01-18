import BalanceWidgetGraph from './BalanceWidgetGraph';

export default function BalanceWidgetContent() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-white px-6 py-8 shadow-xl md:min-w-[400px]">
      <span className="mb-3 space-x-4 text-xl font-semibold tracking-widest">
        Spending - Last 7 days
      </span>
      <BalanceWidgetGraph />
      <hr className="my-5" />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Total this month</span>
          <span className="text-3xl font-semibold">$478.33</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs font-semibold">+2.4%</span>
          <span className="text-xs text-gray-500">from last month</span>
        </div>
      </div>
    </div>
  );
}
