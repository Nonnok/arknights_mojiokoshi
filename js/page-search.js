fetch('../terminology.html')
.then((response) => {
  if(response.ok) {
    return response.text();
  } else {
    throw 
  }
})