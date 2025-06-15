---
sidebar_position: 1
---

# LC3372: Maximize the Number of Target Nodes After Connecting Trees I

https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/

---

## Question

There exist two undirected trees with $n$ and $m$ nodes, with distinct labels in ranges $[0, n - 1]$ and $[0, m - 1]$, respectively.

You are given two 2D integer arrays `edges1` and `edges2` of lengths $n - 1$ and $m - 1$, respectively, where `edges1[i] = [ai, bi]` indicates that there is an edge between nodes `ai` and `bi` in the first tree and `edges2[i] = [ui, vi]` indicates that there is an edge between nodes `ui` and `vi` in the second tree. You are also given an integer `k`.

Node `u` is target to node `v` if the number of edges on the path from `u` to `v` is less than or equal to `k`. Note that a node is always target to itself.

Return an array of $n$ integers `answer`, where `answer[i]` is the maximum possible number of nodes target to node `i` of the first tree if you have to connect one node from the first tree to another node in the second tree.

Note that queries are independent from each other. That is, for every query you will remove the added edge before proceeding to the next query.

 

Example 1:

>    **Input:** `edges1 = [[0,1],[0,2],[2,3],[2,4]]`, `edges2 = [[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]]`, `k = 2`
>
>    **Output:** `[9,7,9,8,8]`
>
>    **Explanation:**
>
>    For `i = 0`, connect node `0` from the first tree to node `0` from the second tree.
>    For `i = 1`, connect node `1` from the first tree to node `0` from the second tree.
>    For `i = 2`, connect node `2` from the first tree to node `4` from the second tree.
>    For `i = 3`, connect node `3` from the first tree to node `4` from the second tree.
>    For `i = 4`, connect node `4` from the first tree to node `4` from the second tree.

Example 2:

>   **Input:** `edges1 = [[0,1],[0,2],[0,3],[0,4]]`, `edges2 = [[0,1],[1,2],[2,3]]`, `k = 1`
>
>   **Output:** `[6,3,3,3,3]`
>
>   **Explanation:**
>
>   For every `i`, connect node `i` of the first tree with any node of the second tree.

**Constraints:**

- $2 \leq n, m \leq 1000$
- `edges1.length == n - 1`
- `edges2.length == m - 1`
- `edges1[i].length == edges2[i].length == 2`
- `edges1[i] = [ai, bi]`
- $0 \leq ai, bi < n$
- `edges2[i] = [ui, vi]`
- $0 \leq ui, vi < m$
- The input is generated such that `edges1` and `edges2` represent valid trees.
- $0 \leq k \leq 1000$

---

## Solution 1

**Idea:** 

Note that we only need to count the number of nodes with the distances from node `i` in tree 1 $<= k$ for each connection, i.e. for every connection, bfs(join tree1+tree2, node i, distance leq k)

Observe that in tree 1, the nodes that satisfies this condition is bfs(tree1, node i, distance leq k), and in tree 2, the nodes is bfs(tree2, node j, distance leq k-1), assuming that we connect nodes i in tree 1 and j in tree 2.

Hence the result is the combined, i.e.
* $(N_1)_i=\text{bfs}(T_1,i,k)$
* $(N_2)_j=\text{bfs}(T_2,j,k-1)$
* For node $i$, the maximum number of nodes target to $i$ is then given by: $\max_{j}{[(N_1)_i+(N_2)_j]}=(N_1)_i+\max_{j}{(N_2)_j}$

Hence we can:
1. Calculate $\max_{j}{(N_2)_j}$ with $O(m^2)$ time, and
2. Evaluate $(N_1)_i$ for each $i$ with $O(n)$ time each, contributing to a total of $O(n^2)$ time

Resulting in a final complexity of $O(m^2+n^2)$ and space complexity of $O(m+n)$.