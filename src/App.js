import React, { useEffect } from 'react';

function App() {
  const id = "1724517066104-2099"
  useEffect(() => {
    // Fetch data from the API Gateway endpoint
    fetch(`https://jo589y2zh7.execute-api.us-east-1.amazonaws.com/test/transcriptions/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Check the console for fetched transcriptions</h1>
    </div>
  );
}

export default App;