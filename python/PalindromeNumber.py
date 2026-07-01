# https://leetcode.com/problems/palindrome-number/

class Solution:
    def isPalindrome(self, x: int) -> bool:
        # if x < 0:
        #    return False

        array = list(str(x))
        for n in range(len(array) // 2):
            if array[n] != array[-(n + 1)]:
                return False
        return True
