import { Frame } from "@/components/ui/frame";
import { Code, Dna, PencilRuler } from "lucide-react";

const features = [
  {
    icon: <Code size={32} className="text-accent" />,
    title: "Kompetisi Pemrograman",
    description: "Uji kemampuan algoritma dan pemecahan masalah Anda dalam kompetisi pemrograman yang menantang.",
  },
  {
    icon: <PencilRuler size={32} className="text-accent" />,
    title: "Desain UI/UX",
    description: "Tunjukkan kreativitas Anda dalam merancang antarmuka pengguna yang intuitif dan menarik.",
  },
  {
    icon: <Dna size={32} className="text-accent" />,
    title: "Inovasi Teknologi",
    description: "Kembangkan solusi teknologi inovatif untuk menyelesaikan masalah dunia nyata.",
  },
];

const Features = () => {
  return (
    <div className="relative py-24 sm:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative [--color-primary:hsl(260_100%_75%)] [--color-accent:hsl(300_100%_75%)]">
          {/* Main Feature Frame */}
          <Frame
            enableBackdropBlur
            className="w-full h-full drop-shadow-lg drop-shadow-primary/20"
            paths={[
              {
                show: true,
                style: {
                  strokeWidth: '1.5',
                  stroke: 'var(--color-primary)/50',
                  fill: 'var(--color-primary)/10',
                },
                path: [
                  ['M', '15', '0'],
                  ['L', '100% - 15', '0'],
                  ['L', '100%', '15'],
                  ['L', '100%', '100%'],
                  ['L', '0', '100%'],
                  ['L', '0', '15'],
                  ['L', '15', '0'],
                ],
              },
              {
                show: true,
                style: {
                  strokeWidth: '1',
                  stroke: 'var(--color-accent)/40',
                  fill: 'none',
                },
                path: [
                  ['M', '30', '0'],
                  ['L', '100% - 30', '0'],
                ],
              },
            ]}
          />

          <div className="relative p-12">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Fitur Unggulan</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Jelajahi Dunia Kompetisi Kami
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Kami menyediakan berbagai bidang kompetisi yang dirancang untuk mengasah keahlian dan mendorong batas inovasi Anda.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.title} className="relative flex flex-col p-6 rounded-lg transition-all duration-300">
                    {/* Inner Frame for each feature card */}
                    <Frame
                      className="w-full h-full drop-shadow-md drop-shadow-accent/20"
                      paths={[
                        {
                          show: true,
                          style: {
                            strokeWidth: '1',
                            stroke: 'var(--color-accent)/30',
                            fill: 'var(--color-accent)/5',
                          },
                          path: [
                            ['M', '10', '0'],
                            ['L', '100% - 10', '0'],
                            ['L', '100%', '10'],
                            ['L', '100%', '100% - 10'],
                            ['L', '100% - 10', '100%'],
                            ['L', '10', '100%'],
                            ['L', '0', '100% - 10'],
                            ['L', '0', '10'],
                            ['L', '10', '0'],
                          ],
                        },
                      ]}
                    />
                    <div className="relative">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                        {feature.icon}
                        {feature.title}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                        <p className="flex-auto">{feature.description}</p>
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
