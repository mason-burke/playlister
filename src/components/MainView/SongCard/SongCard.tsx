import React from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import { convertTime, song } from '../../../global/globalUtils'
import './SongCard.scss'

export interface ISongCardProps {
	song: song
	isCurrentSong: boolean
	isPlaying: boolean
	handlePlaybackClick: () => void
	isAdded: boolean
	handleTogglePlaylistClick: () => void
}

export const SongCard = (props: ISongCardProps) => {
	const {
		song,
		isPlaying,
		isCurrentSong,
		handlePlaybackClick,
		isAdded,
		handleTogglePlaylistClick,
	} = props

	return (
		<div id={`song-${song.id}`} className="song-card">
			<button className="song-play-button" onClick={handlePlaybackClick}>
				{isPlaying && isCurrentSong ? (
					<FaPause color="white" className="play-button-icon" size="16" />
				) : (
					<FaPlay color="white" className="play-button-icon" size="16" />
				)}
			</button>
			<img
				className="song-thumbnail"
				src={song.thumbnail}
				alt={`cover art for ${song.title}`}
			/>
			<div className="song-card-body">
				<div className="song-details">
					<h3 className="song-title">{song.title}</h3>
					<i>{convertTime(song.duration)}</i>
				</div>
				<div className="song-details">
					<i>{song.artist}</i>
					<span className="song-genre">{song.genre}</span>
				</div>
				<button
					className={`add-button${isAdded ? ' added' : ''}`}
					onClick={handleTogglePlaylistClick}
				>
					{isAdded ? 'Remove from ': 'Add to ' }playlist
				</button>
			</div>
		</div>
	)
}
