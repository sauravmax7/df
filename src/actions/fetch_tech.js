let articles=[
    {
        "author":"Adi Robertson, William Joel, Alex Castro",
        "title":"Cyberpunklan",
        "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
        "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
        "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
        "publishedAt":"2020-12-08T18:45:08Z"
    },
    {
        "author":"Adi Robertson, William Joel, Alex Castro",
        "title":"Cyberpunkland",
        "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
        "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
        "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
        "publishedAt":"2020-12-08T18:45:08Z"
    },
    {
        "author":"Adi Robertson, William Joel, Alex Castro",
        "title":"Cyberpunkland",
        "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
        "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
        "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
        "publishedAt":"2020-12-08T18:45:08Z"
    },
    {
        "author":"Adi Robertson, William Joel, Alex Castro",
        "title":"Cyberpunkland",
        "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
        "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
        "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
        "publishedAt":"2020-12-08T18:45:08Z"
    },
    {
        "author":"Adi Robertson, William Joel, Alex Castro",
        "title":"Cyberpunkland",
        "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
        "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
        "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
        "publishedAt":"2020-12-08T18:45:08Z"
    },
    {
        "author":"Adi Robertson, William Joel, Alex Castro",
        "title":"Cyberpunkland",
        "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
        "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
        "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
        "publishedAt":"2020-12-08T18:45:08Z"
    }
    ]

export function fetchTech(){
    //return the actual action to do
    //action creater returns an action but by using thunk 
    //action have ability to return a function instead of a action object 
    //so that it have have sideeffects , these function call also dispatch action 
    
        return function(dispatch){
            fetch("https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=e82c7460d1494b7a8c8a172c34d21ca4")
            .then(res => {
                return res.json();
                
            })
            .then(res => {
             // console.log(res)
              dispatch({type:"FETCH_TECH", payload: articles});
            })
            .catch(err => {
                console.log(err);
            })
      
         }
      
}