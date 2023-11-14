const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const User = require('./models/user');
const Song = require('./models/song');
const Album = require('./models/album');
const Playlist = require('./models/playlist');
const PlaylistSong = require('./models/playlist-song');

const upload = multer({ dest: 'uploads/' })

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const browseRoutes = require('./routes/browse');
const profileRoutes = require('./routes/profile');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(browseRoutes);
app.use('/profile', profileRoutes);

app.use(errorController.get404);

Song.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Song);
User.hasMany(Playlist);
Playlist.belongsTo(User);
Playlist.belongsToMany(Song, { through: PlaylistSong });
Song.belongsToMany(Playlist, { through: PlaylistSong });
User.hasMany(Album);
Album.belongsTo(User);
Album.hasMany(Song);
Song.belongsTo(Album);

sequelize
    // .sync({ force: true })
    .sync()
    .then(() => app.listen(3000));
