import { nanoid } from "nanoid"


const comments = [
   {
      date: Date.now() - 21321,
      viewed: false,
      client: {
         name: 'Geovani Mass',
         photo: ''
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      email: 'Loremi@ipsumi.com',
      phone: '123123123',
   },
   {
      date: Date.now() - 21321,
      viewed: true,
      client: {
         name: 'Geovani Mass',
         photo: ''
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      email: 'Loremi@ipsumi.com',
      phone: '123123123',
   },
   {
      date: Date.now() - 21321,
      viewed: false,
      client: {
         name: 'Geovani Mass',
         photo: ''
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      email: 'Loremi@ipsumi.com',
      phone: '123123123',
   },
   {
      date: Date.now() - 21321,
      viewed: true,
      client: {
         name: 'Geovani Mass',
         photo: ''
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      email: 'Loremi@ipsumi.com',
      phone: '123123123',
   },
   {
      date: Date.now() - 21321,
      viewed: false,
      client: {
         name: 'Geovani Mass',
         photo: ''
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      email: 'Loremi@ipsumi.com',
      phone: '123123123',
   },
   {
      date: Date.now() - 21321,
      viewed: false,
      client: {
         name: 'Geovani Mass',
         photo: ''
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      email: 'Loremi@ipsumi.com',
      phone: '123123123',
   },
   {
      date: Date.now() - 21321,
      viewed: false,
      client: {
         name: 'Geovani Mass',
         photo: ''
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      email: 'Loremi@ipsumi.com',
      phone: '123123123',
   },
   {
      date: Date.now() - 21321,
      viewed: false,
      client: {
         name: 'Geovani Mass',
         photo: ''
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      email: 'Loremi@ipsumi.com',
      phone: '123123123',
   },
   {
      date: Date.now() - 21321,
      viewed: false,
      client: {
         name: 'Geovani Mass',
         photo: ''
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      email: 'Loremi@ipsumi.com',
      phone: '123123123',
   },
   {
      date: Date.now() - 21321,
      viewed: false,
      client: {
         name: 'Geovani Mass',
         photo: ''
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      email: 'Loremi@ipsumi.com',
      phone: '123123123',
   },
]

comments.forEach(comment => {
   comment.id = nanoid()
   comment.archived = Math.random() >= 0.5
   comment.subject = Math.random() >= 2 / 3 ? 'Subject A' : Math.random() >= 1 / 3 ? 'Subject B' : 'Subject C'
})

export default comments