import axios from "axios";

const getUser = (number) => {

    return new Promise(async(resolve, reject)=>{
        const {data:user} = await (axios(

            "https://jsonplaceholder.typicode.com/users/" + number
        ));

            resolve(user);
    });
    
};

const getPost = (number) => {

    return new Promise(async(resolve, reject)=>{
        const {data:post} = await (axios(

            "https://jsonplaceholder.typicode.com/posts?userId=" + number

        ));

            resolve(post);
    });
    
};

async function getData(user_id){
    try{
     const user = await getUser(user_id);
     const post = await getPost(user_id);
     console.log(user);
     console.log(post);
    }
   catch(error){
    console.log(error);
   }
 }


export default getData;