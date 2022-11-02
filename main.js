const array1 = [
    [1, 3, 5],
    [7, 9, 7],
    [5, 3, 1],
  ];
  
  const array2 = [
    [2, 4, 6],
    [8, 10, 8],
    [6, 4, 2],
  ];


function solution(){
   const firstRow = [array1[0][0] * array2[0][0], array1[0][1] * array2[1][0], array1[0][2] * array2[2][0]];
   const secondRow = [array1[1][0] * array2[0][1], array1[1][1] * array2[1][1], array1[1][2] * array2[2][1]];
   const thirdRow = [array1[2][0] * array2[0][2], array1[2][1] * array2[1][2], array1[2][2] * array2[2][2]];

   let result = [ firstRow, secondRow, thirdRow];
   let secondExerciseArray = firstRow.concat(secondRow);
   let secondExerciseArr = secondExerciseArray.concat(thirdRow)
   console.log(result);
   convertArr(secondExerciseArr)
   return result;

}

solution();

function convertArr(arr){
    
   

    
    const string = arr.toString();
    let newArrr = string.split(',');

        let finalArr = [];
     for( position of newArrr){
        console.log(position)
        if(position.length == 1){

           
            finalArr.push(`00${position}`)
        }else if(position.length == 2){
            finalArr.push(`0${position}`)
        }
    }
    
    return finalArr;
   
   
   
}

