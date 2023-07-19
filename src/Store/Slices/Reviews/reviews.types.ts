

export type ReviewsSubjects = 'Subject A' | 'Subject B' | 'Subject C'

export type ReviewType = {
   _id: string,
   sentAt: string,
   viewed: boolean,
   archived: boolean,
   subject: ReviewsSubjects,
   comment: string,
   personName: string,
   personLastname: string,
   personEmail: string,
   personPhone: string
}