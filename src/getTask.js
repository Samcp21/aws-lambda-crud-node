const AWS = require("aws-sdk");
const getTask = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb
      .scan({
        TableName: "TaskTable",
      })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  getTask,
};
