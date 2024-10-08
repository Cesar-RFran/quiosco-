import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';
import ProductTable from '@/components/products/ProductsTable';
import ProductSearch from '@/components/products/ProductSearch';


async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function searchPage({searchParams}: {searchParams: {search: string}}) {

    const products = await searchProducts (searchParams.search)



    return (
        <>
        
        <Heading>Resultados de busqueda: {searchParams.search}</Heading>

        <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
          
          <ProductSearch/>
        </div>
        {products.length ? (
         <ProductTable
         products={products}
         />
        ) : <p className='text-center text-lg'>No hay resultados</p> }
       
        
        </>
    )
}