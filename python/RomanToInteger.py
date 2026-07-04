# https://leetcode.com/problems/roman-to-integer

class Solution:
    def romanToInt(self, s: str) -> int:
        numerals = { 
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        array = list(s)
        number = 0

        for i in range(len(array)):
            current = numerals[array[i]]
            #If the next number is bigger...
            if i+1 < len(array) and current < numerals[array[i+1]]:
                    #Subtract
                    number -= numerals[array[i]]
            else:
                number += numerals[array[i]]

        return number
