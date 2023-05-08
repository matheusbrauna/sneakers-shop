import Link from "next/link";
import { Button } from "../../../components/Button";
import { BlurImage } from "../../../components/BlurImage";
import heroImg from "../../../assets/hero-img.png";

export function Hero() {
  return (
    <section className="relative">
      <div className="w-[100vw] h-[100vh] absolute -z-10">
        <BlurImage src={heroImg} alt="" priority quality={100} />
      </div>
      <div className="container flex flex-col items-center justify-center gap-6 paddingToHeader">
        <h2 className="text-xl font-bold leading-9 text-center uppercase sm:text-4xl text-neutral-50">
          Os melhores sneakers estão aqui!
        </h2>

        <Link href="/products" className="">
          <Button>Comece a comprar</Button>
        </Link>
      </div>
    </section>
  );
}
