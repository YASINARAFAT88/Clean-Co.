/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#176F6B",

          "secondary": "#FFC000",

          "accent": "#e89be1",

          "neutral": "#201B23",

          "base-100": "#E5E6EB",

          "info": "#3D7DC7",

          "success": "#219C4E",

          "warning": "#C2930F",

          "error": "#FC5465",
        },
      },
      "dark",
    ],
  },
  // theme: {
  //   themes: [
  //     {
  //       cleanCoTheme: {

  //         "primary": "#176F6B",

  //         "secondary": "#FFC000",

  //         "accent": "#FFEDD5",

  //         "neutral": "#3D4451",

  //         "base-100": "#FFFFFF",

  //         "info": "#98A8DD",

  //         "success": "#1BBB70",

  //         "warning": "#DF7E07",

  //         "error": "#FA5CSC",
  //       },
  //     },
  //   ],
  // },
  plugins: [require("daisyui")],
}
