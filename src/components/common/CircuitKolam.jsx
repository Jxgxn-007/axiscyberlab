function CircuitKolam({
  className = "",
  rotate = false,
}) {
  return (
    <div
      className={`absolute pointer-events-none select-none ${
        rotate ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
      >
        {/* Lines */}

        <g
          stroke="#F97316"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.18"
        >
          <path d="M40 40 H140 V90 H220 V40 H280" />

          <path d="M40 160 H100 V230 H200 V160 H280" />

          <path d="M40 280 H140 V230 H220 V280 H280" />

          <path d="M40 40 V160 V280" />

          <path d="M160 90 V160 V230" />

          <path d="M280 40 V160 V280" />
        </g>

        {/* Dots */}

        <g fill="#F97316" opacity="0.25">
          {[
            [40,40],[140,40],[220,40],[280,40],
            [40,160],[100,160],[200,160],[280,160],
            [40,280],[140,280],[220,280],[280,280],
            [160,90],[160,230]
          ].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="4"/>
          ))}
        </g>

        {/* Diamond */}

        <g
          stroke="#F97316"
          strokeWidth="2"
          opacity="0.18"
        >
          <path d="M160 120 L185 145 L160 170 L135 145 Z" />
        </g>

      </svg>
    </div>
  );
}

export default CircuitKolam;