import Image from "next/image"

export default function LazyImage({
  src,
  alt,
  width,
  height,
}: { src: string; alt: string; width: number; height: number }) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className="rounded-lg"
      priority
      placeholder="blur"
      blurDataURL="/placeholder.svg"
    />
  )
}

