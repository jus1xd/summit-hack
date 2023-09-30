import { createSlice } from "@reduxjs/toolkit";
import { IFullMessage } from "../models/IMessage";
import { v4 as uuidv4 } from "uuid";

type TAbonents = {
  abonents: {
    abonentId: string;
    phone: string;
    messages: IFullMessage[];
  }[];
};

const initialState: TAbonents = {
  abonents: [
    // {
    //   abonentId: "",
    //   phone: "",
    //   messages: [] as IFullMessage[],
    // },
    // {
    //   abonentId: "1231414234234",
    //   phone: "+79205550516",
    //   messages: [] as IFullMessage[],
    // },
  ],
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    saveMessage(state, action) {
      const abonent = state.abonents.find(
        (abonent) => abonent.phone === action.payload.phone
      );
      if (abonent) {
        abonent.messages.push(action.payload);
      } else {
        state.abonents.push({
          abonentId: uuidv4(),
          phone: action.payload.phone,
          messages: [action.payload],
        });
      }
    },
    createAbonent(state, action) {
      const abonent = state.abonents.find(
        (abonent) => abonent.phone === action.payload.phone
      );
      if (abonent) {
        return;
      } else {
        state.abonents.push({
          abonentId: uuidv4(),
          phone: action.payload,
          messages: [],
        });
      }
    },
    deleteAbonent(state, action) {
      const abonent = state.abonents.find(
        (abonent) => abonent.phone === action.payload
      );
      if (abonent) {
        state.abonents = state.abonents.filter(
          (abonent) => abonent.phone !== action.payload
        );
      }
    },
  },
});

export const { saveMessage, createAbonent, deleteAbonent } =
  messagesSlice.actions;

export default messagesSlice;
