var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var hari = 21; var bulan = 1; var tahun = 1945;


if((hari < 0) && (hari > 31))
	console.log('tidak ada tanggal tersebut');


if((tahun < 1900) && (tahun > 2200))
{
	console.log('tidak ada rentan waktu di tahun tersebut');
} 



switch(bulan) {
  case 1:   { console.log(hari+' Januari '+tahun); break; }
  case 2:   { console.log(hari+' Februari '+tahun); break; }
  case 3:   { console.log(hari+' Maret '+tahun); break; }
  case 4:   { console.log(hari+' April '+tahun); break; }
  case 5:   { console.log(hari+' Mei '+tahun); break; }
  case 6:   { console.log(hari+' Juni '+tahun); break; }
  case 7:   { console.log(hari+' Juli '+tahun); break; }
  case 8:   { console.log(hari+' Agustus '+tahun); break; }
  case 9:   { console.log(hari+' September '+tahun); break; }
  case 10:   { console.log(hari+' Oktober '+tahun); break; }
  case 11:   { console.log(hari+' November '+tahun); break; }
  case 12:   { console.log(hari+' Desember '+tahun); break; }
  default:  { console.log('Tidak ada bulan '+tahun); }
}




