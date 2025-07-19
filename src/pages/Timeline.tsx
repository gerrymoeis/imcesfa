import { Frame } from "@/components/ui/frame";
import { Clock } from "lucide-react";
import { DialogRoot, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Seo } from '@/components/common/Seo';


const timelineEvents = [
  {
    date: "1 Agustus 2024",
    title: "Pendaftaran Dibuka",
    description: "Pendaftaran untuk semua cabang kompetisi resmi dibuka. Siapkan tim Anda dan daftarkan diri segera!",
    details: "Proses pendaftaran dilakukan secara online melalui website resmi kami. Pastikan Anda telah membaca semua syarat dan ketentuan yang berlaku untuk setiap cabang kompetisi. Biaya pendaftaran dapat bervariasi tergantung pada kategori yang dipilih."
  },
  {
    date: "1 September 2024",
    title: "Batas Akhir Pendaftaran",
    description: "Kesempatan terakhir untuk menjadi bagian dari kompetisi. Pastikan semua persyaratan telah terpenuhi.",
    details: "Semua formulir dan dokumen pendukung harus sudah kami terima sebelum pukul 23:59 WIB. Pendaftaran yang masuk setelah batas waktu tidak akan diproses. Tidak ada perpanjangan waktu."
  },
  {
    date: "15 September 2024",
    title: "Pengumuman Peserta Lolos",
    description: "Tim yang berhasil lolos seleksi awal akan diumumkan. Persiapkan diri untuk tahap selanjutnya.",
    details: "Pengumuman akan dipublikasikan di website resmi dan dikirimkan melalui email kepada ketua tim. Peserta yang lolos akan diundang untuk mengikuti tahap Technical Meeting."
  },
  {
    date: "1 Oktober 2024",
    title: "Technical Meeting",
    description: "Sesi penjelasan teknis mengenai peraturan dan alur kompetisi untuk semua peserta.",
    details: "Kehadiran di Technical Meeting adalah wajib bagi perwakilan setiap tim. Sesi ini akan membahas detail aturan, sistem penilaian, dan jadwal teknis untuk hari kompetisi. Akan ada sesi tanya jawab langsung dengan panitia."
  },
  {
    date: "15 Oktober 2024",
    title: "Hari Kompetisi",
    description: "Hari puncak acara! Para peserta akan berkompetisi menunjukkan keahlian dan inovasi terbaik mereka.",
    details: "Kompetisi akan diselenggarakan secara serentak untuk semua cabang. Peserta diharapkan hadir di lokasi 1 jam sebelum jadwal untuk registrasi ulang. Jadwal detail setiap pertandingan akan dibagikan setelah Technical Meeting."
  },
  {
    date: "16 Oktober 2024",
    title: "Pengumuman Pemenang & Penutupan",
    description: "Pengumuman para juara dan penutupan rangkaian acara IMCESFA 2024.",
    details: "Acara penutupan akan diisi dengan pengumuman pemenang, penyerahan hadiah, dan sesi networking. Acara ini terbuka untuk semua peserta, panitia, dan sponsor."
  },
];

const TimelinePage = () => {
  return (
    <>
      <Seo 
        title="Linimasa Acara"
        description="Jadwal dan tahapan penting IMCESFA. Ikuti setiap tanggal krusial dari pendaftaran hingga pengumuman pemenang."
        keywords="Jadwal IMCESFA, timeline kompetisi, tanggal penting, pendaftaran, technical meeting, hari kompetisi"
      />
      <div className="relative py-24 sm:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative [--color-primary:hsl(210_100%_75%)] [--color-accent:hsl(280_100%_75%)]">
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
              <h2 className="text-base font-semibold leading-7 text-primary">Linimasa Acara</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Jadwal dan Tahapan Penting
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ikuti setiap tahapan penting dari acara IMCESFA. Jangan sampai terlewatkan informasi dan tanggal-tanggal krusial selama kompetisi berlangsung.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
              <div className="relative border-l-2 border-primary/30">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="mb-10 ml-6">
                    <span className="absolute -left-[1.1rem] flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 ring-8 ring-background">
                      <Clock className="h-5 w-5 text-accent" />
                    </span>
                    <DialogRoot>
                        <div className="relative p-4">
                            <Frame
                                className="w-full h-full drop-shadow-md drop-shadow-accent/10"
                                paths={[
                                  {
                                    show: true,
                                    style: {
                                      strokeWidth: '1',
                                      stroke: 'var(--color-accent)/20',
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
                            <div className="relative p-4">
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{event.date}</time>
                                <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                                <p className="mt-2 text-base font-normal text-gray-400">{event.description}</p>
                                <DialogTrigger className="mt-4 px-0 text-primary hover:text-accent underline-offset-4 hover:underline">
                                    Selengkapnya &rarr;
                                </DialogTrigger>
                            </div>
                        </div>
                        <DialogContent className="max-w-xl">
                            <DialogTitle>{event.title}</DialogTitle>
                            <DialogDescription>{event.date}</DialogDescription>
                            <p className="mt-4 text-gray-300">{event.details}</p>
                        </DialogContent>
                    </DialogRoot>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TimelinePage;
