import { Video } from "../models/Video";
import { VideosAccess } from "../dataLayer/VideosAccess";

const videoAccess = new VideosAccess();

export async function getVideos(): Promise<Video[]> {
    return videoAccess.getVideos();
}