import { prisma } from "@/src/lib/prisma";

export const dynamic = 'force-dynamic'


export async function GET() {
    const orders = await prisma.order.findMany({
        take: 5,
        where: {
            orderReadyAr: {
                not: null
            }
        },
        orderBy: {
            orderReadyAr: 'desc'
        },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })
    return Response.json(orders)
}