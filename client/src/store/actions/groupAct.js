export const getGroup = (token) => {
    return async(dispatch) => {
    const response = await fetch(
        "http://localhost:3003/getGroup",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token
          },
        }
      ); 
      const json = await response.json();
      console.log(json);
      if(!json.error){
        dispatch({
          type: 'MEMBERS',
          user: json.user,
          members:json.grp
        })
      }
      else{
        localStorage.setItem('grp-error', json.error);
        dispatch({
          type: 'GRP_ERROR',
          error:json.error
        })
      }
    }
}

export const createGroup = (creds, token) => {
  return async(dispatch) => {
  const response = await fetch(
      "http://localhost:3003/creategroup",
      {
        method: "PUT",
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
      localStorage.setItem('create-action',true)
      dispatch({
        type: 'CREATE',
        user: json.user,
      })
    }
    else{
      localStorage.setItem('grp-error', json.error);
      dispatch({
        type: 'GRP_ERROR',
        error:json.error
      })
    }
  }
}

export const joinGroup = (creds, token) => {
  return async(dispatch) => {
  const response = await fetch(
      "http://localhost:3003/joingrp",
      {
        method: "PUT",
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
      localStorage.setItem('join-action',true)
      dispatch({
        type: 'JOIN',
        user: json.user,
      })
    }
    else{
      localStorage.setItem('grp-error', json.error);
      dispatch({
        type: 'GRP_ERROR',
        error:json.error
      })
    }
  }
}

export const leaveGroup = (token) => {
  return async(dispatch) => {
    const response = await fetch(
        "http://localhost:3003/leavegroup",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token
          },
        }
      ); 
      const json = await response.json();
      console.log(json);
      if(!json.error){
        localStorage.removeItem('create-action')
        localStorage.removeItem('join-action')
        dispatch({
          type: 'LEAVE',
          user: json.user,
        })
      }
      else{
        localStorage.setItem('grp-error', json.error);
        dispatch({
          type: 'GRP_ERROR',
          error:json.error
        })
      }
    }
}
