// components/Welcome/Welcome.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Title } from './Title';
import { ScrollIndicator } from './ScrollIndicator';

export const Welcome = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef} className="h-[200vh] relative">
      <motion.div
        style={{ opacity, scale, y }}
        className="fixed inset-0 min-h-screen bg-gradient-to-br from-blue-700 to-cyan-400 flex flex-col items-center justify-center p-4 overflow-hidden"
      >
        <Title />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-md tracking-widest text-orange-300 mb-10 font-sans mx-auto font-medium"
        >
          presupuestos personalizados para tus proyectos
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/presupuesto"
            className="bg-gradient-to-r from-white to-cyan-200 text-blue-800 text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all font-sans"
          >
            Comenzar
          </Link>
        </motion.div>

        <ScrollIndicator />
      </motion.div>

      <div className="absolute top-[100vh] w-full min-h-screen bg-gray-50">
        {/* Aquí cargamos la home completa */}
        <Link to="/presupuesto">
          <div className="text-center pt-20 text-gray-400 text-sm hover:underline">
            o ve directo al generador de presupuestos →
          </div>
        </Link>
      </div>
    </div>
  );
};
