"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductSchema } from "@/src/schema"

export async function createProduct(data:unknown) {
    const resul = ProductSchema.safeParse(data)
    if(!resul.success){
        return{
            errors: resul.error.issues
        }
    }

    await prisma.product.create({
        data: resul.data
    })
}