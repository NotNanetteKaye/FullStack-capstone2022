import React, { useState } from 'react';
import BusinessMapper from '../../components/BusinessMapper/BusinessMapper';
import '../BusinessesPage/BusinessPage.css'

const BusinessesPage = () => {
    const [businesses, setBusinesses] = useState([
      {
        "search_metadata": {
            "id": "63b894da7d171a8a6f7210f1",
            "status": "Success",
            "json_endpoint": "https://serpapi.com/searches/44268b545ef65445/63b894da7d171a8a6f7210f1.json",
            "created_at": "2023-01-06 21:38:34 UTC",
            "processed_at": "2023-01-06 21:38:34 UTC",
            "google_url": "https://www.google.com/search?q=texas+black+boutiques&oq=texas+black+boutiques&sourceid=chrome&ie=UTF-8",
            "raw_html_file": "https://serpapi.com/searches/44268b545ef65445/63b894da7d171a8a6f7210f1.html",
            "total_time_taken": 0.86
        },
        "search_parameters": {
            "engine": "google",
            "q": "texas black boutiques",
            "google_domain": "google.com",
            "device": "desktop"
        },
        "search_information": {
            "organic_results_state": "Results for exact spelling",
            "query_displayed": "texas black boutiques",
            "total_results": 35200000,
            "time_taken_displayed": 0.53,
            "menu_items": [
                {
                    "position": 1,
                    "title": "All"
                },
                {
                    "position": 2,
                    "title": "Images",
                    "link": "https://www.google.com/search?q=texas+black+boutiques&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ_AUoAXoECAEQAw",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black+boutiques&tbm=isch"
                },
                {
                    "position": 3,
                    "title": "Shopping",
                    "link": "https://www.google.com/search?q=texas+black+boutiques&source=lnms&tbm=shop&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ_AUoAnoECAEQBA",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black+boutiques&tbm=shop"
                },
                {
                    "position": 4,
                    "title": "News",
                    "link": "https://www.google.com/search?q=texas+black+boutiques&source=lnms&tbm=nws&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ_AUoA3oECAEQBQ",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black+boutiques&tbm=nws"
                },
                {
                    "position": 5,
                    "title": "Maps",
                    "link": "https://maps.google.com/maps?q=texas+black+boutiques&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ_AUoBHoECAEQBg"
                }
            ]
        },
        "local_map": {
            "link": "https://www.google.com/search?q=texas+black+boutiques&npsic=0&rflfq=1&rldoc=1&tbm=lcl&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQtgN6BAgYEAE",
            "image": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/7f0a64f6caeee516e357c92e76dc51f4.png"
        },
        "local_results": {
            "more_locations_link": null,
            "places": [
                {
                    "position": 1,
                    "title": "Black Beauty Boutique",
                    "place_id": "8338279335786300996",
                    "lsig": "AB86z5VxCTDYSanB9ZpA-HqE3lBS",
                    "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5VxCTDYSanB9ZpA-HqE3lBS&ludocid=8338279335786300996&q=texas+black+boutiques&tbm=lcl",
                    "type": "Boutique",
                    "phone": "(510) 396-5098",
                    "thumbnail": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/da1b5e0841ef3f1b73dcf33feedc4b33d7b0b7ab5dfb7457567d4431ec2e1fd1c6cebfff3f8da977.jpeg",
                    "gps_coordinates": {}
                },
                {
                    "position": 2,
                    "title": "Creole Couture Boutique",
                    "place_id": "8829782729153591537",
                    "lsig": "AB86z5XO8CARKF014Bw8w52D7vSU",
                    "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5XO8CARKF014Bw8w52D7vSU&ludocid=8829782729153591537&q=texas+black+boutiques&tbm=lcl",
                    "reviews": 6,
                    "type": "Boutique",
                    "hours": "Open 24 hours",
                    "phone": "(469) 580-4672",
                    "thumbnail": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/da1b5e0841ef3f1b73dcf33feedc4b334e8e6d58345e73bd0c6e769a747f7fedeb6666cdd3d90cb8.jpeg",
                    "gps_coordinates": {}
                },
                {
                    "position": 3,
                    "title": "Natural Girl Boutique",
                    "place_id": "17459257851795096840",
                    "lsig": "AB86z5U9L-tkEPoif1leh6epyanL",
                    "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5U9L-tkEPoif1leh6epyanL&ludocid=17459257851795096840&q=texas+black+boutiques&tbm=lcl",
                    "type": "Boutique",
                    "address": "Open ⋅ Closes 5PM",
                    "thumbnail": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/da1b5e0841ef3f1b73dcf33feedc4b331d574f08dedc42b356b7149963ff8231c1ebc3764e1ac0e3.jpeg",
                    "gps_coordinates": {}
                }
            ]
        },
        "organic_results": [
            {
                "position": 1,
                "title": "Black Owned Boutiques in Houston, Texas",
                "link": "https://jennibelleboutique.com/blogs/news/black-owned-boutiques-in-houston-texas-2",
                "displayed_link": "https://jennibelleboutique.com › News",
                "thumbnail": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/7a6ec9341985f5150d9e254b63b348a19967b42ab7a1a3086cb52c513c04576d.png",
                "date": "Apr 12, 2022",
                "snippet": "JenniBelle is one of the best black-owned boutiques in Houston. Whether you're bold, sassy, classy, wild, or stunningly sexy, JenniBelle can ...",
                "snippet_highlighted_words": [
                    "black",
                    "boutiques"
                ],
                "about_this_result": {
                    "source": {
                        "description": "jennibelleboutique.com was first indexed by Google more than 10 years ago",
                        "source_info_link": "https://jennibelleboutique.com/blogs/news/black-owned-boutiques-in-houston-texas-2",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/7a6ec9341985f5150d9e254b63b348a1ada166ad6c007ca407ede685460109e0ad4d099a9b87d989b45a3efd5eb3ebba.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://jennibelleboutique.com/blogs/news/black-owned-boutiques-in-houston-texas-2&tbm=ilp&ilps=ADNMCi3htKkvzI0pxR8CmCodELjYY4Nm8Q",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3htKkvzI0pxR8CmCodELjYY4Nm8Q&q=About+https%3A%2F%2Fjennibelleboutique.com%2Fblogs%2Fnews%2Fblack-owned-boutiques-in-houston-texas-2",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:PGq3BGtxJRkJ:https://jennibelleboutique.com/blogs/news/black-owned-boutiques-in-houston-texas-2&cd=5&hl=en&ct=clnk&gl=us"
            },
            {
                "position": 2,
                "title": "Find your perfect outfit at these Black-owned Houston boutiques",
                "link": "https://www.chron.com/life/style/article/Black-owned-Houston-boutiques-shop-local-womens-15812198.php",
                "displayed_link": "https://www.chron.com › life › style › article › Black-o...",
                "date": "Jan 4, 2021",
                "snippet": "Find your perfect outfit at these Black-owned Houston boutiques ; 1. The Minka Collection ; 2. A Leap of Style ; 3. Lux Life Boutique ; 4. Rocky ...",
                "snippet_highlighted_words": [
                    "Black",
                    "boutiques",
                    "Boutique"
                ],
                "about_this_result": {
                    "source": {
                        "description": "chron.com was first indexed by Google more than 10 years ago",
                        "source_info_link": "https://www.chron.com/life/style/article/Black-owned-Houston-boutiques-shop-local-womens-15812198.php",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/7a6ec9341985f5150d9e254b63b348a13f3659afe447f7501d681cce6715feac699309be03c3539ad18d1e1336945dd2.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.chron.com/life/style/article/Black-owned-Houston-boutiques-shop-local-womens-15812198.php&tbm=ilp&ilps=ADNMCi3RMRMBF066ZF664qFVU2094qXzFg",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3RMRMBF066ZF664qFVU2094qXzFg&q=About+https%3A%2F%2Fwww.chron.com%2Flife%2Fstyle%2Farticle%2FBlack-owned-Houston-boutiques-shop-local-womens-15812198.php",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:5PJQVjCcGzsJ:https://www.chron.com/life/style/article/Black-owned-Houston-boutiques-shop-local-womens-15812198.php&cd=6&hl=en&ct=clnk&gl=us"
            },
            {
                "position": 3,
                "title": "Best 30 Black Clothing Boutiques in Houston, TX with Reviews",
                "link": "https://www.yellowpages.com/houston-tx/black-clothing-boutiques",
                "displayed_link": "https://www.yellowpages.com › Houston, TX",
                "snippet": "Black Clothing Boutiques in Houston, TX ; 1. Happy Clothes Boutique. (713) 523-9299 ; 2. Ego Clothing Boutique · Boutique Items · (713) 733-6000 ; 3. Ego Clothing ...",
                "snippet_highlighted_words": [
                    "Black",
                    "Boutiques",
                    "Boutique",
                    "Boutique",
                    "Boutique"
                ],
                "about_this_result": {
                    "source": {
                        "description": "yellowpages.com was first indexed by Google more than 10 years ago",
                        "source_info_link": "https://www.yellowpages.com/houston-tx/black-clothing-boutiques",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/7a6ec9341985f5150d9e254b63b348a154abcfc1fb8b360161691827c8d3aaabf72dfcd832b25f7ef2f45b157cee30f0.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.yellowpages.com/houston-tx/black-clothing-boutiques&tbm=ilp&ilps=ADNMCi2xa_CAIu59qL_JJRmU7qeilcpLvg",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi2xa_CAIu59qL_JJRmU7qeilcpLvg&q=About+https%3A%2F%2Fwww.yellowpages.com%2Fhouston-tx%2Fblack-clothing-boutiques",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:dcemU8lVgEgJ:https://www.yellowpages.com/houston-tx/black-clothing-boutiques&cd=7&hl=en&ct=clnk&gl=us",
                "related_pages_link": "https://www.google.com/search?q=related:https://www.yellowpages.com/houston-tx/black-clothing-boutiques+texas+black+boutiques",
                "related_results": [
                    {
                        "position": 1,
                        "title": "Best 30 Black Clothing Boutiques in Dallas, TX with Reviews",
                        "link": "https://www.yellowpages.com/dallas-tx/black-clothing-boutiques",
                        "displayed_link": "https://www.yellowpages.com › Dallas, TX",
                        "snippet": "Black Clothing Boutiques in Dallas, TX ; 1. Y & I Clothing Boutique · (214) 522-0775. 3699 Mckinney Ave ; 2. Pieces Clothing Boutique · (214) 265-7802. 6723 Snider ...",
                        "snippet_highlighted_words": [
                            "Black",
                            "Boutiques",
                            "Boutique",
                            "Boutique"
                        ],
                        "about_this_result": {
                            "source": {
                                "description": "yellowpages.com was first indexed by Google more than 10 years ago",
                                "source_info_link": "https://www.yellowpages.com/dallas-tx/black-clothing-boutiques",
                                "security": "secure",
                                "icon": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/7a6ec9341985f5150d9e254b63b348a139150699275d962fec45d3989863dcb8ec9a08a8a2bd0f4469fa2c9c7891669171e8ff9c00327f2db9976268e26ee59c0131038e15ca05c6.png"
                            }
                        },
                        "about_page_link": "https://www.google.com/search?q=About+https://www.yellowpages.com/dallas-tx/black-clothing-boutiques&tbm=ilp&ilps=ADNMCi1C3yWHDVms2KRqVWhVHLVVlHN_7Q",
                        "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi1C3yWHDVms2KRqVWhVHLVVlHN_7Q&q=About+https%3A%2F%2Fwww.yellowpages.com%2Fdallas-tx%2Fblack-clothing-boutiques",
                        "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:LPKiMEURMpgJ:https://www.yellowpages.com/dallas-tx/black-clothing-boutiques&cd=8&hl=en&ct=clnk&gl=us"
                    }
                ]
            },
            {
                "position": 4,
                "title": "One of the hottest black owned clothing stores just opened in ...",
                "link": "https://www.instagram.com/p/CTBI3zOMcr8/?hl=en",
                "displayed_link": "https://www.instagram.com › ...",
                "snippet": "#AD --One of the hottest black owned clothing stores just opened in Dallas Texas offering women's clothing in all sizes ... more. View all 1,657 comments.",
                "snippet_highlighted_words": [
                    "black",
                    "Texas"
                ],
                "about_this_result": {
                    "source": {
                        "description": "Instagram is a photo and video sharing social networking service owned by American company Meta Platforms. The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging. Posts can be shared publicly or with preapproved followers.",
                        "source_info_link": "https://www.instagram.com/p/CTBI3zOMcr8/?hl=en",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/7a6ec9341985f5150d9e254b63b348a19fc3c6e0b620cca6d3a703703153d97af20f2b14768b5790338afa170ae23b30.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.instagram.com/p/CTBI3zOMcr8/&tbm=ilp&ilps=ADNMCi3sLLhLmPj9HdXERMnlNpSpHYMbaA",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3sLLhLmPj9HdXERMnlNpSpHYMbaA&q=About+https%3A%2F%2Fwww.instagram.com%2Fp%2FCTBI3zOMcr8%2F"
            },
            {
                "position": 5,
                "title": "Makie Black Boutique Hip and Trendy Women's Boutique",
                "link": "https://makieblack.com/",
                "displayed_link": "https://makieblack.com",
                "snippet": "One stop shopping destination for the best hip and Trendy Women's Boutique carrying a wide arrange of price points. We have a huge section we have dedicated ...",
                "snippet_highlighted_words": [
                    "shopping",
                    "Boutique"
                ],
                "about_this_result": {
                    "source": {
                        "description": "makieblack.com was first indexed by Google more than 10 years ago",
                        "source_info_link": "https://makieblack.com/",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/7a6ec9341985f5150d9e254b63b348a14ad551546d4b93ed8776942123d48808684e835e16a4c8a1d700bc707ae7474e.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://makieblack.com/&tbm=ilp&ilps=ADNMCi27HR-YhhyrZ19N64Q2QV8pxJrUrA",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi27HR-YhhyrZ19N64Q2QV8pxJrUrA&q=About+https%3A%2F%2Fmakieblack.com%2F",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:30xz6naHgSkJ:https://makieblack.com/&cd=10&hl=en&ct=clnk&gl=us"
            },
            {
                "position": 6,
                "title": "Black Willow Boutique, LLC",
                "link": "https://www.blackwillowboutique.com/",
                "displayed_link": "https://www.blackwillowboutique.com",
                "snippet": "Dedicated to providing feminine, trendy clothes to the women of Prosper and beyond, Black Willow Boutique carries apparel, accessories, footwear, ...",
                "snippet_highlighted_words": [
                    "Black",
                    "Boutique"
                ],
                "about_this_result": {
                    "source": {
                        "description": "blackwillowboutique.com was first indexed by Google in August 2017",
                        "source_info_link": "https://www.blackwillowboutique.com/",
                        "security": "secure"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.blackwillowboutique.com/&tbm=ilp&ilps=ADNMCi1he-Z8IGqoyIB6pGkyzykIVRDPkQ",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi1he-Z8IGqoyIB6pGkyzykIVRDPkQ&q=About+https%3A%2F%2Fwww.blackwillowboutique.com%2F",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:8QatQssiJkoJ:https://www.blackwillowboutique.com/&cd=11&hl=en&ct=clnk&gl=us"
            },
            {
                "position": 7,
                "title": "Top 10 Best African Clothing Stores in Dallas, TX - Yelp",
                "link": "https://m.yelp.com/search?find_desc=african+clothing+stores&find_loc=Dallas%2C+TX",
                "displayed_link": "https://m.yelp.com › ... › African clothing stores",
                "snippet": "Best african clothing stores near me in Dallas, Texas ... \"I was the only black customer shopping and loss prevention literally stopped what they were doing ...",
                "snippet_highlighted_words": [
                    "Texas",
                    "black",
                    "shopping"
                ],
                "about_this_result": {
                    "source": {
                        "description": "Yelp Inc. is an American company that develops the Yelp.com website and the Yelp mobile app, which publish crowd-sourced reviews about businesses. It also operates Yelp Guest Manager, a table reservation service. It is headquartered in San Francisco, California.",
                        "source_info_link": "https://m.yelp.com/search?find_desc=african+clothing+stores&find_loc=Dallas%2C+TX",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/7a6ec9341985f5150d9e254b63b348a14ad54c97c4d9e9a20bafa767b52c710c3b280f22d5ab5fae0169769025259dbc.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://m.yelp.com/search?find_desc%3Dafrican%2Bclothing%2Bstores%26find_loc%3DDallas%252C%2BTX&tbm=ilp&ilps=ADNMCi3nV8dyRJOHY5r6HEaR8x7n0LtvZA",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3nV8dyRJOHY5r6HEaR8x7n0LtvZA&q=About+https%3A%2F%2Fm.yelp.com%2Fsearch%3Ffind_desc%3Dafrican%2Bclothing%2Bstores%26find_loc%3DDallas%252C%2BTX",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:WSaI0bVEQusJ:https://m.yelp.com/search%3Ffind_desc%3Dafrican%2Bclothing%2Bstores%26find_loc%3DDallas%252C%2BTX&cd=12&hl=en&ct=clnk&gl=us"
            },
            {
                "position": 8,
                "title": "15 Dallas Black-Owned Businesses To Support This Black ...",
                "link": "https://secretdallas.com/dallas-black-owned-businesses/",
                "displayed_link": "https://secretdallas.com › Things To Do",
                "date": "Nov 27, 2020",
                "snippet": "What: Unique hand-made accessories from designers around the world. Where: 104 Lion St, DeSoto, TX 75115. 2. Brieslys Boutique.",
                "snippet_highlighted_words": [
                    "Boutique"
                ],
                "about_this_result": {
                    "source": {
                        "description": "secretdallas.com was first indexed by Google more than 10 years ago",
                        "source_info_link": "https://secretdallas.com/dallas-black-owned-businesses/",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b894da7d171a8a6f7210f1/images/7a6ec9341985f5150d9e254b63b348a137087b2ae2d4fe8f0eaf494fc2aca113f370180adcb7cd2dad9ccbbf4bd7b925.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://secretdallas.com/dallas-black-owned-businesses/&tbm=ilp&ilps=ADNMCi1i6TQd40wtiHOJh6Z8jGSQNxpmvg",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi1i6TQd40wtiHOJh6Z8jGSQNxpmvg&q=About+https%3A%2F%2Fsecretdallas.com%2Fdallas-black-owned-businesses%2F",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:2xjyiNaWOkkJ:https://secretdallas.com/dallas-black-owned-businesses/&cd=13&hl=en&ct=clnk&gl=us"
            }
        ],
        "related_searches": [
            {
                "query": "black-owned boutiques",
                "link": "https://www.google.com/search?q=Black-owned+boutiques&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ1QJ6BAgnEAE"
            },
            {
                "query": "black-owned boutiques in texas",
                "link": "https://www.google.com/search?q=black-owned+boutiques+in+texas&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ1QJ6BAgmEAE"
            },
            {
                "query": "black-owned boutiques online",
                "link": "https://www.google.com/search?q=Black-owned+boutiques+online&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ1QJ6BAglEAE"
            },
            {
                "query": "black girl shopping websites",
                "link": "https://www.google.com/search?q=Black+girl+shopping+websites&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ1QJ6BAgkEAE"
            },
            {
                "query": "black boutiques near me",
                "link": "https://www.google.com/search?q=Black+boutiques+near+me&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ1QJ6BAgjEAE"
            },
            {
                "query": "black-owned online clothing stores affordable",
                "link": "https://www.google.com/search?q=black-owned+online+clothing+stores+affordable&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ1QJ6BAgiEAE"
            },
            {
                "query": "black online shopping",
                "link": "https://www.google.com/search?q=Black+online+shopping&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ1QJ6BAghEAE"
            },
            {
                "query": "houston boutiques",
                "link": "https://www.google.com/search?q=Houston+boutiques&sa=X&ved=2ahUKEwiWmefq87P8AhXFFlkFHZldAssQ1QJ6BAggEAE"
            }
        ],
        "pagination": {
            "current": 1,
            "next": "https://www.google.com/search?q=texas+black+boutiques&oq=texas+black+boutiques&start=10&sourceid=chrome&ie=UTF-8",
            "other_pages": {
                "2": "https://www.google.com/search?q=texas+black+boutiques&oq=texas+black+boutiques&start=10&sourceid=chrome&ie=UTF-8",
                "3": "https://www.google.com/search?q=texas+black+boutiques&oq=texas+black+boutiques&start=20&sourceid=chrome&ie=UTF-8",
                "4": "https://www.google.com/search?q=texas+black+boutiques&oq=texas+black+boutiques&start=30&sourceid=chrome&ie=UTF-8",
                "5": "https://www.google.com/search?q=texas+black+boutiques&oq=texas+black+boutiques&start=40&sourceid=chrome&ie=UTF-8"
            }
        },
        "serpapi_pagination": {
            "current": 1,
            "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black+boutiques&start=10",
            "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black+boutiques&start=10",
            "other_pages": {
                "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black+boutiques&start=10",
                "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black+boutiques&start=20",
                "4": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black+boutiques&start=30",
                "5": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black+boutiques&start=40"
            }
        }
    },
      {
      "search_metadata": {
          "id": "63b895272e7d6bc357a22bc2",
          "status": "Success",
          "json_endpoint": "https://serpapi.com/searches/a600074e24a11cfa/63b895272e7d6bc357a22bc2.json",
          "created_at": "2023-01-06 21:39:51 UTC",
          "processed_at": "2023-01-06 21:39:51 UTC",
          "google_url": "https://www.google.com/search?q=texas+latin+boutiques&oq=texas+latin+boutiques&sourceid=chrome&ie=UTF-8",
          "raw_html_file": "https://serpapi.com/searches/a600074e24a11cfa/63b895272e7d6bc357a22bc2.html",
          "total_time_taken": 3.68
      },
      "search_parameters": {
          "engine": "google",
          "q": "texas latin boutiques",
          "google_domain": "google.com",
          "device": "desktop"
      },
      "search_information": {
          "organic_results_state": "Showing results for exact spelling despite spelling suggestion",
          "query_displayed": "texas latin boutiques",
          "total_results": 6400000,
          "time_taken_displayed": 0.64,
          "spelling_fix": "texas latina boutiques",
          "menu_items": [
              {
                  "position": 1,
                  "title": "All"
              },
              {
                  "position": 2,
                  "title": "texas latina boutiques",
                  "link": "https://www.google.com/search?q=texas+latina+boutiques&spell=1&sa=X&ved=2ahUKEwi16KeQ9LP8AhWONEQIHVsVDXcQBSgAegQIERAB"
              }
          ]
      },
      "ads": [
          {
              "position": 1,
              "block_position": "bottom",
              "title": "Kc Luxe Life Boutique - Best Boutique New Braunfels",
              "link": "https://shopkcluxe.com/",
              "displayed_link": "https://www.shopkcluxe.com/",
              "tracking_link": "https://www.google.com/aclk?sa=l&ai=DChcSEwjWy7CQ9LP8AhUxL60GHdq4DHMYABABGgJwdg&ae=2&sig=AOD64_2zg1BMurLsF1J3N3OAc9uyH07JxA&q&adurl",
              "extensions": [
                  "‎Shop New Arrivals Dresses · ‎Hottest Dresses · ‎Shop all Shimmer & Shine"
              ],
              "description": "Come Shop the Hottest New Fashion in New Braunfels. Hot New Boutique in New Braunfels. Holiday Jumpsuits. Fun Graphic Tees. Mini, Midi, Maxi Dresses. Party Dresses.",
              "sitelinks": [
                  {
                      "title": "Shop New Arrivals Dresses",
                      "link": "https://shopkcluxe.com/product-category/clothing/dresses/"
                  },
                  {
                      "title": "Hottest Dresses",
                      "link": "https://shopkcluxe.com/product-category/dresses/"
                  },
                  {
                      "title": "Shop all Shimmer & Shine",
                      "link": "https://shopkcluxe.com/product-category/sparkle-shine"
                  }
              ]
          }
      ],
      "shopping_results": [
          {
              "position": 1,
              "block_position": "right",
              "title": "Dress Boutique - Dreamy Off-Shoulder Mini Dress White",
              "price": "$79.99",
              "extracted_price": 79.99,
              "link": "https://www.selfieleslie.com/products/dreamy-off-shoulder-mini-dress-white?variant=39856609558694&currency=USD",
              "source": "Selfie Leslie",
              "rating": 4.6,
              "reviews": 75,
              "thumbnail": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/7bcb0f10dbf0615db78c20549f7655726180ab328d902d3fa555bafb48f1b011.webp"
          },
          {
              "position": 2,
              "block_position": "right",
              "title": "Pray Like Hell Charblack Tee by Texas True Threads M at horse creek boutique",
              "price": "$26.50",
              "extracted_price": 26.5,
              "link": "https://horsecreekboutique.com/products/pray-like-hell-charblack-tee-by-texas-true-threads?variant=40970064691382&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic",
              "source": "Horse Creek Boutique",
              "thumbnail": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/7bcb0f10dbf0615db78c20549f7655720ed97ec1de497e9d9acab6bbdf261fa0.webp"
          },
          {
              "position": 3,
              "block_position": "right",
              "title": "Aztec Cross by Texas True Threads Boutique - graphic tee - Burnt Orange / L at blessed buffalo boutique",
              "price": "$24.00",
              "extracted_price": 24.0,
              "link": "https://blessedbuffalo.com/products/aztec-cross-by-texas-true-threads?variant=37964493390020&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic",
              "source": "Blessed Buffalo Boutique",
              "thumbnail": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/7bcb0f10dbf0615db78c20549f7655721cd7fcf892fe6316da1ef259c7df0cdd.webp"
          }
      ],
      "local_map": {
          "link": "https://www.google.com/search?q=texas+latin+boutiques&npsic=0&rflfq=1&rldoc=1&rllag=29806471,-95360229,8509&tbm=lcl&sa=X&ved=2ahUKEwi16KeQ9LP8AhWONEQIHVsVDXcQtgN6BAgjEAE",
          "image": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/b0cc1a9f578e67a83a76163ad044d713.png",
          "gps_coordinates": {
              "latitude": 29.806471,
              "longitude": -95.360229,
              "altitude": 8509
          }
      },
      "local_results": {
          "more_locations_link": null,
          "places": [
              {
                  "position": 1,
                  "title": "Variedades latinoamerica",
                  "place_id": "18363957981935742651",
                  "lsig": "AB86z5XACZoq6RgqcA2AV47VnhBk",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5XACZoq6RgqcA2AV47VnhBk&ludocid=18363957981935742651&q=texas+latin+boutiques&tbm=lcl",
                  "description": "In-store shopping·In-store pickup",
                  "reviews": 13,
                  "type": "Boutique",
                  "hours": "Open ⋅ Closes 8PM",
                  "address": "Houston, TX · In Mi pueblo flea market",
                  "phone": "(979) 922-0160",
                  "thumbnail": "https://lh5.googleusercontent.com/p/AF1QipNMFwxJADpKDvYBcqnb7PavqO3H2caxpg-VNJBu=w92-h92-n-k-no",
                  "gps_coordinates": {
                      "latitude": 29.878632,
                      "longitude": -95.38977
                  }
              },
              {
                  "position": 2,
                  "title": "Soni Trends Houston Latina Shop",
                  "place_id": "3606726427898550927",
                  "lsig": "AB86z5V6KQ1C-m6DFyBLSw8am8eQ",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5V6KQ1C-m6DFyBLSw8am8eQ&ludocid=3606726427898550927&q=texas+latin+boutiques&tbm=lcl",
                  "description": "In-store shopping",
                  "reviews": 9,
                  "type": "Boutique",
                  "hours": "Closes soon ⋅ 4PM",
                  "address": "Houston, TX",
                  "thumbnail": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/9089e9e7ef92f7b6de794ac2169a139d52e824f5719697571ede5ac1d2c64e9647e6243dc637b202.jpeg",
                  "gps_coordinates": {
                      "latitude": 29.734377,
                      "longitude": -95.330605
                  }
              },
              {
                  "position": 3,
                  "title": "Latín Fashion Empire",
                  "place_id": "2396994890022612061",
                  "lsig": "AB86z5W22sUoi9KnLljYf-_3FJMF",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5W22sUoi9KnLljYf-_3FJMF&ludocid=2396994890022612061&q=texas+latin+boutiques&tbm=lcl",
                  "description": "Delivery",
                  "reviews": 6,
                  "type": "Fashion accessories store",
                  "hours": "Open ⋅ Closes 6PM",
                  "phone": "(786) 559-0409",
                  "thumbnail": "https://lh5.googleusercontent.com/p/AF1QipNEPC_sNTB2HdBO4kk1GVSWD1AJfG6tR4pd_9eM=w92-h92-n-k-no",
                  "gps_coordinates": {}
              }
          ]
      },
      "organic_results": [
          {
              "position": 1,
              "title": "14 Latina-Powered Style Brands to Shop Across Texas",
              "link": "https://www.papercitymag.com/fashion/shopping/latina-owned-style-brands-texas/",
              "displayed_link": "https://www.papercitymag.com › fashion › shopping › l...",
              "date": "Sep 16, 2022",
              "snippet": "Ahead discover some of the best, emergi Latina-owned brands, shops, and lifestyle companies to shop across Texas.",
              "snippet_highlighted_words": [
                  "Latina",
                  "shops",
                  "shop",
                  "Texas"
              ],
              "about_this_result": {
                  "source": {
                      "description": "papercitymag.com was first indexed by Google more than 10 years ago",
                      "source_info_link": "https://www.papercitymag.com/fashion/shopping/latina-owned-style-brands-texas/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/4b0feb8d70415f3d8831e829ea5ebd4c497e2620b57e1677a00d6f1d8f95e1480fb410da88a99058c9393af05e9e7e6b.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.papercitymag.com/fashion/shopping/latina-owned-style-brands-texas/&tbm=ilp&ilps=ADNMCi2FDoFR7asM9LrwCepyH4qlAwTKNg",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi2FDoFR7asM9LrwCepyH4qlAwTKNg&q=About+https%3A%2F%2Fwww.papercitymag.com%2Ffashion%2Fshopping%2Flatina-owned-style-brands-texas%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:PfmWQg3ocw0J:https://www.papercitymag.com/fashion/shopping/latina-owned-style-brands-texas/&cd=5&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 2,
              "title": "Houston Latina Boutique (@silhouette_apparel_) ... - Instagram",
              "link": "https://www.instagram.com/silhouette_apparel_/?hl=en",
              "displayed_link": "https://www.instagram.com › silhouette_apparel_",
              "snippet": "Spanglish Boutique ✨Empowering your style one #OOTD at a time✨ Latina owned @the_mysticlife Online shopping & Local Pick-ups · 782 posts · 3,019 ...",
              "snippet_highlighted_words": [
                  "Boutique",
                  "Latina",
                  "shopping"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Instagram is a photo and video sharing social networking service owned by American company Meta Platforms. The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging. Posts can be shared publicly or with preapproved followers.",
                      "source_info_link": "https://www.instagram.com/silhouette_apparel_/?hl=en",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/4b0feb8d70415f3d8831e829ea5ebd4cdfc3561518efc289e9b6052c5e0f56bca8109df1949dd5f4bdaf3b02506a63e0.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.instagram.com/silhouette_apparel_/&tbm=ilp&ilps=ADNMCi10g_K8beiVyNREEIKD2u79dskq0w",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi10g_K8beiVyNREEIKD2u79dskq0w&q=About+https%3A%2F%2Fwww.instagram.com%2Fsilhouette_apparel_%2F"
          },
          {
              "position": 3,
              "title": "46 Texas Latinx-Owned Businesses You'll Fall in Love With",
              "link": "https://mycurlyadventures.com/2019/09/30/texas-latinx-businesses/",
              "displayed_link": "https://mycurlyadventures.com › Blog",
              "date": "Sep 30, 2019",
              "snippet": "Autumn Moon · Bizzz Designs · Cadena Collective · CHIA Colombian Handcrafted · Jade and Yissel Boutique · La Casita de Artesanias · Nativa · Pink Shell.",
              "snippet_highlighted_words": [
                  "Boutique"
              ],
              "about_this_result": {
                  "source": {
                      "description": "mycurlyadventures.com was first indexed by Google more than 10 years ago",
                      "source_info_link": "https://mycurlyadventures.com/2019/09/30/texas-latinx-businesses/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/4b0feb8d70415f3d8831e829ea5ebd4c0fa64ceae3c73aa084368e7aa6ecf17b9c9013db4e395735a71decf50b690c06.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://mycurlyadventures.com/2019/09/30/texas-latinx-businesses/&tbm=ilp&ilps=ADNMCi3-dPNq1b1EGYJmUVu2YKY9vX77_A",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3-dPNq1b1EGYJmUVu2YKY9vX77_A&q=About+https%3A%2F%2Fmycurlyadventures.com%2F2019%2F09%2F30%2Ftexas-latinx-businesses%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:lUbtvs0Q3TMJ:https://mycurlyadventures.com/2019/09/30/texas-latinx-businesses/&cd=7&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 4,
              "title": "Latin-Owned Brands & Retailers in Austin",
              "link": "https://www.austintexas.org/austin-insider-blog/post/latino-owned-brands-retailers/",
              "displayed_link": "https://www.austintexas.org › austin-insider-blog › post",
              "date": "Sep 22, 2022",
              "snippet": "Latin-Owned Brands & Retailers in Austin · Casero · Limbo Jewelry & Triple Z Threadz · Mi Tradición Bakery · Mom & Pops · Platter ATX · Revival ...",
              "snippet_highlighted_words": [
                  "Latin"
              ],
              "about_this_result": {
                  "source": {
                      "description": "austintexas.org was first indexed by Google more than 10 years ago",
                      "source_info_link": "https://www.austintexas.org/austin-insider-blog/post/latino-owned-brands-retailers/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/4b0feb8d70415f3d8831e829ea5ebd4c71e84e5d7e1450dc76c24f0ba94b103a3fc097ebff33b8942d5337844bffdc77.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.austintexas.org/austin-insider-blog/post/latino-owned-brands-retailers/&tbm=ilp&ilps=ADNMCi24EIA1ovNXJvTNSqwQjYtCgC0SYA",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi24EIA1ovNXJvTNSqwQjYtCgC0SYA&q=About+https%3A%2F%2Fwww.austintexas.org%2Faustin-insider-blog%2Fpost%2Flatino-owned-brands-retailers%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:nuo9da1LVnwJ:https://www.austintexas.org/austin-insider-blog/post/latino-owned-brands-retailers/&cd=8&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 5,
              "title": "17 Texas Latino-Owned Businesses to Shop this Holiday",
              "link": "http://www.moderntejana.com/17-texas-latino-owned-businesses-shop-holiday/",
              "displayed_link": "http://www.moderntejana.com › 17-texas-latino-owned-...",
              "date": "Nov 29, 2016",
              "snippet": "Clothes, home décor, jewelry, textiles, art. Texas Latino business owners do it all, and with a special twist that is so uniquely Tejas.",
              "snippet_highlighted_words": [
                  "Texas Latino"
              ],
              "about_this_result": {
                  "source": {
                      "description": "moderntejana.com was first indexed by Google in July 2014",
                      "source_info_link": "http://www.moderntejana.com/17-texas-latino-owned-businesses-shop-holiday/",
                      "security": "not secure",
                      "icon": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/4b0feb8d70415f3d8831e829ea5ebd4c5ea265a6537fdac92b85cf06caf84a682a46a4a5700fb26d64b0f6c26dbe2452.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+http://www.moderntejana.com/17-texas-latino-owned-businesses-shop-holiday/&tbm=ilp&ilps=ADNMCi1NlXcZjLZ1SvX_QRuO6IK9bfageA",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi1NlXcZjLZ1SvX_QRuO6IK9bfageA&q=About+http%3A%2F%2Fwww.moderntejana.com%2F17-texas-latino-owned-businesses-shop-holiday%2F",
              "cached_page_link": "http://webcache.googleusercontent.com/search?q=cache:5sxdKXGsm-kJ:www.moderntejana.com/17-texas-latino-owned-businesses-shop-holiday/&cd=9&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 6,
              "title": "South Texas Latina-owned business makes national debut at ...",
              "link": "https://www.ksat.com/news/local/2022/09/12/south-texas-latina-owned-business-makes-national-debut-at-target-for-hispanic-heritage-month/",
              "displayed_link": "https://www.ksat.com › news › local › 2022/09/12 › so...",
              "date": "Sep 12, 2022",
              "snippet": "As of Sunday, September 4, JZD's products can be found on the retailer's website and in more than 1.500 Target stores nationwide. The exclusive ...",
              "snippet_highlighted_words": [
                  "stores"
              ],
              "about_this_result": {
                  "source": {
                      "description": "KSAT-TV is a television station in San Antonio, Texas, United States, affiliated with ABC. Owned by Graham Media Group, the station maintains studios on North St. Mary's Street on the northern edge of downtown, and its transmitter is located off Route 181 in northwest Wilson County.",
                      "source_info_link": "https://www.ksat.com/news/local/2022/09/12/south-texas-latina-owned-business-makes-national-debut-at-target-for-hispanic-heritage-month/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/4b0feb8d70415f3d8831e829ea5ebd4cf8105b13dead747c826f868e2132a9c0295b50323bacfffbbd0750d4e7b76de9.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.ksat.com/news/local/2022/09/12/south-texas-latina-owned-business-makes-national-debut-at-target-for-hispanic-heritage-month/&tbm=ilp&ilps=ADNMCi2H-J0CYOXbA4w4thlep8nlnl2Beg",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi2H-J0CYOXbA4w4thlep8nlnl2Beg&q=About+https%3A%2F%2Fwww.ksat.com%2Fnews%2Flocal%2F2022%2F09%2F12%2Fsouth-texas-latina-owned-business-makes-national-debut-at-target-for-hispanic-heritage-month%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:x26CMVkYIJAJ:https://www.ksat.com/news/local/2022/09/12/south-texas-latina-owned-business-makes-national-debut-at-target-for-hispanic-heritage-month/&cd=10&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 7,
              "title": "Best latin grocery store near me in Dallas, TX - Yelp",
              "link": "https://www.yelp.com/search?find_desc=latin+grocery+store&find_loc=Dallas%2C+TX",
              "displayed_link": "https://www.yelp.com › Dallas, TX › Food",
              "snippet": "Best latin grocery store near me in Dallas, TX · All \"latin grocery store\" results in Dallas, TX. Showing 1-46 of 46 · Brazil Latino Market · El Rancho · El Rancho.",
              "snippet_highlighted_words": [
                  "latin",
                  "store",
                  "latin",
                  "store",
                  "Latino"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Yelp Inc. is an American company that develops the Yelp.com website and the Yelp mobile app, which publish crowd-sourced reviews about businesses. It also operates Yelp Guest Manager, a table reservation service. It is headquartered in San Francisco, California.",
                      "source_info_link": "https://www.yelp.com/search?find_desc=latin+grocery+store&find_loc=Dallas%2C+TX",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/4b0feb8d70415f3d8831e829ea5ebd4c3e53787079d894b95b83de7e02542f5bc2c0a9eac623ce8a590b66b832e907fe.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://m.yelp.com/search?find_desc%3Dlatin%2Bgrocery%2Bstore%26find_loc%3DDallas%252C%2BTX&tbm=ilp&ilps=ADNMCi30mUCvGbsxnCXmjnSDUqP4qTB3PA",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi30mUCvGbsxnCXmjnSDUqP4qTB3PA&q=About+https%3A%2F%2Fm.yelp.com%2Fsearch%3Ffind_desc%3Dlatin%2Bgrocery%2Bstore%26find_loc%3DDallas%252C%2BTX",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:WgY_EQLR-DkJ:https://www.yelp.com/search%3Ffind_desc%3Dlatin%2Bgrocery%2Bstore%26find_loc%3DDallas%252C%2BTX&cd=11&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 8,
              "title": "Power Latina Shop | Houston TX - Facebook",
              "link": "https://www.facebook.com/powerlatina/",
              "displayed_link": "https://www.facebook.com › ... › Power Latina Shop",
              "snippet": "Power Latina Shop, Houston, Texas. 345 likes. Inspiring and empowering Latinas. Because we are more than #LatinaSexy.",
              "snippet_highlighted_words": [
                  "Latina Shop",
                  "Texas"
              ],
              "rich_snippet": {
                  "top": {
                      "detected_extensions": {
                          "rating": 4,
                          "votes": 10
                      },
                      "extensions": [
                          "Rating: 4",
                          "‎10 votes"
                      ]
                  }
              },
              "about_this_result": {
                  "source": {
                      "description": "Facebook is an online social media and social networking service owned by American company Meta Platforms.",
                      "source_info_link": "https://www.facebook.com/powerlatina/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/4b0feb8d70415f3d8831e829ea5ebd4cf7793b055bc94b9e5ee94898f303d72a4c174d91d143bb3a62c6b1c76c7c2c7c.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.facebook.com/powerlatina/&tbm=ilp&ilps=ADNMCi2U1EOWg-Rw8Du0HJ2DTUSBAwf7LA",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi2U1EOWg-Rw8Du0HJ2DTUSBAwf7LA&q=About+https%3A%2F%2Fwww.facebook.com%2Fpowerlatina%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:MayoPUgpmkAJ:https://www.facebook.com/powerlatina/&cd=12&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 9,
              "title": "South Texas Latina duo turn small business clothing line into ...",
              "link": "https://cbsaustin.com/news/local/south-texas-latina-duo-turn-small-business-clothing-line-into-national-debut-at-target-brownsville-shirts-fashion-retailer-celebrities-power",
              "displayed_link": "https://cbsaustin.com › news › local › south-texas-latina...",
              "date": "Sep 13, 2022",
              "snippet": "BROWNSVILLE, Texas - Latina Power is heading for Target. ... walked away selecting 13 from the new collection for their store shelves.",
              "snippet_highlighted_words": [
                  "Texas",
                  "Latina",
                  "store"
              ],
              "about_this_result": {
                  "source": {
                      "description": "KEYE-TV is a television station in Austin, Texas, United States, affiliated with CBS and Telemundo. Owned by Sinclair Broadcast Group, the station maintains studios on Metric Boulevard in North Austin and a transmitter on Waymaker Way on the city's west side.",
                      "source_info_link": "https://cbsaustin.com/news/local/south-texas-latina-duo-turn-small-business-clothing-line-into-national-debut-at-target-brownsville-shirts-fashion-retailer-celebrities-power",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895272e7d6bc357a22bc2/images/4b0feb8d70415f3d8831e829ea5ebd4cc58bac70bbbae5ba26c2c7c4009c039555cf6775c6a8a97fa622a266f570c462.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://cbsaustin.com/news/local/south-texas-latina-duo-turn-small-business-clothing-line-into-national-debut-at-target-brownsville-shirts-fashion-retailer-celebrities-power&tbm=ilp&ilps=ADNMCi2Y4h2buX-g2kvOSOGKhunLLuywvA",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi2Y4h2buX-g2kvOSOGKhunLLuywvA&q=About+https%3A%2F%2Fcbsaustin.com%2Fnews%2Flocal%2Fsouth-texas-latina-duo-turn-small-business-clothing-line-into-national-debut-at-target-brownsville-shirts-fashion-retailer-celebrities-power",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:Y491eK0_uisJ:https://cbsaustin.com/news/local/south-texas-latina-duo-turn-small-business-clothing-line-into-national-debut-at-target-brownsville-shirts-fashion-retailer-celebrities-power&cd=13&hl=en&ct=clnk&gl=us"
          }
      ],
      "related_searches": [
          {
              "query": "texas boutiques",
              "link": "https://www.google.com/search?q=Texas+boutiques&sa=X&ved=2ahUKEwi16KeQ9LP8AhWONEQIHVsVDXcQ1QJ6BAg5EAE"
          },
          {
              "query": "texas boutiques online",
              "link": "https://www.google.com/search?q=Texas+boutiques+online&sa=X&ved=2ahUKEwi16KeQ9LP8AhWONEQIHVsVDXcQ1QJ6BAg6EAE"
          },
          {
              "query": "latino-owned businesses",
              "link": "https://www.google.com/search?q=Latino-owned+businesses&sa=X&ved=2ahUKEwi16KeQ9LP8AhWONEQIHVsVDXcQ1QJ6BAg8EAE"
          },
          {
              "query": "black owned boutiques in texas",
              "link": "https://www.google.com/search?q=Black+owned+boutiques+in+texas&sa=X&ved=2ahUKEwi16KeQ9LP8AhWONEQIHVsVDXcQ1QJ6BAg1EAE"
          },
          {
              "query": "boutiques in dallas tx",
              "link": "https://www.google.com/search?q=Boutiques+in+dallas+tx&sa=X&ved=2ahUKEwi16KeQ9LP8AhWONEQIHVsVDXcQ1QJ6BAg2EAE"
          },
          {
              "query": "black owned boutiques in dallas tx",
              "link": "https://www.google.com/search?q=Black+owned+boutiques+in+dallas+tx&sa=X&ved=2ahUKEwi16KeQ9LP8AhWONEQIHVsVDXcQ1QJ6BAg7EAE"
          },
          {
              "query": "mexican boutiques in houston",
              "link": "https://www.google.com/search?q=Mexican+boutiques+in+houston&sa=X&ved=2ahUKEwi16KeQ9LP8AhWONEQIHVsVDXcQ1QJ6BAg9EAE"
          },
          {
              "query": "women's boutiques near me",
              "link": "https://www.google.com/search?q=Women%27s+boutiques+near+me&sa=X&ved=2ahUKEwi16KeQ9LP8AhWONEQIHVsVDXcQ1QJ6BAg4EAE"
          }
      ],
      "pagination": {
          "current": 1,
          "next": "https://www.google.com/search?q=texas+latin+boutiques&oq=texas+latin+boutiques&start=10&sourceid=chrome&ie=UTF-8",
          "other_pages": {
              "2": "https://www.google.com/search?q=texas+latin+boutiques&oq=texas+latin+boutiques&start=10&sourceid=chrome&ie=UTF-8",
              "3": "https://www.google.com/search?q=texas+latin+boutiques&oq=texas+latin+boutiques&start=20&sourceid=chrome&ie=UTF-8",
              "4": "https://www.google.com/search?q=texas+latin+boutiques&oq=texas+latin+boutiques&start=30&sourceid=chrome&ie=UTF-8",
              "5": "https://www.google.com/search?q=texas+latin+boutiques&oq=texas+latin+boutiques&start=40&sourceid=chrome&ie=UTF-8"
          }
      },
      "serpapi_pagination": {
          "current": 1,
          "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+boutiques&start=10",
          "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+boutiques&start=10",
          "other_pages": {
              "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+boutiques&start=10",
              "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+boutiques&start=20",
              "4": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+boutiques&start=30",
              "5": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+boutiques&start=40"
          }
      }
    },
    {
      "search_metadata": {
          "id": "63b89555af5af1cf6925f4a4",
          "status": "Success",
          "json_endpoint": "https://serpapi.com/searches/b054ce1f60da22cb/63b89555af5af1cf6925f4a4.json",
          "created_at": "2023-01-06 21:40:37 UTC",
          "processed_at": "2023-01-06 21:40:37 UTC",
          "google_url": "https://www.google.com/search?q=texas+indigenous+boutiques&oq=texas+indigenous+boutiques&sourceid=chrome&ie=UTF-8",
          "raw_html_file": "https://serpapi.com/searches/b054ce1f60da22cb/63b89555af5af1cf6925f4a4.html",
          "total_time_taken": 0.93
      },
      "search_parameters": {
          "engine": "google",
          "q": "texas indigenous boutiques",
          "google_domain": "google.com",
          "device": "desktop"
      },
      "search_information": {
          "organic_results_state": "Results for exact spelling",
          "query_displayed": "texas indigenous boutiques",
          "total_results": 1410000,
          "time_taken_displayed": 0.48,
          "menu_items": [
              {
                  "position": 1,
                  "title": "All"
              },
              {
                  "position": 2,
                  "title": "Images",
                  "link": "https://www.google.com/search?q=texas+indigenous+boutiques&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj13ral9LP8AhWGFlkFHWWkD4cQ_AUoAXoECAEQAw",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+boutiques&tbm=isch"
              },
              {
                  "position": 3,
                  "title": "News",
                  "link": "https://www.google.com/search?q=texas+indigenous+boutiques&source=lnms&tbm=nws&sa=X&ved=2ahUKEwj13ral9LP8AhWGFlkFHWWkD4cQ_AUoAnoECAEQBA",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+boutiques&tbm=nws"
              },
              {
                  "position": 4,
                  "title": "Shopping",
                  "link": "https://www.google.com/search?q=texas+indigenous+boutiques&source=lnms&tbm=shop&sa=X&ved=2ahUKEwj13ral9LP8AhWGFlkFHWWkD4cQ_AUoA3oECAEQBQ",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+boutiques&tbm=shop"
              },
              {
                  "position": 5,
                  "title": "Maps",
                  "link": "https://maps.google.com/maps?q=texas+indigenous+boutiques&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj13ral9LP8AhWGFlkFHWWkD4cQ_AUoBHoECAEQBg"
              }
          ]
      },
      "local_map": {
          "link": "https://www.google.com/search?q=texas+indigenous+boutiques&npsic=0&rflfq=1&rldoc=1&rllag=31789475,-99983475,267331&tbm=lcl&sa=X&ved=2ahUKEwj13ral9LP8AhWGFlkFHWWkD4cQtgN6BAgYEAE",
          "image": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/f37b449609a88c4da7644e9af9eb138f.png",
          "gps_coordinates": {
              "latitude": 31.789475,
              "longitude": -99.983475,
              "altitude": 267331
          }
      },
      "local_results": {
          "more_locations_link": null,
          "places": [
              {
                  "position": 1,
                  "title": "Indigenous",
                  "place_id": "13926756584554128706",
                  "lsig": "AB86z5Vq-WXtjBtuyJNMjf14UEL4",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5Vq-WXtjBtuyJNMjf14UEL4&ludocid=13926756584554128706&q=texas+indigenous+boutiques&tbm=lcl",
                  "description": "In-store shopping",
                  "reviews": 8,
                  "type": "Women's clothing store",
                  "hours": "Open ⋅ Closes 7PM",
                  "address": "Lubbock, TX",
                  "phone": "(806) 749-0101",
                  "thumbnail": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/ce7d6d43b02c118f96d54dbdc2d3f489499b537c8a519e54b43a5c7e7835d42e0c30b97430aeacd0.png",
                  "gps_coordinates": {
                      "latitude": 33.583168,
                      "longitude": -101.87041
                  }
              },
              {
                  "position": 2,
                  "title": "Native Texas Boutique",
                  "place_id": "15481968521778680549",
                  "lsig": "AB86z5XrYqnsx0wKVsp-hU4ZwEe2",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5XrYqnsx0wKVsp-hU4ZwEe2&ludocid=15481968521778680549&q=texas+indigenous+boutiques&tbm=lcl",
                  "description": "In-store shopping",
                  "reviews": 1,
                  "type": "Home goods store",
                  "hours": "Open ⋅ Closes 5PM",
                  "address": "Wimberley, TX",
                  "thumbnail": "https://lh5.googleusercontent.com/p/AF1QipO75VtWAKwA0ExIM0ySdLC6ti5g876mLKecoV1B=w92-h92-n-k-no",
                  "gps_coordinates": {
                      "latitude": 29.995779,
                      "longitude": -98.09669
                  }
              },
              {
                  "position": 3,
                  "title": "Native",
                  "place_id": "8895501161656664058",
                  "lsig": "AB86z5UK9R9dHpV5Acfc5IwSV9La",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5UK9R9dHpV5Acfc5IwSV9La&ludocid=8895501161656664058&q=texas+indigenous+boutiques&tbm=lcl",
                  "description": "In-store shopping",
                  "reviews": 8,
                  "type": "Clothing store",
                  "hours": "Open ⋅ Closes 6:30PM",
                  "address": "Fredericksburg, TX · Near the National Museum of the Pacific War",
                  "phone": "(830) 997-2011",
                  "thumbnail": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/ce7d6d43b02c118f96d54dbdc2d3f4896f2fe4613767bfbd84ef441537b67bd2d9893ef214d35cf4.jpeg",
                  "gps_coordinates": {
                      "latitude": 30.271757,
                      "longitude": -98.867966
                  }
              }
          ]
      },
      "organic_results": [
          {
              "position": 1,
              "title": "Native Boutique - Fredericksburg Texas Online",
              "link": "https://www.fredericksburgtexas-online.com/plan-your-trip/native-boutique/",
              "displayed_link": "https://www.fredericksburgtexas-online.com › native-b...",
              "snippet": "The Native Boutique on Main Street in Fredericksburg, Texas offers must-have tee's for women, men, and children! Adorable in style clothing, jewelry, shoes, ...",
              "snippet_highlighted_words": [
                  "Native Boutique",
                  "Texas"
              ],
              "about_this_result": {
                  "source": {
                      "description": "fredericksburgtexas-online.com was first indexed by Google more than 10 years ago",
                      "source_info_link": "https://www.fredericksburgtexas-online.com/plan-your-trip/native-boutique/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/b4e8f7e91b77e07208f4c771a58498616ff135ae45b6f379669d6f61cd36623dbebdc6ab81d2907f44965223ea5e92d2.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.fredericksburgtexas-online.com/plan-your-trip/native-boutique/&tbm=ilp&ilps=ADNMCi3uhJlMhWJMQbJJySN3_Qppmp7f0A",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3uhJlMhWJMQbJJySN3_Qppmp7f0A&q=About+https%3A%2F%2Fwww.fredericksburgtexas-online.com%2Fplan-your-trip%2Fnative-boutique%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:Lp6ge82XLIoJ:https://www.fredericksburgtexas-online.com/plan-your-trip/native-boutique/&cd=5&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 2,
              "title": "Indigenous | Lubbock TX - Facebook",
              "link": "https://www.facebook.com/shopindigenous/",
              "displayed_link": "https://www.facebook.com › ... › Indigenous",
              "snippet": "Indigenous, Lubbock, Texas. 2438 likes · 3 talking about this ... Page · Women's clothing store ... Today only shop our entire site no code needed.",
              "snippet_highlighted_words": [
                  "Indigenous",
                  "Texas",
                  "store",
                  "shop"
              ],
              "rich_snippet": {
                  "top": {
                      "detected_extensions": {
                          "rating": 4.6,
                          "votes": 23
                      },
                      "extensions": [
                          "Rating: 4.6",
                          "‎23 votes"
                      ]
                  }
              },
              "about_this_result": {
                  "source": {
                      "description": "Facebook is an online social media and social networking service owned by American company Meta Platforms.",
                      "source_info_link": "https://www.facebook.com/shopindigenous/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/b4e8f7e91b77e07208f4c771a58498618e4aff677d8ed5075bec7438e6577b1c5b68fcaeb82d5d64e60cc8f92f29d4d1.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.facebook.com/shopindigenous/&tbm=ilp&ilps=ADNMCi37qSr6UQiBsgV-lMUgTYpBbNl2LQ",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi37qSr6UQiBsgV-lMUgTYpBbNl2LQ&q=About+https%3A%2F%2Fwww.facebook.com%2Fshopindigenous%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:h3KVktmB3NwJ:https://www.facebook.com/shopindigenous/&cd=6&hl=en&ct=clnk&gl=us",
              "related_results": [
                  {
                      "position": 1,
                      "title": "Native Texas Boutique - Facebook",
                      "link": "https://www.facebook.com/Native-Texas-Boutique-437741312977475/",
                      "displayed_link": "https://www.facebook.com › ... › Native Texas Boutique",
                      "snippet": "Native Texas Boutique, Richland Springs, TX. 120 likes. Native Texas Boutique specializes in hand crafted and vintage items made in Texas by Texans.",
                      "snippet_highlighted_words": [
                          "Native Texas Boutique",
                          "Native Texas Boutique",
                          "Texas"
                      ],
                      "about_this_result": {
                          "source": {
                              "description": "Facebook is an online social media and social networking service owned by American company Meta Platforms.",
                              "source_info_link": "https://www.facebook.com/Native-Texas-Boutique-437741312977475/",
                              "security": "secure",
                              "icon": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/b4e8f7e91b77e07208f4c771a584986129d05c57c78a77315c8c612e9eaa8baaddf0a4540dcc12bdfc44ed07b63d60924c47037cc2740ba2c6fe387f9cd29391e5f4287b598e3733.png"
                          }
                      },
                      "about_page_link": "https://www.google.com/search?q=About+https://m.facebook.com/Native-Texas-Boutique-437741312977475/&tbm=ilp&ilps=ADNMCi18F1wzFBrkSuqVrCahxw9BylPwFQ",
                      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi18F1wzFBrkSuqVrCahxw9BylPwFQ&q=About+https%3A%2F%2Fm.facebook.com%2FNative-Texas-Boutique-437741312977475%2F",
                      "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:ciZuU2N0AqoJ:https://www.facebook.com/Native-Texas-Boutique-437741312977475/&cd=7&hl=en&ct=clnk&gl=us"
                  }
              ]
          },
          {
              "position": 3,
              "title": "Top 10 Best Native American Stores in San Antonio, TX - Yelp",
              "link": "https://www.yelp.com/search?find_desc=native+american+stores&find_loc=San+Antonio%2C+TX",
              "displayed_link": "https://www.yelp.com › San Antonio, TX › Shopping",
              "snippet": "Reviews on Native American Stores in San Antonio, TX - Trésor, Traders Village, Casa Salazar Custom Mexican Furniture, Wic Gifts Engraving, San Antonio ...",
              "snippet_highlighted_words": [
                  "Native",
                  "Stores"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Yelp Inc. is an American company that develops the Yelp.com website and the Yelp mobile app, which publish crowd-sourced reviews about businesses. It also operates Yelp Guest Manager, a table reservation service. It is headquartered in San Francisco, California.",
                      "source_info_link": "https://www.yelp.com/search?find_desc=native+american+stores&find_loc=San+Antonio%2C+TX",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/b4e8f7e91b77e07208f4c771a584986134de140244693e52329839d9a81161f23ef85036a250cb3108714e324dc42e82.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://m.yelp.com/search?find_desc%3Dnative%2Bamerican%2Bstores%26find_loc%3DSan%2BAntonio%252C%2BTX&tbm=ilp&ilps=ADNMCi3f4bKwIMFncE8cXph9a-iKpyo5ZA",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3f4bKwIMFncE8cXph9a-iKpyo5ZA&q=About+https%3A%2F%2Fm.yelp.com%2Fsearch%3Ffind_desc%3Dnative%2Bamerican%2Bstores%26find_loc%3DSan%2BAntonio%252C%2BTX",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:7ywz97rsZ-YJ:https://www.yelp.com/search%3Ffind_desc%3Dnative%2Bamerican%2Bstores%26find_loc%3DSan%2BAntonio%252C%2BTX&cd=8&hl=en&ct=clnk&gl=us",
              "related_results": [
                  {
                      "position": 1,
                      "title": "Top 10 Best Native American Stores in Austin, TX - Yelp",
                      "link": "https://www.yelp.com/search?find_desc=native+american+stores&find_loc=Austin%2C+TX",
                      "displayed_link": "https://www.yelp.com › Austin, TX › Shopping",
                      "snippet": "Best native american stores near me in Austin, Texas ; Turquoise Trading Post. 2.4 mi. 46 reviews ; Feathers Boutique. 4.0 mi. 88 reviews ; Hawaiian Tiki Imports.",
                      "snippet_highlighted_words": [
                          "native",
                          "stores",
                          "Texas",
                          "Boutique"
                      ],
                      "about_this_result": {
                          "source": {
                              "description": "Yelp Inc. is an American company that develops the Yelp.com website and the Yelp mobile app, which publish crowd-sourced reviews about businesses. It also operates Yelp Guest Manager, a table reservation service. It is headquartered in San Francisco, California.",
                              "source_info_link": "https://www.yelp.com/search?find_desc=native+american+stores&find_loc=Austin%2C+TX",
                              "security": "secure",
                              "icon": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/b4e8f7e91b77e07208f4c771a584986157506e32404f8c9c51c490cf6d548cbfe9095c05d09fad71ad921d85d06164bdb4aa8d4fc09baaba27483f57808c1b512706f11638fc5f3d.png"
                          }
                      },
                      "about_page_link": "https://www.google.com/search?q=About+https://m.yelp.com/search?find_desc%3Dnative%2Bamerican%2Bstores%26find_loc%3DAustin%252C%2BTX&tbm=ilp&ilps=ADNMCi0sAtD9WI7YShvfTDRnBQF8a7Jlwg",
                      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi0sAtD9WI7YShvfTDRnBQF8a7Jlwg&q=About+https%3A%2F%2Fm.yelp.com%2Fsearch%3Ffind_desc%3Dnative%2Bamerican%2Bstores%26find_loc%3DAustin%252C%2BTX",
                      "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:-oMw4y6TMYMJ:https://www.yelp.com/search%3Ffind_desc%3Dnative%2Bamerican%2Bstores%26find_loc%3DAustin%252C%2BTX&cd=9&hl=en&ct=clnk&gl=us"
                  }
              ]
          },
          {
              "position": 4,
              "title": "Cloud Chief & Co.: The Original Native American Store of ...",
              "link": "https://www.cloudchiefcompany.com/",
              "displayed_link": "https://www.cloudchiefcompany.com",
              "snippet": "Main Street in the center of Tomball downtown (right outside of Houston), Texas, this legendary Native American shop is one of the oldest buildings in old town ...",
              "snippet_highlighted_words": [
                  "Texas",
                  "Native",
                  "shop"
              ],
              "about_this_result": {
                  "source": {
                      "description": "cloudchiefcompany.com was first indexed by Google in June 2019",
                      "source_info_link": "https://www.cloudchiefcompany.com/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/b4e8f7e91b77e07208f4c771a58498612a157be8c197326271acc1c6cb1f50dd187c1a151f1877970b6e029c0868b392.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.cloudchiefcompany.com/&tbm=ilp&ilps=ADNMCi0rQAD3BExzni6cUM0LjGyeeg4t8A",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi0rQAD3BExzni6cUM0LjGyeeg4t8A&q=About+https%3A%2F%2Fwww.cloudchiefcompany.com%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:6_2rejXGydgJ:https://www.cloudchiefcompany.com/&cd=10&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 5,
              "title": "Meridian x Indigenous",
              "link": "https://www.shopindigy.com/",
              "displayed_link": "https://www.shopindigy.com",
              "snippet": "New Arrivals · Clothing · Tops · Bottoms · Dresses · Jackets · Sweaters · Basics · Activewear · Accessories · Earrings · Necklaces · Purses · Shop Meridian ...",
              "snippet_highlighted_words": [
                  "Shop"
              ],
              "about_this_result": {
                  "source": {
                      "description": "shopindigy.com was first indexed by Google more than 10 years ago",
                      "source_info_link": "https://www.shopindigy.com/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/b4e8f7e91b77e07208f4c771a58498618eca899a6e6d8af5934e4ebba368035a0344fc99d1cf8ac9f97ca8ffbf0731fa.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.shopindigy.com/&tbm=ilp&ilps=ADNMCi3F2URDEr65ErD0Sfs7kf94AVET8w",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3F2URDEr65ErD0Sfs7kf94AVET8w&q=About+https%3A%2F%2Fwww.shopindigy.com%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:ckuubUUqLlAJ:https://www.shopindigy.com/&cd=11&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 6,
              "title": "NATIVE (@nativefbg) • Instagram photos and videos",
              "link": "https://www.instagram.com/nativefbg/?hl=en",
              "displayed_link": "https://www.instagram.com › nativefbg",
              "snippet": "LOCALLY OWNED FREDERICKSBURG TEXAS BOUTIQUE -where we're proud to be Texan and keepin' it Native! · socentraltx_vintagemarketdays. SoCentralTX VintageMarketDays.",
              "snippet_highlighted_words": [
                  "TEXAS BOUTIQUE",
                  "Native"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Instagram is a photo and video sharing social networking service owned by American company Meta Platforms. The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging. Posts can be shared publicly or with preapproved followers.",
                      "source_info_link": "https://www.instagram.com/nativefbg/?hl=en",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/b4e8f7e91b77e07208f4c771a58498613146df4844047034a7aa6da4b6dfca023398e5be30e9bbca5686cd238806702f.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.instagram.com/nativefbg/&tbm=ilp&ilps=ADNMCi2nQ1urf5M5bNmYX9DGspFuN4jfrg",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi2nQ1urf5M5bNmYX9DGspFuN4jfrg&q=About+https%3A%2F%2Fwww.instagram.com%2Fnativefbg%2F"
          },
          {
              "position": 7,
              "title": "Holiday JEDI: Where to Buy from Black-, Native-, and Latinx ...",
              "link": "https://www.jsg.utexas.edu/science-yall/holiday-jedi-where-to-buy-from-black-native-and-latinx-owned-businesses/",
              "displayed_link": "https://www.jsg.utexas.edu › science-yall › holiday-jedi...",
              "date": "Dec 10, 2020",
              "snippet": "Holiday shopping suggestion lists were largely collated by Dr. Rowan ... Latinx-, and Indigenous-owned businesses in Austin, Texas, ...",
              "snippet_highlighted_words": [
                  "shopping",
                  "Indigenous",
                  "Texas"
              ],
              "about_this_result": {
                  "source": {
                      "description": "The Jackson School of Geosciences at The University of Texas at Austin unites the Department of Geological Sciences with two research units, the Institute for Geophysics and the Bureau of Economic Geology.\nThe Jackson School is both old and new.",
                      "source_info_link": "https://www.jsg.utexas.edu/science-yall/holiday-jedi-where-to-buy-from-black-native-and-latinx-owned-businesses/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b89555af5af1cf6925f4a4/images/b4e8f7e91b77e07208f4c771a58498619a7456bd977e1a2910d47d5b7fddf2dd0ce4830ded4c50649564a8d63fde3d25.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.jsg.utexas.edu/science-yall/holiday-jedi-where-to-buy-from-black-native-and-latinx-owned-businesses/&tbm=ilp&ilps=ADNMCi1hWpQNXNOzMVjzKgRz-QNQYfCwRw",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi1hWpQNXNOzMVjzKgRz-QNQYfCwRw&q=About+https%3A%2F%2Fwww.jsg.utexas.edu%2Fscience-yall%2Fholiday-jedi-where-to-buy-from-black-native-and-latinx-owned-businesses%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:3OI5_oy6UhQJ:https://www.jsg.utexas.edu/science-yall/holiday-jedi-where-to-buy-from-black-native-and-latinx-owned-businesses/&cd=13&hl=en&ct=clnk&gl=us"
          }
      ],
      "related_searches": [
          {
              "query": "indigenous americas",
              "link": "https://www.google.com/search?q=Indigenous+Americas&sa=X&ved=2ahUKEwj13ral9LP8AhWGFlkFHWWkD4cQ1QJ6BAghEAE"
          },
          {
              "query": "women's boutiques near me",
              "link": "https://www.google.com/search?q=Women%27s+boutiques+near+me&sa=X&ved=2ahUKEwj13ral9LP8AhWGFlkFHWWkD4cQ1QJ6BAgiEAE"
          },
          {
              "query": "southern boutiques",
              "link": "https://www.google.com/search?q=Southern+boutiques&sa=X&ved=2ahUKEwj13ral9LP8AhWGFlkFHWWkD4cQ1QJ6BAgjEAE"
          }
      ],
      "pagination": {
          "current": 1,
          "next": "https://www.google.com/search?q=texas+indigenous+boutiques&oq=texas+indigenous+boutiques&start=10&sourceid=chrome&ie=UTF-8",
          "other_pages": {
              "2": "https://www.google.com/search?q=texas+indigenous+boutiques&oq=texas+indigenous+boutiques&start=10&sourceid=chrome&ie=UTF-8",
              "3": "https://www.google.com/search?q=texas+indigenous+boutiques&oq=texas+indigenous+boutiques&start=20&sourceid=chrome&ie=UTF-8",
              "4": "https://www.google.com/search?q=texas+indigenous+boutiques&oq=texas+indigenous+boutiques&start=30&sourceid=chrome&ie=UTF-8",
              "5": "https://www.google.com/search?q=texas+indigenous+boutiques&oq=texas+indigenous+boutiques&start=40&sourceid=chrome&ie=UTF-8"
          }
      },
      "serpapi_pagination": {
          "current": 1,
          "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+boutiques&start=10",
          "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+boutiques&start=10",
          "other_pages": {
              "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+boutiques&start=10",
              "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+boutiques&start=20",
              "4": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+boutiques&start=30",
              "5": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+boutiques&start=40"
          }
      }
  }
    ])
    
    return (
        <div className='businesspage'>
          <h1 className='businesspagetitle'>BUSINESS</h1>
          <h2 className='businesspagecaption'>Here you will find an array of black/brown-owned businesses in Texas.</h2>
          <BusinessMapper businesses = {businesses} />
        </div>
    )
}

export default BusinessesPage