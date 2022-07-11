export default function getGender(gender) {
	switch (gender) {
		case '0':
			return 'Female';
			break;

		default:
			return 'Male';
			break;
	}
}
