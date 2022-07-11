const gradeColor = (number) => {
	return number < 3.0
		? 'red'
		: number >= 3.0 && number <= 3.9
		? 'yellow'
		: 'green';
};
export default gradeColor;
