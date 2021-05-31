
maze = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	 	[0, 0, 1, 1, 0, 1, 0, 0, 1, 2, 0, 0],
	 	[0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
	 	[0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0],
	 	[0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
	 	[0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
	 	[0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
	 	[0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
	 	[0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
	 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

mouse = maze[9][2]
row = 9
col = 2
for i in range(len(maze)):
	print(maze[i])
counter = 0
while row > 0 and row != 10 and col > 0 and col != 10 and maze[row][col] != 2:
	if maze[row][col] == 0:
		col -= 1

	else:
		row -= 1
		col += 1

print("Mouse Value: ", mouse)
print("Mouse ROW: ", row)
print("Mouse COL: ", col)