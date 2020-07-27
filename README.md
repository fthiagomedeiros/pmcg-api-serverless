# PMCG - Serverless

This serverless backend is provided to the project `CG de Casa - Mexe Campina`, available on Google Play at https://play.google.com/store/apps/details?id=br.gov.pb.campinagrande.mcampina

During the coronavirus pandemic, keeping a routine of exercises is a challenge. Most people have given up practicing their daily physical activities. The municipal administration of Campina Grande requested to developing an application to help  people about practicing physical activities and bringing to citizens advices about how to stay health during the pandemic.

This project was built and donated to municipal administration

## Deploying on AWS

1. We built this backend using serverless framework, please install it on your machine
![Serverless Framework](https://www.serverless.com/)

2. Install Node ![NodeJS](https://nodejs.org/en/download/)

3. Set AWS credentials

4. Run 
```shell 
npm install
```
5. Run 
```shell 
sls deploy
```

Please, have a look in architectural diagram below.
__WAF is not provided when deploying this project on AWS__

You can see the architecture in
![Serverless](https://github.com/fthiagomedeiros/pmcg-api-serverless/blob/master/PMCG_Backend_Architecture.png "Architecture")
