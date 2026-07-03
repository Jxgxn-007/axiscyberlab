function HeroTerminal() {
  const logs = [
    "Initializing Axis Cyber Labs...",
    "Loading Kali Linux Environment...",
    "Burp Suite Ready",
    "Nmap Connected",
    "Wireshark Monitoring",
    "OWASP Labs Loaded",
    "Threat Intelligence Active",
  ];

  const tools = [
    "Burp Suite",
    "Nmap",
    "Wireshark",
    "OWASP ZAP",
    "Metasploit",
    "Hydra",
  ];

  return (
    <div className="w-full max-w-[560px] rounded-3xl overflow-hidden border border-[#223457] bg-[#0B1830] shadow-[0_0_40px_rgba(255,107,0,0.08)]">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#223457]">

        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
        </div>

        <span className="text-orange-500 text-sm font-mono">
          root@axis:~$
        </span>

      </div>

      {/* Terminal */}

      <div className="p-8 space-y-6 font-mono">

        {logs.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >
            <span className="text-orange-500">{">"}</span>

            <span className="text-gray-300">
              {item}
            </span>
          </div>
        ))}

        <div className="flex gap-3">

          <span className="text-orange-500">{">"}</span>

          <span className="text-orange-500 font-bold">
            SYSTEM ONLINE
          </span>

          <span className="w-3 bg-orange-500 animate-pulse"></span>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-[#223457] p-6">

        <p className="text-xs uppercase tracking-[5px] text-gray-500 mb-4">
          Industry Tools
        </p>

        <div className="flex flex-wrap gap-3">

          {tools.map((tool) => (
            <div
              key={tool}
              className="px-4 py-2 rounded-full border border-[#223457]
              bg-[#101A2D]
              text-orange-500
              hover:bg-orange-500
              hover:text-white
              transition-all
              duration-300
              cursor-pointer"
            >
              {tool}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default HeroTerminal;