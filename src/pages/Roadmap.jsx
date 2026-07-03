import Navbar from "../components/layout/Navbar";
import Roadmap from "../components/roadmap/Roadmap";

function RoadmapPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen bg-[#060D1D]">
        <Roadmap />
      </main>
    </>
  );
}

export default RoadmapPage;