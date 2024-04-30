export default function manifest() {
   return {
      name: "Berco",
      short_name: "Berco",
      description: "Know More About Programming",
      start_url: "/",
      display: "standalone",
      //   background_color: '#fff',
      //   theme_color: '#fff',
      icons: [
         {
            src: "/apple-icon.png",
            sizes: "32x32",
            type: "image/png",
         },
      ],
   };
}
