import React, { useState } from 'react'
import songData from './assets/songData.json'
import { song } from './global/globalUtils'
import { MainView } from './components/MainView/MainView'
import { FilterView } from './components/FilterView/FilterView'
import { PlaylistView } from './components/PlaylistView/PlaylistView'
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer'
import './App.scss'

export type SortState = -1 | 0 | 1

export const App = () => {
	const [playId, setPlayId] = useState<number>(-1)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [currentProgress, setCurrentProgress] = useState<string>('0:00')
	const [filterResults, setFilterResults] = useState<boolean[]>(
		Array(songData.length).fill(true)
	)
	const [sort, setSort] = useState<SortState>(0)
	const [playlistItemIds, setPlaylistItemIds] = useState<Set<number>>(new Set())

	let sortedResults = [...songData]
	if (sort !== 0) {
		const predicate = (a: song, b: song) =>
			sort === 1 ? a.duration - b.duration : b.duration - a.duration
		sortedResults.sort(predicate)
	} else {
		sortedResults = songData
	}

	const onPlaybackClick = (id: number) => {
		console.log(id)
		if (playId === id) {
			setIsPlaying(!isPlaying)
		} else {
			setPlayId(id)
			setCurrentProgress('0:00')
			setIsPlaying(true)
		}
	}

	const onTogglePlaylistClick = (id: number) => {
		playlistItemIds.has(id)
			? playlistItemIds.delete(id)
			: playlistItemIds.add(id)
		setPlaylistItemIds(new Set(playlistItemIds))
	}

	const onClearPlaylistClick = () => {
		setPlaylistItemIds(new Set())
	}

	return (
		<main>
			<div className="title-container">
				<h1>Playlister</h1>
			</div>
			<FilterView
				filterResults={filterResults}
				setFilterResults={setFilterResults}
				sortedResults={sortedResults}
				setSort={setSort}
			/>
			<MainView
				playId={playId}
				isPlaying={isPlaying}
				sortedResults={sortedResults}
				filterResults={filterResults}
				playlistItemIds={playlistItemIds}
				handlePlaybackClick={onPlaybackClick}
				handleTogglePlaylistClick={onTogglePlaylistClick}
			/>
			<PlaylistView
				playId={playId}
				isPlaying={isPlaying}
				itemIds={playlistItemIds}
				handleTogglePlaylistClick={onTogglePlaylistClick}
				handlePlaybackClick={onPlaybackClick}
				handleClearClick={onClearPlaylistClick}
			/>
			<AudioPlayer
				playId={playId}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentProgress={currentProgress}
				setCurrentProgress={setCurrentProgress}
			/>
		</main>
	)
}

export default App
