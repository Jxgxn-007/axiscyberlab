import Navbar from "../components/layout/Navbar";
import Tools from "../components/tools/Tools";

function ToolsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen bg-[#060D1D]">
        <Tools />
      </main>
    </>
  );
}

export default ToolsPage;