/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
import { addExtensions } from './extensionsPlugin'
import { microTailwind, microTailwindExperimental } from './microTailwindPlugin'
import { pixelSpacing } from './pixelSizesPlugin'
import colors from 'tailwindcss/colors'


export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      colors: {
         'app-bg-white': '#f8f8f8', //var(--app-bg-white)
         'input-bg-white': '#fcfcfc',
         'black': '#212121',
         'text-black': '#262626',
         'text-dark': '#393939',
         'text-grey-darker': '#787878',
         'text-grey': '#6E6E6E',
         'text-silver': '#B2B2B2',
         'text-white': '#D4D4D4',
         'color-separator': '#EBEBEB',
         'color-separator-grey': '#DCDCDC',
         'color-separator-dark': '#A1A1A1',
         'green-light': '#5AD07A',
         'green-dark': '#135846',
         'green-text': '#799283',
         'green-pastel-darker': '#E8F2EF',
         'green-pastel': '#EEF9F2',
         'red-main': '#E23428',
         'red-pastel': '#FFEDEC',
         'orange-main': '#FF9C3A',
         'yellow-main': 'var(--yellow-main)',
         'yellow-pastel': 'rgb(253, 253, 224)',
         'fff': '#FFFFFF',
         '000': '#000',
         ...colors
      },
      extend: {
         boxShadow: {
            'profile': '0px 20px 30px #00000014',
            'card': '0px 4px 4px #00000005',
            'comment': '0px 5px 5px rgba(0, 0, 0, 0.03)',
            'table-row': '0px 0px 32px rgba(0,0,0,0.05)'
         },
         fontFamily: {
            'app': 'var(--text-app)'
         },
         ...addExtensions,
      },
      spacing: pixelSpacing,
   },
   plugins: [
      plugin(microTailwind),
      plugin(microTailwindExperimental),
      plugin(({ addComponents, addBase }) => {
         addBase({
            svg: {
               '@apply h-24 w-24': {}
            }
         });
         // fonts
         addComponents({
            '.tf-app-light': {
               '@apply tf-app tw-light': {}
            },
            '.tf-app-regular': {
               '@apply tf-app tw-regular': {}
            },
            '.tf-app-semibold': {
               '@apply tf-app tw-semibold': {}
            },
            '.tf-app-extrabold': {
               '@apply tf-app tw-extrabold': {}
            },
         });
         // base components
         addComponents({
            '.tw-base-icon': {
               '@apply h-24 w-24': {}
            },
            '.tw-base-action-icon': {
               '@apply pos-r frcc h-40 w-40': {}
            },
            '.tw-base-button': {
               '@apply h-40 frcc br-8 py-8 px-20 tf-app-semibold ts-14 min-w-120 max-w-100% bg-green-pastel tc-green-dark': {}
            },
         });
         // custom components
      })
   ],
}

