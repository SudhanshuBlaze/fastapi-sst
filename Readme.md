# SST Python FastAPI Deployment

## This repository contains a sample app for deploying a Python FastAPI application on AWS Lambda using SST.

### What is SST?

SST is a framework that makes it easy to deploy serverless applications on AWS Lambda. It provides a simple, declarative syntax for describing your application, and it takes care of all the details of deploying and managing your application in AWS.

### What is this sample app?

This sample app is a simple Python FastAPI application that returns a "Hello, world!" message. It is intended to be used as a demo for how to deploy a Python FastAPI application on AWS Lambda using SST.

## Why use Mangum?

Normally it you can deploy python functions to AWS lambda and and map each function to an endpoint but with the help of Mangum you can deploy a python FastAPI application to AWS Lambda and map all the endpoints to a single lambda function.

### Prerequisites

- Install and configure your [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
- [Node.js](https://nodejs.org/en/download) version 16 or higher.
- [pnpm](https://pnpm.io/installation).
- [Python](https://www.python.org/downloads/) 3.10 or higher.
- Install dependencies in requirements.txt file or simply do:
  `pip install fastapi mangum uvicorn`

### Step by step guide

`Step: 1` Download [Python template for SST](https://github.com/serverless-stack/sst/tree/master/packages/create-sst/bin/presets/other/python/templates)

```bash
pnpm create sst fastapi-sst --template=other/python
```

**Note:** With this command you can only create a sample python project, but we need to do some minor changes to the project deploy a FastAPI application which can be found in this repository.

`Step: 2` Change directory to fastapi-sst

```bash
cd fastapi-sst
```

`Step: 3` Install dependencies

```bash
pnpm install
```

`Step: 4` Deploy to the dev environment

```bash
pnpm sst dev
```

**Note:** At this point you'll get a temproary url to test the app. You can test the app by making a request to the provided url.

`Step: 5` Deploy to prod environment

```bash
pnpm sst deploy --stage prod
```

#

Learn more about SST on [docs.serverless-stack.com](https://docs.serverless-stack.com/).
