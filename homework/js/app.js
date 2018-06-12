//the difference between concatenation and interpolation is that concatenation only combines two strings and interpolation combines variables and empty variables.
var concat = console.log("flame" + "thrower")
var interpol = console.log("Chimchar used " + concat +"!")

// section 2
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
  a < b;
c > d;
'Name' === 'Name';
console.log(a < b && b < c);
console.log(a === a && a !== d);
e === 'Kevin';
48 !== '48';

//section 3
//infinite loop? yes it is
//infinite loop 2 no because you turn the variable false within it's self and an error will come
// reading code: it did exactly what I thought it would
//section 4
//for loops
// the key difference between a for and while loop is that their paramaters can very but only a for loop can look through an array
//for loop 1
for (var i = 0; i <= 999; i++) {
	console.log(i++)
}
// for loop control statement
//initialization, condition, finalExpression
for (var i = 999; i >= 0; i--) {
	console.log(i--)
}
for (var i = 0; i <= 10; i++) {
	console.log("The value of i is: " + i + " of 10")
}
//section 5
// $ mkdir homework_part_2

// $ cd homework_part_2/

// $ mkdir death_star

// $ mkdir galaxy_far_far_away

// $ mkdir galaxy_far_far_away/tatooine

// $ touch galaxy_far_far_away/tatooine/luke.txt galaxy_far_far_away/tatooine/ben_kenobi.txt

// $ mkdir galaxy_far_far_away/tatooine/millenium_falcon

// $ touch galaxy_far_far_away/tatooine/millenium_falcon/han_solo.tx

// $ mv galaxy_far_far_away/tatooine/ben_kenobi.txt obi_wan.txt

// $ cp death_star/storm_trooper.txt galaxy_far_far_away/tatooine/

// $ mv galaxy_far_far_away/tatooine/luke.txt galaxy_far_far_away/tatooine/millenium_falcon/

// $ mv obi_wan.txt galaxy_far_far_away/tatooine/millenium_falcon/

// $ mv galaxy_far_far_away/tatooine/millenium_falcon/ death_star/

// $ mv death_star/princess_leia.txt death_star/millenium_falcon/

// $ rm death_star/millenium_falcon/obi_wan.txt

// $ mkdir galaxy_far_far_away/yavin_4

// $ mv death_star/millenium_falcon/ galaxy_far_far_away/yavin_4/

// $ mkdir galaxy_far_far_away/yavin_4/x_wing

// $ mv galaxy_far_far_away/yavin_4/millenium_falcon/princess_leia.txt galaxy_far_far_away/yavin_4/

// $ mv galaxy_far_far_away/yavin_4/millenium_falcon/luke.txt galaxy_far_far_away/yavin_4/x_wing/

// $ mv galaxy_far_far_away/yavin_4/millenium_falcon/ galaxy_far_far_away/

// $ mkdir death_star/tie_fighter_1 death_star/tie_fighter_2 death_star/tie_fighter_3

// $ mv death_star/tie_fighter_1 death_star/tie_fighter_2 death_star/tie_fighter_3 galaxy_far_far_away/

// $ rm -r galaxy_far_far_away/tie_fighter_2 galaxy_far_far_away/tie_fighter_3

// $ touch galaxy_far_far_away/yavin_4/x_wing/the_force

// $ rm -r death_star/

// $ mv galaxy_far_far_away/millenium_falcon/ galaxy_far_far_away/yavin_4/

// $ touch galaxy_far_far_away/yavin_4/celebrate.txt