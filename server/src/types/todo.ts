import { Document } from "mongoose";

export interface TodoI extends Document {
  name: string;
  description: string;
  status: boolean;
}
