import CounterState from "@/components/counter-state";
import IncrementButton from "@/components/increment-button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <CounterState />
      <IncrementButton />
    </div>
  );
}
