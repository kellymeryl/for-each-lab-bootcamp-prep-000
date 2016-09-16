
function iterativeLog(array)
{
  array.forEach((element, index, aray) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback)
{
  var arr = ["dog", "cat", "horse"];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback)
{
  array.forEach(callback);
}
