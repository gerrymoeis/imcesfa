import { Button } from "@/components/ui/button";
import { Frame, type Paths } from "@/components/ui/frame";
import { MoveRight } from "lucide-react";

const customPaths: Paths = [
  {
    show: true,
    style: {
      strokeWidth: "1",
      stroke: "var(--color-frame-1-stroke)",
      fill: "var(--color-frame-1-fill)",
    },
    path: [
      ["M", "19", "0"],
      ["L", "100% - 18", "0"],
      ["L", "100%", "18.5"],
      ["L", "100%", "100% - 18.5"],
      ["L", "100% - 18", "100%"],
      ["L", "19", "100%"],
      ["L", "0", "100% - 18.5"],
      ["L", "0", "18.5"],
      ["L", "19", "0"],
    ],
  },
];

const CTA = () => {
  return (
    <section className="py-20">
      <div className="relative">
        <Frame
          paths={customPaths}
          className="[--color-primary:hsl(300_100%_70%)] [--color-frame-1-stroke:var(--color-primary)] [--color-frame-1-fill:var(--color-primary)/10]"
        />
        <div className="relative text-center px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Siap Menjadi Juara Berikutnya?
          </h2>
          <p className="text-md md:text-lg text-secondary-foreground max-w-2xl mx-auto mt-4 mb-8">
            Jangan lewatkan kesempatan untuk menguji kemampuan, memperluas jaringan, dan memenangkan hadiah menarik. Daftar sekarang dan jadilah bagian dari inovasi teknologi masa depan.
          </p>
          <Button variant="accent" className="px-10 py-4 text-lg">
            <span>Daftar Sekarang</span>
            <MoveRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
