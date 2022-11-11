import React from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import './SongCard.scss'

export interface ISongCardProps {
  song: {
    title: string
    duration: number
    resource: string
    genre: string
    thumbnail: string
    artist: string
  }
  index: number
  playing: boolean
  handlePlaybackClick: () => void
  handleAddClick: () => void
}

export const SongCard = (props: ISongCardProps) => {
  const {
    song,
    index,
    playing,
    handlePlaybackClick,
    handleAddClick
    } = props;
  
  return (
    <div id={`song-${index}`} className="song-card">
      <button className="song-play-button" onClick={handlePlaybackClick}>
        {playing ?
          <FaPause color='white' className='play-button-icon' size="16"/>
          : <FaPlay color='white' className='play-button-icon' size="16"/>
        }
      </button>
      <img
        className="song-thumbnail"
        src={song.thumbnail}
        alt={`cover art for ${song.title}`}
      />
      <div className="song-card-body">
        <div className="song-details">
          <h3 className="song-title">{song.title}</h3>
          <i>{Math.floor(song.duration / 60)}:
          {song.duration % 60 < 10 ? '0' + song.duration % 60 : song.duration % 60}</i>
        </div>
        <div className="song-details">
          <i>{song.artist}</i>
          <span className="song-genre">{song.genre}</span>
        </div>
        <button className="add-button" onClick={handleAddClick}>
          Add to playlist
        </button>
      </div>
    </div>
  )
}