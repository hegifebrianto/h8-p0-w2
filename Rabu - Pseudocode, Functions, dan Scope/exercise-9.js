//tugas 1
var nama = 'hegi';
var angka_pembilang=20;
var angka_penyebut=5;

var hasil_bagi =  angka_pembilang/angka_penyebut;

console.log('Halo '+nama+' '+angka_pembilang+' dibagi dengan '+angka_penyebut+' sama dengan '+hasil_bagi);


//tugas 2
var alas = 5;
var tinggi = 10;

var luas_segitiga  = (alas*tinggi)/2;

console.log('Luas Segitiga : '+luas_segitiga);


//tugas 3
var tahun =2000;

if(tahun % 4 == 0)
{
	if(tahun%4 !=0)
		console.log(tahun+' adalah tahun kabisat');
	else
	{
		if(tahun%400 == 0 )
			console.log(tahun+' adalah tahun kabisat');
		else
			console.log(tahun+' adalah bukan tahun kabisat');
	}
}
else
	console.log(tahun+' adalah bukan tahun kabisat');