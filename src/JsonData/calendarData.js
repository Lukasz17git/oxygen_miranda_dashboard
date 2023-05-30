
// status = 'in', 'out', 'occupied'

export const calendarData = [
   {
      room: {
         name: 'Queen Bed A-12340',
         src: '/Images/hotel-1.jpg',
         status: 'in',
         date: Date.now() - 10000,
         days: ['3']
      },
      client: {
         name: 'Angela Mass',
         photo: ''
      }
   },
   {
      room: {
         name: 'Deluxe Bed Z-34',
         src: '/Images/hotel-2.jpg',
         status: 'out',
         date: Date.now() - 100000,
         days: ['4', '5', '6']
      },
      client: {
         name: 'Geovani Mass',
         photo: ''
      }
   },
   {
      room: {
         name: 'Premium Bed A-33',
         src: '/Images/hotel-3.jpg',
         status: 'occupied',
         date: Date.now() - 300000,
         days: ['12', '13']
      },
      client: {
         name: 'Pedro Mass',
         photo: ''
      }
   },
   {
      room: {
         name: 'Duplex Bed DD-2',
         src: '/Images/hotel-4.jpg',
         status: 'in',
         date: Date.now() - 1200000,
         days: ['4']
      },
      client: {
         name: 'Mass Mass',
         photo: ''
      }
   },
   {
      room: {
         name: 'Premium 4',
         src: '/Images/hotel-5.jpg',
         status: 'occupied',
         date: Date.now() - 21100000,
         days: ['4', '5', '6']
      },
      client: {
         name: 'Peter not Peter',
         photo: ''
      }
   },
   {
      room: {
         name: 'Premium Double Bed B-432',
         src: '/Images/hotel-6.jpg',
         status: 'out',
         date: Date.now() - 121100000,
         days: ['11', '12', '13', '14']
      },
      client: {
         name: 'Bravo Wilson',
         photo: ''
      }
   },
]