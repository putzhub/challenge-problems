# https://leetcode.com/problems/valid-parentheses/

from collections import deque

class Solution:
    def isValid(self, s: str) -> bool:
        legend = {
            "{": "}",
            "(": ")",
            "[": "]",
        }

        stack = deque()

        for p in s:
            #Keep track of openings, remove from stack if closed
            if p in legend.keys():
                stack.append(p)
            elif p in legend.values():
                if stack:
                    temp = stack.pop()
                else:
                    return False

                if legend[temp] is not p:
                    return False

        #If there's parentheses remaining on stack, fail.
        return not stack
