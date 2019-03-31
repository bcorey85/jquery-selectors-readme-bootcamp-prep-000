// declare your functions here...



function callBackTest(func, something){
  var buildQuote = `This is a test ${something}`
  func(buildQuote)
}

function quoteBuilder(yep){
  console.log(yep)
}