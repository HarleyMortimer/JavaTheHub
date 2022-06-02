void Foo()
{
int i;
console.WriteLine(i)

// use of unassigned variable 'i'

# types of variables in C#
int = 1456 or -1456 whole numbers no decimals -> 4 bytes 
long = 8bytes
float = fractional numbers 4 bytes
double = 12.34 or -12.34 uses decimals   8 bytes
char = single character 'Q' 'q' 2 bytes
string = full sentance use ""  "this is a string" 2bytes per character
bool = true or false    1bit
 
long myExample = whole numbers with capital L "100000000L"
max bytes = 2,147
type or keyword variableName = value of variable


**use double for calculator**

# C# casting
string myLaptop = "dell";


# **implicit casting**
double myNumber = 10.5; -> int 
int castingNumber = myNumber;

int postCode = 7011; -> double
double stokePostCode = postCode;


example:
double num = 49.66:
49.6666666666666666666666666 // error
int castDouble = num;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# **explicit casting**
double myNum = 19.56
int castMyNum = (int)myNum // result = 19      //// cuts everything past decimal off and takes the whole number

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# is operator

public class Student
{
    public string id = "121232423423";
}

public class Student : Person {}

var student = new Student()

if(Student is Person) // true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

as Operator  -> like is operator but refactors

var student = new Student() as Person // true

# console method

console.WriteLine();
Console.ReadLine();

Ex: 

Console.WriteLine("enter your full name") -> Console.log()
string myName = Console.ReadLine();

Console.WriteLine("my Full name is"+ myName)

Ex2:

Console.WriteLine("7020")
int postCode = Convert.ToInt32(Console.ReadLine())

Console.WriteLine("My Post code is " + postCode)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# C# Operators

ex: 

 int num = 100 + 5;

 int result = 100 + 5;
 int result_2 = result + 300;
 int result_3 = result_2 + 500;

 int example = 10; // assignment operator
 example += 20; // addition assignment operator
# Ex: all assignment operators
  1- = (int number = 12); // output = 12
  2- += (number += 4); // oput = 
  3- -= (number -= 2);
  4- *= (number *= 3);
  5- /= (number /= 1);
  6- %= (number %= 2);
  7- &= (number &= 6);
  8- ^= (number ^= 3);

 # Ex: compare operator
 1- == (x ==y) // code example
 2- != (x !=y) // code example
 3- > (x > y) // code example
 4- < (x < y) // code example
 5- >= (x >= y) // code example
 6- <= (x <= y) // code example

# Ex: logic coperator
/*  
1- && (x < 6 && < 10) // return true if both statements are true.
2- || (x < 6 || x || 9) // return true if one statement is true.
!- ! !(x < 6 && < 10) // reverse the result


# Ex: if else

if(condition statement)
{
  //block of code
}
else
{
    // block of code
}
////////////////////////////////////////////////////////////////
# Ex: else if()
if(condition statement)
{
    //block of code
}
else if(condition statement)
{
    //block of code
}
else
{
    //block of code
}
////////////////////////////////////////////////////////////////
if(10> 20)
{
    Console.WriteLine("This Statement is true");
}
else
{
    Console.WriteLine("This statement is false);
}

////////////////////////////////////////////////////////////////////////
# Ex: Ternary operator

var example = (condition statement) ? expression(true) : expression(false)

string number = 10
string result = (number > 20) ? "the condition is true" : "The condition is false"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# Ex: switch statement

switch(expression)
{
    case statement one:
    // block of code
    break;

    case statement two:
    //block of code
    break;

    default:
    //block of code
    break;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
# Ex: for loop

for(statement_one; statement_two; statement_three)
{
    //block of code
}

for(int i = 0; i < 10; i++)
{
    Console.WriteLine(i)
}
/////////////////////////////////////////////////////////////////////
for(int i = 0; i < 100; i = i + 4) // can also go "i += 4"
{
    Console.WriteLine(i);
}
//////////////////////////////////////////////////////////////////////

Ex : foreach loop

foreach(type_of_variable name_varible in name_array)
{
    // block of code
}

string[] students = {"harley", "ali", "matt", "kenny", "asti"};

foreach(string i in students)
{
    if(i == "matt")
    {
        break;
    }
    Console.WriteLine(i);
}

///////////////////////////////////////////////////////////////////
# arrays

# Ex: arrays in js
const students ["harley", "ali", "matt", "kenny", "asti"]

# Ex: arrays in C#
string[] students = {"harley", "ali", "matt", "kenny", "asti"};

string[] names;
string[] names = {"Hello", "World"};

int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9};

Console.WriteLine(students[0]); // harley

Students[0] = "Emory";
Console.WriteLine(students[0]); //Emory

Console.WriteLine(students.Length); // 5

for(int i = 0; i < students.Length; i++)
{
    Console.WriteLine(students[i])
}

foreach(string i in students)
{
    Console.WriteLine(students[i])
}


///////////////////////////////////////////////////////////////////////////////////

int[] arrayExample 

myArray = new int[10]; -> index 0 - index 9

myInt = new int[50]; -> index 0 - index 49

double[] newArr = new Double[5]
///////////////////////////////////////////////////////////////////////////////////////////////
# Ex: intialize a fixed in array

int[] myExample = new init[6]; // fixed array

myExample[0] = 1;
myExample[1] = 2;

////////////////////////////////////////////////////////////////////////////////////////////////


# Ex: declares a dynamic array

string[] myStringArray = new string[] {"Harley", "bob", "francis"};

console.WriteLine(myStringArray[2]); // "francis"

//////////////////////////////////////////////////////////////////////////////////////////////////////

string[] stringArr = new string[]
{
    "Harley",
    "kenny",
    "matt",
    "Tony",
    "chris",
};

foreach(string i in stringArr){      //list all contents of array
    Console.WriteLine(i);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

int[] intArray 
intArray = new int[10]; -> Single-Dimension Array

int[] myArr = new int[10] {0,1,2,3,4,5,6,7,8,9}; // one line


string anotherString = new string[3] {"dog","cat","mouse"}; 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

int[,] myNum = new int[2,2] {{1,2}, {3,4}}; // first "2" is for subarray and second "2" is for value.

string[,] myString = new string[2,2] {{"jack","jill"},{"donny","lisa"}};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

int[,] myNumbers = {{1,1},{2,2},{3,3}};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
int[,] myNumbers = new int[3,3];

myNumbers[0,0] = 1;
myNumbers[0,1] = 2;
myNumbers[0,2] = 3;

myNumbers[1,0] = 4;
myNumbers[1,1] = 5;
myNumbers[1,2] = 6;

myNumbers[2,0] = 7;
myNumbers[2,1] = 8;
myNumbers[2,2] = 9;

{{1,2,3},{4,5,6},{7,8,9}}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Jagged Arrays 

int[][] myArray = new int[][];

# init Jagged arrays

myArray[0] = new int[2];
myArray[1] = new int[5];
myArray[2] = new int[6];

myArray[1] = new int[2]
{
    2,
    3,
};

myArray[0] = new int[5]
{
    3,
    4,
    5,
    6,
    7,
};

myArray[2] = new int[6]
{
    6,
    7,
    8,
    9,
    10,
    8,
    3,
};

//////////////////////////////////////////////////////////////////////////////////////////////////////

# loop through all arrays

for(int i = 0, i < myArray.Length ; i++)
{
    for(int j = 0; j < myArray[i].Length, j++)
    {
        Console.WriteLine(myArray[i][j]);
    }
    Console.WriteLine();
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

# single array

string[] myStringArray = new string[]
{
    "A",
    "dingo",
    "ate",
    "my",
    "baby"
};

foreach(string i in myStringArray)
{
    Console.WriteLine(i);
};

Console.WriteLine("-----------------------------------------------------------------------------------");

# Multi-Dimension Array

string[,] myMultiArray = new string[3,2]
{
    {"boots", "cats"},
    {"rubber", "boots"},
    {"and", "cats"}
};

foreach(string i in myMultiArray)
{
    Console.WriteLine(i)
};

Console.WriteLine("----------------------------------------------------------------------------------------------------");

//Jagged array

string[][] myJaggedArray = 
{
    new string[]
    {
        "sdv502",
        "sdv503"
    },
    new string[]
    {
        "web403",
        "web555"
    },
    new string[]
    {
        "what",
        "who"
    }
};

for(int i = 0; i < myJaggedArray.Length; i++)
{
    for(int j =0; j < myJaggedArray[i].Length; j++)
    {
        Console.WriteLine(myJaggedArray[i][j])
    }
};

Console.WriteLine("--------------------------------------------------------");