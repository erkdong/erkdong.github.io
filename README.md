# React + TypeScript + Vite

With:

- Material UI
- TailwindCSS
- Redux

Additionally set up for deployment onto AWS.

# Prerequisites

1. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
2. [AWS SAM](https://aws.amazon.com/serverless/sam/)
3. [Node/NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

# Development

1. Update `samconfig.toml` as needed (e.g. change the stack name)
2. Test locally with `npm run dev`

# Deploy to AWS

1. [Set up an AWS SSO profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html)
2. `aws sso login --sso-session <sso-profile-name>`
3. `npm run build` - create production build of the project
4. Build and deploy the Cloudformation stack

```
sam build
sam deploy
```

5. Copy the S3 bucket's URI from the output (e.g. `s3://my-bucket-name`)

6. Run the command to deploy assets to the S3 bucket

```
npm run deploy s3://my-bucket-name
```

# Clean up

Replace with stack name from `samconfig.toml`:

```
sam delete --no-prompts --stack-name "vite-react-ts-template-stack"
```

If `WebAppS3Bucket` fails to delete, this is because it contains items and can't be deleted by Cloudformation. You have to manually delete it before deleting the stack.
