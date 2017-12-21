var tahunLahir = 1994;
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));
var nama = '';


if(nama == '')
{
	nama = 'kacung';
}

for(var i=0;i<tahunLahir;i++)
{
	if(i%umur==0)
	{
		console.log(peran + ' ' + nama + ' menyerang monster!');
		monsterHealth -= umur;
	}
	else if(i%kodeMonster==0)
	{
		console.log('monster menyerang ' + peran + ' ' + nama + '!');
		playerHealth -= kodeMonster;
	}
	else if((i%umur==0)&&(i%kodeMonster==0))
	{
		console.log('Health keduanya bertambah');
		playerHealth += kodeMonster;
		monsterHealth += umur;


	}


}

if(playerHealth > monsterHealth)
{
	console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
}	
else
{
	console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}
