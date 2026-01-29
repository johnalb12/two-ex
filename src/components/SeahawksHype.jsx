import { Trophy, TrendingUp, Shield, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const SeahawksHype = () => {
  // Mock season stats data
  const seasonStats = [
    { game: 'W1', points: 28 },
    { game: 'W2', points: 31 },
    { game: 'W3', points: 24 },
    { game: 'W4', points: 35 },
    { game: 'W5', points: 27 },
    { game: 'W6', points: 30 },
    { game: 'W7', points: 33 },
    { game: 'W8', points: 28 },
  ];

  const defenseStats = [
    { game: 'W1', allowed: 14 },
    { game: 'W2', allowed: 17 },
    { game: 'W3', allowed: 20 },
    { game: 'W4', allowed: 10 },
    { game: 'W5', allowed: 13 },
    { game: 'W6', allowed: 16 },
    { game: 'W7', allowed: 12 },
    { game: 'W8', allowed: 14 },
  ];

  const videos = [
    {
      title: "Beast Quake - Classic Moment",
      embedId: "foD-ydJYGcU",
      description: "The run that shook the stadium"
    },
    {
      title: "Super Bowl XLVIII Highlights",
      embedId: "gAbJCDXWzC8",
      description: "Seahawks dominate on the biggest stage"
    },
    {
      title: "Legion of Boom",
      embedId: "gJtZYSZjkQ8",
      description: "The greatest defense of our era"
    }
  ];

  return (
    <section id="seahawks" className="py-20 px-4 bg-gradient-to-b from-navy-seahawks to-green-seahawks">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bebas text-white mb-4">
            SEAHAWKS HYPE ZONE
          </h2>
          <p className="text-xl text-grey-seahawks">
            Get ready for Super Bowl LX! 🏈
          </p>
        </div>

        {/* Super Bowl Matchup Card */}
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-12">
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-6xl mb-2">🏈</div>
              <h3 className="text-3xl font-bebas text-navy-seahawks">SEAHAWKS</h3>
            </div>
            <div className="text-4xl font-bebas text-grey-seahawks">VS</div>
            <div className="text-center">
              <div className="text-6xl mb-2">🏆</div>
              <h3 className="text-3xl font-bebas text-grey-seahawks">TBD</h3>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-poppins text-navy-seahawks font-semibold">
              Super Bowl LX
            </p>
            <p className="text-lg text-grey-seahawks">
              February 9, 2026 • 6:30 PM EST
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center">
            <Trophy className="w-10 h-10 text-green-seahawks mx-auto mb-3" />
            <div className="text-4xl font-bebas text-white mb-2">13-4</div>
            <div className="text-sm text-grey-seahawks uppercase tracking-wide">Season Record</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center">
            <TrendingUp className="w-10 h-10 text-green-seahawks mx-auto mb-3" />
            <div className="text-4xl font-bebas text-white mb-2">29.5</div>
            <div className="text-sm text-grey-seahawks uppercase tracking-wide">PPG Average</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center">
            <Shield className="w-10 h-10 text-green-seahawks mx-auto mb-3" />
            <div className="text-4xl font-bebas text-white mb-2">#2</div>
            <div className="text-sm text-grey-seahawks uppercase tracking-wide">Defense Rank</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center">
            <Users className="w-10 h-10 text-green-seahawks mx-auto mb-3" />
            <div className="text-4xl font-bebas text-white mb-2">12th</div>
            <div className="text-sm text-grey-seahawks uppercase tracking-wide">Man Strong</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Offensive Points Chart */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-poppins font-bold text-navy-seahawks mb-4">
              Points Per Game
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={seasonStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="game" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="points" fill="#69BE28" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Defense Points Allowed Chart */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-poppins font-bold text-navy-seahawks mb-4">
              Defense: Points Allowed
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={defenseStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="game" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="allowed" stroke="#002244" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Video Highlights */}
        <div className="mb-12">
          <h3 className="text-3xl font-bebas text-white text-center mb-8">
            Greatest Moments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-poppins font-bold text-navy-seahawks mb-1">
                    {video.title}
                  </h4>
                  <p className="text-sm text-grey-seahawks">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rally Cry */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-4xl font-bebas text-green-seahawks mb-4">
              WE ARE 12
            </h3>
            <p className="text-lg text-white mb-6 italic">
              "The 12th Man is a game-changer. The energy, the passion, the noise - it's what makes us unstoppable."
            </p>
            <button className="px-8 py-4 bg-green-seahawks hover:bg-white text-navy-seahawks font-bebas text-2xl rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              GO HAWKS! 🏈
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeahawksHype;
