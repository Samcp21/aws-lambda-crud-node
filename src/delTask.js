const AWS = require("aws-sdk");
const delTask = async (event) => {
  try {
    const { id } = event.pathParameters;

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    await dynamodb
      .delete({
        TableName: "TaskTable",
        key: {
          id,
        },
      })
      .promise();
    return {
      statusCode: 200,
      body: {
        message: "Task deleted",
      },
    };
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  delTask,
};
