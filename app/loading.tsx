export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="glass-card p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading ChronoFilter</h2>
        <p className="text-gray-300">Aggregating liquidity across platforms...</p>
      </div>
    </div>
  );
}
