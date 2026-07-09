# https://leetcode.com/problems/longest-common-prefix/

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        #Use the first word as the prefix
        prefix = strs[0]

        #Skip the first one, that's prefix
        for word in strs[1:]:
            # Shorter word = shorter common prefix
            if len(word) > len(prefix) or len(prefix) > len(word):
                prefix = prefix[:len(word)]
            # Avoid index error VVV
            for i in range(min(len(word), len(prefix))):
                if prefix[i] != word[i]:
                    prefix = prefix[:i]
                    break

        return prefix
