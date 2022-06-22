
using System;
using System.Collections.Generic;
namespace Convert_from_Javascript
{
    class Program
    {
        static void Main(string[] args)
        {
            int[][] number = new int[3][];

            number[0] = new int[4] { 4, 2, 7, 1 };
            number[1] = new int[4] { 20, 70, 40, 90 };
            number[2] = new int[3] { 1, 2, 0 };


            int Largest = number[0][0];


            for (int i = 0; i < number.Length; i++)
            {
               

                for (int j = 0; j < number[i].Length; j++)
                {
                    if (number[i][j] > Largest)
                    {
                        Largest = number[i][j];
                      
                    }
                    
                }
                

            }

            Console.WriteLine("String Array of Arrays");      
            string[] finalArr = new string[] { $"{number[0].Max()}",$"{number[1].Max()}", $"{number[2].Max()}" };
            foreach (string i in finalArr)
            {
               
                Console.WriteLine(i);
            };
            Console.WriteLine("----------------------");
            Console.WriteLine("FrankensteinArray");
            Console.WriteLine("{" + number[0].Max() + "," + number[1].Max() + "," + number[2].Max() + "}");
            Console.WriteLine("----------------------");
           
        }
        
    }
}
