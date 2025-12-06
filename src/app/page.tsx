import { Aside } from "../components/shared/aside";
import { RightAside } from "../components/shared/rightaside";

export default function Home() {
  return (
    <div className="w-full h-full p-4 flex gap-8">
      <Aside />
      <RightAside />
    </div>
  );
}
