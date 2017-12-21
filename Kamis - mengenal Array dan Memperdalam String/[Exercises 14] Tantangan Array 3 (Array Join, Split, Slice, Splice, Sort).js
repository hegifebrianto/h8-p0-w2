

function dataHandling2(array)
{
  array.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(array);
  
  var date  = array[3].split("/");
  //console.log(date[1]);
  switch(parseInt(date[1]))
  {
    case 01:
      console.log('Januari');
      break;
    case 02:
      console.log('Februari');
      break;
    case 03:
      console.log('Maret');
      break;
    case 04:
      console.log('April');
      break;
    case 05:
      console.log('Mei');
      break;
    case 06:
      console.log('Juni');
      break;
    case 07:
      console.log('Juli');
      break;  
    case 08:
      console.log('Agustus');
      break;
    case 09:
      console.log('September');
      break;  
    case 10:
      console.log('Oktober');
      break;
    case 11:
      console.log('November');
      break;
    case 12:
      console.log('Desember');
      break;
    default:
      console.log('error');
      break;
  }

  //console.log(date);
  //var date_sort  = parseInt(date);
  //console.log(date_sort);
  date.sort(function(value1, value2) { return parseInt(value1) < parseInt(value2) });
  
  console.log(date);
  console.log(date.join("-"));
  
  
  var arr_name = String(array[1]);
  //console.log(arr_name);
  if(arr_name.length > 15)
  {
    var arr_splice = arr_name.slice(0,15);
    console.log(arr_splice);
  }
  
  
}

//contoh input
array = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(array);

