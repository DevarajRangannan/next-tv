import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default function Home() {
  return (
    <main className="grid grid-cols-2">
      {<LeftSide/>}
      {<RightSide/>}
    </main>
  );
}
