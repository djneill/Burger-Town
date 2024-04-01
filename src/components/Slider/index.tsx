'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import sliderData from "./sliderData"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm md:max-w-lg lg:max-w-2xl mx-auto my-8 rounded-2xl "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-2 md:-ml-4 ">
        {sliderData.map((slide) => (
          <CarouselItem key={slide.id} className="sm:pl-0 pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 md:mx-4">
            <div className="p-1">
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    width={400}
                    height={400}
                    className="max-w-full h-auto rounded-md" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))
        }
      </CarouselContent >
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel >
  )
}

