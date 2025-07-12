import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }
      
      // Log the contact form submission (in production, you'd save to database or send email)
      console.log("Contact form submission:", { name, email, message });
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  // Analytics endpoint
  app.get("/api/analytics", async (req, res) => {
    try {
      const range = req.query.range as string || '7d';
      
      // Generate mock analytics data (in production, this would come from Google Analytics or similar)
      const analyticsData = generateAnalyticsData(range);
      
      res.json(analyticsData);
    } catch (error) {
      console.error("Analytics error:", error);
      res.status(500).json({ error: "Failed to fetch analytics data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

function generateAnalyticsData(range: string) {
  const multiplier = range === '7d' ? 1 : range === '30d' ? 4 : 12;
  
  return {
    pageViews: Math.floor(Math.random() * 5000 * multiplier) + 1000,
    uniqueVisitors: Math.floor(Math.random() * 2000 * multiplier) + 500,
    resumeDownloads: Math.floor(Math.random() * 200 * multiplier) + 50,
    avgSessionDuration: Math.floor(Math.random() * 300) + 120,
    bounceRate: Math.floor(Math.random() * 30) + 25,
    topPages: [
      { page: "Home", views: Math.floor(Math.random() * 1000) + 500, percentage: 35 },
      { page: "Projects", views: Math.floor(Math.random() * 800) + 400, percentage: 28 },
      { page: "Experience", views: Math.floor(Math.random() * 600) + 300, percentage: 20 },
      { page: "Skills", views: Math.floor(Math.random() * 400) + 200, percentage: 12 },
      { page: "Contact", views: Math.floor(Math.random() * 200) + 100, percentage: 5 }
    ],
    trafficSources: [
      { source: "Direct", visitors: Math.floor(Math.random() * 500) + 200, percentage: 40 },
      { source: "LinkedIn", visitors: Math.floor(Math.random() * 300) + 150, percentage: 30 },
      { source: "Google", visitors: Math.floor(Math.random() * 200) + 100, percentage: 20 },
      { source: "GitHub", visitors: Math.floor(Math.random() * 100) + 50, percentage: 7 },
      { source: "Other", visitors: Math.floor(Math.random() * 50) + 25, percentage: 3 }
    ],
    deviceTypes: [
      { device: "Desktop", sessions: Math.floor(Math.random() * 600) + 300, percentage: 60 },
      { device: "Mobile", sessions: Math.floor(Math.random() * 300) + 200, percentage: 30 },
      { device: "Tablet", sessions: Math.floor(Math.random() * 100) + 50, percentage: 10 }
    ],
    weeklyData: [
      { day: "Mon", views: Math.floor(Math.random() * 200) + 100, visitors: Math.floor(Math.random() * 100) + 50 },
      { day: "Tue", views: Math.floor(Math.random() * 250) + 120, visitors: Math.floor(Math.random() * 120) + 60 },
      { day: "Wed", views: Math.floor(Math.random() * 300) + 150, visitors: Math.floor(Math.random() * 150) + 70 },
      { day: "Thu", views: Math.floor(Math.random() * 280) + 140, visitors: Math.floor(Math.random() * 140) + 65 },
      { day: "Fri", views: Math.floor(Math.random() * 320) + 160, visitors: Math.floor(Math.random() * 160) + 80 },
      { day: "Sat", views: Math.floor(Math.random() * 180) + 90, visitors: Math.floor(Math.random() * 90) + 45 },
      { day: "Sun", views: Math.floor(Math.random() * 150) + 80, visitors: Math.floor(Math.random() * 80) + 40 }
    ],
    monthlyData: [
      { month: "Jan", views: Math.floor(Math.random() * 2000) + 1000, downloads: Math.floor(Math.random() * 50) + 25 },
      { month: "Feb", views: Math.floor(Math.random() * 2200) + 1100, downloads: Math.floor(Math.random() * 60) + 30 },
      { month: "Mar", views: Math.floor(Math.random() * 2400) + 1200, downloads: Math.floor(Math.random() * 70) + 35 }
    ]
  };
}
