const myArr=[1,2,3,4,5]
const myHeros=["shaktiman","thor"]
const myArr2= new Array(1,2,3,4)

console.log(myArr[0])
/*Js Arrays are resizable,and can contain a mix or different data types
javascript array copy operations create shallow CompressionStream,

Shallow copy- Shallow copy of an object is a copy whose properties share
the same references (point to the same underlaying values)
means whatever you change in the array these changes are reflect int the
original array
*/

//Array Methods

myArr.push(6)
myArr.push(7)
//myArr.pop()

myArr.unshift(0)  //insert in the beggining of the array
//myArr.shift()   //remove the first element in the array

console.log(myArr.includes(9));
console.log(myArr.indexOf(3))

const newArr= myArr.join() //converts array in a string
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//Slice or Splice method

console.log("A-Original Array", myArr);

const myn1=myArr.slice(1,3)
console.log("slice array",myn1);
console.log("B-after slice original array",myArr);

const myn2=myArr.splice(1,3);
console.log("splice array",myn2);
console.log("C-After Splice original array",myArr);


//4th largest element in the array
function findFourthLargest(arr) {
    if (arr.length < 4) {
      return "Array should have at least 4 elements";
    }
  
    let first = arr[0];
    let second = arr[0];
    let third = arr[0];
    let fourth = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > first) {
        fourth = third;
        third = second;
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] !== first) {
        fourth = third;
        third = second;
        second = arr[i];
      } else if (arr[i] > third && arr[i] !== first && arr[i] !== second) {
        fourth = third;
        third = arr[i];
      } else if (arr[i] > fourth && arr[i] !== first && arr[i] !== second && arr[i] !== third) {
        fourth = arr[i];
      }
    }
  
    return fourth;
  }
  
  // Example usage:
  const arr = [12, 45, 1, 78, 54, 23, 56];
  const fourthLargest = findFourthLargest(arr);
  console.log("Fourth largest element:", fourthLargest);

  //covert 1d array into 2d array

  
  function convertTo2DArray(arr, rows, columns) {
    if (rows * columns !== arr.length) {
        return "Cannot convert to a 2D array with the given rows and columns.";
    }

    let result = [];
    for (let i = 0; i < rows; i++) {
        result.push(arr.slice(i * columns, (i + 1) * columns));
    }

    return result;
}

// Example 1D array
const oneDArray = [1, 2, 3, 4, 5, 6]; // Replace this array with your desired 1D array

// Define the number of rows and columns for the 2D array
const numberOfRows = 2;
const numberOfColumns = 3;

// Convert the 1D array to a 2D array
const twoDArray = convertTo2DArray(oneDArray, numberOfRows, numberOfColumns);
console.log(twoDArray);

//sort the array
// Sample array
//let arr = [5, 2, 9, 1, 5];

// Sorting the array in ascending order
arr.sort((a, b) => a - b);

console.log("Sorted array in ascending order:", arr);
// Sorting the array in descending order
arr.sort((a, b) => b - a);

console.log("Sorted array in descending order:", arr);



//create linkedlist 
// Node class to represent individual nodes in the linked list
class Node {
  constructor(data) {
    this.data = data; // Data stored in the node
    this.next = null; // Pointer to the next node, initially set to null
  }
}

// LinkedList class to manage the linked list
class LinkedList {
  constructor() {
    this.head = null; // Points to the head of the list, initially set to null
  }

  // Method to add a new node to the end of the linked list
  append(data) {
    const newNode = new Node(data); // Create a new node with the given data

    // If the list is empty, set the new node as the head

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    // Traverse the list to find the last node
    while (current.next !== null) {
      current = current.next;
    }

    // Set the next of the last node to the new node
    current.next = newNode;
  }

  // Method to print the linked list
  printList() {
    let current = this.head;
    let result = "";

    // Traverse the list and concatenate data to form a string
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null"; // Representing the end of the list
    console.log(result);
  }
}

// Creating a linked list and adding elements to it
const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(10);
linkedList.append(15);

// Printing the linked list
linkedList.printList(); // Output: 5 -> 10 -> 15 -> null



  