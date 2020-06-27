import * as AWS from 'aws-sdk'
import { News } from "../models/News";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

export class NewsAccess {

    constructor(
        private readonly docClient: DocumentClient = createDynamoDBClient(),
        private readonly todoTable = process.env.NEWS_TABLE)
    {}

    async getNews(): Promise<News[]> {
        const result = await this.docClient.scan({
            TableName: this.todoTable
        }).promise();

        return result.Items as News[]
    }

}

function createDynamoDBClient() {
    return new AWS.DynamoDB.DocumentClient()
}