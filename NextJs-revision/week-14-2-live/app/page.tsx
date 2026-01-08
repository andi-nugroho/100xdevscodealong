import client from "@/db";
import axios from "axios";
import Image from "next/image";


const  getdata = async ()=>{
  try{
    const user = await client.user.findFirst(); 
    console.log(user);
    return ({
        name: "Prince yadav",
        username: user?.username
}); 
}catch(e){
    console.log(e);
    return ({
        name: "Prince yadav",
        username: "prince@gmail.com"
    });
}
}

export default async function Home() {
  const userData = await getdata();
  return (
<div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.username}
            </div>
        </div>
    </div>  
);}
