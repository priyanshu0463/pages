import { motion } from 'framer-motion';

const RouteConnector = ({ className = '', orientation = 'horizontal' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={orientation === 'horizontal' ? '200' : '40'}
        height={orientation === 'horizontal' ? '40' : '80'}
        viewBox={orientation === 'horizontal' ? '0 0 200 40' : '0 0 40 80'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {orientation === 'horizontal' ? (
          <>
            {/* Horizontal dotted line */}
            <motion.line
              x1="0"
              y1="20"
              x2="200"
              y2="20"
              stroke="#F2611E"
              strokeWidth="2"
              strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
            {/* Waypoint dots */}
            <motion.circle
              cx="60"
              cy="20"
              r="6"
              fill="#F2611E"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.3 }}
            />
            <motion.circle
              cx="140"
              cy="20"
              r="6"
              fill="#F2611E"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.3 }}
            />
          </>
        ) : (
          <>
            {/* Vertical dotted line */}
            <motion.line
              x1="20"
              y1="0"
              x2="20"
              y2="80"
              stroke="#F2611E"
              strokeWidth="2"
              strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
            {/* Waypoint dots */}
            <motion.circle
              cx="20"
              cy="20"
              r="6"
              fill="#F2611E"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.3 }}
            />
            <motion.circle
              cx="20"
              cy="60"
              r="6"
              fill="#F2611E"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.3 }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default RouteConnector;
