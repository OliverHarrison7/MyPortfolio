import { motion } from 'framer-motion';

const statusCopy = {
  success: {
    label: 'Live data streaming',
    tone: 'success'
  },
  fallback: {
    label: 'Showing cached portfolio data',
    tone: 'warning'
  },
  loading: {
    label: 'Synchronising with API',
    tone: 'loading'
  },
  idle: {
    label: 'Preparing portfolio insights',
    tone: 'neutral'
  }
};

export function AnalyticsBar({ status }) {
  const { label, tone } = statusCopy[status] ?? statusCopy.idle;

  return (
    <motion.aside
      className={`analytics-bar analytics-bar--${tone}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <span className="analytics-bar__indicator" aria-hidden="true" />
      <p>{label}</p>
    </motion.aside>
  );
}
