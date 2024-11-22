import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, BookOpen } from 'lucide-react';

const TeacherAnalysisDashboard = () => {
  const teacherData = [
    { month: 'Jan', submissions: 65, feedback: 45 },
    { month: 'Feb', submissions: 72, feedback: 52 },
    { month: 'Mar', submissions: 85, feedback: 68 },
    { month: 'Apr', submissions: 78, feedback: 62 }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          Teacher Analysis Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={teacherData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="submissions" stroke="#2563eb" name="Submissions" />
              <Line type="monotone" dataKey="feedback" stroke="#16a34a" name="Feedback" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const AnonymousAnalysisDashboard = () => {
  const anonymousData = [
    { week: 'Week 1', visits: 120, interactions: 45 },
    { week: 'Week 2', visits: 145, interactions: 65 },
    { week: 'Week 3', visits: 135, interactions: 55 },
    { week: 'Week 4', visits: 160, interactions: 75 }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          Anonymous Analysis Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={anonymousData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visits" stroke="#dc2626" name="Visits" />
              <Line type="monotone" dataKey="interactions" stroke="#7c3aed" name="Interactions" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">DDE Math Analysis Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <TeacherAnalysisDashboard />
          <AnonymousAnalysisDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;