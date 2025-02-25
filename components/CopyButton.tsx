"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
   const [isCopied, setIsCopied] = useState(false);

   const copy = async () => {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
         setIsCopied(false);
      }, 2000);
   };

   return (
      <button
         disabled={isCopied}
         onClick={copy}
         className="absolute right-2 top-2 rounded-md px-2 py-1 text-sm 
                 bg-zinc-700 text-zinc-100 hover:bg-zinc-600"
      >
         {isCopied ? "Copied!" : "Copy"}
      </button>
   );
}
