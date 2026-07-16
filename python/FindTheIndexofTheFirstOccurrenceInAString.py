# https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle not in haystack:
            return -1

        length = len(needle)
        count = 0

        for i in range(len(haystack)):
            for j in range(length):
                if needle[count] == haystack[i+j]:
                    count += 1
                else:
                    count = 0
                    break

                if count == length:
                    return i


