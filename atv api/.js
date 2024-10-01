// Chuck Norris Jokes API
document.getElementById('getJoke').addEventListener('click', async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      document.getElementById('joke').textContent = data.value;
    } catch (error) {
      document.getElementById('joke').textContent = 'Failed to load joke.';
      console.error('Error fetching Chuck Norris joke:', error);
    }
  });
  
  // Dog CEO API
  document.getElementById('getDog').addEventListener('click', async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      document.getElementById('dogImage').src = data.message;
    } catch (error) {
      document.getElementById('dogImage').alt = 'Failed to load dog image.';
      console.error('Error fetching dog image:', error);
    }
  });
  
  // SpaceX Latest Launch API
  document.getElementById('getLaunch').addEventListener('click', async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/launches/latest');
      const data = await response.json();
      document.getElementById('launchInfo').textContent = `Mission: ${data.name}, Date: ${new Date(data.date_utc).toLocaleString()}`;
    } catch (error) {
      document.getElementById('launchInfo').textContent = 'Failed to load launch information.';
      console.error('Error fetching SpaceX launch data:', error);
    }
  });
  