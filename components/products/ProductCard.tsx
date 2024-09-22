import { formatCurrency, getImagesPath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButon from "./AddProductButon"

type ProductCardProps = {
    product: Product
}


export default function ProductCard({product}: ProductCardProps) {

  const imagePath = getImagesPath(product.image)

  return (
    <div className="border bg-white">

        <Image
        width={400}
        height={500}
        src={imagePath}
        alt={`Imagen platillo ${product.name}`}
        quality={100}
        />

        <div className="p-5 ">
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatCurrency (product.price)}
            </p>
            <AddProductButon
            product={product}
            />
        </div>

    </div>
  )
}
