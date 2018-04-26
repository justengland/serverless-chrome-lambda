# serverless-chrome-lambda
A test project to see if I can configure @serverless-chrome/lambda running on SAM

## Setup
### [Install Sam Local](https://github.com/awslabs/aws-sam-local)
 *docker required*
 ```bash
 $ npm install -g aws-sam-local
 ```
 ### Test SAM Local
 ```bash
sam --version
```
 
 ### Install local dependencies
 ```bash
 $ npm i 
 ```
 
 ### Test lambda locally
  ```bash
  $ sam local invoke helloworld -e event.json
  ```
 
 ### Publish 
   ```bash
   $ npm run push
   ```


