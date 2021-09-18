export function trimTitle(title: string): string {
	const MAX_CHAR = 50;
	if (title.length <= MAX_CHAR) return title;
	return title.slice(0, MAX_CHAR) + '...';
}
