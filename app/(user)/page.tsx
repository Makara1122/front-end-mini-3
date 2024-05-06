'use client'
import ImageBlueComponent from '@/components/images/ImageBlue'
import ImageFalbackComponent from '@/components/images/ImageFalback'
import ImageLoadingComponent from '@/components/images/ImageLoading'
import ProductComponent from '@/components/navbar/product'
import HeaderComponent from '@/components/typo/Header'
import React from 'react'

export default function Home() {
  return (
    <>
    <div className='h-screen w-full grid  place-content-center text-2xl '>
      <div className='flex justify-between items-center  mt-56 mb-10'>
      <ImageBlueComponent/>
      <ImageFalbackComponent/>
      <ImageLoadingComponent/>
      </div>
      <ProductComponent/>
    </div>
    </>
  )
}
