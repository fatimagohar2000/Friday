import { Wit } from "node-wit";

export const WitClient = new Wit({ accessToken: process.env.WIT_ACCESS_TOKEN ? process.env.WIT_ACCESS_TOKEN : '' })