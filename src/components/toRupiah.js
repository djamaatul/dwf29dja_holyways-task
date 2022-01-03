export default function toRupiah(money) {
	const moneyString = money.toString();
	let rupiah = [];
	let current = 0;
	if (moneyString.length > 3) {
		for (let i = moneyString.length; i > 0; i--) {
			if (current % 3 == 0 && current !== 0) {
				rupiah.unshift('.');
			}
			rupiah.unshift(moneyString[i - 1]);
			current++;
		}
		return `Rp${rupiah.join('')},00`;
	}
	return `Rp${moneyString},00`;
}
