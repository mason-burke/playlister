import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
import { FaPlay, FaPause } from 'react-icons/fa'
import { convertTime } from '../../global/globalUtils'
import songData from '../../assets/songData.json'
import './AudioPlayer.scss'

export interface IAudioPlayerProps {
	playId: number
	isPlaying: boolean
	setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
	currentProgress: string
	setCurrentProgress: React.Dispatch<React.SetStateAction<string>>
}

export const AudioPlayer = (props: IAudioPlayerProps) => {
	const {
		playId,
		isPlaying,
		setIsPlaying,
		currentProgress,
		setCurrentProgress,
	} = props

	const playerRef = useRef<ReactPlayer>(null)
	let song = null

	if (playId > -1) {
		console.log(songData)
		song = songData.find((song) => song.id === playId)
		console.log(song)
	}

	return (
		<div className={`audio-player${playId > -1 ? ' visible' : ''}`}>
			<ReactPlayer
				ref={playerRef}
				progressInterval={500}
				style={{ display: 'none' }}
				url={playId > -1 ? song?.resource ?? '' : ''}
				controls={true}
				playing={playId > -1 && isPlaying}
				onProgress={(state) => {
					if (isPlaying) {
						setCurrentProgress(convertTime(state.playedSeconds))
					}
				}}
				onEnded={() => setIsPlaying(false)}
			/>
			<button
				className="song-play-button"
				onClick={() => {
					if (playId > -1) {
						setIsPlaying(!isPlaying)
					}
				}}
			>
				{isPlaying ? (
					<FaPause color="white" className="play-button-icon" size="16" />
				) : (
					<FaPlay color="white" className="play-button-icon" size="16" />
				)}
			</button>
			<img
				className="song-thumbnail"
				src={song?.thumbnail}
				alt={`cover art for ${song?.title}`}
			/>
			<div className="song-card-body">
				<div className="song-details">
					<h3 className="song-title">{song?.title}</h3>
				</div>
				<div className="song-details">
					<i>{song?.artist}</i>
					<i>
						{currentProgress}/{convertTime(song?.duration ?? 0)}
					</i>
				</div>
			</div>
		</div>
	)
}
