import Navbar from "../components/layout/Navbar";
import Domains from "../components/domains/Domains";

function DomainsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen bg-[#060D1D]">
        <Domains />
      </main>
    </>
  );
}

export default DomainsPage;