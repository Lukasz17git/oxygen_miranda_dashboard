
/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
import { addExtensions } from './extensionsPlugin'
import { microTailwind, microTailwindExperimental } from './microTailwindPlugin'
import colors from 'tailwindcss/colors'
import { tw, twTransform } from 'tailwind-multi-class'
import { addUtilitesWithDarkMode } from './utilitiesWithDarkMode'



const palette = {
   //colors
   'green': '#799283',
   'green-pastel': '#EEF9F2',
   'green-pastel-darker': '#E8F2EF',
   'green-light': '#5AD07A',
   'green-dark': '#135846',
   'red': '#E23428',
   'red-pastel': '#FFEDEC',
   'orange': '#FF9C3A',
   'yellow': '#90811f',
   'yellow-pastel': 'rgb(253, 253, 224)'
}

const color = (cssVariableColor) => `rgba(var(${cssVariableColor}))`

export default {
   content: {
      files: [
         "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
      ],
      transform: {
         DEFAULT: twTransform(tw)
      }
   },
   darkMode: 'class',
   theme: {
      tc: {
         'black': '#222'
      },
      colors: {
         // backgrounds
         'bg-white-fff': 'rgba(var(--bg-white-fff))',
         'bg-white-contrast-f8f8f8': 'rgba(var(--bg-white-contrast-f8f8f8))',
         'bg-red-E23428': 'rgba(var(--bg-red-E23428))',
         //box-main-bg
         'box-main-bg': color('--bg-white-fff'),
         //box-main-sc
         //box-main-bc
         //box-sec-bg
         //box-sec-sc
         //box-sec-bc
         //box-red-bg

         // text color
         'text-white-fff': 'rgba(var(--text-white-fff))',
         '1': 'rgba(var(--text-black-262626))',
         'text-dark-393939': 'rgba(var(--text-dark-393939))',
         'text-grey-6E6E6E': 'rgba(var(--text-grey-6E6E6E))',
         'text-grey-dark-787878': 'rgba(var(--text-grey-dark-787878))',
         'text-silver-B2B2B2': 'rgba(var(--text-silver-B2B2B2))',
         //
         'text-red-E23428': 'rgba(var(--text-red-E23428))',
         'text-green-light-5AD07A': 'rgba(var(--text-green-light-5AD07A))',
         'text-green-dark-135846': 'rgba(var(--text-green-dark-135846))',
         'text-green-799283': 'rgba(var(--text-green-799283))',
         'text-green-pastel-EEF9F2': 'rgba(var(--text-green-pastel-EEF9F2))',

         // borders
         'border-silver-EBEBEB': 'rgba(var(--border-silver-EBEBEB))',
         'border-red-E23428': 'rgba(var(--border-red-E23428))', // opacities: 70
         'border-green-dark-135846': 'rgba(var(--border-green-dark-135846))', // opacities: 40
         'border-green-pastel-EEF9F2': 'rgba(var(--border-green-pastel-EEF9F2))',

         // button
         'button-white-contrast-fcfcfc': 'rgba(var(--button-white-contrast-fcfcfc))',
         'button-red-pastel-FFEDEC': 'rgba(var(--button-red-pastel-FFEDEC))',
         'button-green-dark-135846': 'rgba(var(--button-green-dark-135846))',
         'button-green-pastel-EEF9F2': 'rgba(var(--button-green-pastel-EEF9F2))',

         // icon
         'icon-white-F8F8F8': 'rgba(var(--icon-white-F8F8F8))',
         'icon-green-pastel-EEF9F2': 'rgba(var(--icon-green-pastel-EEF9F2))',

         // svgs
         'svg-white-FFFFFF': 'rgba(var(--svg-white-FFFFFF))',
         'svg-silver-B2B2B2': 'rgba(var(--svg-silver-B2B2B2))',
         'svg-grey-6E6E6E': 'rgba(var(--svg-grey-6E6E6E))',
         'svg-dark-393939': 'rgba(var(--svg-dark-393939))',
         'svg-red-E23428': 'rgba(var(--svg-red-E23428))',
         'svg-green-799283': 'rgba(var(--svg-green-799283))',

         // styles
         'black': '#212121',
         'white': '#FFFFFF',

         // BEST APROACH => HAVE TO REFACTOR ALL AGAIN XDDDDDDDDD

         // badge
         'badge-bg': 'rgba(var(--badge-bg))',
         'badge-tc': 'rgba(var(--badge-tc))',

         // input
         'input-main-bc': 'rgba(var(--input-main-bc))',

         // box
         'card-bg': '#FFFFFF',
         'card-gradient': '#EEF9F2',
         'card-bc--d': '#6E6E6E',

         // buttons
         'btn-main-bg': '#EEF9F2',
         'btn-main-bg--h': '',
         'btn-main-tc': '',
         'btn-main-tc--h': '',


         // END

         'green-pastel': '#EEF9F2',
         'red-pastel': '#FFEDEC',
         'yellow-pastel': 'rgb(253, 253, 224)',
         //
         'app-bg-white': '#f8f8f8',
         'input-bg-white': '#fcfcfc',
         'text-black': '#262626',
         'text-dark': '#393939',
         'text-grey-darker': '#787878',
         'text-grey': '#6E6E6E',
         'text-silver': '#B2B2B2',
         'text-white': '#D4D4D4',
         //
         'color-separator': '#EBEBEB',
         'color-separator-grey': '#DCDCDC',
         'color-separator-dark': '#A1A1A1',
         //
         'green-light': '#5AD07A',
         'green-dark': '#135846',
         'green-text': '#799283',
         'green-pastel-darker': '#E8F2EF',
         //
         'red-main': '#E23428',
         'orange-main': '#FF9C3A',
         'yellow-main': 'var(--yellow-main)',
         'fff': '#FFFFFF',
         '000': '#000',
         //darkmode
         'dark-mode-black': '#202020',
         'dark-mode-bg': '#171717',
         'dark-hover': '#313131',
         'dark-green': '#1b7e64',
         'dark-grey': '#787878',
         'dark-silver': '#999',
         'dark-white': '#C3C3C3',
         'dark-yellow': '#ffff21',
         'dark-yellow-pastel': '#f1ee3a',
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
         backgroundImage: {
            'hero-pattern': `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23eef9f2' fill-opacity='0.33' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            'hero-pattern-2': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23eef9f2' fill-opacity='0.2'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`
         },
         gridTemplateRows: {
            'contact': 'auto 1fr'
         },
         ...addExtensions,
      },
   },
   plugins: [
      plugin(microTailwind),
      plugin(microTailwindExperimental),
      plugin(addUtilitesWithDarkMode(({ addUtility, addClassNamedUtility }) => {
         //box, btn, input, line, icon, 
         //main, sec, on, off, 

         addUtility('tc', 'color', {
            "void": ["#000000"],
            "black": ["#262626"],
            "dark": ["#393939"],
            "grey": ["#6E6E6E"],
            "grey-light": ["#787878"], //este es text-grey-dark en mis anteriores
            "grey-dark": ["#"],
            "silver": ["#B2B2B2"],
            "white": ["#"],
            "blank": ['#FFFFFF'],
            "red": [palette.red],
            "green": [palette.green]
         })

         addUtility('bg', 'backgroundColor', {
            "box-main": ['#FFFFFF'],
            "box-sec": ['#F8F8F8'],

            "sidebar-active": [],
            "sidebar-hover": [],
            "icon-transparent-hover": [],
            "badge": [],
            "icon-kpi": [],
            "icon-kpi-hover": [],
            "icon-status-on": [],
            "icon-status-off": [],
            "icon-status-warning": [],
            "btn-transparent-hover": [],
            "btn-main": [],
            "btn-main-hover": [],
            "amenities": [],
            "status-available": [],
            "status-occupied": [],
         })

         addClassNamedUtility('btn-main', {
            backgroundColor: [palette['green-pastel']],
            color: [palette.green]
         })

         addClassNamedUtility('btn-main-h', {
            backgroundColor: [palette['green-pastel']],
            color: [palette.green]
         })

      })),
      plugin(({ addComponents, addBase }) => {

         addBase({
            svg: {
               '@apply h-24. w-24.': {}
            },
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
               '@apply h-24. w-24.': {}
            },
            '.tw-base-action-icon': {
               '@apply pos-r frcc h-40. w-40. br-6.': {}
            },
            '.tw-base-button': {
               '@apply h-40. frcc br-8. py-8. px-20. tf-app-semibold ts-14. min-w-120. max-w-100% bg-green-pastel tc-green-dark': {}
            },
         });
         // custom components
      })
   ],
}

