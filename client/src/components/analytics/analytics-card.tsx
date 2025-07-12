import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface AnalyticsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  change: string;
  delay?: number;
}

export default function AnalyticsCard({
  title,
  value,
  icon: Icon,
  color,
  bgColor,
  change,
  delay = 0
}: AnalyticsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="professional-card border-gray-700 hover-lift">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${bgColor}`}>
              <Icon className={`h-6 w-6 ${color}`} />
            </div>
            <Badge variant="secondary" className="text-green-400 bg-green-500/10">
              {change}
            </Badge>
          </div>
          <h3 className="font-semibold text-gray-300 mb-2">{title}</h3>
          <p className="text-2xl font-bold text-white">{value}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}