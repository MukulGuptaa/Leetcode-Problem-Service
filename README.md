# Leetcode problem service

--------------------------------------------------------------------

# How routing is working in the project

- /api/v1/problems/ping
    - Because the route starts with /api: 
    - apiRouter -> v1Router -> problemRouter -> problemController -> service layer