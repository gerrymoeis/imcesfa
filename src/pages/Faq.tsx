import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    question: "Apa itu IMCESFA?",
    answer: "IMCESFA (Information Technology, Multimedia, and Communication for Education, Science, and Fun Activities) adalah acara tahunan yang diselenggarakan untuk mempromosikan inovasi dan kreativitas di bidang teknologi informasi.",
  },
  {
    value: "item-2",
    question: "Siapa saja yang bisa mengikuti kompetisi ini?",
    answer: "Kompetisi ini terbuka untuk seluruh mahasiswa aktif dari berbagai perguruan tinggi di Indonesia. Detail persyaratan dapat dilihat di halaman pendaftaran masing-masing cabang lomba.",
  },
  {
    value: "item-3",
    question: "Bagaimana cara mendaftar?",
    answer: "Pendaftaran dilakukan secara online melalui situs web resmi kami. Calon peserta diwajibkan membuat akun, mengisi formulir pendaftaran, dan mengunggah dokumen yang diperlukan.",
  },
  {
    value: "item-4",
    question: "Apakah ada biaya pendaftaran?",
    answer: "Ya, terdapat biaya pendaftaran yang bervariasi tergantung pada cabang lomba yang diikuti. Informasi detail mengenai biaya pendaftaran dapat ditemukan di halaman informasi setiap lomba.",
  },
  {
    value: "item-5",
    question: "Kapan batas akhir pendaftaran?",
    answer: "Batas akhir pendaftaran dan jadwal penting lainnya dapat dilihat pada halaman Timeline kami. Pastikan untuk mendaftar sebelum batas waktu yang ditentukan.",
  },
];

const Faq = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="w-full mb-12 p-8 text-center bg-black/20 backdrop-blur-sm border border-primary/20 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-shadow-primary">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Temukan jawaban atas pertanyaan yang sering diajukan mengenai acara kami.
          </p>
        </div>

        <AccordionRoot className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </div>
    </div>
  );
};

export default Faq;
