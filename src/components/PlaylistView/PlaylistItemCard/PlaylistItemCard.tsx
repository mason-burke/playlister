import React from 'react'
import { song } from '../../../global/globalUtils'
import { FaPause, FaPlay } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import './PlaylistItemCard.scss'

export interface IPlaylistItemCardProps {
	song: song
	isCurrentSong: boolean
	isPlaying: boolean
	handleDelete: () => void
	handlePlaybackClick: () => void
}

export const PlaylistItemCard = (props: IPlaylistItemCardProps) => {
	const { song, isCurrentSong, isPlaying, handleDelete, handlePlaybackClick } =
		props
	return (
		<div className="playlist-item">
			<button className="song-play-button" onClick={handlePlaybackClick}>
				{isPlaying && isCurrentSong ? (
					<FaPause color="white" className="play-button-icon" size="16" />
				) : (
					<FaPlay color="white" className="play-button-icon" size="16" />
				)}
			</button>
			<h4>{song.title}</h4>
			<button className="delete-button" onClick={handleDelete}>
				<MdCancel color="white" size="16"/>
			</button>
		</div>
	)
}
