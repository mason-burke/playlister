# Development

### Link to Deployed Website

`https://sadserval000.github.io/playlister/`

### Goal and Value of the Application

This application is aimed at users who want to create online playlists.
I envision this application would be even better if it had a database, and users to populate it with new songs.
This application is useful because it allows the playing of music from many sources, such as YouTube, SoundCloud,
and more. This could easily be extended to include Spotify, file upload, or otherwise, using different library components.

### Usability Principles Considered

I aimed to make the layout as simple as possible, and provided 3 different spots to play/pause the current track:
in the miniplayer, the song card itself, and the item in the playlist. I featured the songs centrally, and only
included the playlist and miniplayer when they were active, so when one first arrives at the application, they can
become acquainted with the basic layout first, and as they begin to interact, more functionality appears.

### Organization of Components

The main App component has 5 direct children: the title text, the MainView component (whose children are SongCard components),
the FilterView component (which shows the filters, a form), the PlaylistView component (which shows the playlist, and whose
children are PlaylistItemCard components), and the AudioPlayer component (which shows the miniplayer, using react-player).

### How Data is Passed Down Through Components

Most of the states are located in the top level App component, which are passed only when necessary to children. Usually,
instead of passing hooks to directly manipulate the state, I extract the functionality out to a helper function, which I
locate in the App component and pass down instead. The main states that run through the application are those related to the
current filters/sort method and those related to the currently playing song and song data in general.

The states related to current filters/sort method inform how the MainView renders SongCards, and the song states tell each song
card if they're the currently playing song, tell the audio player which song to play, and handle addition or removal to the aggregator
via the clicked song's id.

### How the User Triggers State Changes

The user can trigger state changes in the filters/sorting method simply by starting to type there, and the results will update in
real time. Additionally, by clicking the 'Reset' button, the user can clear the filters, which displays all of the songs.

The user can change the state of the currently playing song by clicking on a song card's play button, either toggling the play status
or changing the song. Additionally, the user can click the 'Add to playlist' button to add it to the playlist, or if it's already added,
the user can click the 'Remove from playlist' button that replaces it to remove it from the playlist.

The user can trigger playing or delete an item from the playlist by clicking the play button or the delete button on a playlist item,
respectively.

Finally, the user can toggle playback of the currently playing song by cliicking the play/pause button on the miniplayer.
