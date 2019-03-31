// declare your functions here...



function callBackTest(something, func){
  var buildQuote = `This is a test ${something}`
  func(buildQuote)
}

function quoteBuilder(yep){
  console.log(yep)
}