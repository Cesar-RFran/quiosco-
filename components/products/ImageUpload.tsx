"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

export default function ImageUpload() {

    const [imageUrl, setImageUrl] = useState('')
    
    return (
        <CldUploadWidget
        onSuccess={(result, {widget}) => {
            if(result.event === 'success'){
                widget.close()
                // @ts-ignore
                setImageUrl(result.info?.secure_url)
            }
        }}
            uploadPreset="quiosco" 
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => (

                <>
                <div className="space-y-2">
                    <label className="text-slate-800">Imagen producto</label>
                    <div 
                        onClick={() => open()} 
                        className="cursor-pointer border-2 border-dashed border-gray-400 p-4 text-center flex flex-col items-center relative"
                    >
                        <TbPhotoPlus size={50} />
                        <p className="text-lg font-semibold">Agregar Imagen</p>
                        {imageUrl && (
                            <div className="absolute inset-0 w-full h-full overflow-hidden"
                            
                            >
                                <Image
                                fill
                                style={{objectFit: 'contain'}}
                                src={imageUrl}
                                alt="Imagen del producto"
                                />

                            </div>
                        )}
                    </div>
                </div>

                <input type="hidden" 
                name="image" 
                value={imageUrl} />
                
                </>
                
            )}
        </CldUploadWidget>
    );
}
