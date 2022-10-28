class Heroe {
	/* 	alterEgo: string;
	edad: number;
	nombreReal: number;
 */
	constructor(
		public alterEgo: string,
		public edad: number,
		public nombreReal: string
	) {}
}

const ironman1 = new Heroe("Ironman", 45, "tony");

console.log(ironman1);
