export const getmentors = (token) => {
    return async(dispatch) => {
    const response = await fetch(
        "http://localhost:3003/getmentors",
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
          type: 'MENTORS',
          mentors: json.mentors ,
        })
      }
      else{
        localStorage.setItem('grp-error', json.error);
        dispatch({
          type: 'MENTOR_ERROR',
          error: json.error
        })
      }
    }
}