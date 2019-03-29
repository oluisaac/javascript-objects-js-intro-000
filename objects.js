
var playlist = {artistName: "Michael", songTitle: "Slowdive"};
var playlist = {artistName: "Mariah", songTitle: "My Bloody Valentine"};
var playlist = {artistName: "Beyonce", songTitle: "Phil Ochs"};

function updatePlaylist(Playlist, artistName, songTitle) {
  return object.assign({}, artistName, { [playlist]: songTitle});

 function removeFromPlaylist(Playlist, artistName) {
   delete Playlist[artistName];
   return Playlist;
 }

 removeFromPlaylist(playlist, "artistName");

 };
