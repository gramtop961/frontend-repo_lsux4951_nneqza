import { motion } from 'framer-motion'

const SoftShadow = ({ className = '' }) => (
  <div className={`absolute inset-0 blur-2xl opacity-60 ${className}`} />
)

const Ornament = ({ x, y, size = 20, color = '#ef4444' }) => (
  <g transform={`translate(${x}, ${y})`}>
    <defs>
      <radialGradient id={`orn-${x}-${y}`} cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="40%" stopColor={color} stopOpacity="0.95" />
        <stop offset="100%" stopColor={color} />
      </radialGradient>
    </defs>
    <circle cx="0" cy="0" r={size/2} fill={`url(#orn-${x}-${y})`} />
    <circle cx={-size*0.1} cy={-size*0.2} r={size*0.12} fill="#fff" opacity="0.6" />
  </g>
)

const CandyCane = ({ x, y, scale = 1, rotate = 0 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotate})`}>
    <defs>
      <linearGradient id={`ccg-${x}-${y}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#fde68a" />
      </linearGradient>
    </defs>
    <path d="M 0 0 C 0 -30 30 -30 30 0 L 30 80 C 30 95 10 95 10 80 Z" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
    {Array.from({ length: 8 }).map((_, i) => (
      <path key={i} d={`M -5 ${i*12-5} L 35 ${i*12-20}`} stroke="#ef4444" strokeWidth="10" />
    ))}
    <path d="M -4 -6 C -4 -40 36 -40 36 -6" fill="url(#ccg-${x}-${y})" opacity="0.35" />
  </g>
)

const Gift = ({ x, y, w = 80, h = 60, color = '#10b981' }) => (
  <g transform={`translate(${x}, ${y})`}>
    <defs>
      <linearGradient id={`g-${x}-${y}`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
        <stop offset="100%" stopColor={color} />
      </linearGradient>
    </defs>
    <rect x={-w/2} y={-h} rx={16} ry={16} width={w} height={h} fill={`url(#g-${x}-${y})`} stroke="#0f172a" strokeOpacity="0.07" />
    <rect x={-w/8} y={-h} width={w/4} height={h} fill="#f59e0b" opacity="0.9" />
    <rect x={-w/2} y={-h+20} width={w} height={8} fill="#f59e0b" opacity="0.9" />
    {/* bow */}
    <ellipse cx="0" cy={-h} rx={16} ry={10} fill="#f59e0b" />
    <ellipse cx="18" cy={-h-4} rx={14} ry={9} fill="#f59e0b" />
    <ellipse cx="-18" cy={-h-4} rx={14} ry={9} fill="#f59e0b" />
  </g>
)

const Stocking = ({ x, y, scale = 1, color = '#ef4444' }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <path d="M 0 0 C 20 0 28 10 28 24 C 28 40 18 52 8 58 C -8 68 -20 58 -18 48 C -16 38 -6 40 4 36 C 10 34 14 28 14 20 C 14 10 8 2 0 0 Z" fill={color} />
    <rect x={-6} y={-10} width={36} height={14} rx={8} fill="#ffffff" />
    <circle cx={20} cy={-4} r={3} fill="#f59e0b" />
  </g>
)

const Star = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <defs>
      <radialGradient id={`sg-${x}-${y}`} cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#fff7cc" />
        <stop offset="100%" stopColor="#f59e0b" />
      </radialGradient>
    </defs>
    <path d="M 0 -20 L 6 -6 L 20 0 L 6 6 L 0 20 L -6 6 L -20 0 L -6 -6 Z" fill={`url(#sg-${x}-${y})`} />
  </g>
)

