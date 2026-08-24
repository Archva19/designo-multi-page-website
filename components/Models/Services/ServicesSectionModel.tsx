import { Service } from '@/types/types'
import React from 'react'
import ServicesItemModel from './ServicesItemModel'

export default function ServicesSectionModel({arr}:{arr:Service[]}) {
  return (
    <>
      <div className = "mb-24 md:mb-30 xl:mb-40 w-full flex flex-col gap-10 flex-wrap lg:flex-row items-center justify-center lg:gap-7.5">
        {
          arr.map((item) => (
            <ServicesItemModel key = {item.id} service={item}/>
          ))
        }
      </div>
    </>
  )
}
