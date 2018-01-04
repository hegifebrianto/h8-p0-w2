function balikString(array)
{
  let newArray = '';
  var j=0,i=(array.length-1)
	for(;i>=0;i--,j++)
	{
	  newArray += array[i];
	  //console.log(array[i]);
	}
	
	return newArray;
	//console.log(newArray);
}

console.log(balikString('hello world!'));