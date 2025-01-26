import { motion } from 'framer-motion';

const transition = (OgComponent) => {
  const WrappedComponent = () => (
    <motion.div
  initial={{ scale: 0.5, y: 0 , opacity: 0, x: -50 }}
  animate={{ scale: 1, opacity: 1, x: 0 }}
  exit={{ scale: 0.5, opacity: 0, x: 0,  }}
  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
>
  <OgComponent />
</motion.div>

  );

  // Add a display name for better debugging
  WrappedComponent.displayName = `Transition(${OgComponent.displayName || OgComponent.name || 'Component'})`;

  return WrappedComponent;
};

export default transition;
