function AxisDivider() {
  return (
    <div className="flex justify-center py-16 select-none">

      <svg
        width="320"
        height="90"
        viewBox="0 0 320 90"
      >

        {/* Horizontal */}

        <line
          x1="0"
          y1="45"
          x2="110"
          y2="45"
          stroke="#F97316"
          strokeWidth="2"
          opacity=".35"
        />

        <line
          x1="210"
          y1="45"
          x2="320"
          y2="45"
          stroke="#F97316"
          strokeWidth="2"
          opacity=".35"
        />

        {/* Kolam Circuit */}

        <g
          stroke="#F97316"
          strokeWidth="2"
          fill="none"
          opacity=".65"
        >

          <path d="M135 20 H185 V70 H135 Z"/>

          <path d="M135 20 L185 70"/>

          <path d="M185 20 L135 70"/>

        </g>

        {/* Nodes */}

        <g fill="#F97316">

          <circle cx="135" cy="20" r="3"/>

          <circle cx="185" cy="20" r="3"/>

          <circle cx="135" cy="70" r="3"/>

          <circle cx="185" cy="70" r="3"/>

          <circle cx="160" cy="45" r="5"/>

        </g>

      </svg>

    </div>
  );
}

export default AxisDivider;