import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "q1",
    question: "Siapa saja yang bisa mengikuti kompetisi ini?",
    answer: "Kompetisi ini terbuka untuk seluruh mahasiswa aktif dari berbagai perguruan tinggi di Indonesia. Selama Anda memiliki semangat untuk belajar dan berinovasi, Anda dipersilakan untuk mendaftar.",
  },
  {
    value: "q2",
    question: "Bagaimana cara mendaftar sebagai peserta?",
    answer: "Pendaftaran dilakukan secara online melalui tombol 'Daftar Sekarang' di halaman utama. Anda akan diminta untuk mengisi formulir pendaftaran dan mengunggah dokumen yang diperlukan. Pastikan untuk mengikuti semua petunjuk dengan cermat.",
  },
  {
    value: "q3",
    question: "Apakah ada biaya pendaftaran?",
    answer: "Tidak, kompetisi ini sepenuhnya gratis dan tidak dipungut biaya pendaftaran. Kami ingin memberikan kesempatan seluas-luasnya bagi para talenta digital untuk berpartisipasi tanpa beban finansial.",
  },
  {
    value: "q4",
    question: "Apa saja hadiah untuk para pemenang?",
    answer: "Pemenang akan mendapatkan hadiah uang tunai, sertifikat penghargaan, serta kesempatan untuk mendapatkan bimbingan dari para ahli di industri teknologi. Detail lebih lanjut mengenai hadiah akan diumumkan segera.",
  },
];

const Faq = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary-foreground">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-secondary-foreground mt-2">
          Temukan jawaban untuk pertanyaan yang paling sering diajukan.
        </p>
      </div>
      <AccordionRoot className="max-w-3xl mx-auto [--color-primary:hsl(260_100%_80%)]">
        {faqItems.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </section>
  );
};

export default Faq;
