(function(){
  function Fixtures(){
    var Fixtures = {};
    var albumPicasso = {
      title: 'The Collors',
      artist: 'Pablo Picasso',
      label: 'Cubism',
      year: '1981',
      algumArtUrl: '/assets/images/album_covers/01.png',
      songs:[
        { title: 'Blue', duration: '161.71', audioUrl: '/assets/music/blue' },
        { title: 'Green', duration: '103.96', audioUrl: '/assets/music/green' },
        { title: 'Red', duration: '268.45', audioUrl: '/assets/music/red' },
        { title: 'Pink', duration: '153.14', audioUrl: '/assets/music/pink' },
        { title: 'Magenta', duration: '374.22', audioUrl: '/assets/music/blue' }
      ]
    };

    var albumMarconi = {
      title: 'The Telephone',
      artist: 'Guglielmo Marconi',
      label: 'EM',
      year: '1909',
      algumArtUrl: '/assets/images/algum_covers/20.png',
      songs:[
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21' },
        { title: 'Can you hear me now?', duration: '2:15' }
      ]
    };

    Fixtures.getAlbum = function(){
      return albumPicasso;
    };

    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);
})();