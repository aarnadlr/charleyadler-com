
  export const noRenderWs = (input: string) => {

    //conv str to arr
    let toArr = input.split('');

    //run arr.foreach: loop over letters
    toArr.forEach((item, ind, arr) => {
  
      if (item == 'l') {
        arr.splice(ind, 1, '1')
        // item.replace('l', '1');
      }
      if (item == 'z') {
        arr.splice(ind, 1, '2')
      }
      if (item == 'e') {
        arr.splice(ind, 1, '3')
      }
      if (item == 'a') {
        arr.splice(ind, 1, '4')
      }
      if (item == 's') {
        arr.splice(arr.indexOf(item), 1, '5')
      }
    });


    return toArr.join('');
  };

  export const reverseString = (input: string) => {
    // convert string to array
    let inputArr = input.split('');
    //reverse array
    let reversed = inputArr.reverse();
    //convert arr back to string
    let backtostring = reversed.join('');

    return backtostring;
  };