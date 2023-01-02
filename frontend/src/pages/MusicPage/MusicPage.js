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
                "spotify": "https://open.spotify.com/artist/1c22GXH30ijlOfXhfLz9Df"
            },
            "followers": {
                "href": null,
                "total": 901474
            },
            "genres": [
                "latin pop",
                "tropical"
            ],
            "href": "https://api.spotify.com/v1/artists/1c22GXH30ijlOfXhfLz9Df",
            "id": "1c22GXH30ijlOfXhfLz9Df",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb8c145958cd0bf70d695ac0f0",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051748c145958cd0bf70d695ac0f0",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1788c145958cd0bf70d695ac0f0",
                    "width": 160
                }
            ],
            "name": "Elvis Crespo",
            "popularity": 65,
            "type": "artist",
            "uri": "spotify:artist:1c22GXH30ijlOfXhfLz9Df"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/2weA6hhVqTIN2gSn9PUB9U"
            },
            "followers": {
                "href": null,
                "total": 497888
            },
            "genres": [
                "cha-cha-cha",
                "cuban rumba",
                "mambo",
                "musica tradicional cubana",
                "salsa",
                "tropical"
            ],
            "href": "https://api.spotify.com/v1/artists/2weA6hhVqTIN2gSn9PUB9U",
            "id": "2weA6hhVqTIN2gSn9PUB9U",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5ebb58cbc73f2b755f60134c54b",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab67616100005174b58cbc73f2b755f60134c54b",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f178b58cbc73f2b755f60134c54b",
                    "width": 160
                }
            ],
            "name": "Celia Cruz",
            "popularity": 64,
            "type": "artist",
            "uri": "spotify:artist:2weA6hhVqTIN2gSn9PUB9U"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/7wLYNBd1fXGEKSLJMNnlt4"
            },
            "followers": {
                "href": null,
                "total": 147266
            },
            "genres": [
                "merengue",
                "tropical"
            ],
            "href": "https://api.spotify.com/v1/artists/7wLYNBd1fXGEKSLJMNnlt4",
            "id": "7wLYNBd1fXGEKSLJMNnlt4",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273c89b6348c1b7f7a08aa8256d",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02c89b6348c1b7f7a08aa8256d",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851c89b6348c1b7f7a08aa8256d",
                    "width": 64
                }
            ],
            "name": "Oro Solido",
            "popularity": 52,
            "type": "artist",
            "uri": "spotify:artist:7wLYNBd1fXGEKSLJMNnlt4"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/47MpMsUfWtgyIIBEFOr4FE"
            },
            "followers": {
                "href": null,
                "total": 7636256
            },
            "genres": [
                "latin hip hop",
                "latin pop",
                "reggaeton",
                "reggaeton flow",
                "trap latino",
                "urbano latino"
            ],
            "href": "https://api.spotify.com/v1/artists/47MpMsUfWtgyIIBEFOr4FE",
            "id": "47MpMsUfWtgyIIBEFOr4FE",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb1db8a4795dc8b97abc1f6f11",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051741db8a4795dc8b97abc1f6f11",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1781db8a4795dc8b97abc1f6f11",
                    "width": 160
                }
            ],
            "name": "Lunay",
            "popularity": 72,
            "type": "artist",
            "uri": "spotify:artist:47MpMsUfWtgyIIBEFOr4FE"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/3rs3EOlJ8jyPpdGiQ9Mhub"
            },
            "followers": {
                "href": null,
                "total": 839819
            },
            "genres": [
                "bachata",
                "bachata dominicana",
                "tropical"
            ],
            "href": "https://api.spotify.com/v1/artists/3rs3EOlJ8jyPpdGiQ9Mhub",
            "id": "3rs3EOlJ8jyPpdGiQ9Mhub",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/c88ecd17387b1733226d728ef621bb91bf85f062",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/7b97e399148b92a2787e60938f04d30417933d3c",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/d4a403f5a2860cc48bca9ab277f6a8230b3fc14b",
                    "width": 64
                }
            ],
            "name": "Monchy & Alexandra",
            "popularity": 61,
            "type": "artist",
            "uri": "spotify:artist:3rs3EOlJ8jyPpdGiQ9Mhub"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/2Id1LjA4Y50a8VCUZHZykl"
            },
            "followers": {
                "href": null,
                "total": 7072
            },
            "genres": [
                "chicano punk",
                "hardcore punk",
                "punk 'n' roll"
            ],
            "href": "https://api.spotify.com/v1/artists/2Id1LjA4Y50a8VCUZHZykl",
            "id": "2Id1LjA4Y50a8VCUZHZykl",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb3cdaf3d4fc544500ac516f69",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051743cdaf3d4fc544500ac516f69",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1783cdaf3d4fc544500ac516f69",
                    "width": 160
                }
            ],
            "name": "Manic Hispanic",
            "popularity": 23,
            "type": "artist",
            "uri": "spotify:artist:2Id1LjA4Y50a8VCUZHZykl"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/3ZS3HDHJyW3lq0brAOK7y3"
            },
            "followers": {
                "href": null,
                "total": 117
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/3ZS3HDHJyW3lq0brAOK7y3",
            "id": "3ZS3HDHJyW3lq0brAOK7y3",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273443026d76849f5c2095ddde6",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02443026d76849f5c2095ddde6",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851443026d76849f5c2095ddde6",
                    "width": 64
                }
            ],
            "name": "Hispanic",
            "popularity": 0,
            "type": "artist",
            "uri": "spotify:artist:3ZS3HDHJyW3lq0brAOK7y3"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/5LOCNr4duLmyDsTH7ZBXNc"
            },
            "followers": {
                "href": null,
                "total": 330
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/5LOCNr4duLmyDsTH7ZBXNc",
            "id": "5LOCNr4duLmyDsTH7ZBXNc",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273f28863abbd35b6dcc73a0a22",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e023519c76e030af148e7cec59f",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048513519c76e030af148e7cec59f",
                    "width": 64
                }
            ],
            "name": "Satanic Hispanic",
            "popularity": 7,
            "type": "artist",
            "uri": "spotify:artist:5LOCNr4duLmyDsTH7ZBXNc"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/4sjpo2wiWF1tKM3CaveBaC"
            },
            "followers": {
                "href": null,
                "total": 331
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/4sjpo2wiWF1tKM3CaveBaC",
            "id": "4sjpo2wiWF1tKM3CaveBaC",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273e943cee2ff7a8426b3e5b54c",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02e943cee2ff7a8426b3e5b54c",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851e943cee2ff7a8426b3e5b54c",
                    "width": 64
                }
            ],
            "name": "Hispanic MC's",
            "popularity": 7,
            "type": "artist",
            "uri": "spotify:artist:4sjpo2wiWF1tKM3CaveBaC"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/4KlV0ruvb1ffYzQ15JJXhK"
            },
            "followers": {
                "href": null,
                "total": 68
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/4KlV0ruvb1ffYzQ15JJXhK",
            "id": "4KlV0ruvb1ffYzQ15JJXhK",
            "images": [],
            "name": "Hispanic",
            "popularity": 0,
            "type": "artist",
            "uri": "spotify:artist:4KlV0ruvb1ffYzQ15JJXhK"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/6PtKN5yctUgBtswIU55gL9"
            },
            "followers": {
                "href": null,
                "total": 2
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/6PtKN5yctUgBtswIU55gL9",
            "id": "6PtKN5yctUgBtswIU55gL9",
            "images": [],
            "name": "Satanic Hispanic",
            "popularity": 0,
            "type": "artist",
            "uri": "spotify:artist:6PtKN5yctUgBtswIU55gL9"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/7yEehd9iZ5gWzsKk1IzWpr"
            },
            "followers": {
                "href": null,
                "total": 119
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/7yEehd9iZ5gWzsKk1IzWpr",
            "id": "7yEehd9iZ5gWzsKk1IzWpr",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb2f38817024b15ae1d4c38f72",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051742f38817024b15ae1d4c38f72",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1782f38817024b15ae1d4c38f72",
                    "width": 160
                }
            ],
            "name": "Soy the Organic Hispanic",
            "popularity": 0,
            "type": "artist",
            "uri": "spotify:artist:7yEehd9iZ5gWzsKk1IzWpr"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/4oVcPiYDvfGxamTzwvnKtp"
            },
            "followers": {
                "href": null,
                "total": 56987
            },
            "genres": [
                "merengue",
                "tropical"
            ],
            "href": "https://api.spotify.com/v1/artists/4oVcPiYDvfGxamTzwvnKtp",
            "id": "4oVcPiYDvfGxamTzwvnKtp",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5ebc225d930c8ee110469f52988",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab67616100005174c225d930c8ee110469f52988",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f178c225d930c8ee110469f52988",
                    "width": 160
                }
            ],
            "name": "Mala Fe",
            "popularity": 47,
            "type": "artist",
            "uri": "spotify:artist:4oVcPiYDvfGxamTzwvnKtp"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/1sVJs0swrU9xOOyQFobvDL"
            },
            "followers": {
                "href": null,
                "total": 5
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/1sVJs0swrU9xOOyQFobvDL",
            "id": "1sVJs0swrU9xOOyQFobvDL",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273fe0224851959ffcc8d2a2d5b",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02fe0224851959ffcc8d2a2d5b",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851fe0224851959ffcc8d2a2d5b",
                    "width": 64
                }
            ],
            "name": "HISPANIC VENOM",
            "popularity": 0,
            "type": "artist",
            "uri": "spotify:artist:1sVJs0swrU9xOOyQFobvDL"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/4lQFwiUsmktYB42zE5JWV7"
            },
            "followers": {
                "href": null,
                "total": 108
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/4lQFwiUsmktYB42zE5JWV7",
            "id": "4lQFwiUsmktYB42zE5JWV7",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273099d1cec1ba5637223c6080c",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02099d1cec1ba5637223c6080c",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851099d1cec1ba5637223c6080c",
                    "width": 64
                }
            ],
            "name": "Hispánico",
            "popularity": 0,
            "type": "artist",
            "uri": "spotify:artist:4lQFwiUsmktYB42zE5JWV7"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/1b4LaWxN4OxLAkTOmJBd69"
            },
            "followers": {
                "href": null,
                "total": 37
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/1b4LaWxN4OxLAkTOmJBd69",
            "id": "1b4LaWxN4OxLAkTOmJBd69",
            "images": [],
            "name": "Hispanic M.C.'s",
            "popularity": 3,
            "type": "artist",
            "uri": "spotify:artist:1b4LaWxN4OxLAkTOmJBd69"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/7FAbBsoCOTwCFiGIR8xw2f"
            },
            "followers": {
                "href": null,
                "total": 1687
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/7FAbBsoCOTwCFiGIR8xw2f",
            "id": "7FAbBsoCOTwCFiGIR8xw2f",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb02a5730fb346d0961f21d401",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab6761610000517402a5730fb346d0961f21d401",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f17802a5730fb346d0961f21d401",
                    "width": 160
                }
            ],
            "name": "The Hispanic Connect",
            "popularity": 1,
            "type": "artist",
            "uri": "spotify:artist:7FAbBsoCOTwCFiGIR8xw2f"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/1kbxECs4rS3r0JipTWFr1Q"
            },
            "followers": {
                "href": null,
                "total": 688
            },
            "genres": [
                "cumbia",
                "porro"
            ],
            "href": "https://api.spotify.com/v1/artists/1kbxECs4rS3r0JipTWFr1Q",
            "id": "1kbxECs4rS3r0JipTWFr1Q",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273a5a79b3c4bf7b47bf97979fd",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02a5a79b3c4bf7b47bf97979fd",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851a5a79b3c4bf7b47bf97979fd",
                    "width": 64
                }
            ],
            "name": "Los Inmortales",
            "popularity": 13,
            "type": "artist",
            "uri": "spotify:artist:1kbxECs4rS3r0JipTWFr1Q"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/7h4IOJmK6gaqaoPTMBpaZY"
            },
            "followers": {
                "href": null,
                "total": 7
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/7h4IOJmK6gaqaoPTMBpaZY",
            "id": "7h4IOJmK6gaqaoPTMBpaZY",
            "images": [],
            "name": "Hispanico latino",
            "popularity": 2,
            "type": "artist",
            "uri": "spotify:artist:7h4IOJmK6gaqaoPTMBpaZY"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/5YO3yQx97KLLE9zJYa4jaU"
            },
            "followers": {
                "href": null,
                "total": 79427
            },
            "genres": [
                "boom bap espanol",
                "hip hop cubano",
                "venezuelan hip hop"
            ],
            "href": "https://api.spotify.com/v1/artists/5YO3yQx97KLLE9zJYa4jaU",
            "id": "5YO3yQx97KLLE9zJYa4jaU",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb5073332daaf14763d41967f0",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051745073332daaf14763d41967f0",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1785073332daaf14763d41967f0",
                    "width": 160
                }
            ],
            "name": "Rxnde Akozta",
            "popularity": 43,
            "type": "artist",
            "uri": "spotify:artist:5YO3yQx97KLLE9zJYa4jaU"
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