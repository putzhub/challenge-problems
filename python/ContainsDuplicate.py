# https://leetcode.com/problems/contains-duplicate/

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        duplicate = {}

        for e in nums:
            if e not in duplicate:
                duplicate[e] = True
            else:
                return True
        
        return False
