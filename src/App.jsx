import { motion } from 'framer-motion'
import CuteChristmasScene from './components/CuteChristmasScene'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-amber-100 to-emerald-100 relative overflow-hidden">
      {/* soft lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-300/40 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-emerald-300/40 blur-3xl rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-amber-300/30 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        {/* Hero content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <CuteChristmasScene />
          </div>

          <div className="order-1 lg:order-2">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-rose-900"
            >
              Natal fofinho em 3D, perfeito para a sua loja online
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="mt-4 text-rose-700/90 text-lg"
            >
              Uma cena com estilo clay/soft 3D, cores vibrantes em vermelho, verde e dourado, texturas macias e iluminação acolhedora. Espaço dedicado para seu texto ou chamada de compra.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-rose-600 text-white font-semibold shadow-md shadow-rose-600/20 hover:bg-rose-700 transition-colors">
                Ver Coleção
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-400 text-rose-900 font-semibold shadow-md shadow-amber-500/30 hover:bg-amber-300 transition-colors">
                Presentes em Destaque
              </a>
            </motion.div>

            {/* space for custom text */}
            <div className="mt-10 p-4 rounded-2xl bg-white/70 backdrop-blur border border-rose-200/50">
              <p className="text-rose-900/80">
                Seu texto aqui — promoções, mensagem de boas-vindas ou chamada para ação. O layout deixa um espaço amplo e limpo para comunicar sua oferta de Natal de forma amigável e festiva.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer hint */}
      <div className="relative z-10 pb-10 text-center text-rose-900/60">
        Feito com carinho para transmitir alegria natalina.
      </div>
    </div>
  )
}

export default App
