const spacingExtension = {
   // percentages
   a: 'auto',
   '10%': '10%',
   '20%': '20%',
   '25%': '25%',
   '30%': '30%',
   '40%': '40%',
   '50%': '50%',
   '60%': '60%',
   '70%': '70%',
   '75%': '75%',
   '80%': '80%',
   '90%': '90%',
   '100%': '100%',
   // ems
   "0.5em": '0.5em',
   "0.6em": '0.6em',
   "0.7em": '0.7em',
   "0.8em": '0.8em',
   "0.9em": '0.9em',
   "1em": '1em',
   "1.1em": '1.1em',
   "1.2em": '1.2em',
   "1.3em": '1.3em',
   "1.4em": '1.4em',
   "1.5em": '1.5em',
   "1.6em": '1.6em',
   "1.7em": '1.7em',
   "1.8em": '1.8em',
   "1.9em": '1.9em',
   "2em": '2em',
}

const heightExtension = {
   '100vh': '100vh',
   min: 'min-content',
   max: 'max-content',
   fit: 'fit-content'
}

const widthExtension = {
   '100vw': '100vw',
   min: 'min-content',
   max: 'max-content',
   fit: 'fit-content',
}

const screensExtension = {
   'xsm': '372px'
}

const opacityExtension = {
   1: '0.01',
   2: '0.02',
   3: '0.03',
   4: '0.04',
   6: '0.06',
   7: '0.07',
   8: '0.08',
   9: '0.09',
   11: '0.11',
   12: '0.12',
   13: '0.13',
   14: '0.14',
   15: '0.15',
   16: '0.16',
   17: '0.17',
   18: '0.18',
   19: '0.19',
};

const zIndexExtension = {
   1: '1',
   2: '2',
   3: '3',
   60: '60',
   70: '70',
   80: '80',
   90: '90',
   99: '99',
   100: '100',
   101: '101',
   102: '102',
   999: '999',
   1000: '1000',
   1001: '1001',
   9999: '9999',
}

const fontWeightExtension = {
   regular: 400
}

const scaleExtension = {
   5: '.05',
   10: '.1',
   15: '.15',
   20: '.2',
   25: '.25',
   30: '.3',
   35: '.35',
   40: '.4',
   45: '.45',
   55: '.55',
   60: '.6',
   65: '.65',
   70: '.7',
   80: '.8',
   85: '.85',
   115: '1.15',
   120: '1.2',
   130: '1.3',
   135: '1.35',
   140: '1.4',
   145: '1.45',
   155: '1.55',
   160: '1.6',
   165: '1.65',
   170: '1.7',
   175: '1.75',
   180: '1.8',
   185: '1.85',
   190: '1.9',
   195: '1.95',
   200: '2'
};

export const addExtensions = {
   spacing: spacingExtension,
   height: heightExtension,
   width: widthExtension,
   maxHeight: heightExtension,
   minHeight: ({ theme }) => ({
      ...theme('spacing'),
      ...heightExtension
   }),
   maxWidth: ({ theme }) => ({
      ...theme('spacing'),
      ...widthExtension
   }),
   minWidth: ({ theme }) => ({
      ...theme('spacing'),
      ...widthExtension
   }),
   screens: screensExtension,
   opacity: opacityExtension,
   zIndex: zIndexExtension,
   fontWeight: fontWeightExtension,
   scale: scaleExtension
}
