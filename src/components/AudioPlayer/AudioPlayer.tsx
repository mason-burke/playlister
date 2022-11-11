import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
import songData from '../../assets/songData.json'
import './AudioPlayer.scss'

export interface IAudioPlayerProps {
  playIndex: number
  setPlayIndex: React.Dispatch<React.SetStateAction<number>>
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AudioPlayer = (props: IAudioPlayerProps) => {
  const {
    playIndex,
    setPlayIndex,
    isOpen,
    setIsOpen
  } = props;

  const playerRef = useRef<ReactPlayer>(null)
  let source = ""
  if (playIndex > 0) {
    let source = songData[playIndex].resource
    console.log(source)
  }


  return (
    <div>
      <ReactPlayer src={source} controls={true}/>
    </div>
  )
}