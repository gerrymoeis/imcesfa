import { Frame } from "@/components/ui/frame";
import { TabsRoot, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DialogRoot, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Seo } from '@/components/common/Seo';

const team = [
  {
    name: 'Gerry Geraldy',
    role: 'Project Lead',
    imageUrl: 'https://placehold.co/256x256/1a1a1a/ffffff?text=GG',
    bio: 'Gerry adalah seorang visioner dengan hasrat untuk mendorong batas-batas teknologi. Dengan pengalaman memimpin berbagai proyek sukses, ia memastikan IMCESFA berjalan dengan lancar dan mencapai tujuannya.'
  },
  {
    name: 'Anya Forger',
    role: 'Head of Design',
    imageUrl: 'https://placehold.co/256x256/1a1a1a/ffffff?text=AF',
    bio: 'Anya membawa sentuhan kreativitas yang unik ke dalam tim. Keahliannya dalam desain UI/UX memastikan bahwa platform IMCESFA tidak hanya fungsional tetapi juga memberikan pengalaman pengguna yang luar biasa.'
  },
  {
    name: 'Yor Briar',
    role: 'Lead Developer',
    imageUrl: 'https://placehold.co/256x256/1a1a1a/ffffff?text=YB',
    bio: 'Sebagai otak di balik arsitektur teknis, Yor bertanggung jawab untuk mengubah ide-ide desain menjadi kenyataan. Keterampilannya dalam pengembangan perangkat lunak adalah tulang punggung dari platform kami.'
  },
];

const AboutPage = () => {
  return (
    <>
      <Seo 
        title="Tentang Kami"
        description="Pelajari lebih lanjut tentang IMCESFA, kompetisi yang mendorong inovasi di bidang teknologi dan desain. Lihat visi, misi, dan sejarah kami."
        keywords="Tentang IMCESFA, visi misi, sejarah kompetisi, inovasi teknologi, pelatihan coding"
      />
      <div className="relative py-24 sm:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative [--color-primary:hsl(210_100%_75%)] [--color-accent:hsl(180_100%_75%)]">
            {/* Main Page Frame */}
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
              ]}
            />

            <div className="relative p-12">
              <div className="mx-auto max-w-3xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-primary">Tentang Acara</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Mengenal IMCESFA Lebih Dekat
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  IMCESFA adalah wadah bagi para talenta digital untuk berinovasi, berkolaborasi, dan berkompetisi dalam semangat sportivitas dan keunggulan teknologi.
                </p>
              </div>

              <div className="mx-auto mt-16 max-w-4xl">
                <TabsRoot defaultValue="vision" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-transparent border border-primary/20 p-1 rounded-lg">
                    <TabsTrigger value="vision">Visi</TabsTrigger>
                    <TabsTrigger value="mission">Misi</TabsTrigger>
                    <TabsTrigger value="history">Sejarah</TabsTrigger>
                  </TabsList>
                  <TabsContent value="vision" className="mt-6 p-6 bg-black/20 rounded-lg border border-accent/20">
                    <h3 className="text-xl font-bold text-accent">Visi Kami</h3>
                    <p className="mt-4 text-gray-400">
                      Menjadi tolok ukur kompetisi teknologi dan digital terdepan di Indonesia, yang melahirkan inovator-inovator kelas dunia yang siap menghadapi tantangan global.
                    </p>
                  </TabsContent>
                  <TabsContent value="mission" className="mt-6 p-6 bg-black/20 rounded-lg border border-accent/20">
                    <h3 className="text-xl font-bold text-accent">Misi Kami</h3>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-400">
                      <li>Menyelenggarakan kompetisi yang adil, transparan, dan menantang.</li>
                      <li>Mendorong kolaborasi antara akademisi, industri, dan pemerintah.</li>
                      <li>Memberikan platform bagi peserta untuk menampilkan bakat dan karyanya.</li>
                      <li>Menginspirasi generasi muda untuk mencintai teknologi dan inovasi.</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="history" className="mt-6 p-6 bg-black/20 rounded-lg border border-accent/20">
                    <h3 className="text-xl font-bold text-accent">Sejarah Singkat</h3>
                    <p className="mt-4 text-gray-400">
                      Didirikan pada tahun 2020, IMCESFA berawal dari sebuah inisiatif kecil komunitas mahasiswa untuk menciptakan sebuah acara yang dapat mewadahi semangat kompetisi di bidang IT. Dari tahun ke tahun, kami terus bertumbuh menjadi salah satu acara kompetisi digital paling bergengsi dan dinantikan.
                    </p>
                  </TabsContent>
                </TabsRoot>
              </div>

              {/* Team Section */}
              <div className="mx-auto mt-24 max-w-7xl text-center">
                <h2 className="text-base font-semibold leading-7 text-primary">Struktur Organisasi</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Kenali Tim di Balik Layar
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Tim kami terdiri dari individu-individu bersemangat yang berdedikasi untuk menyukseskan acara ini.
                </p>
              </div>

              <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((person) => (
                  <DialogRoot key={person.name}>
                    <DialogTrigger className="w-full h-full cursor-pointer group">
                      <div className="relative p-4 h-full">
                        <Frame
                          className="w-full h-full drop-shadow-md drop-shadow-accent/20 group-hover:drop-shadow-primary/40 transition-all duration-300"
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
                        <div className="relative flex flex-col items-center">
                          <img className="mx-auto h-32 w-32 rounded-full object-cover border-2 border-accent/50 group-hover:border-primary/70 transition-all duration-300" src={person.imageUrl} alt={`Foto ${person.name}`} loading="lazy" />
                          <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                          <p className="text-base leading-7 text-primary">{person.role}</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                      <DialogTitle>{person.name}</DialogTitle>
                      <DialogDescription>{person.role}</DialogDescription>
                      <p className="mt-4 text-gray-300">{person.bio}</p>
                    </DialogContent>
                  </DialogRoot>
                ))}
              </div>

              {/* Contact Section */}
              <div className="mx-auto mt-24 max-w-4xl text-center">
                <h2 className="text-base font-semibold leading-7 text-primary">Hubungi Kami</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Punya Pertanyaan atau Masukan?
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Kami senang mendengar dari Anda. Isi formulir di bawah ini untuk menghubungi tim kami.
                </p>
              </div>

              <div className="mx-auto mt-16 max-w-2xl relative p-4">
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
                  <div className="relative p-8">
                      <form action="#" method="POST" className="space-y-6">
                          <div>
                              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-200 text-left">Nama Lengkap</label>
                              <div className="mt-2.5">
                                  <Input type="text" name="name" id="name" autoComplete="name" placeholder="Nama Anda" />
                              </div>
                          </div>
                          <div>
                              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-200 text-left">Email</label>
                              <div className="mt-2.5">
                                  <Input type="email" name="email" id="email" autoComplete="email" placeholder="email@anda.com" />
                              </div>
                          </div>
                          <div>
                              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-200 text-left">Pesan</label>
                              <div className="mt-2.5">
                                  <Textarea name="message" id="message" rows={4} placeholder="Tulis pesan Anda di sini..." />
                              </div>
                          </div>
                          <div className="mt-10">
                              <Button type="submit" className="w-full">Kirim Pesan</Button>
                          </div>
                      </form>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
