import { motion } from 'framer-motion';

const transition = (OgComponent) => {
  const WrappedComponent = () => (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <OgComponent />
    </motion.div>
  );

  // Add a display name for better debugging
  WrappedComponent.displayName = `Transition(${OgComponent.displayName || OgComponent.name || 'Component'})`;

  return WrappedComponent;
};

export default transition;
