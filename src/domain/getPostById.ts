import { IPostProps } from "./models";

export interface GetPostById {
    getById: (id: string) => Promise<IPostProps>;
}