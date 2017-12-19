
for(var i = 1;i<=100;i++)
{

	if(i%2 == 0)
		console.log(i+' - GENAP');
	else
		console.log(i+' - GANJIL');

	console.log('\n');
}

//Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.


//pertambahan 2
for(var i = 1;i<=100;i+=2)
{

	if(i%3 == 0)
		console.log(i+' - 3 kelipatan 3');
	else
		console.log('');

	console.log('\n');
}

//pertambahan 5
for(var i = 1;i<=100;i+=5)
{

	if(i%6 == 0)
		console.log(i+' - 3 kelipatan 3');
	else
		console.log('');

	console.log('\n');
}

//pertambahan 9
for(var i = 1;i<=100;i+=9)
{

	if(i%10 == 0)
		console.log(i+' - 3 kelipatan 3');
	else
		console.log('');

	console.log('\n');
}

