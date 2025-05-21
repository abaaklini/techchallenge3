import { IPostProps } from "./models";

export interface GetPosts {
    get(): Promise<IPostProps[]>;
}