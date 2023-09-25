const fetch = require('node-fetch');

// Function to make a GET request with authorization headers
async function fetchData(url, authToken) {
  const response = await fetch(url, {
    headers: {
      'Authorization': authToken,
    }
  });
  if (!response.ok) {
    throw new Error(`GET request failed with status: ${response.status}`);
  }
  var data = await response.json();
  console.log('data--->',data);
  return data
}

async function DeleteData(url, authToken) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': authToken,
    }
  });
  if (!response.ok) {
    throw new Error(`DELETE request failed with status: ${response.status}`);
  }
  return await response.json();
}

// Function to make a POST request with authorization headers
async function postData(url, data, authToken) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': authToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`POST request failed with status: ${response.status}`);
  }
  return await response.json();
}

// Function to process the array of inputs
async function moveUatToDev(inputs) {
  for (const input of inputs) {
    try {
      // const deleteResponse = await DeleteData(`https://api-dev.taylorandfrancis.com/v1/renderer/v2/journal/${input}`, authToken);
      // console.log('deleteResponse', deleteResponse);
      const getResponse = await fetchData(`https://api-uat.taylorandfrancis.com/v1/renderer/v2/configDocs/${input}`, authToken);
      const postResponse = await postData('https://api-dev.taylorandfrancis.com/v1/renderer/v2/saveJournalConfig', getResponse, authToken);
      console.log('moved for journal code', input);
    } catch (error) {
      console.error(error);
    }
  }
}


const inputArray = [
  "CTED"
];
const authToken = 'idtoken eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6IjE2Mi4xNTguNTQuMTQyIiwiY291bnRyeV9jb2RlIjoiSU4iLCJzY29wZSI6WyJwcm9kdWN0X2FjY2VzcyJdLCJyIjpbIlRORl9BRE1JTiIsIlNfTUFOQUdFUiIsIlRORl9VU0VSIiwiU1VQRVJfQURNSU4iLCJKX01BTkFHRVIiXSwidGVycml0b3J5X3R5cGUiOiJjb3VudHJ5IiwidXNlciI6eyJfaWQiOiI2MjBmMzcyYjE5ZjJmNTAwMjA1NDI4ZWIiLCJ1c2VyVHlwZSI6InVzZXIiLCJ1c2VybmFtZSI6ImphZ2FkaXNoLmdvd2RhQGluZm9ybWEuY29tIiwiZW1haWwiOiJqYWdhZGlzaC5nb3dkYUBpbmZvcm1hLmNvbSIsImRpc3BsYXlOYW1lIjoiSmFnYWRpc2ggR293ZGEiLCJvcmdhbml6YXRpb25OYW1lIjpudWxsLCJoYXNBY2NlcHRlZFRlcm1zIjp0cnVlLCJtRkFBdXRoZW50aWNhdGVkIjp0cnVlLCJvcmdhbml6YXRpb25JZCI6bnVsbCwicGFydHlJZCI6Njk5NzE1Nn0sImlzcyI6Imh0dHBzOi8vYWNjb3VudHMtdWF0LnRheWxvcmZyYW5jaXMuY29tL2lkZW50aXR5LyIsImV4cCI6MTY5NDUyNDMyMSwiaWF0IjoxNjk0NTIwNzIxLCJhdWQiOiIxOWQ5OTk2NzJkMjE4ZWM3N2MxYjA0YzBhNWY4YjM0MjcxNDVjNWU4NTBhYjNjMTNjZThlYjJhZDJlYzg5Mjg3Iiwic3ViIjoiNjIwZjM3MmIxOWYyZjUwMDIwNTQyOGViIn0.aHCig709MtJXZfC8AloKhz8n9jN695-cpS2Vxh32xgxXkXmxKp_OWDr0h8KbWrC5B9LPi8hpZpJNeNma5WKvdfIy5vhRhTt2AcM5gedEHEz0BBCBhVby4nfsBcfe-kpgY7CO5yBgP_DERIwKV37km_ItHtZdeSQz_drPMxFn0XURMu9zaZjDfFt1XuGJukQn3ZYgfHFMYz3PaRM8JVYhl4moJ7tTqZZjT_xwyVzfQwXsOzOigiFSgQF3_xvDgTjImp8Ff3zP4xavYzKsamszYKfogcuggapUZ6WkMuakNwLUjHVhFQtiXY2WRC2ssAPNvqcMOm5wyfpv0vjESfH3WA';
moveUatToDev(inputArray);
