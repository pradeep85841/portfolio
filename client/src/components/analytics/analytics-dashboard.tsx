import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiUsers, FiEye, FiDownload, FiGlobe, FiClock, FiBarChart, FiPieChart } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  resumeDownloads: number;
  avgSessionDuration: number;
  bounceRate: number;
  topPages: Array<{ page: string; views: number; percentage: number }>;
  trafficSources: Array<{ source: string; visitors: number; percentage: number }>;
  deviceTypes: Array<{ device: string; sessions: number; percentage: number }>;
  weeklyData: Array<{ day: string; views: number; visitors: number }>;
  monthlyData: Array<{ month: string; views: number; downloads: number }>;
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    fetchAnalyticsData();
  }, [timeRange]);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/analytics?range=${timeRange}`);
      const data = await response.json();
      setAnalyticsData(data);
    } catch (error) {
      console.error('Failed to fetch analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric"></div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No analytics data available</p>
      </div>
    );
  }

  const metricCards = [
    {
      title: "Page Views",
      value: formatNumber(analyticsData.pageViews),
      icon: FiEye,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      change: "+12.5%"
    },
    {
      title: "Unique Visitors",
      value: formatNumber(analyticsData.uniqueVisitors),
      icon: FiUsers,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      change: "+8.3%"
    },
    {
      title: "Resume Downloads",
      value: formatNumber(analyticsData.resumeDownloads),
      icon: FiDownload,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      change: "+15.7%"
    },
    {
      title: "Avg. Session Duration",
      value: formatDuration(analyticsData.avgSessionDuration),
      icon: FiClock,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      change: "+4.2%"
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h2>
          <p className="text-gray-400">Portfolio performance insights and metrics</p>
        </motion.div>
        
        <div className="flex gap-2">
          {['7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                timeRange === range
                  ? 'bg-electric text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {range === '7d' ? 'Last 7 Days' : range === '30d' ? 'Last 30 Days' : 'Last 90 Days'}
            </button>
          ))}
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="professional-card border-gray-700 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-green-400 bg-green-500/10">
                    {metric.change}
                  </Badge>
                </div>
                <h3 className="font-semibold text-gray-300 mb-2">{metric.title}</h3>
                <p className="text-2xl font-bold text-white">{metric.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Traffic Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="professional-card border-gray-700">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-white">
                <FiTrendingUp className="h-5 w-5 text-electric" />
                Weekly Traffic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={analyticsData.weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={{ fill: '#3B82F6', strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ fill: '#10B981', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="professional-card border-gray-700">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-white">
                <FiBarChart className="h-5 w-5 text-electric" />
                Top Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topPages.map((page, index) => (
                  <div key={page.page} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-electric/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-electric">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{page.page}</p>
                        <p className="text-gray-400 text-sm">{page.percentage}% of total views</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{formatNumber(page.views)}</p>
                      <p className="text-gray-400 text-sm">views</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Card className="professional-card border-gray-700">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-white">
                <FiGlobe className="h-5 w-5 text-electric" />
                Traffic Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={analyticsData.trafficSources}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name} ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="visitors"
                  >
                    {analyticsData.trafficSources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Device Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="professional-card border-gray-700">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-white">
                <FiPieChart className="h-5 w-5 text-electric" />
                Device Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={analyticsData.deviceTypes}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="device" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }} 
                  />
                  <Bar dataKey="sessions" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}