import { nanoid } from "nanoid"

type Booking = {
   id?: string;
   customer: {
      name: string;
      imageUrl: string;
      id: string;
   };
   orderDate: number;
   inDate: number;
   outDate: number;
   request: string;
   roomType: string;
   status: string;
}
const bookings: Booking[] = [
   {
      customer: {
         name: 'Jessica Thompson',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: 'something',
      roomType: 'Single Bed',
      status: 'in',
   },
   {
      customer: {
         name: 'Benjamin Parker',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Double Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Olivia Martinez',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: 'something',
      roomType: 'D. Superior',
      status: 'progress',
   },
   {
      customer: {
         name: 'Liam Wilson',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: 'something',
      roomType: 'Suite',
      status: 'progress',
   },
   {
      customer: {
         name: 'Emily Johnson',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Ethan Adams',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Sophia Davis',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: 'something',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Noah Wright',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Ava Lewis',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: 'something',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'William Anderson',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Isabella Garcia',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'James Robinson',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Mia Mitchell',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Alexander Lee',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Charlotte Hall',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Daniel Turner',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Harper Hernandez',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Samuel Green',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Amelia Cooper',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Michael Campbell',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
   {
      customer: {
         name: 'Customer Name',
         imageUrl: '',
         id: '123123'
      },
      orderDate: Date.now() - 3121312,
      inDate: Date.now() - 32132,
      outDate: Date.now() + 444222,
      request: '',
      roomType: 'Single Bed',
      status: 'out',
   },
]


bookings.forEach(booking => {
   booking.id = nanoid()
})

export default bookings