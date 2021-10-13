// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b){
  if(a>b)
  {
     return a;
  }
  else
  {
     return b; 
  }

}
var s=greatestOfTwoNumbers(54,34);
document.write("largest Number is" +s);
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const findScaryWord= arra =>{
  if(arra.length===0)
    {
      return null;
    }
    if(arra.length>0)
    {
        var max_str = arra[0].length;
        var ans = arra[0];
        for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
  }
    
}


// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const netPrice = arr =>{
  var total=0;
  if(arr.length>0)
  {
    for(i=0;i<arr.length;i++)
    {
      total=total+arr[i];
    }
  }
  return total;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const midPointOfLevels = arr1 =>{
  var total=0;
  var avg=0;
  if(arr1.length===0)
  {
    return null;
  }
  else if(arr1.length>0)
  {
    for(i=0;i<arr1.length;i++)
    {
      total=total+arr1[i];
      avg=(total/arr1.length);
    }
  }
  return avg;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const averageWordLength = arr2 =>{
  var tot=0;
  var avg1=0;
  if(arr2.length===0)
  {
    return null;
  }
  else if(arr2.length>0)
  {
    for(i=0;i<arr2.length;i++)
    {
      tot=tot+arr2[i].length;
      avg1=(tot/arr2.length);
    }
  }
  return avg1;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
const uniqueArray = a =>{
  var newArr = [];
 if(a.length===0)
  {
    return null;
  }
  else if(a.length>0)
  { 
  for (var i=0; i<a.length;i++)
  {
    if(newArr.indexOf(a[i]) === -1)
    {
      newArr.push(a[i]);
    }
  }
  
  }
  return newArr;
}  


// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(WFind){
  if(WFind.length==0){
    return null;
  }
  else{
  let b='tiles'
  for(let i=0;i<WFind.length;i++){
    if(WFind[i]==b)
      return true;
  }
  }
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
var x;
function howManyTimesElementRepeated(WCount,x){
  if(WCount.length==0)
    return 0;
  else{ 
    if(WCount.includes(x)){
      let count=0;
      for(let i=0;i<WCount.length;i++){
        if(WCount[i]==x){
          count+=1;
        }
      }
      return count;
    }
    else{
      return 0;  
    }
  }
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(arr){
  let c=0
  for(let i=0;i<arr.length;i++){
    const set=new Set(arr[i]);
    if(set.size==1 && arr[i][0]==1){
      c+=1;
    }
  }
  if(arr.length==c)
    return 1;
}

//bonus: calculate the average of mis=xed elemnts of array
const p=[]
function avg(p){
  if(p.length==0)
    return null;
  else{
    let a=0;
      for(let i=0;i< p.length;i++){
        if(typeof p[i]=="string")
          a+= p[i].length;
        else if(p[i]==true)
          a += 1;
        else if(p[i]==false)
          a += 0;
        else if(typeof p[i]== "number")
          a += p[i];
      }
      return parseFloat((a/p.length).toFixed(2));
}
}
//Bonus:Calculate the sum
const list1=[];
const b= new Set(list1);
function add(list1){
  if(list1.length==0){
    return 0;
  }
  else if(b.size==1 && list1[0]==0){
    return 0;    
  }
  else if(list1.length==1 && list1[0]!=0){
    return list1[0];
  }
  else{
      let sum=0;
      for(let i=0;i< list1.length;i++){
        if(typeof list1[i]=="string")
          sum+= list1[i].length;
        else if(list1[i]==true)
          sum += 1;
        else if(list1[i]==false)
          sum += 0;
        else if(typeof list1[i]== "number")
          sum += list1[i];
        else
          throw new Error('Unsupported data type sir or ma\'am'); 
      }
      return sum;
      }

    }
