import { motion } from "framer-motion";
import AnalyticsDashboard from "@/components/analytics/analytics-dashboard";

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-deep-navy to-navy pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnalyticsDashboard />
        </motion.div>
      </div>
    </div>
  );
}