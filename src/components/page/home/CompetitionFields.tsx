import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Code, Palette, Terminal } from "lucide-react";

const competitionFields = [
  {
    value: "technology",
    title: "Teknologi",
    icon: <Code className="size-8 mb-4 text-accent-foreground" />,
    description: "Menguji kemampuan dalam pengembangan perangkat lunak, rekayasa sistem, dan inovasi teknologi terkini. Peserta akan dihadapkan pada tantangan untuk membangun solusi fungsional yang relevan dengan industri.",
  },
  {
    value: "design",
    title: "Desain",
    icon: <Palette className="size-8 mb-4 text-accent-foreground" />,
    description: "Fokus pada kreativitas dalam merancang antarmuka pengguna (UI) dan pengalaman pengguna (UX) yang intuitif dan menarik. Penilaian mencakup aspek estetika, fungsionalitas, dan inovasi desain.",
  },
  {
    value: "programming",
    title: "Pemrograman",
    icon: <Terminal className="size-8 mb-4 text-accent-foreground" />,
    description: "Adu kecepatan dan ketepatan dalam menyelesaikan masalah-masalah algoritma dan struktur data. Kategori ini menguji logika, efisiensi kode, dan kemampuan problem-solving di bawah tekanan.",
  },
];

const CompetitionFields = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary-foreground">
          Bidang Kompetisi
        </h2>
        <p className="text-lg text-secondary-foreground mt-2">
          Jelajahi berbagai kategori yang kami tawarkan.
        </p>
      </div>
      <TabsRoot defaultValue="technology">
        <TabsList>
          {competitionFields.map((field) => (
            <TabsTrigger key={field.value} value={field.value}>
              {field.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {competitionFields.map((field) => (
          <TabsContent key={field.value} value={field.value}>
            <div className="flex flex-col md:flex-row items-center gap-8 p-6">
              <div className="flex-shrink-0">{field.icon}</div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-primary-foreground mb-3">
                  {field.title}
                </h3>
                <p className="text-lg text-secondary-foreground max-w-2xl">
                  {field.description}
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </TabsRoot>
    </section>
  );
};

export default CompetitionFields;
