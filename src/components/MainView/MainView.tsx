import React from 'react'
import songData from '../../assets/songData.json'
import { SongCard } from './SongCard/SongCard'
import './MainView.scss'

export interface IMainViewProps {
  playIndex: number,
  setPlayIndex: React.Dispatch<React.SetStateAction<number>>
}

export const MainView = (props: IMainViewProps) => {
  const {
    playIndex,
    setPlayIndex
  } = props;

  const onPlaybackClick = (index: number) => {
    playIndex === index ? setPlayIndex(-1) : setPlayIndex(index)
  }

  const onAddClick = (index: number) => {

  }

  return (
    <div className="main-view">
      {songData.map((song, index) => {
        return (
          <SongCard 
            key={index}
            song={song}
            index={index}
            playing={playIndex === index}
            handlePlaybackClick={() => onPlaybackClick(index)}
            handleAddClick={() => onAddClick(index)}
          />
        )
      })}
    </div>
  )
}