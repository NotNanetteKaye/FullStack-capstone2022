import React, { useState } from 'react';
import ArtistMapper from '../../components/ArtistMapper/ArtistMapper';
import useAuth from "../../hooks/useAuth";
import '../MusicPage/MusicPage.css'

const MusicPage = () => {
    //State
    const [user, token] = useAuth();
    const [artist, setArtists] = useState([
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/5lwmRuXgjX8xIwlnauTZIP"
            },
            "followers": {
                "href": null,
                "total": 17390632
            },
            "genres": [
                "bachata"
            ],
            "href": "https://api.spotify.com/v1/artists/5lwmRuXgjX8xIwlnauTZIP",
            "id": "5lwmRuXgjX8xIwlnauTZIP",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb6d8b48abede0f9e433aa6e49",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051746d8b48abede0f9e433aa6e49",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1786d8b48abede0f9e433aa6e49",
                    "width": 160
                }
            ],
            "name": "Romeo Santos",
            "popularity": 83,
            "type": "artist",
            "uri": "spotify:artist:5lwmRuXgjX8xIwlnauTZIP"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/4RnIr0AAau1SBJMbjJ9poC"
            },
            "followers": {
                "href": null,
                "total": 286055
            },
            "genres": [
                "bachata",
                "bachata dominicana",
                "dominican pop"
            ],
            "href": "https://api.spotify.com/v1/artists/4RnIr0AAau1SBJMbjJ9poC",
            "id": "4RnIr0AAau1SBJMbjJ9poC",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb3fc19d33cb24c6cc125bb752",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051743fc19d33cb24c6cc125bb752",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1783fc19d33cb24c6cc125bb752",
                    "width": 160
                }
            ],
            "name": "El Chaval de la Bachata",
            "popularity": 54,
            "type": "artist",
            "uri": "spotify:artist:4RnIr0AAau1SBJMbjJ9poC"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/1LKPL2O3vA3ozNsmshDg3o"
            },
            "followers": {
                "href": null,
                "total": 1378635
            },
            "genres": [
                "bachata",
                "bachata dominicana",
                "tropical"
            ],
            "href": "https://api.spotify.com/v1/artists/1LKPL2O3vA3ozNsmshDg3o",
            "id": "1LKPL2O3vA3ozNsmshDg3o",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5ebe420b69b5afbd661aec3c53c",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab67616100005174e420b69b5afbd661aec3c53c",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f178e420b69b5afbd661aec3c53c",
                    "width": 160
                }
            ],
            "name": "Zacarias Ferreira",
            "popularity": 61,
            "type": "artist",
            "uri": "spotify:artist:1LKPL2O3vA3ozNsmshDg3o"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/5zvRX0y0JYtGOmGJwLwyIL"
            },
            "followers": {
                "href": null,
                "total": 271232
            },
            "genres": [
                "bachata",
                "bachata dominicana",
                "tropical"
            ],
            "href": "https://api.spotify.com/v1/artists/5zvRX0y0JYtGOmGJwLwyIL",
            "id": "5zvRX0y0JYtGOmGJwLwyIL",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb62a7b13e5f167f8dfc9c8b6f",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab6761610000517462a7b13e5f167f8dfc9c8b6f",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f17862a7b13e5f167f8dfc9c8b6f",
                    "width": 160
                }
            ],
            "name": "Bachata Heightz",
            "popularity": 50,
            "type": "artist",
            "uri": "spotify:artist:5zvRX0y0JYtGOmGJwLwyIL"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/7mvTTmzM4ALyttOUavrRPd"
            },
            "followers": {
                "href": null,
                "total": 5428
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/7mvTTmzM4ALyttOUavrRPd",
            "id": "7mvTTmzM4ALyttOUavrRPd",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273c7fac8c4edff97abdb50de77",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02c7fac8c4edff97abdb50de77",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851c7fac8c4edff97abdb50de77",
                    "width": 64
                }
            ],
            "name": "Bachata All Stars",
            "popularity": 35,
            "type": "artist",
            "uri": "spotify:artist:7mvTTmzM4ALyttOUavrRPd"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/0LnHdW6HMPoOlNdhG3DHjE"
            },
            "followers": {
                "href": null,
                "total": 1983405
            },
            "genres": [
                "afghan pop",
                "arab pop",
                "belly dance",
                "lebanese pop"
            ],
            "href": "https://api.spotify.com/v1/artists/0LnHdW6HMPoOlNdhG3DHjE",
            "id": "0LnHdW6HMPoOlNdhG3DHjE",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5ebe781800c5dec892935588dc1",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab67616100005174e781800c5dec892935588dc1",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f178e781800c5dec892935588dc1",
                    "width": 160
                }
            ],
            "name": "Nancy Ajram",
            "popularity": 60,
            "type": "artist",
            "uri": "spotify:artist:0LnHdW6HMPoOlNdhG3DHjE"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/5XI1WlZfO0NQ6KlIHDy3dt"
            },
            "followers": {
                "href": null,
                "total": 55
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/5XI1WlZfO0NQ6KlIHDy3dt",
            "id": "5XI1WlZfO0NQ6KlIHDy3dt",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb3aa714395d0f5774798c8e0c",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051743aa714395d0f5774798c8e0c",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1783aa714395d0f5774798c8e0c",
                    "width": 160
                }
            ],
            "name": "Arab!",
            "popularity": 21,
            "type": "artist",
            "uri": "spotify:artist:5XI1WlZfO0NQ6KlIHDy3dt"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/1Uff91EOsvd99rtAupatMP"
            },
            "followers": {
                "href": null,
                "total": 1352271
            },
            "genres": [
                "classical",
                "impressionism",
                "post-romantic era"
            ],
            "href": "https://api.spotify.com/v1/artists/1Uff91EOsvd99rtAupatMP",
            "id": "1Uff91EOsvd99rtAupatMP",
            "images": [
                {
                    "height": 458,
                    "url": "https://i.scdn.co/image/5e1155c852578ddf5d2cfea94ccb3a8a65efa882",
                    "width": 387
                },
                {
                    "height": 237,
                    "url": "https://i.scdn.co/image/d9bf00a7a314028df902da1d026a9844a3365d61",
                    "width": 200
                },
                {
                    "height": 76,
                    "url": "https://i.scdn.co/image/155965c396369f20273bc6ba6a14f4185ffad805",
                    "width": 64
                }
            ],
            "name": "Claude Debussy",
            "popularity": 70,
            "type": "artist",
            "uri": "spotify:artist:1Uff91EOsvd99rtAupatMP"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/3CVIomosotXKy9Zrc7S6YB"
            },
            "followers": {
                "href": null,
                "total": 801
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/3CVIomosotXKy9Zrc7S6YB",
            "id": "3CVIomosotXKy9Zrc7S6YB",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5ebb07a8f3857c600f5dae6d568",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab67616100005174b07a8f3857c600f5dae6d568",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f178b07a8f3857c600f5dae6d568",
                    "width": 160
                }
            ],
            "name": "Arabian",
            "popularity": 33,
            "type": "artist",
            "uri": "spotify:artist:3CVIomosotXKy9Zrc7S6YB"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/6g8Jqb5JMfv92eB2r0awTN"
            },
            "followers": {
                "href": null,
                "total": 62871
            },
            "genres": [
                "chamber psych",
                "scottish indie",
                "slowcore"
            ],
            "href": "https://api.spotify.com/v1/artists/6g8Jqb5JMfv92eB2r0awTN",
            "id": "6g8Jqb5JMfv92eB2r0awTN",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5ebfc4f8a8ccd3a510479b1c85f",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab67616100005174fc4f8a8ccd3a510479b1c85f",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f178fc4f8a8ccd3a510479b1c85f",
                    "width": 160
                }
            ],
            "name": "Arab Strap",
            "popularity": 37,
            "type": "artist",
            "uri": "spotify:artist:6g8Jqb5JMfv92eB2r0awTN"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/4BMv5TsBZ1EJ4uynEp2vI0"
            },
            "followers": {
                "href": null,
                "total": 15288
            },
            "genres": [
                "blues rock",
                "modern blues",
                "native american contemporary"
            ],
            "href": "https://api.spotify.com/v1/artists/4BMv5TsBZ1EJ4uynEp2vI0",
            "id": "4BMv5TsBZ1EJ4uynEp2vI0",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb53ddad88f4dd9ce2f4e7201a",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab6761610000517453ddad88f4dd9ce2f4e7201a",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f17853ddad88f4dd9ce2f4e7201a",
                    "width": 160
                }
            ],
            "name": "Indigenous",
            "popularity": 28,
            "type": "artist",
            "uri": "spotify:artist:4BMv5TsBZ1EJ4uynEp2vI0"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/2HxuQUO9XbsVYtsIaZjfKW"
            },
            "followers": {
                "href": null,
                "total": 489
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/2HxuQUO9XbsVYtsIaZjfKW",
            "id": "2HxuQUO9XbsVYtsIaZjfKW",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb65a9e70e48ea9b52825b1d65",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab6761610000517465a9e70e48ea9b52825b1d65",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f17865a9e70e48ea9b52825b1d65",
                    "width": 160
                }
            ],
            "name": "Indigenous",
            "popularity": 2,
            "type": "artist",
            "uri": "spotify:artist:2HxuQUO9XbsVYtsIaZjfKW"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/7HrK2HP1tJfnMW2HFDw4kb"
            },
            "followers": {
                "href": null,
                "total": 23309
            },
            "genres": [
                "canadian indigenous",
                "native american",
                "powwow"
            ],
            "href": "https://api.spotify.com/v1/artists/7HrK2HP1tJfnMW2HFDw4kb",
            "id": "7HrK2HP1tJfnMW2HFDw4kb",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273c0f6bec6f2c153985b416dfc",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02c0f6bec6f2c153985b416dfc",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851c0f6bec6f2c153985b416dfc",
                    "width": 64
                }
            ],
            "name": "Fawn Wood",
            "popularity": 36,
            "type": "artist",
            "uri": "spotify:artist:7HrK2HP1tJfnMW2HFDw4kb"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/3wCSquQET1QJxUDJhXsMSr"
            },
            "followers": {
                "href": null,
                "total": 138
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/3wCSquQET1QJxUDJhXsMSr",
            "id": "3wCSquQET1QJxUDJhXsMSr",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27389fd66cf01fce2cb4a9d511d",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0289fd66cf01fce2cb4a9d511d",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485189fd66cf01fce2cb4a9d511d",
                    "width": 64
                }
            ],
            "name": "Indigenous Peoples",
            "popularity": 3,
            "type": "artist",
            "uri": "spotify:artist:3wCSquQET1QJxUDJhXsMSr"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/1P4nCVoHEo32nTMyL5f8PX"
            },
            "followers": {
                "href": null,
                "total": 6
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/1P4nCVoHEo32nTMyL5f8PX",
            "id": "1P4nCVoHEo32nTMyL5f8PX",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb9addd97e1ac4e091f2da0829",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051749addd97e1ac4e091f2da0829",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1789addd97e1ac4e091f2da0829",
                    "width": 160
                }
            ],
            "name": "Indigenous Rexxx",
            "popularity": 7,
            "type": "artist",
            "uri": "spotify:artist:1P4nCVoHEo32nTMyL5f8PX"
        }
    ]);

    return (
        <div className='musicpage'>
          <h1 className='musicpagetitle'>MUSIC</h1>
          <h2 className='musicpagecaption'>Here you will find an array of black/brown-owned musicians.</h2>
            <ArtistMapper artists= {artist} />
        </div>
    )
}

export default MusicPage;