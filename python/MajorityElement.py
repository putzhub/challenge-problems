# https://leetcode.com/problems/majority-element/

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        d = {}

        for n in nums:
            if n in d:
                d[n] += 1
            else:
                d[n] = 1
        
        for key in d.keys():
            if d[key] / len(nums) >= .5:
                return key
        
        return -1
