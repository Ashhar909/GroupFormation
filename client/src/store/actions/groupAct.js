export const createGroup = (creds, token) => {
    return async(dispatch) => {
        const response = await fetch(
            "http://localhost:8000/api/notes/addnote",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "auth-token": token
              },
              body: JSON.stringify(note)
            }
          ); 
          const json = await response.json()
    }
}