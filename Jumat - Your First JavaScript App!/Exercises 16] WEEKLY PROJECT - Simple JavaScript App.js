//    -- PSEUDOCODE --
//    BACA dan SIMPAN "input(array)"
//    ULANGI :
//    IF "input[index]" sama dengan 1
//    THEN "candidate_count[0]" += 1
//    ELSE IF "input[index]" sama dengan 2
//    THEN "candidate_count[1]" += 1
//    ELSE IF "input[index]" sama dengan 3
//    THEN "candidate_count[2]" += 1
//    HINGGA "index" sama dengan "array.length"

//    ULANGI :
//    TAMPILKAN "candidate_count[index]"  
//    HINGGA "index" sama dengan "candidate_count.length"

//   -- END OF PSEUDOCODE



//declare input array[100]
//main()
var input = [];
for(var i=0;i<100;i++)
{
  input[i] = Math.floor(Math.random() * 3) + 1;

}

getQuickCount(input)

function getQuickCount(input)
{
  //Voting dan polling

  let candidate_count = [0,0,0];
  const candidate = [
    ['Agus dan Silvi'],
    ['Ahok dan Jarot'],
    ['Anies dan Sandi']
  ];
  let i;

  
  
  for(i=0;i<input.length;i++)
  {
    //var polling = Math.floor(Math.random() * 3) + 1  ;
    switch(input[i])
    {
      case 1:
        candidate_count[0]++;
        break;
      case 2:
        candidate_count[1]++;
        break;
      case 3:
        candidate_count[2]++;
        break;
    }
  }
  console.log('Program penghitung suara pemilu :');
 
  
  for(i=0;i<candidate_count.length;i++)
  {
    if(i==0)
      console.log('1 -- Agus-Sylvi = ' +candidate_count[i]);
    else if(i==1)
      console.log('2 -- Ahok-Djarot = '+candidate_count[i]);
    else
      console.log('3 -- Anies-Sandi = '+ candidate_count[i]);
  }  
  
}











