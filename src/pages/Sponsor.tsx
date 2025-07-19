import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Seo } from '@/components/common/Seo';

const sponsors = [
  {
    name: "Sponsor A",
    description: "Sponsor A adalah perusahaan teknologi terkemuka yang mendukung inovasi di kalangan mahasiswa.",
    tier: "Platinum",
  },
  {
    name: "Sponsor B",
    description: "Sponsor B berfokus pada pengembangan perangkat lunak dan solusi cloud.",
    tier: "Gold",
  },
  {
    name: "Sponsor C",
    description: "Sponsor C menyediakan platform edukasi untuk talenta digital masa depan.",
    tier: "Gold",
  },
  {
    name: "Sponsor D",
    description: "Sponsor D adalah inkubator startup yang membantu ide-ide cemerlang menjadi kenyataan.",
    tier: "Silver",
  },
  {
    name: "Sponsor E",
    description: "Sponsor E bergerak di bidang keamanan siber dan perlindungan data.",
    tier: "Silver",
  },
  {
    name: "Sponsor F",
    description: "Sponsor F adalah komunitas developer open-source yang aktif.",
    tier: "Bronze",
  },
];

const Sponsor = () => {
  return (
    <>
      <Seo 
        title="Sponsor Kami"
        description="Terima kasih kepada para sponsor yang telah mendukung IMCESFA. Lihat daftar partner dan sponsor kami."
        keywords="Sponsor IMCESFA, partner kompetisi, sponsorship teknologi, dukungan acara IT"
      />
      <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="w-full mb-12 p-8 text-center bg-black/20 backdrop-blur-sm border border-primary/20 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-shadow-primary">
              Sponsor Kami
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Kami berterima kasih kepada para sponsor yang telah mendukung acara ini.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <DialogRoot key={sponsor.name}>
              <DialogTrigger className="w-full h-full text-left">
                <div className="w-full h-full p-6 transition-all duration-300 hover:bg-primary/10 border border-secondary/20 rounded-lg flex flex-col items-center justify-center">
                    <div className="w-32 h-32 bg-muted/20 rounded-full mb-4 flex items-center justify-center">
                      {/* Placeholder for logo */}
                      <span className="text-muted-foreground">Logo</span>
                    </div>
                    <h3 className="text-2xl font-bold text-center text-shadow-secondary">
                      {sponsor.name}
                    </h3>
                    <p className="text-center text-accent">
                      {sponsor.tier}
                    </p>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>{sponsor.name}</DialogTitle>
                <DialogDescription>
                  {sponsor.description}
                </DialogDescription>
              </DialogContent>
            </DialogRoot>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Sponsor;
