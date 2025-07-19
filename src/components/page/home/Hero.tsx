import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Frame } from "@/components/ui/frame";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";

const Hero = () => {
  const { ref: ref1, y: y1 } = useParallax();
  const { ref: ref2, y: y2 } = useParallax();
  const { ref: ref3, y: y3 } = useParallax();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-1 h-20 bg-gradient-to-b from-transparent via-primary to-transparent opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-16 bg-gradient-to-b from-transparent via-accent to-transparent opacity-30 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 animate-pulse" />

      {/* Floating Accent Frames */}
      <motion.div
        ref={ref1}
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-32 h-8 opacity-70 [--color-primary:hsl(180_100%_50%)]"
      >
        <Frame
          className="drop-shadow-lg drop-shadow-primary/30"
          paths={[
            {
              show: true,
              style: {
                strokeWidth: '1',
                stroke: 'var(--color-primary)',
                fill: 'var(--color-primary)/30',
              },
              path: [
                ['M', '0', '10'],
                ['L', '60', '0'],
                ['L', '100%', '0'],
                ['L', '100%', '15'],
                ['L', '80', '30'],
                ['L', '20', '30'],
                ['L', '0', '15'],
                ['L', '0', '10'],
              ],
            },
          ]}
        />
      </motion.div>
      <motion.div
        ref={ref2}
        style={{ y: y2 }}
        className="absolute top-32 right-20 w-20 h-20 opacity-60 [--color-accent:hsl(290_100%_50%)]"
      >
        <Frame
          className="drop-shadow-lg drop-shadow-accent/30"
          paths={[
            {
              show: true,
              style: {
                strokeWidth: '1',
                stroke: 'var(--color-accent)',
                fill: 'var(--color-accent)/20',
              },
              path: [
                ['M', '15', '0'],
                ['L', '100% - 15', '0'],
                ['L', '100%', '15'],
                ['L', '100%', '100% - 15'],
                ['L', '100% - 15', '100%'],
                ['L', '15', '100%'],
                ['L', '0', '100% - 15'],
                ['L', '0', '15'],
                ['L', '15', '0'],
              ],
            },
          ]}
        />
      </motion.div>
      <motion.div
        ref={ref3}
        style={{ y: y3 }}
        className="absolute bottom-32 left-16 w-24 h-24 opacity-50 [--color-accent:hsl(290_100%_50%)]"
      >
        <Frame
          className="drop-shadow-lg drop-shadow-accent/30"
          paths={[
            {
              show: true,
              style: {
                strokeWidth: '1',
                stroke: 'var(--color-accent)',
                fill: 'var(--color-accent)/20',
              },
              path: [
                ['M', '15', '0'],
                ['L', '100% - 15', '0'],
                ['L', '100%', '15'],
                ['L', '100%', '100% - 15'],
                ['L', '100% - 15', '100%'],
                ['L', '15', '100%'],
                ['L', '0', '100% - 15'],
                ['L', '0', '15'],
                ['L', '15', '0'],
              ],
            },
          ]}
        />
      </motion.div>

      {/* Main Content Frame */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative [--color-accent:hsl(300_100%_70%)]">
          <Frame
            enableBackdropBlur
            className="w-full h-full drop-shadow-2xl drop-shadow-accent/30"
            paths={[
              {
                show: true,
                style: {
                  strokeWidth: '2',
                  stroke: 'var(--color-accent)/80',
                  fill: 'var(--color-accent)/10',
                },
                path: [
                  ['M', '45', '20'],
                  ['L', '100% - 120', '20'],
                  ['L', '100% - 95', '0'],
                  ['L', '100% - 25', '0'],
                  ['L', '100%', '25'],
                  ['L', '100%', '100% - 45'],
                  ['L', '100% - 25', '100%'],
                  ['L', '85', '100%'],
                  ['L', '60', '100% - 25'],
                  ['L', '0', '100% - 25'],
                  ['L', '0', '45'],
                  ['L', '20', '25'],
                  ['L', '45', '20'],
                ],
              },
            ]}
          />

          <div className="relative p-12 md:p-16 lg:p-20">
            {/* Stats indicators */}
            <div className="absolute top-8 right-8 flex gap-4">
              <div className="w-16 h-16 relative [--color-primary:hsl(210_100%_50%)]">
                <Frame
                  className="drop-shadow-lg drop-shadow-primary/40"
                  paths={[
                    {
                      show: true,
                      style: {
                        strokeWidth: '1',
                        stroke: 'var(--color-primary)/60',
                        fill: 'var(--color-primary)/15',
                      },
                      path: [
                        ['M', '12', '0'],
                        ['L', '100% - 12', '0'],
                        ['L', '100%', '12'],
                        ['L', '100%', '100% - 12'],
                        ['L', '100% - 12', '100%'],
                        ['L', '12', '100%'],
                        ['L', '0', '100% - 12'],
                        ['L', '0', '12'],
                        ['L', '12', '0'],
                      ],
                    },
                  ]}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xs font-bold text-primary text-shadow-lg text-shadow-primary/50">
                    2024
                  </div>
                </div>
              </div>
              <div className="w-16 h-16 relative [--color-accent:hsl(0_100%_50%)]">
                <Frame
                  className="drop-shadow-lg drop-shadow-accent/40"
                  paths={[
                    {
                      show: true,
                      style: {
                        strokeWidth: '1',
                        stroke: 'var(--color-accent)/60',
                        fill: 'var(--color-accent)/15',
                      },
                      path: [
                        ['M', '12', '0'],
                        ['L', '100% - 12', '0'],
                        ['L', '100%', '12'],
                        ['L', '100%', '100% - 12'],
                        ['L', '100% - 12', '100%'],
                        ['L', '12', '100%'],
                        ['L', '0', '100% - 12'],
                        ['L', '0', '12'],
                        ['L', '12', '0'],
                      ],
                    },
                  ]}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xs font-bold text-accent text-shadow-lg text-shadow-accent/50">
                    LIVE
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl">
              <div className="inline-block mb-8 [--color-primary:hsl(210_100%_50%)]">
                <div className="relative px-6 py-2 border border-primary/30 bg-primary/10">
                  <span className="text-sm font-medium text-primary text-shadow-sm text-shadow-primary/50">
                    KOMPETISI DIGITAL TERBESAR
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-shadow-xl text-shadow-primary/60 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                  Era Baru
                </span>
                <span className="block text-shadow-xl text-shadow-accent/60 bg-gradient-to-r from-accent via-white to-primary bg-clip-text text-transparent">
                  Kompetisi Digital
                </span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl">
                Jelajahi masa depan teknologi dan kreativitas dalam acara tahunan
                terbesar kami. Bergabunglah dengan para inovator, developer, dan
                desainer.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
                <Button
                  variant="default"
                  className="w-full sm:w-auto px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span>
                    Daftar Sekarang
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </span>
                </Button>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto px-8 py-3 text-lg transition-all duration-300"
                >
                  <span>Lihat GuideBook</span>
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 text-sm opacity-70">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Pendaftaran Dibuka</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span>Hadiah Jutaan Rupiah</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Sertifikat Resmi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;