import { News } from "../models/News";
import { NewsAccess } from "../dataLayer/NewsAccess";

const newsAccess = new NewsAccess();

export async function getNews(): Promise<News[]> {
    return newsAccess.getNews();
}