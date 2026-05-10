import { Hina_Mincho, Dela_Gothic_One, Yusei_Magic, Train_One, Shippori_Mincho, Cherry_Bomb_One, Darumadrop_One, Rock_3D } from 'next/font/google';

const hinaMincho = Hina_Mincho({ weight: '400', subsets: ['latin'], preload: false })
const dela = Dela_Gothic_One({ weight: '400', subsets: ['latin'], preload: false })
const yusei = Yusei_Magic({ weight: '400', subsets: ['latin'], preload: false })
const train = Train_One({ weight: '400', subsets: ['latin'], preload: false })
const shippori = Shippori_Mincho({ weight: '400', subsets: ['latin'], preload: false })
const cherry = Cherry_Bomb_One({ weight: '400', subsets: ['latin'], preload: false })
const darumadrop = Darumadrop_One({ weight: '400', subsets: ['latin'], preload: false })
const rock3d = Rock_3D({ weight: '400', subsets: ['latin'], preload: false })


export const fontsData = [
    {
        japanese: "Katakana",
        name: "Hina Mincho",
        url: "https://fonts.google.com/specimen/Hina+Mincho",
        class: hinaMincho.className,
        backgroundColor: "#f7e6e7",
        textColor: "#640A37",
        description: "A delicate, old-style Mincho font with a nostalgic and elegant atmosphere."
    },
    {
        japanese: "Katakana",
        name: "Dela Gothic One",
        url: "https://fonts.google.com/specimen/Dela+Gothic+One",
        class: dela.className,
        backgroundColor: "#e65916",
        textColor: "#1F2937",
        description: "A flat, ultra-thick Gothic font that provides a heavy visual impact and stability."
    },
    {
        japanese: "Katakana",
        name: "Yusei Magic",
        url: "https://fonts.google.com/specimen/Yusei+Magic",
        class: yusei.className,
        backgroundColor: "#FFEE00",
        textColor: "#231816",
        description: "A unique hand-drawn font inspired by the look of letters written with a marker."
    }, {
        japanese: "Katakana",
        name: "Train One",
        url: "https://fonts.google.com/specimen/Train+One",
        class: train.className,
        backgroundColor: "#F7F7F7",
        textColor: "#088E31",
        description: "A decorative font featuring double-line strokes that give a sense of movement."
    },
    {
        japanese: "Hiragana",
        name: "Shippori Mincho",
        url: "https://fonts.google.com/specimen/Shippori+Mincho",
        class: shippori.className,
        backgroundColor: "#D6D61D",
        textColor: "#111111",
        description: "A beautiful, traditional Mincho font designed for high-quality readability and grace."
    },
    {
        japanese: "Hiragana",
        name: "Cherry Bomb One",
        url: "https://fonts.google.com/specimen/Cherry+Bomb+One",
        class: cherry.className,
        backgroundColor: "#FFFEFB",
        textColor: "#AA303F",
        description: "A pop and energetic font with thick, rounded shapes that look like they might burst."
    },
    {
        japanese: "Hiragana",
        name: "Darumadrop One",
        url: "https://fonts.google.com/specimen/Darumadrop+One",
        class: darumadrop.className,
        backgroundColor: "#DA0002",
        textColor: "#D0C3B2",
        description: "A playful, hand-drawn style font with a slightly bouncy and casual feel."
    },
    {
        japanese: "Hiragana",
        name: "Rock 3D",
        url: "https://fonts.google.com/specimen/Rock+3D",
        class: rock3d.className,
        backgroundColor: "#FFFFFF",
        textColor: "##828282",
        description: "A bold, three-dimensional font that creates a powerful, stony texture."
    }]