exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: '창훈',
      age: 80,
      email: "asdf@asdf.com"
    })
  }
}