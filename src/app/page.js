import LeftSide from "./components/LeftSide";

export default function Home() {
  return (
    <main className="grid grid-cols-2">
      {<LeftSide/>}
    </main>
  );
}
