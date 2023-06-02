// Mock leaderboard data
const mockData = [
    ['John Doe', '1:23:45', 100],
    ['Jane Smith', '1:30:00', 90],
    ['Michael Johnson', '1:35:15', 85],
    ['Emily Davis', '1:40:30', 80],
    ['David Wilson', '1:45:45', 75],
    ['Sarah Brown', '1:50:00', 70],
    ['Robert Thompson', '1:55:15', 65],
    ['Jessica Lee', '2:00:30', 60],
    ['Christopher Martin', '2:05:45', 55],
    ['Amanda White', '2:10:00', 50],
    ['Daniel Garcia', '2:15:15', 45],
    ['Olivia Martinez', '2:20:30', 40],
    ['Matthew Robinson', '2:25:45', 35],
    ['Sophia Clark', '2:30:00', 30],
    ['James Lewis', '2:35:15', 25],
    ['Isabella Hall', '2:40:30', 20]
  ];
  
  // Format the leaderboard data into HTML
  function formatLeaderboardHTML(data, start, end) {
    return data.slice(start, end).map((row, index) => {
      const [name, time, score] = row;
      const place = start + index + 1;
  
      return `
        <div class="flex items-center py-2">
          <div class="w-1/4">${place}</div>
          <div class="w-3/4">${name} - ${time} - ${score}</div>
        </div>
      `;
    }).join('');
  }
  
  // Update the leaderboard with the latest data
  function updateLeaderboard() {
    const leaderboardBody1 = document.getElementById('leaderboard-body-1');
    const leaderboardBody2 = document.getElementById('leaderboard-body-2');
  
    const leaderboardHTML1 = formatLeaderboardHTML(mockData, 0, 8);
    leaderboardBody1.innerHTML = leaderboardHTML1;
  
    const leaderboardHTML2 = formatLeaderboardHTML(mockData, 8, 16);
    leaderboardBody2.innerHTML = leaderboardHTML2;
  
    // Fetch data every 30 seconds
    setTimeout(updateLeaderboard, 30000);
  }
  
  // Initialize the leaderboard
  updateLeaderboard();