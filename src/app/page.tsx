import { Aside } from "../components/shared/aside";
import { RightAside } from "../components/shared/rightaside";

export default function Home() {
  return (
    <div className="p-4 flex gap-8 flex-1">
      <Aside />
      <RightAside />
    </div>
  );
}
