import React from 'react'
import { SongCard } from './SongCard/SongCard'
import { song } from '../../global/globalUtils'
import './MainView.scss'

export interface IMainViewProps {
	playId: number
	isPlaying: boolean
	sortedResults: song[]
	filterResults: boolean[]
	playlistItemIds: Set<number>
	handlePlaybackClick: (id: number) => void
	handleTogglePlaylistClick: (id: number) => void
}

export const MainView = (props: IMainViewProps) => {
	const {
		playId,
		isPlaying,
		sortedResults,
		filterResults,
		playlistItemIds,
		handlePlaybackClick,
		handleTogglePlaylistClick,
	} = props

	return (
		<div className="main-view">
			{sortedResults.map((song, index) => {
				return filterResults[index] ? (
					<SongCard
						key={song.id}
						song={song}
						isCurrentSong={playId === song.id}
						isPlaying={isPlaying}
						handlePlaybackClick={() => handlePlaybackClick(song.id)}
						isAdded={playlistItemIds.has(song.id)}
						handleTogglePlaylistClick={() => handleTogglePlaylistClick(song.id)}
					/>
				) : (
					<></>
				)
			})}
		</div>
	)
}
