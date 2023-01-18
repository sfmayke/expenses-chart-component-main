import BalanceWidgetContent from './BalanceWidgetContent';
import BalanceWidgetHeader from './BalanceWidgetHeader';

export default function BalanceWidget() {
  return (
    <div className="mx-auto grid h-screen w-screen items-center justify-center">
      <div className="flex flex-col gap-5">
        <BalanceWidgetHeader />
        <BalanceWidgetContent />
      </div>
    </div>
  );
}
