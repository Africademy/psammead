const BBC_BLOCKS_DARK_MODE =
  'CiAgICAgICAgPHBhdGggZD0iTTUzLjA2NiAyMS44MDdINzYuMDhWLjE1SDUzLjA2NnYyMS42NTh6bTE0LjUtMTguNjQ1bC0uMzExLS4wNS0uMTI1LS4wMThjLS4xNzYtLjAyNC0uMzU1LS4wNDUtLjUzNS0uMDYyLS4xMjItLjAxMS0uMjQ1LS4wMi0uMzY3LS4wMjctLjIxOC0uMDE0LS40MzMtLjAyLS42NC0uMDItLjA5NSAwLS4xNDkuMDAyLS4yNDIuMDA0LS4xNzMuMDAzLS4zNDMuMDExLS41MS4wMjEtLjA5NS4wMDYtLjE4OS4wMTUtLjI4MS4wMjMtLjEzOC4wMTItLjI3My4wMjctLjQwNi4wNDRsLS4xMTEuMDE1LS4xMjQuMDE4LS4xNTMuMDI0LS4xOTcuMDM1Yy0uMDkuMDE2LS4xOC4wMzQtLjI2OS4wNTMtLjU0Ni4xMTUtMS4wNTEuMjY5LTEuNTE3LjQ1LS4yNC4wOTUtLjQ3Mi4xOTYtLjY5Mi4zMDMtLjE4Mi4wOS0uMzU5LjE4My0uNTI3LjI4LS4xNjUuMDk1LS4zMjIuMTktLjQ3NC4yOTItLjA4Ni4wNTgtLjE3My4xMTctLjI1NS4xNzctLjA3Mi4wNTEtLjE0My4xMDMtLjIxMi4xNTYtLjE0Ni4xMTMtLjI4Ny4yMjgtLjQxOC4zNDQtLjEyNC4xMS0uMjQ0LjIyLS4zNTUuMzMxLS4wOTYuMDk2LS4xOTMuMTk0LS4yODQuMjk2LS4wOTIuMTAzLS4xODQuMjA3LS4yNzIuMzE2LS4wOTYuMTE4LS4xOS4yMzktLjI4LjM2NC0uMDY2LjA5My0uMTMxLjE4Ny0uMTk0LjI4My0uMDQyLjA2NS0uMDg0LjEzLS4xMjUuMTk3LS4yNC4zOTItLjQ1LjgxMy0uNjIzIDEuMjYtLjIxNS41Ni0uMzcyIDEuMTYtLjQ1NyAxLjgtLjAyNi4yMDEtLjA0OC40MDYtLjA2LjYxNS0uMDA5LjE2LS4wMTUuMzIzLS4wMTUuNDg3IDAgLjEyNC4wMDEuMjQ2LjAwOS4zNjYuMDA4LjEyNi4wMTguMjUuMDMyLjM3NGwuMDEuMDg2Yy4wMTguMTQ3LjA0MS4yOS4wNjkuNDMzbC4wMzMuMTY2Yy4wMjYuMTE4LjA1My4yMzUuMDg0LjM1LjA0LjE0OS4wODMuMjk1LjEzMS40MzguMDYuMTc2LjEyMy4zNDguMTkzLjUxNS4xMS4yNjUuMjMyLjUxOS4zNjMuNzU4LjA3Ny4xNDEuMTU2LjI3OC4yMzkuNDEuMDY1LjEwNS4xMzMuMjA2LjIuMzA0LjA5LjEzLjE4NC4yNTYuMjc2LjM3NS4wOTguMTI2LjE5OC4yNDQuMjk2LjM1Ni4xMjMuMTQxLjI0Ni4yNy4zNjUuMzg5bC4wNjUuMDYzYy4xLjA5Ni4yMDcuMTk4LjMzLjMwMy4wODQuMDcxLjE3LjE0Ny4yNjYuMjIxLjA4OC4wNjkuMTc5LjE0LjI3Ny4yMS4xMTYuMDg0LjIzNy4xNjkuMzY4LjI1Mi4xMzcuMDg4LjI4MS4xNzcuNDM1LjI2Mi4zMDQuMTcuNjQuMzM0IDEuMDA4LjQ4Mi4xMzguMDU2LjI4MS4xMDguNDI5LjE1OS4xNDYuMDUuMjk2LjA5Ny40NTEuMTQxLjI2NS4wNzcuNTQ0LjE0NC44MzcuMi4yMzUuMDQ2LjQ4LjA4NC43MzMuMTE1LjI1Mi4wMy41MTIuMDUzLjc4My4wNjcuMTMuMDA2LjI2NC4wMTIuNC4wMTRsLjE4Ni4wMDJjLjQ4NCAwIC45MzItLjAxOCAxLjM0Ny0uMDUzbC4wODEtLjAwN2MuMTY2LS4wMTUuMzI1LS4wMzIuNDgtLjA1MS4yMzctLjAzLjQ2My0uMDY1LjY3OC0uMTAzLjEzNi0uMDI0LjI2Ny0uMDUuMzk1LS4wNzguMTk5LS4wNDMuMzg3LS4wODkuNTY3LS4xMzYuMTMyLS4wMzYuMjYtLjA3My4zODQtLjExLjE0Ny0uMDQ0LjI5LS4wOTIuNDI2LS4xMzhsLjEzLS4wNDZjLjA2Ni0uMDIzLjE1NS0uMDU1LjI2LS4wOTYuMTM4LS4wNTQuMzA1LS4xMi40OTUtLjIwMi4xMTQtLjA0OC4yMzctLjEwMy4zNjMtLjE2LjExMi0uMDUyLjIzLS4xMS4zNS0uMTY3LjA1LS4wMjUuMS0uMDQ4LjE1LS4wNzRWMTQuNjFjLS4wMzMuMDIyLS4wNy4wNDMtLjEwNS4wNjRsLS4yMDIuMTIyYy0uMjAyLjEyMi0uMzk2LjIzOC0uNTkyLjM0NC0uMjE1LjExNi0uNDI0LjIyNC0uNjMyLjMyMi0uMzY2LjE3Mi0uNzE1LjMxNy0xLjA1NC40MzktLjY0NC4yMy0xLjIzNS4zNzgtMS43NTYuNDdsLS4xODMuMDI5Yy0uMTQ1LjAyMy0uMjgyLjA0LS40MTQuMDU0LS4yMDcuMDIzLS4zOTcuMDM1LS41Ny4wNDMtLjExMi4wMDUtLjIxNy4wMDctLjMxMy4wMDctLjIxIDAtLjQyNi0uMDA1LS42NDUtLjAyMS0uMjU3LS4wMTktLjUxOS0uMDQ3LS43ODMtLjA5Mi0uNDI3LS4wNzEtLjg1Ni0uMTgtMS4yNzUtLjMzMi0uMDYzLS4wMjItLjEyNS0uMDQ3LS4xODYtLjA3MS0uMDQtLjAxNi0uMDgyLS4wMzMtLjEyLS4wNS0uMDctLjAzLS4xMzctLjA1OS0uMjA1LS4wOTEtLjE0NC0uMDY4LS4yODgtLjE0Mi0uNDI4LS4yMi0uMDY5LS4wNC0uMTM3LS4wOC0uMjA4LS4xMjYtLjA3LS4wNDQtLjE0LS4wOS0uMjEtLjEzNy0uMDg1LS4wNi0uMTctLjEyMi0uMjU0LS4xODctLjA4LS4wNjMtLjE2My0uMTMxLS4yMzItLjE5bC0uMDk3LS4wODktLjA0OS0uMDQ0LS4wMjktLjAyOC0uMDM2LS4wMzRjLS4xMzItLjEzMi0uMjU0LS4yNjUtLjM2NC0uMzk4LS4wNjMtLjA3NS0uMTItLjE1LS4xNzctLjIyNi0uMDUzLS4wNzMtLjEwMy0uMTQ2LS4xNTEtLjIyLS4wNDYtLjA2OC0uMDg5LS4xMzktLjEzLS4yMDctLjA2LS4xMDQtLjExNi0uMjEtLjE2Ny0uMzEyLS4wNDQtLjA4OC0uMDg0LS4xNzctLjEyLS4yNjQtLjA2NC0uMTQ4LS4xMTktLjI5OS0uMTY0LS40NC0uMDM2LS4xMTItLjA2Ni0uMjIzLS4wOTItLjMyOS0uMDc4LS4zMDgtLjExOS0uNTktLjE0LS44My0uMDEtLjA5Mi0uMDE1LS4xNzgtLjAxOS0uMjU3LS4wMDUtLjExOC0uMDA3LS4yMi0uMDA3LS4zMDIgMC0uMDU0IDAtLjExNi4wMDMtLjE4Ny4wMDctLjE3LjAyLS4zODQuMDU2LS42MjcuMDIxLS4xNDguMDUyLS4zMDcuMDktLjQ3My4wMjctLjExLjA1OC0uMjIyLjA5My0uMzM4LjAzMy0uMTA1LjA3MS0uMjEuMTEyLS4zMi4wMjctLjA3Mi4wNTktLjE0NS4wOS0uMjE5LjA0NC0uMS4wOTItLjIuMTQ0LS4zMDEuMDM5LS4wNzcuMDgyLS4xNTIuMTI2LS4yMjguMDk4LS4xNjkuMjA4LS4zMzYuMzMzLS41MDEuMDQ0LS4wNi4wOS0uMTIuMTQtLjE3OC4wNjItLjA3Ni4xMjgtLjE1NC4xOTctLjIyN2wuMTA2LS4xMTNjLjU0MS0uNTQxIDEuMTUtLjk0NiAxLjc4LTEuMjMzLjA5OC0uMDQ1LjE5OC0uMDg1LjI5Ny0uMTI0LjEwMS0uMDQuMTk5LS4wNzYuMzAxLS4xMS4xMDktLjAzNy4yMi0uMDcuMzMtLjEwMS4xMDMtLjAzLjIwOC0uMDU1LjMxLS4wNzkuMTA1LS4wMjQuMjEtLjA0NC4zMTMtLjA2My4xMTQtLjAyMi4yMjktLjAzOS4zNDEtLjA1NC4xMTQtLjAxNS4yMjctLjAyNy4zNC0uMDM2LjIxNS0uMDIuNDI3LS4wMjkuNjMyLS4wMjkuMDcgMCAuMTM4IDAgLjIwNi4wMDIuMTUzLjAwMy4zMDIuMDA4LjQ0OC4wMTguMTAxLjAwNy4yLjAxMy4yOTguMDIyLjE4Ni4wMTguMzY2LjA0LjUzNi4wNjYuMTUyLjAyMy4yOTkuMDUuNDM2LjA3Ny4yMTMuMDQyLjQwNi4wODkuNTguMTM0LjExMy4wMy4yMTcuMDYxLjMxMi4wOS4xNDMuMDQyLjI2NS4wOC4zNi4xMTMuMTY0LjA1Ni4yNTQuMDkuMjU0LjA5LjE0Ni4wNTEuMjg4LjEwOC40MjcuMTY0LjE4OC4wNzYuMzY3LjE1Ny41NC4yMzQuMTQyLjA2NS4yNzguMTMyLjQwNS4xOTQuMTA2LjA1Mi4yMDQuMTA0LjI5Ny4xNTEuMTYxLjA4NC4yOTguMTYuNDEuMjJsLjMwMS4xNjR2LTIuOXMtLjE4MS0uMDc1LS40OTMtLjE5M2MtLjEzOS0uMDUyLS4zMDItLjExNC0uNDg3LS4xOC0uMTAzLS4wMzUtLjIxMS0uMDc1LS4zMjctLjExNC0uMDkyLS4wMy0uMTg2LS4wNjQtLjI4NS0uMDk2LS4xMS0uMDM1LS4yMjUtLjA3My0uMzQzLS4xMDlsLS4yNjItLjA3OC0uMDc5LS4wMjJjLS4wODYtLjAyNS0uMTczLS4wNS0uMjYyLS4wNzNsLS4zMi0uMDgzLS4yMS0uMDVjLS4xMTQtLjAyNi0uMjMtLjA1MS0uMzQ4LS4wNzUtLjEyLS4wMjUtLjI0MS0uMDQ4LS4zNjMtLjA3ek0zNS4zNzcgMTIuMDkydjQuMjU3aDIuNzY0bC4xNDYtLjAwNWMuMDkzLS4wMDMuMjI0LS4wMDguMzg0LS4wMjIuMzAxLS4wMjguNjk1LS4wODMgMS4wNzgtLjIxMi4zNDgtLjExOC42ODUtLjI5My45NDMtLjU1LjEtLjEuMTgyLS4yMDQuMjQ4LS4zMDguMjE3LS4zNDIuMjcxLS42ODkuMjgzLS44ODYuMDA3LS4wODUuMDA2LS4xMzUuMDA2LS4xMzVzLjAwMi0uMDM4IDAtLjEwNGMtLjAwMy0uMDgyLS4wMTMtLjI0MS0uMDU3LS40MTItLjA1MS0uMjAyLS4xNDktLjQzNi0uMzIyLS42NS0uMDMzLS4wNDEtLjA2OS0uMDgyLS4xMDctLjEyLS4wNzctLjA3Ny0uMTU4LS4xNS0uMjQ4LS4yMTYtLjE1Mi0uMTExLS4zMjQtLjIwNi0uNTEyLS4yODgtLjI0OC0uMTA3LS41MjctLjE4OC0uODMyLS4yNDUtLjE1Ni0uMDMtLjMyMi0uMDUzLS40OTEtLjA3LS4xMDUtLjAxLS4yMS0uMDE2LS4zMTktLjAyMy0uMDk0LS4wMDYtLjE5NC0uMDEtLjI5MS0uMDFoLTIuNjczTTM1LjM3NyA1LjYyMXY0LjAzNWgxLjMzOXMuMDg5IDAgLjIwNy0uMDAzYy4wOTItLjAwMy4yMDItLjAxLjMtLjAxNC4yNzYtLjAyMS42NTctLjA2IDEuMDM4LS4xNjYuMDc0LS4wMi4xNS0uMDQ0LjIyMi0uMDcuMjk5LS4xMDYuNTg1LS4yNjIuODA4LS40OC4xNzctLjE3NS4yOTQtLjM2OC4zNzEtLjU1Ny4wOTUtLjIzLjEyOC0uNDUyLjE0Mi0uNjA4LjAxMi0uMTQuMDExLS4yMjkuMDExLS4yMjlzLjAwMy0uMDY2LS4wMDItLjE3Yy0uMDEtLjE3Ny0uMDQ2LS40NjMtLjE4NS0uNzM4LS4wNjctLjEzMi0uMTU4LS4yNTgtLjI4My0uMzgxLS4xNS0uMTQ5LS4zMzMtLjI2My0uNTI5LS4zNS0uMzc3LS4xNjYtLjgwOC0uMjMyLTEuMTctLjI1Ni0uMTU5LS4wMS0uMzAzLS4wMTMtLjQyNS0uMDEzaC0xLjg0NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC41IC40OTYpIi8';

export default BBC_BLOCKS_DARK_MODE;