const Tree = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    {/* trunk */}
    <rect x={-18} y={40} width={36} height={36} rx={8} fill="#8b5cf6" opacity="0.15" />
    <rect x={-16} y={48} width={32} height={28} rx={8} fill="#8b5f26" />
    {/* layers */}
    <path d="M 0 -100 C 50 -100 80 -60 70 -40 C 80 -36 84 -20 60 -10 C 70 -4 70 20 40 26 C 44 36 20 40 0 40 C -20 40 -44 36 -40 26 C -70 20 -70 -4 -60 -10 C -84 -20 -80 -36 -70 -40 C -80 -60 -50 -100 0 -100 Z" fill="#10b981" />
    <path d="M 0 -88 C 40 -88 64 -54 56 -36 C 64 -32 66 -18 48 -10 C 56 -6 56 12 32 18 C 36 26 16 28 0 28 C -16 28 -36 26 -32 18 C -56 12 -56 -6 -48 -10 C -66 -18 -64 -32 -56 -36 C -64 -54 -40 -88 0 -88 Z" fill="#34d399" opacity="0.9" />
    {/* ornaments */}
    <Ornament x={-26} y={-18} size={18} color="#ef4444" />
    <Ornament x={24} y={-6} size={16} color="#f59e0b" />
    <Ornament x={-10} y={12} size={14} color="#3b82f6" />
    <Ornament x={18} y={-32} size={14} color="#eab308" />
    <Star x={0} y={-110} scale={1.2} />
  </g>
)

const Buddy = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    {/* body */}
    <ellipse cx={0} cy={20} rx={40} ry={36} fill="#fde68a" />
    <circle cx={0} cy={-10} r={28} fill="#fde68a" />
    {/* face */}
    <circle cx={-10} cy={-16} r={4} fill="#0f172a" />
    <circle cx={10} cy={-16} r={4} fill="#0f172a" />
    <path d="M -8 -4 Q 0 6 8 -4" stroke="#ef4444" strokeWidth={4} fill="none" strokeLinecap="round" />
    {/* hat */}
    <path d="M -30 -24 C -10 -44 24 -36 24 -20 C 24 -10 10 -10 -16 -10 C -24 -10 -30 -14 -30 -20 Z" fill="#ef4444" />
    <ellipse cx={-18} cy={-10} rx={26} ry={8} fill="#ffffff" />
    <circle cx={28} cy={-28} r={8} fill="#ffffff" />
    {/* scarf */}
    <rect x={-24} y={0} width={48} height={12} rx={6} fill="#22c55e" />
    <rect x={-8} y={10} width={14} height={18} rx={6} fill="#22c55e" />
  </g>
)

export default function CuteChristmasScene() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50" />
      {/* glow backdrop */}
      <SoftShadow className="bg-rose-300/20" />
      <SoftShadow className="bg-amber-300/20" />
      <SoftShadow className="bg-emerald-300/20" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <svg viewBox="0 0 900 520" className="w-full h-[520px]">
          {/* ground */}
          <defs>
            <radialGradient id="ground" cx="50%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#fef3c7" />
            </radialGradient>
          </defs>
          <ellipse cx="420" cy="460" rx="420" ry="70" fill="url(#ground)" opacity="0.9" />

          {/* left cluster: tree + gifts */}
          <Tree x={280} y={250} />
          <Gift x={190} y={360} w={90} h={70} color="#22c55e" />
          <Gift x={270} y={380} w={70} h={54} color="#ef4444" />
          <Gift x={340} y={370} w={76} h={60} color="#3b82f6" />

          {/* buddy center */}
          <Buddy x={460} y={280} />

          {/* stockings floating */}
          <Stocking x={560} y={120} scale={1.1} color="#ef4444" />
          <Stocking x={620} y={150} scale={0.9} color="#22c55e" />

          {/* candy canes */}
          <CandyCane x={120} y={340} scale={0.9} rotate={-12} />
          <CandyCane x={720} y={360} scale={1.1} rotate={10} />

          {/* scattered stars */}
          <Star x={120} y={100} scale={0.9} />
          <Star x={760} y={80} scale={0.7} />
          <Star x={680} y={220} scale={0.9} />
        </svg>
      </motion.div>
    </div>
  )
}
