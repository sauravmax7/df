import TutorialDataService from "../services/tutorial.service";

// let articles=[
//     {
//         "author":"Adi Robertson, William Joel, Alex Castro",
//         "title":"Cyberpunklan",
//         "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
//         "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
//         "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
//         "publishedAt":"2020-12-08T18:45:08Z"
//     },
//     {
//         "author":"Adi Robertson, William Joel, Alex Castro",
//         "title":"Cyberpunkland",
//         "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
//         "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
//         "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
//         "publishedAt":"2020-12-08T18:45:08Z"
//     },
//     {
//         "author":"Adi Robertson, William Joel, Alex Castro",
//         "title":"Cyberpunkland",
//         "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
//         "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
//         "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
//         "publishedAt":"2020-12-08T18:45:08Z"
//     },
//     {
//         "author":"Adi Robertson, William Joel, Alex Castro",
//         "title":"Cyberpunklansd",
//         "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
//         "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
//         "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
//         "publishedAt":"2020-12-08T18:45:08Z"
//     },
//     {
//         "author":"Adi Robertson, William Joel, Alex Castro",
//         "title":"Cyberpunkland",
//         "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
//         "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
//         "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
//         "publishedAt":"2020-12-08T18:45:08Z"
//     },
//     {
//         "author":"Adi Robertson, William Joel, Alex Castro",
//         "title":"Cyberpunkland",
//         "description":"A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator A full-service dystopia simulator ",
//         "url":"https://www.theverge.com/21726477/cyberpunkland-dystopia-online-game",
//         "urlToImage":"https://cdn.vox-cdn.com/thumbor/nbqaXgIZMYF6TWLyG-gczrZYBHU=/102x160:1399x841/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22154635/acastro_2001207_4326_cyberpunklandSplash.jpg",
//         "publishedAt":"2020-12-08T18:45:08Z"
//     }
//     ]
// var news=[{"n_id":1,"c_id":1,"u_id":1,"cat_id":1,"title":"news1","content":"asdfghjklkjhgfdsa","image":"C:/Users/Administrator/Desktop/img.jpg","extract":"sdjglihdkwdn","read":10,"createdAt":"2020-12-09T00:00:00.000Z","updatedAt":"2020-12-09T00:00:00.000Z"},{"n_id":2,"c_id":1,"u_id":1,"cat_id":2,"title":"news2","content":"affsdfghjklkjhgfdsa","image":"b.jpg","extract":"sdjrrgglihdkwdn","read":2,"createdAt":"2020-12-09T00:00:00.000Z","updatedAt":"2020-12-09T00:00:00.000Z"},{"n_id":3,"c_id":3,"u_id":1,"cat_id":3,"title":"news3","content":"affsdfghjklkjhgfdsa","image":"b.jpg","extract":"sdjrrgglihdkwdn","read":3,"createdAt":"2020-12-09T00:00:00.000Z","updatedAt":"2020-12-09T00:00:00.000Z"}]

export function fetchAllNews(){
    //return the actual action to do
    //action creater returns an action but by using thunk 
    //action have ability to return a function instead of a action object 
    //so that it have have sideeffects , these function call also dispatch action 
    
        // return function(dispatch){
        //     fetch("https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=e82c7460d1494b7a8c8a172c34d21ca4")
        //     .then(res => {
        //         return res.json();
                
        //     })
        //     .then(res => {
        //      // console.log(res)
        //       dispatch({type:"FETCH_MOST_READ", payload: articles});
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
      
        //  }
         
        return function(dispatch){
            TutorialDataService.getAllNews()
            .then(res => {
                let data = res.data;
                dispatch({type:"FETCH_All_NEWS", payload: data});
                console.log("From action"+data);
                 return data;
                
                
            })
            // .then(res => {
            //  // console.log(res)
            //   dispatch({type:"FETCH_MOST_READ", payload: articles});
            // })
            .catch(err => {
                console.log(err);
            })
      
         }
      
}

export const filterNewsByCity = (news,cityid)=>(dispatch)=>{
    dispatch({
        type: "FILTER_NEWS_BY_CITY",
        payload:{
            cityid:cityid,
            items: cityid === "" ? news:
            news.filter(x=>x.cityid.indexOf(cityid)>=0),
        },
    });
}

// export const sortMostRead = (news)=>(dispatch)=>{
//     const sortedNews= news.slice();

//     sortedNews.sort((a,b)=>(a.read>b.read?1:-1));

//     if
//     dispatch({
//         type: "SORT_CITY_BY_MOSTREAD",
//         payload:{
//             cityid:cityid,
//             items: cityid === "" ? news:
//             news.filter(x=>x.cityid.indexOf(cityid)>=0),
//         },
//     });
// }