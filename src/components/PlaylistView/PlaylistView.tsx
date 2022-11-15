import React from 'react'
import { PlaylistItemCard } from './PlaylistItemCard/PlaylistItemCard'
import songData from '../../assets/songData.json'
import './PlaylistView.scss'
import { convertTime } from '../../global/globalUtils'

export interface IPlaylistViewProps {
	playId: number
	isPlaying: boolean
	itemIds: Set<number>
	handleTogglePlaylistClick: (id: number) => void
	handlePlaybackClick: (id: number) => void
	handleClearClick: () => void
}

export const PlaylistView = (props: IPlaylistViewProps) => {
	const {
		playId,
		isPlaying,
		itemIds,
		handleTogglePlaylistClick,
		handlePlaybackClick,
		handleClearClick,
	} = props

	return (
		<div className={`playlist-view${itemIds.size ? ' visible' : ''}`}>
			<h2>Playlist</h2>
			{[...itemIds].map((itemId) => {
				const song = songData[itemId]
				return song ? (
					<PlaylistItemCard
						key={`playlist-card-${song.id}`}
						song={song}
						handleDelete={() => {
							handleTogglePlaylistClick(song.id)
						}}
						handlePlaybackClick={() => {
							handlePlaybackClick(song.id)
						}}
						isCurrentSong={playId === song.id}
						isPlaying={isPlaying}
					/>
				) : (
					<></>
				)
			})}
			<i>
				Duration:{' '}
				{convertTime(
					[...itemIds].reduce((prev, currIdx) => {
						return prev + songData[currIdx].duration ?? 0
					}, 0)
				)}
			</i>
			<button className="clear-button" onClick={() => handleClearClick()}>
				Clear
			</button>
		</div>
	)
}
