


  //Login Function
  function login (){
    return fetch("https://www.fintag.org/callback?code=47369119", {
      method: "GET",
      mode: 'no-cors', // It can be no-cors, cors, same-origin
      
    }).then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error('Error:' + error);
    });
  }
