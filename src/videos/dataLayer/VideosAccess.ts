import * as AWS from 'aws-sdk'
import { Video } from "../models/Video";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

export class VideosAccess {

    constructor(
        private readonly docClient: DocumentClient = createDynamoDBClient(),
        private readonly todoTable = process.env.VIDEOS_TABLE)
    {}

    async getVideos(): Promise<Video[]> {
        const result = await this.docClient.scan({
            TableName: this.todoTable
        }).promise();

        return result.Items as Video[]
    }

}

function createDynamoDBClient() {
    return new AWS.DynamoDB.DocumentClient()
}