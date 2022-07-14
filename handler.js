"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Test, apa kabar?",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.test = async(event) => {
  return{
    statusCode: 200,
    body: JSON.stringify({
      message: "Test, coba-coba"
    }),
  };
};
