# https://leetcode.com/problems/median-of-two-sorted-arrays/

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        array = nums1 + nums2
        array.sort()

        length = len(array)
        i = length // 2

        if len(array) % 2 == 0:
            return (array[i] + array[i-1]) / 2
        else:
            return array[i]
