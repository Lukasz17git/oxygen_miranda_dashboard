import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wait from '../../../Utils/wait.js'
import { getDataFromLocalStore, updateDataToLocalStore } from '../../../Utils/localStore.js'
import { RootState } from "../../store.js";

type CommentType = {
   id: string,
   sentAt: number, //or better date?
   viewed: boolean,
   archived: boolean,
   subject: 'Subject A' | 'Subject B' | 'Subject C',
   comment: string,
   person: {
      name: string,
      lastname: string,
      email: string,
      phone: string
   }
}
