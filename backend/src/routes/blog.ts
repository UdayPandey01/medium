import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';
import { createBlogInput, updateBlogInput } from "@uday086/medium-common";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
    Variables: {
        userId: string;
    };
}>();

blogRouter.use('/*', async (c, next) => {
    const header = c.req.header("Authorization") || "";

    try {
        const user = await verify(header, c.env.JWT_SECRET);
        
        if (user) {
            c.set("userId", user.id);
            await next();
        } else {
            c.status(403);
            return c.json({
                error: "Unauthorized"
            });
        }
    } catch (error) {
        console.error(error)
        c.status(403);
        return c.json({
            error: "Invalid or expired token"
        });
    }
});

blogRouter.post('/', async (c) => {
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
        message : "Inputs are incorrect"
        })
    }
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: (authorId)
        }
    });
    return c.json({
        post
    });
});

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
        message : "Inputs are incorrect"
        })
    }
    const post = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    });
    return c.json({ id: post.id });
});

blogRouter.get('/blog/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const post = await prisma.post.findFirst({
            where: {
                id
            },
            select:{
                id : true,
                title : true,
                content : true,
                author : {
                    select : {
                        name : true
                    }
                }
            }
        });
        return c.json({ post });
    } catch (e) {
        c.status(411);
        return c.json({ message: "Error while fetching blog post" });
    }
});

blogRouter.get('/bulk', async (c) => {

    console.log("123")
    console.log("Connected to DB:", c.env.DATABASE_URL);
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    console.log("Connected to DB:", c.env.DATABASE_URL);

    try{
        const post = await prisma.post.findMany({
            select : {
                title : true,
                content : true,
                id : true,
                author :{
                    select : {
                        name : true
                    }
                }
            }
        });
        return c.json({ post });
    }catch(e){
        console.log(e)
        c.status(403)
        return c.json({msg : "Error"})
    }
    
});
