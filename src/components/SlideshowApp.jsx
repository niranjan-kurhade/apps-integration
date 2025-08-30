import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const images = [
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://www.shutterstock.com/image-vector/many-rainbow-gradient-random-bright-600w-2274412231.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4c1y_7gy2crn2Ll_ZSWzcqb0WDZFuBnFTeQ&s",
]

export default function SlideshowApp() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % images.length)
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <Card className="shadow-lg border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-700">Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <img src={images[index]} alt="slide" className="rounded-md shadow" />
        <div className="flex gap-4">
          <Button variant="outline" onClick={prev}> Previous</Button>
          <Button onClick={next}>Next </Button>
        </div>
      </CardContent>
    </Card>
  )
}