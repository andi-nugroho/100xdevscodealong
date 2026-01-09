"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.create({
            data: {
                username,
                email,
                password,
                firstName,
                lastName
            }
        });
        console.log(response);
    });
}
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const response = yield prisma.user.update({
            where: {
                username
            },
            data: {
                firstName,
                lastName
            }
        });
        console.log(response);
    });
}
// updateUser("test",{
//     firstName:"sahil",
//     lastName:"Tibrewal"
// });
function getUserDetails(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.findFirst({
            where: { username }
        });
        console.log(response);
    });
}
// getUserDetails("test");
// getUserDetails("gabbar");
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.create({
            data: {
                title,
                description,
                userId
            }
        });
        console.log(response);
    });
}
// createTodo(3,"code","code 9-5");
// createTodo(3,"run","run 9-5");
// createTodo(3,"eat","eat 9-5");
function getTodo(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                userId
            }
        });
        console.log(response);
    });
}
// getTodo(3);
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: { userId },
            select: {
                id: true,
                title: true,
                description: true,
                done: true,
                user: true
            }
        });
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
    });
}
getTodosAndUserDetails(3);
