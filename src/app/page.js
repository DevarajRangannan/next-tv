import Rail from "./components/Rail";
import SideNavBar from "./components/SideNavBar";

export default function Home() {
  return (
    <main className="flex">
      {<SideNavBar/>}
      <div className="overflow-hidden w-[95vw]">
        {<Rail/>}
      </div>
    </main>
  );
}
