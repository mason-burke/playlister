export const convertTime = (seconds: number) => {
	const normalizedTime = Math.floor(seconds)
	return `${Math.floor(normalizedTime / 60)}:${
		normalizedTime % 60 < 10 ? '0' + (normalizedTime % 60) : normalizedTime % 60
	}`
}

export type song = {
	title: string
	duration: number
	resource: string
	genre: string
	thumbnail: string
	artist: string
	id: number
}
