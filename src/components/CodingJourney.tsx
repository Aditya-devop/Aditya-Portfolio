
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code, Trophy, Target, Calendar, ExternalLink, Award } from 'lucide-react';

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  contestRating: number;
  contestRanking: number;
}

interface GFGStats {
  totalSolved: number;
  codingscore: number;
  instituteRank: number;
}

interface ActivityData {
  date: string;
  count: number;
}

const CodingJourney = () => {
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(null);
  const [gfgStats, setGFGStats] = useState<GFGStats | null>(null);
  const [leetcodeActivity, setLeetcodeActivity] = useState<ActivityData[]>([]);
  const [gfgActivity, setGFGActivity] = useState<ActivityData[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock badges data
  const badges = [
    {
      id: 1,
      name: "100 Days Badge",
      image: "/badges/badge1.png",
      platform: "LeetCode",
      description: "Solved problems for 100 consecutive days"
    },
    {
      id: 2,
      name: "50 Days Badge",
      image: "/badges/badge2.png",
      platform: "LeetCode",
      description: "Solved problems for 100 consecutive days"
    },{
      id: 3,
      name: " ",
      image: "/badges/badge3.png",
      platform: "LeetCode",
      description: "Completed June all Daily Leetcoding challenges"
    },{
      id: 4,
      name: "",
      image: "/badges/badge4.png",
      platform: "LeetCode",
      description: "Completed May all Daily Leetcoding challenges"
    },{
      id: 5,
      name: "",
      image: "/badges/badge5.png",
      platform: "LeetCode",
      description: "Completed April all Daily Leetcoding challenges"
    },
  ];

  useEffect(() => {
    fetchCodingData();
  }, []);

  const fetchCodingData = async () => {
    try {
      // Mock data for demonstration - in a real implementation, you'd use APIs
      // LeetCode API is not publicly available, so we'll use mock data
      
      // Simulated LeetCode data
      const mockLeetCodeStats: LeetCodeStats = {
        totalSolved: 350,
        easySolved: 118,
        mediumSolved: 179,
        hardSolved: 42,
        contestRating: 1680,
        contestRanking: 101
      };

      // Simulated GFG data
      const mockGFGStats: GFGStats = {
        totalSolved: 80,
        codingscore: 250,
        instituteRank: 2006
      };

      // Generate mock activity data for the past year
      const generateActivityData = (baseSolvedCount: number): ActivityData[] => {
        const data: ActivityData[] = [];
        const startDate = new Date();
        startDate.setFullYear(startDate.getFullYear() - 1);
        
        for (let i = 0; i < 365; i++) {
          const date = new Date(startDate);
          date.setDate(startDate.getDate() + i);
          const count = Math.random() > 0.7 ? Math.floor(Math.random() * 5) + 1 : 0;
          data.push({
            date: date.toISOString().split('T')[0],
            count
          });
        }
        return data;
      };

      setLeetcodeStats(mockLeetCodeStats);
      setGFGStats(mockGFGStats);
      setLeetcodeActivity(generateActivityData(450));
      setGFGActivity(generateActivityData(320));
      
    } catch (error) {
      console.error('Error fetching coding data:', error);
    } finally {
      setLoading(false);
    }
  };

  const ActivityCalendar = ({ data, platform }: { data: ActivityData[], platform: string }) => {
    const getIntensityColor = (count: number) => {
      if (count === 0) return 'bg-muted';
      if (count <= 2) return 'bg-green-200';
      if (count <= 4) return 'bg-green-400';
      return 'bg-green-600';
    };

    // Group data by months
    const monthsData = data.reduce((acc, day) => {
      const date = new Date(day.date);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      
      if (!acc[monthKey]) {
        acc[monthKey] = [];
      }
      acc[monthKey].push(day);
      return acc;
    }, {} as Record<string, ActivityData[]>);

    const months = Object.keys(monthsData).sort().slice(-12); // Show last 12 months

    const getMonthName = (monthKey: string) => {
      const [year, month] = monthKey.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1);
      return date.toLocaleDateString('en-US', { month: 'short' });
    };

    const getPlatformLink = (platform: string) => {
      const links = {
        'LeetCode': 'https://leetcode.com/u/adityashriwal/',
        'GeeksforGeeks': 'https://geeksforgeeks.org/user/your-profile/',
        // 'CodeChef': 'https://codechef.com/users/your-profile',
        // 'HackerRank': 'https://hackerrank.com/your-profile'
      };
      return links[platform as keyof typeof links] || '#';
    };

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-4">
          <h4 className="text-sm font-medium text-muted-foreground">{platform} Activity</h4>
          <a
            href={getPlatformLink(platform)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            View Profile
          </a>
        </div>
        <div className="flex justify-center">
          <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 w-fit">
            <div className="flex flex-wrap justify-center gap-6">
              {months.map((monthKey) => {
                const monthData = monthsData[monthKey] || [];
                // Group days by weeks within the month
                const weeks: ActivityData[][] = [];
                for (let i = 0; i < monthData.length; i += 7) {
                  weeks.push(monthData.slice(i, i + 7));
                }

                return (
                  <div key={monthKey} className="space-y-2 flex-shrink-0">
                    <div className="text-xs font-medium text-slate-400 text-center">
                      {getMonthName(monthKey)}
                    </div>
                    <div className="flex gap-1 justify-center">
                      {weeks.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1">
                          {week.map((day, dayIndex) => (
                            <div
                              key={`${weekIndex}-${dayIndex}`}
                              className={`w-2.5 h-2.5 rounded-sm ${getIntensityColor(day.count)}`}
                              title={`${day.date}: ${day.count} problems solved`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mt-6">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-muted" />
                <div className="w-3 h-3 rounded-sm bg-green-200" />
                <div className="w-3 h-3 rounded-sm bg-green-400" />
                <div className="w-3 h-3 rounded-sm bg-green-600" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Coding Journey</h2>
          <div className="animate-pulse">Loading coding statistics...</div>
        </div>
      </section>
    );
  }
  const getPlatformLink = (platform: string) => {
      const links = {
        'LeetCode': 'https://leetcode.com/u/adityashriwal/',
        'GeeksforGeeks': 'https://geeksforgeeks.org/user/your-profile/',
        'CodeChef': 'https://codechef.com/users/your-profile',
        'HackerRank': 'https://hackerrank.com/your-profile'
      };
      return links[platform as keyof typeof links] || '#';
    };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">
          Coding Journey
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto animate-fade-in">
          My progress and achievements across different coding platforms
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* LeetCode Stats */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Code className="w-5 h-5 text-orange-500" />
              LeetCode Profile
              <a
                href="https://leetcode.com/u/adityashriwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Profile
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{leetcodeStats?.totalSolved}</div>
                <div className="text-sm text-slate-400">Total Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">{leetcodeStats?.contestRating}</div>
                <div className="text-sm text-slate-400">Contest Rating</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-lg font-semibold text-green-400">{leetcodeStats?.easySolved}</div>
                <div className="text-xs text-slate-400">Easy</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-yellow-400">{leetcodeStats?.mediumSolved}</div>
                <div className="text-xs text-slate-400">Medium</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-red-400">{leetcodeStats?.hardSolved}</div>
                <div className="text-xs text-slate-400">Hard</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GeeksforGeeks Stats */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Target className="w-5 h-5 text-green-500" />
              GeeksforGeeks Profile
              <a
                href="https://www.geeksforgeeks.org/user/adityaseo87/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Profile
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{gfgStats?.totalSolved}</div>
                <div className="text-sm text-slate-400">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{gfgStats?.codingscore}</div>
                <div className="text-sm text-slate-400">Coding Score</div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-white">Institute Rank: #{gfgStats?.instituteRank}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Expanded Badges Section */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm animate-fade-in mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Award className="w-5 h-5 text-yellow-500" />
            Coding Badges & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center p-6 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-600 mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={badge.image} 
                    alt={badge.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-1">{badge.name}</h4>
                  <p className="text-sm text-blue-400 mb-2">{badge.platform}</p>
                  <p className="text-xs text-slate-400">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity Calendars */}
      {/* <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Calendar className="w-5 h-5 text-purple-500" />
            Coding Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <ActivityCalendar data={leetcodeActivity} platform="LeetCode" />
          <ActivityCalendar data={gfgActivity} platform="GeeksforGeeks" />
        </CardContent>
      </Card> */}
    </section>
  );
};

export default CodingJourney;