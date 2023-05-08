import { ImageProps } from "next/image";
import Link from "next/link";
import { BlurImage } from "../../../components/BlurImage";

interface CategoryCardProps extends ImageProps {
  children: string;
  href: string;
}

export function CategoryCard({ href, src, alt, children }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="relative overflow-hidden transition-all group hover:opacity-80"
    >
      <div className="relative w-[590px] h-[650px]">
        <BlurImage src={src} alt={alt} quality={100} priority />
      </div>

      <h3 className="absolute text-2xl text-white uppercase transition-all group-hover:font-bold whitespace-nowrap top-2/4 left-2/4 -translate-x-2/4">
        {children}
      </h3>
    </Link>
  );
}
