Describe: beepBoop()
Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(beepBoop(0).toEqual([0]);

Test: "It should return an array with a 0 and "Beep!" if the number 1 is inputted"
Expect(beepBoop(1).toEqual([0, "Beep!"]);

Test: "It should return an array with a 0, "Beep!" and "Boop!" if the number 2 is inputted"
Expect(beepBoop(2).toEqual([0, "Beep!", "Boop!"]);

Test: "It should return an array with a 0, "Beep!", "Boop!" and "Won't you be my neighbor?" if the number 3 is inputted"
Excect(beepBoop(3).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?"]); 

Test: "It should 