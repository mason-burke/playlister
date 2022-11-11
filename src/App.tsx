import React, { useState } from 'react';
import { MainView } from './components/MainView/MainView';
import { FilterView } from './components/FilterView/FilterView';
import { PlaylistView } from './components/PlaylistView/PlaylistView';
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer';

export const App = () => {
  const [playIndex, setPlayIndex] = useState(-1)
  const [isAudioPlayerOpen, setIsAudioPlayerOpen] = useState(false)

  return (
    <main>
      <FilterView/>
      <MainView
        playIndex={playIndex}
        setPlayIndex={setPlayIndex}
      />
      <PlaylistView/>
      <AudioPlayer
        isOpen={isAudioPlayerOpen}
        setIsOpen={setIsAudioPlayerOpen}
        playIndex={playIndex}
        setPlayIndex={setPlayIndex}
      />
    </main>
  );
}

export default App;
