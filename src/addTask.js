const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const addTask = async (event) => {
  try {
    console.log("event", event);
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { title, description } = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4();

    const newTask = {
      id,
      title,
      description,
      createdAt,
    };

    await dynamodb
      .put({
        TableName: "TaskTable",
        Item: newTask,
      })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify(newTask),
    };
  } catch (error) {
    console.error("error", error);
  }
};

module.exports = {
  addTask,
};
