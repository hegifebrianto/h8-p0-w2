//tugas 1
var total=0;
var i;

for(i=0;i<100;i++)
{
	if(i%2!=0)
		total += i;
	else
		total -= i;
}

console.log(total);


//tugas 2
var pagar='';
var index1=0;
var index2=0;
for(;index1<10;index1++)
{
	for(;index2<index1;index2++)
	{
		pagar += '*';
	}
}

//tugas 3
var bintang = '';

for(index1=0;index1<10;index1++)
{
	for(index2=0;index2<index1;index2++)
	{
		bintang += '*';
	}
	console.log(bintang);
	bintang='';
}