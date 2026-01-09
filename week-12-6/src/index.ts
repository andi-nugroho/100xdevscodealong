import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function insertUser(username:string,password:string,firstName:string,lastName:string,email:string){
    const response = await prisma.user.create({
        data: {
            username,
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(response);
}
// insertUser('gabbar','gabbar@gmail.com','gautam','Gabbbar','gautam');
interface updateParams {
    firstName: string,
    lastName: string
}
async function updateUser(username: string, {
    firstName,
    lastName
}: updateParams){
    const response = await prisma.user.update({
        where:{
            username
        },
        data:{
            firstName,
            lastName
        }
    })
    console.log(response);
}
// updateUser("test",{
//     firstName:"sahil",
//     lastName:"Tibrewal"
// });

async function getUserDetails(username:string){
    const response = await prisma.user.findFirst({
        where:{username}
    })
    console.log(response);
}

// getUserDetails("test");
// getUserDetails("gabbar");

async function createTodo(userId:number, title:string, description:string){
    const response = await prisma.todo.create({
        data:{
            title,
            description,
            userId
        }
    })
    console.log(response);
}
// createTodo(3,"code","code 9-5");
// createTodo(3,"run","run 9-5");
// createTodo(3,"eat","eat 9-5");
async function getTodo(userId:number) {
    const response = await prisma.todo.findMany({
        where:{
            userId
        }
    })
    console.log(response);
}

// getTodo(3);

async function getTodosAndUserDetails(userId:number){
    const response = await prisma.todo.findMany({
        where:{userId},
        select:{
            user: true,
            id:true,
            title:true,
            description:true,
            done: true
        }
    })
    // const response = await prisma.user.findMany({
    //     where:{id:userId},
    //     select:{
    //         id: true,
    //         username: true,
    //         firstName: true,
    //         lastName: true,
    //         email: true,
    //         todos: true,
    //     }
    // })
    console.log(response);
    // console.log(response[0].todos);
}
// getTodosAndUserDetails(3);