import { Bebas_Neue, Roboto, Oxygen, Inter, Bitcount_Grid_Single, JetBrains_Mono } from 'next/font/google';

export const roboto= Roboto({subsets: ['latin'], weight: ["100", "400", "700"]});
export const bebas = Bebas_Neue({subsets: ['latin'], weight: ["400"]});
export const oxygen = Oxygen({subsets: ['latin'], weight: ["400", "700"]});
export const inter = Inter({ subsets: ['latin'] })
export const bitcount = Bitcount_Grid_Single({ subsets: ['latin'], weight: ["100", "400"] })
export const jetBrains = JetBrains_Mono({ subsets: ['latin'], weight: ["100", "400"] })
