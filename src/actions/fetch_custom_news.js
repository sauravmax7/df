
export function fetchCustomNews(source, relevance){
    //return the actual action to do
    return function(dispatch){
      fetch("https://newsapi.org/v1/articles?source="+ source+"&sortBy="+ relevance +"&apiKey=e82c7460d1494b7a8c8a172c34d21ca4")
      .then(res => {
          return res.json();
          
      })
      .then(res => {
       // console.log(res)
        dispatch({type:"FETCH_CUSTOM_NEWS", payload: res.articles});
      })
      .catch(err => {
          console.log(err);
      })

   }
}