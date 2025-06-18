
/*
The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

Example 1:
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]

Example 2:
Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
*/

function findRepeatedDnaSequences(s: string): string[] {
    const set = new Set<string>()
    const result = new Set<string>()
    for (let i = 0; i <= s.length - 10; i++) {
        const DNA = s.slice(i, i + 10)
        if (set.has(DNA)) result.add(DNA)
        else set.add(DNA)
    }
    return Array.from(result)
};