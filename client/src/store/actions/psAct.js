export const createPs = (creds,token) => {
    return async(dispatch) => {
    const response = await fetch(
        "http://localhost:3003/addPS",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token
          },
          body: JSON.stringify(creds)
        }
      ); 
      const json = await response.json();
      console.log(json);
      if(!json.error){
        dispatch({
          type: 'PS_ADDED',
          user: json.user,
        })
      }
      else{
        dispatch({
          type: 'ADD_PS_ERR',
          error:json.error
        })
      }
    }
}

export const getPs = (token) => {
  return async(dispatch) => {
  const response = await fetch(
      "http://localhost:3003/ps",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token
        }
      }
    ); 
    const json = await response.json();
    console.log(json);
      dispatch({
          type: 'PS_FETCHED',
          ps: json.ps,
      })
  }
}

export const searchPs = (creds, token) => {
  return async(dispatch) => {
  const response = await fetch(
      "http://localhost:3003/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token
        },
        body: JSON.stringify(creds)
      }
    ); 
    const json = await response.json();
    console.log(json);
      dispatch({
          type: 'FETCH_SEARCH',
          psStatment: json.psStatment,
      })
  }
}

