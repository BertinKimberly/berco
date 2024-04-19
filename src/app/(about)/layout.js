import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
   "20+ Projects Completed",
   "2+ Years of Experience",
   "Passionate and willing to learn new technologies",
];

export default function AboutLayout({ children }) {
   return (
      <main className='w-full flex flex-col items-center justify-between'>
         <InsightRoll insights={insights} />
         {children}
      </main>
   );
}
