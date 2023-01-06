import React, { useState } from 'react';
import BusinessMapper from "../../components/BusinessMapper/BusinessMapper"
import './FoodPage.css'


const FoodPage = () => {
    const [restaurants, setRestaurants] = useState([
      {
        "search_metadata": {
            "id": "63b895959c449d30352994a9",
            "status": "Success",
            "json_endpoint": "https://serpapi.com/searches/ec2b978485522324/63b895959c449d30352994a9.json",
            "created_at": "2023-01-06 21:41:41 UTC",
            "processed_at": "2023-01-06 21:41:41 UTC",
            "google_url": "https://www.google.com/search?q=texas+latin+restaurants&oq=texas+latin+restaurants&sourceid=chrome&ie=UTF-8",
            "raw_html_file": "https://serpapi.com/searches/ec2b978485522324/63b895959c449d30352994a9.html",
            "total_time_taken": 3.23
        },
        "search_parameters": {
            "engine": "google",
            "q": "texas latin restaurants",
            "google_domain": "google.com",
            "device": "desktop"
        },
        "search_information": {
            "organic_results_state": "Results for exact spelling",
            "query_displayed": "texas latin restaurants",
            "total_results": 15100000,
            "time_taken_displayed": 0.69,
            "menu_items": [
                {
                    "position": 1,
                    "title": "All"
                },
                {
                    "position": 2,
                    "title": "Maps",
                    "link": "https://maps.google.com/maps?q=texas+latin+restaurants&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ_AUoAXoECAEQAw"
                },
                {
                    "position": 3,
                    "title": "Images",
                    "link": "https://www.google.com/search?q=texas+latin+restaurants&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ_AUoAnoECAEQBA",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+restaurants&tbm=isch"
                },
                {
                    "position": 4,
                    "title": "News",
                    "link": "https://www.google.com/search?q=texas+latin+restaurants&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ_AUoA3oECAEQBQ",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+restaurants&tbm=nws"
                },
                {
                    "position": 5,
                    "title": "Shopping",
                    "link": "https://www.google.com/search?q=texas+latin+restaurants&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ_AUoBHoECAEQBg",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+restaurants&tbm=shop"
                }
            ]
        },
        "local_map": {
            "link": "https://www.google.com/search?q=texas+latin+restaurants&npsic=0&rflfq=1&rldoc=1&rllag=32999686,-96945180,14460&tbm=lcl&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQtgN6BAgbEAE",
            "image": "https://serpapi.com/searches/63b895959c449d30352994a9/images/b0f7cec9aca74be80a486eaa3620750b.png",
            "gps_coordinates": {
                "latitude": 32.999686,
                "longitude": -96.94518,
                "altitude": 14460
            }
        },
        "local_results": {
            "more_locations_link": null,
            "places": [
                {
                    "position": 1,
                    "title": "HonduMaya Latin Cuisine",
                    "place_id": "13387066642257538605",
                    "lsig": "AB86z5UHNoaLWkrj2xH8AAhjQTqh",
                    "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5UHNoaLWkrj2xH8AAhjQTqh&ludocid=13387066642257538605&q=texas+latin+restaurants&tbm=lcl",
                    "description": "Dine-in·Takeout·Delivery",
                    "reviews": 267,
                    "price": "$",
                    "type": "Restaurant",
                    "hours": "Dine-in·Takeout·Delivery",
                    "address": "Dallas, TX · In Montfort plaza",
                    "thumbnail": "https://serpapi.com/searches/63b895959c449d30352994a9/images/96df97ae3cb88d2e520f995830981c1b7bc82e9afc64f999803949811b4e007e1c11f8bbd2c96546.jpeg",
                    "gps_coordinates": {
                        "latitude": 32.93138,
                        "longitude": -96.81312
                    }
                },
                {
                    "position": 2,
                    "title": "Arepa TX",
                    "place_id": "557381930022043811",
                    "lsig": "AB86z5W2l-kO6swt2NQjdsEjwxUF",
                    "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5W2l-kO6swt2NQjdsEjwxUF&ludocid=557381930022043811&q=texas+latin+restaurants&tbm=lcl",
                    "reviews": 535,
                    "price": "$$",
                    "type": "Latin American",
                    "hours": "Fast-casual spot for Latin street food",
                    "address": "Grapevine, TX · In Harvest Hall",
                    "thumbnail": "https://lh5.googleusercontent.com/p/AF1QipMG2F-R7AEmc9G--FdC7lXhnbBitNt3qlzUZloK=w92-h92-n-k-no",
                    "gps_coordinates": {
                        "latitude": 32.933304,
                        "longitude": -97.07724
                    }
                },
                {
                    "position": 3,
                    "title": "Casa Mia Latin Cuisine",
                    "place_id": "2777861000919411891",
                    "lsig": "AB86z5UUvs-guluHV6BbrsVoCV19",
                    "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5UUvs-guluHV6BbrsVoCV19&ludocid=2777861000919411891&q=texas+latin+restaurants&tbm=lcl",
                    "description": "Dine-in·Takeout·Delivery",
                    "reviews": 475,
                    "price": "$$",
                    "type": "Latin American",
                    "hours": "Dine-in·Takeout·Delivery",
                    "address": "Lewisville, TX",
                    "thumbnail": "https://serpapi.com/searches/63b895959c449d30352994a9/images/96df97ae3cb88d2e520f995830981c1b82c2c515b85b4abbb2fb6443dc02145378e54ef224a4165d.jpeg",
                    "gps_coordinates": {
                        "latitude": 33.06799,
                        "longitude": -96.88172
                    }
                }
            ]
        },
        "organic_results": [
            {
                "position": 1,
                "title": "THE 10 BEST Latin Restaurants in Austin - Tripadvisor",
                "link": "https://www.tripadvisor.com/Restaurants-g30196-c10639-Austin_Texas.html",
                "displayed_link": "https://www.tripadvisor.com › ... › Austin Restaurants",
                "snippet": "Latin Restaurants in Austin ; 1. Fonda San Miguel · 758 reviews · “The Carne Asada is amazing!” ; 2. El Alma Cafe · 211 reviews · “All-around Great Experience-” ; 3.",
                "snippet_highlighted_words": [
                    "Latin Restaurants"
                ],
                "about_this_result": {
                    "source": {
                        "description": "Tripadvisor, Inc. is an American online travel company that operates a website and mobile app with user-generated content and a comparison shopping website. It also offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants.",
                        "source_info_link": "https://www.tripadvisor.com/Restaurants-g30196-c10639-Austin_Texas.html",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b895959c449d30352994a9/images/862d832a1b66b0d396959d6e843652ac130692c45b64770301ec53de606b5342b6692f5b5f1055862949b628ab184ea2.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.tripadvisor.com/Restaurants-g30196-c10639-Austin_Texas.html&tbm=ilp&ilps=AB_Lh3qAhrRCjRyVXcNO4XjQti0-xq7fYw",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3qAhrRCjRyVXcNO4XjQti0-xq7fYw&q=About+https%3A%2F%2Fwww.tripadvisor.com%2FRestaurants-g30196-c10639-Austin_Texas.html",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:Za-rgsk0lAgJ:https://www.tripadvisor.com/Restaurants-g30196-c10639-Austin_Texas.html&cd=5&hl=en&ct=clnk&gl=us",
                "related_results": [
                    {
                        "position": 1,
                        "title": "THE 10 BEST Latin Restaurants in Dallas - Tripadvisor",
                        "link": "https://www.tripadvisor.com/Restaurants-g55711-c10639-Dallas_Texas.html",
                        "displayed_link": "https://www.tripadvisor.com › ... › Dallas Restaurants",
                        "snippet": "1. Meso Maya Comida y Copas · 242 reviewsClosed Now · 2. Meso Maya Comida y Copas · 1,141 reviewsClosed Now · 3. Zaguan South American Cafe & Bakery · 111 reviews ...",
                        "about_this_result": {
                            "source": {
                                "description": "Tripadvisor, Inc. is an American online travel company that operates a website and mobile app with user-generated content and a comparison shopping website. It also offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants.",
                                "source_info_link": "https://www.tripadvisor.com/Restaurants-g55711-c10639-Dallas_Texas.html",
                                "security": "secure",
                                "icon": "https://serpapi.com/searches/63b895959c449d30352994a9/images/862d832a1b66b0d396959d6e843652ac5bb14a15516d985fb803e8f5af2e76e95d7e7c554aa4dd072f9e3361b4b9ddb2364972e529216c0bfc56a5bf84b09c1b43a0abb0e675ae7d.png"
                            }
                        },
                        "about_page_link": "https://www.google.com/search?q=About+https://www.tripadvisor.com/Restaurants-g55711-c10639-Dallas_Texas.html&tbm=ilp&ilps=AB_Lh3r3EHEmF97sG-0K9N0TKpuu90371g",
                        "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3r3EHEmF97sG-0K9N0TKpuu90371g&q=About+https%3A%2F%2Fwww.tripadvisor.com%2FRestaurants-g55711-c10639-Dallas_Texas.html",
                        "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:eedBkDal-dMJ:https://www.tripadvisor.com/Restaurants-g55711-c10639-Dallas_Texas.html&cd=6&hl=en&ct=clnk&gl=us"
                    }
                ]
            },
            {
                "position": 2,
                "title": "The Best 10 Latin American near me in Dallas, Texas - Yelp",
                "link": "https://www.yelp.com/search?cflt=latin&find_loc=Dallas%2C+TX",
                "displayed_link": "https://www.yelp.com › Dallas, TX › Restaurants",
                "snippet": "Best Latin American in Dallas, TX - Sabor Latino - Dallas, Zaguán Latin Café and Bakery, Doña Maria - Dominican Cuisine, The Empanada CookHouse, ...",
                "snippet_highlighted_words": [
                    "Latin",
                    "Latin"
                ],
                "about_this_result": {
                    "source": {
                        "description": "Yelp Inc. is an American company that develops the Yelp.com website and the Yelp mobile app, which publish crowd-sourced reviews about businesses. It also operates Yelp Guest Manager, a table reservation service. It is headquartered in San Francisco, California.",
                        "source_info_link": "https://www.yelp.com/search?cflt=latin&find_loc=Dallas%2C+TX",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b895959c449d30352994a9/images/862d832a1b66b0d396959d6e843652ac463b6b1a590738b26969f11b9946debdebf8c426e3fbca7de935aec4ed56ff7a.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://m.yelp.com/search?cflt%3Dlatin%26find_loc%3DDallas%252C%2BTX&tbm=ilp&ilps=AB_Lh3oSNXaBr_LFhWumqd5RipOFLduonw",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3oSNXaBr_LFhWumqd5RipOFLduonw&q=About+https%3A%2F%2Fm.yelp.com%2Fsearch%3Fcflt%3Dlatin%26find_loc%3DDallas%252C%2BTX",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:Xieicj3C9XIJ:https://www.yelp.com/search%3Fcflt%3Dlatin%26find_loc%3DDallas%252C%2BTX&cd=7&hl=en&ct=clnk&gl=us",
                "related_questions": [
                    {
                        "question": "What are some latin american restaurants with a large number of reviews in Dallas, TX?",
                        "snippet": "These are some latin american restaurants with a large number of reviews in Dallas, TX:Velvet Taco (3028 reviews)Meso Maya Comida y Copas (2777 reviews)Empa Mundo (1308 reviews)The Latin Pig (825 reviews)Mexican Sugar (745 reviews)"
                    },
                    {
                        "question": "What are some highly rated latin american restaurants in Dallas, TX?",
                        "snippet": "These are some highly rated latin american restaurants in Dallas, TX:Isabel's Guatemalan Restaurant & Bakery (5/5)Picadera (5/5)El Chifrijo Puerto Rican Fusion (5/5)San Pedro's (5/5)Guanaquitas (5/5)"
                    }
                ]
            },
            {
                "position": 3,
                "title": "Latin American | Restaurants - D Magazine Directories",
                "link": "https://directory.dmagazine.com/search/?sections=Restaurants&categories=Latin+American",
                "displayed_link": "https://directory.dmagazine.com › search › categories=...",
                "snippet": "Texas de Brazil. $$$. Latin American. 336.2 mi. 15101 Addison Rd. Addison, TX 75001. Isabel's Guatemalan Restaurant and Bakery.",
                "snippet_highlighted_words": [
                    "Texas",
                    "Latin",
                    "Restaurant"
                ],
                "about_this_result": {
                    "source": {
                        "description": "D Magazine is a monthly magazine covering Dallas–Fort Worth. It is headquartered in Downtown Dallas.\nD Magazine covers a range of topics including politics, business, food, fashion and lifestyle in the city of Dallas. The first issue was published in October 1974 by its founders, Wick Allison and Jim Atkinson.",
                        "source_info_link": "https://directory.dmagazine.com/search/?sections=Restaurants&categories=Latin+American",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b895959c449d30352994a9/images/862d832a1b66b0d396959d6e843652ac049ac2b155e185b382a3992ffc1a3e51823df6691242cb495db6c7345fd03fd7.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://directory.dmagazine.com/search/?sections%3DRestaurants%26categories%3DLatin%2BAmerican&tbm=ilp&ilps=AB_Lh3od6sPXUHw8uoJlOVPUKElQJ7tBqw",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3od6sPXUHw8uoJlOVPUKElQJ7tBqw&q=About+https%3A%2F%2Fdirectory.dmagazine.com%2Fsearch%2F%3Fsections%3DRestaurants%26categories%3DLatin%2BAmerican",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:Xq_kr8eJ4AsJ:https://directory.dmagazine.com/search/%3Fsections%3DRestaurants%26categories%3DLatin%2BAmerican&cd=8&hl=en&ct=clnk&gl=us"
            },
            {
                "position": 4,
                "title": "Our Guide to Latin American Eats in Houston",
                "link": "https://www.visithoustontexas.com/taste-houston/local-picks/international/best-latin-restaurants-houston/",
                "displayed_link": "https://www.visithoustontexas.com › international › best...",
                "snippet": "Enjoy date night at Gloria's Latin Cuisine, a Salvadorian restaurant in Midtown with a variety of latin-inspired dishes like Pupusas, Lechon Asado and Plato ...",
                "snippet_highlighted_words": [
                    "Latin",
                    "restaurant",
                    "latin"
                ],
                "about_this_result": {
                    "source": {
                        "description": "visithoustontexas.com was first indexed by Google more than 10 years ago",
                        "source_info_link": "https://www.visithoustontexas.com/taste-houston/local-picks/international/best-latin-restaurants-houston/",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b895959c449d30352994a9/images/862d832a1b66b0d396959d6e843652ac83c1ae2ac86a78298c9effac9a0ce54a7b1d9db7a2df27f7a5a77261949f8d5d.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.visithoustontexas.com/taste-houston/local-picks/international/best-latin-restaurants-houston/&tbm=ilp&ilps=AB_Lh3puWXAC0DJpxOt_-LhQwomxvHHgDA",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3puWXAC0DJpxOt_-LhQwomxvHHgDA&q=About+https%3A%2F%2Fwww.visithoustontexas.com%2Ftaste-houston%2Flocal-picks%2Finternational%2Fbest-latin-restaurants-houston%2F",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:murHozsCno4J:https://www.visithoustontexas.com/taste-houston/local-picks/international/best-latin-restaurants-houston/&cd=9&hl=en&ct=clnk&gl=us"
            },
            {
                "position": 5,
                "title": "Katy, TX - Latin Restaurants",
                "link": "https://www.katymagazine.com/katy-texas/restaurants/latin-restaurants/",
                "displayed_link": "https://www.katymagazine.com › katy-texas › latin-rest...",
                "snippet": "Katy Texas Latin Restaurants · Alegria Brazilian Grill 24449 Katy Fwy, Katy, TX 281-394-7753 · Cilantro's Arepa Grill 2004 S. · La Argentina Gelato 3750 S. · Mi ...",
                "snippet_highlighted_words": [
                    "Texas Latin Restaurants"
                ],
                "about_this_result": {
                    "source": {
                        "description": "katymagazine.com was first indexed by Google more than 10 years ago",
                        "source_info_link": "https://www.katymagazine.com/katy-texas/restaurants/latin-restaurants/",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b895959c449d30352994a9/images/862d832a1b66b0d396959d6e843652aca911833d400319e321649f01e038d34d0c13b8507fdfc1a4036aa8624abf84c7.jpeg"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.katymagazine.com/katy-texas/restaurants/latin-restaurants/&tbm=ilp&ilps=AB_Lh3oINSSpgA7eOpVVF8btp5Ahsh-Hhg",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3oINSSpgA7eOpVVF8btp5Ahsh-Hhg&q=About+https%3A%2F%2Fwww.katymagazine.com%2Fkaty-texas%2Frestaurants%2Flatin-restaurants%2F",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:YEe23krJ0iYJ:https://www.katymagazine.com/katy-texas/restaurants/latin-restaurants/&cd=10&hl=en&ct=clnk&gl=us"
            },
            {
                "position": 6,
                "title": "7 Best Latin American Restaurants In Galleria / Uptown",
                "link": "https://www.opentable.com/cuisine/best-latin-american-restaurants-houston-galleria-tx",
                "displayed_link": "https://www.opentable.com › Houston",
                "snippet": "7 restaurants available nearby ; 1. Post Oak Grill · (851) · Latin american • Galleria / Uptown. Booked 2 times today ; 2. Churrascos - River Oaks · (1835) · Latin ...",
                "snippet_highlighted_words": [
                    "restaurants",
                    "Latin",
                    "Latin"
                ],
                "about_this_result": {
                    "source": {
                        "description": "OpenTable is an online restaurant-reservation service company founded by Sid Gorham, Eric Moe and Chuck Templeton on 2 July 1998 and is based in San Francisco, California.\nIn 1998, operations began with a limited selection of restaurants in San Francisco.",
                        "source_info_link": "https://www.opentable.com/cuisine/best-latin-american-restaurants-houston-galleria-tx",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b895959c449d30352994a9/images/862d832a1b66b0d396959d6e843652ac6581d6d0eafcd2547c0a0db4603104458bc999dd6272ee288f59efef8b7db6c5.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.opentable.com/cuisine/best-latin-american-restaurants-houston-galleria-tx&tbm=ilp&ilps=AB_Lh3ovJmfKZD0iNLgTKhlaNtdPnYiHyg",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3ovJmfKZD0iNLgTKhlaNtdPnYiHyg&q=About+https%3A%2F%2Fwww.opentable.com%2Fcuisine%2Fbest-latin-american-restaurants-houston-galleria-tx",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:7wbTl5HtWSYJ:https://www.opentable.com/cuisine/best-latin-american-restaurants-houston-galleria-tx&cd=11&hl=en&ct=clnk&gl=us"
            },
            {
                "position": 7,
                "title": "University of Texas Latin-american Food Delivery - DoorDash",
                "link": "https://www.doordash.com/food-delivery/university-of-texas-tx-restaurants/latin-american/",
                "displayed_link": "https://www.doordash.com › food-delivery › latin-american",
                "snippet": "Best University of Texas restaurants now deliver. Get breakfast, lunch, dinner and more delivered from your favorite restaurants right to your doorstep with ...",
                "snippet_highlighted_words": [
                    "Texas restaurants",
                    "restaurants"
                ],
                "about_this_result": {
                    "source": {
                        "description": "DoorDash, Inc. is an American company that operates an online food ordering and food delivery platform. The company is based in San Francisco, California. It went public in December 2020 on NYSE and trades under the symbol DASH.",
                        "source_info_link": "https://www.doordash.com/food-delivery/university-of-texas-tx-restaurants/latin-american/",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b895959c449d30352994a9/images/862d832a1b66b0d396959d6e843652acd24ce1ef32cfb6407e690daf74ae741a165fabdf25d3cf30cb24eb1961484561.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.doordash.com/food-delivery/university-of-texas-tx-restaurants/latin-american/&tbm=ilp&ilps=AB_Lh3rtJOd5T4cyToKCVitOqy4cJQbqQQ",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3rtJOd5T4cyToKCVitOqy4cJQbqQQ&q=About+https%3A%2F%2Fwww.doordash.com%2Ffood-delivery%2Funiversity-of-texas-tx-restaurants%2Flatin-american%2F"
            },
            {
                "position": 8,
                "title": "Gloria's® Latin Cuisine",
                "link": "https://gloriascuisine.com/",
                "displayed_link": "https://gloriascuisine.com",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvRtgdg6j4rNOodfjJ9cQDGx5mjDj9c2lenrAyGfXXH5mTVOzkoS4&usqp=CAE&s",
                "snippet": "Map of Texas with location pins on Gloria's restaurants. Gloria's Story · Food & Drink · Salsa & Nightlife · Gift Cards · Locations · Blog · Careers ...",
                "snippet_highlighted_words": [
                    "Texas",
                    "restaurants"
                ],
                "about_this_result": {
                    "source": {
                        "description": "gloriascuisine.com was first indexed by Google more than 10 years ago",
                        "source_info_link": "https://gloriascuisine.com/",
                        "security": "secure",
                        "icon": "https://serpapi.com/searches/63b895959c449d30352994a9/images/862d832a1b66b0d396959d6e843652ac17f4c5a9a7e60de16cf4c3afc9825689f258c59ce216c4a4bc726684735ca3a8.png"
                    }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://gloriascuisine.com/&tbm=ilp&ilps=AB_Lh3puYAEuqZMIaME9g8plHfh6GoZhdA",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3puYAEuqZMIaME9g8plHfh6GoZhdA&q=About+https%3A%2F%2Fgloriascuisine.com%2F"
            }
        ],
        "related_searches": [
            {
                "query": "latin restaurants dallas",
                "link": "https://www.google.com/search?q=Latin+restaurants+Dallas&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ1QJ6BAg4EAE"
            },
            {
                "query": "latin restaurants houston",
                "link": "https://www.google.com/search?q=Latin+Restaurants+Houston&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ1QJ6BAg2EAE"
            },
            {
                "query": "latin restaurants near me",
                "link": "https://www.google.com/search?q=Latin+restaurants+near+me&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ1QJ6BAg0EAE"
            },
            {
                "query": "best latin restaurants in houston",
                "link": "https://www.google.com/search?q=Best+Latin+restaurants+in+Houston&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ1QJ6BAgzEAE"
            },
            {
                "query": "best latin restaurants in dallas",
                "link": "https://www.google.com/search?q=Best+Latin+restaurants+in+Dallas&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ1QJ6BAg1EAE"
            },
            {
                "query": "latin restaurant week houston",
                "link": "https://www.google.com/search?q=Latin+Restaurant+Week+Houston&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ1QJ6BAg5EAE"
            },
            {
                "query": "gloria's latin cuisine",
                "link": "https://www.google.com/search?q=Gloria%27s+Latin+Cuisine&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ1QJ6BAgxEAE"
            },
            {
                "query": "oaxacan restaurant",
                "link": "https://www.google.com/search?q=Oaxacan+restaurant&sa=X&ved=2ahUKEwjF-KjE9LP8AhV2lmoFHe7SABkQ1QJ6BAg3EAE"
            }
        ],
        "pagination": {
            "current": 1,
            "next": "https://www.google.com/search?q=texas+latin+restaurants&oq=texas+latin+restaurants&start=10&sourceid=chrome&ie=UTF-8",
            "other_pages": {
                "2": "https://www.google.com/search?q=texas+latin+restaurants&oq=texas+latin+restaurants&start=10&sourceid=chrome&ie=UTF-8",
                "3": "https://www.google.com/search?q=texas+latin+restaurants&oq=texas+latin+restaurants&start=20&sourceid=chrome&ie=UTF-8",
                "4": "https://www.google.com/search?q=texas+latin+restaurants&oq=texas+latin+restaurants&start=30&sourceid=chrome&ie=UTF-8",
                "5": "https://www.google.com/search?q=texas+latin+restaurants&oq=texas+latin+restaurants&start=40&sourceid=chrome&ie=UTF-8"
            }
        },
        "serpapi_pagination": {
            "current": 1,
            "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+restaurants&start=10",
            "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+restaurants&start=10",
            "other_pages": {
                "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+restaurants&start=10",
                "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+restaurants&start=20",
                "4": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+restaurants&start=30",
                "5": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+latin+restaurants&start=40"
            }
        }
    },
      {
      "search_metadata": {
          "id": "63b895d17d171a8a6f721112",
          "status": "Success",
          "json_endpoint": "https://serpapi.com/searches/f0cf12353e8a283f/63b895d17d171a8a6f721112.json",
          "created_at": "2023-01-06 21:42:41 UTC",
          "processed_at": "2023-01-06 21:42:41 UTC",
          "google_url": "https://www.google.com/search?q=texas+black-owned+restaurants&oq=texas+black-owned+restaurants&sourceid=chrome&ie=UTF-8",
          "raw_html_file": "https://serpapi.com/searches/f0cf12353e8a283f/63b895d17d171a8a6f721112.html",
          "total_time_taken": 0.8
      },
      "search_parameters": {
          "engine": "google",
          "q": "texas black-owned restaurants",
          "google_domain": "google.com",
          "device": "desktop"
      },
      "search_information": {
          "organic_results_state": "Results for exact spelling",
          "query_displayed": "texas black-owned restaurants",
          "total_results": 45700000,
          "time_taken_displayed": 0.52,
          "menu_items": [
              {
                  "position": 1,
                  "title": "Maps",
                  "link": "https://maps.google.com/maps?q=texas+black-owned+restaurants&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ0pQJegQIBBAC"
              },
              {
                  "position": 2,
                  "title": "News",
                  "link": "https://www.google.com/search?q=texas+black-owned+restaurants&source=lnms&tbm=nws&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ0pQJegQIBBAE",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black-owned+restaurants&tbm=nws"
              },
              {
                  "position": 3,
                  "title": "Images",
                  "link": "https://www.google.com/search?q=texas+black-owned+restaurants&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ0pQJegQIBBAG",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black-owned+restaurants&tbm=isch"
              },
              {
                  "position": 4,
                  "title": "Shopping",
                  "link": "https://www.google.com/search?q=texas+black-owned+restaurants&source=lnms&tbm=shop&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ0pQJegQIBBAI",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black-owned+restaurants&tbm=shop"
              },
              {
                  "position": 5,
                  "title": "Videos",
                  "link": "https://www.google.com/search?q=texas+black-owned+restaurants&source=lnms&tbm=vid&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ0pQJegQIBBAK",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black-owned+restaurants&tbm=vid"
              },
              {
                  "position": 6,
                  "title": "Books",
                  "link": "https://www.google.com/search?q=texas+black-owned+restaurants&source=lnms&tbm=bks&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ0pQJegQIBBAM"
              },
              {
                  "position": 7,
                  "title": "Flights",
                  "link": "https://www.google.com/flights?q=texas+black-owned+restaurants&source=lnms&tbm=flm&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ0pQJegQIBBAO"
              },
              {
                  "position": 8,
                  "title": "Finance",
                  "link": "https://www.google.com/finance?sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ0pQJegQIBBAQ"
              }
          ]
      },
      "local_map": {
          "link": "https://www.google.com/search?q=texas+black-owned+restaurants&npsic=0&rflfq=1&rldoc=1&rllag=31272553,-96458402,204409&tbm=lcl&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQtgN6BAgrEAE",
          "image": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/19104234dd9eda765f1bd1b24d4037ae.png",
          "gps_coordinates": {
              "latitude": 31.272553,
              "longitude": -96.458402,
              "altitude": 204409
          }
      },
      "local_results": {
          "more_locations_link": null,
          "places": [
              {
                  "position": 1,
                  "title": "Drew's Place Soulfood",
                  "place_id": "17224039236786897383",
                  "lsig": "AB86z5X78DTuBscm-UeSbqJoWNpd",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5X78DTuBscm-UeSbqJoWNpd&ludocid=17224039236786897383&q=texas+black-owned+restaurants&tbm=lcl",
                  "reviews": 499,
                  "price": "$$",
                  "type": "Soul",
                  "hours": "Closed ⋅ Opens 11AM Sat",
                  "address": "Fort Worth, TX",
                  "thumbnail": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/2bf7859d15a1849e6dda965f2d99403f6f158195ad7abf8d618bf6980299f5635179bac3e53033fa.png",
                  "gps_coordinates": {
                      "latitude": 32.729916,
                      "longitude": -97.40815
                  }
              },
              {
                  "position": 2,
                  "title": "Roots Southern Table",
                  "place_id": "7135083928400267866",
                  "lsig": "AB86z5Vwkpiybq8FfTQ9phVRbe3w",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5Vwkpiybq8FfTQ9phVRbe3w&ludocid=7135083928400267866&q=texas+black-owned+restaurants&tbm=lcl",
                  "reviews": 498,
                  "type": "Restaurant",
                  "hours": "Closed ⋅ Opens 5PM",
                  "address": "Farmers Branch, TX",
                  "thumbnail": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/2bf7859d15a1849e6dda965f2d99403fa40eb77c6be1ff5fbca64c16bbe5033453218f0ecfc26745.png",
                  "gps_coordinates": {
                      "latitude": 32.92331,
                      "longitude": -96.89549
                  }
              },
              {
                  "position": 3,
                  "title": "ReMo's Cafe (BBQ / Soulfood)",
                  "place_id": "18020768151544153541",
                  "lsig": "AB86z5U4mi7cruyE8croht8Mp1eU",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5U4mi7cruyE8croht8Mp1eU&ludocid=18020768151544153541&q=texas+black-owned+restaurants&tbm=lcl",
                  "reviews": 353,
                  "price": "$$",
                  "type": "Barbecue",
                  "hours": "Identifies as Black-owned",
                  "address": "Houston, TX · In Fondren Plaza",
                  "thumbnail": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/2bf7859d15a1849e6dda965f2d99403f3f17963656b3bd721907868748cfcb2847105b10c502670e.png",
                  "gps_coordinates": {
                      "latitude": 29.621786,
                      "longitude": -95.50866
                  }
              }
          ]
      },
      "inline_people_also_search_for": [
          {
              "title": "Houston bucket list restaurants",
              "items": [
                  {
                      "name": "Lucille's",
                      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxHLIa1cTduW0u5i1wrAt_xwVEaCw40iG5Llzmi5N6f6nGBRBw6TB&s=0",
                      "link": "https://www.google.com/search?q=Lucille%27s+Houston&stick=H4sIAAAAAAAAAOOQUeLRT9c3zEipyigyMzAxks_ILy0uyc9TSCpNzk4tUcjJLC5RKEotLkksLUrMKymOki1JrUgsVkjKSUzOVsgvz0tNQZY-xYhi3ClGXhDXMNkoNzslt9DyFCOXfq6-QYVRuYWF-SlGbpBkSXJlWlluCoyXUVZiZFYGNaegpLKkrCovHco1MjMoiU9JN4AZm1QG5JVXpsD46SmWRmlG5vFwa_PyyguM4st-Mcp74PdWAwvjIlZBn9LkzJycVPViBajyW2ySDKYfW5lq8vfcEXts9iX3yozE77tmGJbbXTYCAJlYxjU7AQAA&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQs9oBKAB6BAg_EAI",
                      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Lucille%27s+Houston&stick=H4sIAAAAAAAAAOOQUeLRT9c3zEipyigyMzAxks_ILy0uyc9TSCpNzk4tUcjJLC5RKEotLkksLUrMKymOki1JrUgsVkjKSUzOVsgvz0tNQZY-xYhi3ClGXhDXMNkoNzslt9DyFCOXfq6-QYVRuYWF-SlGbpBkSXJlWlluCoyXUVZiZFYGNaegpLKkrCovHco1MjMoiU9JN4AZm1QG5JVXpsD46SmWRmlG5vFwa_PyyguM4st-Mcp74PdWAwvjIlZBn9LkzJycVPViBajyW2ySDKYfW5lq8vfcEXts9iX3yozE77tmGJbbXTYCAJlYxjU7AQAA"
                  },
                  {
                      "name": "Xochi",
                      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_pGgEmxUoRRUxdxcpyxsTrMNgU8NXlpXtUu_xfKuD7cZcxQDMCz0&s=0",
                      "link": "https://www.google.com/search?q=Xochi&stick=H4sIAAAAAAAAAOOQUeLVT9c3NEw2ys1OyS20NJLPyC8tLsnPU0gqTc5OLVHIySwuUShKLS5JLC1KzCspjpItSa1ILFZIyklMzlbIL89LTUGWPsXIAzIvI6Uqo8jMwOQUI6rxpxi59HP1DSqMyi0szE8xcoMkS5Ir08pyU2C8jLISI7MyqDkFJZUlZVV56VCukZlBSXxKugHM2KQyIK-8MgXGT0-xNEozMo-HW5uXV15gFF_2i1HeA7-3GlgYF7GyRuQnZ2TeYpNkMP3YylSTv-eO2GOzL7lXZiR-3zXDsNzushEAvFTsojABAAA&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQs9oBKAF6BAg_EAM",
                      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Xochi&stick=H4sIAAAAAAAAAOOQUeLVT9c3NEw2ys1OyS20NJLPyC8tLsnPU0gqTc5OLVHIySwuUShKLS5JLC1KzCspjpItSa1ILFZIyklMzlbIL89LTUGWPsXIAzIvI6Uqo8jMwOQUI6rxpxi59HP1DSqMyi0szE8xcoMkS5Ir08pyU2C8jLISI7MyqDkFJZUlZVV56VCukZlBSXxKugHM2KQyIK-8MgXGT0-xNEozMo-HW5uXV15gFF_2i1HeA7-3GlgYF7GyRuQnZ2TeYpNkMP3YylSTv-eO2GOzL7lXZiR-3zXDsNzushEAvFTsojABAAA"
                  },
                  {
                      "name": "Hugo's",
                      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4Ci2lf2p1iQnrdva88g36W3VM_3yYup0EPn6cWZULjQjad2a-OBY&s=0",
                      "link": "https://www.google.com/search?q=Hugo%27s+Houston&stick=H4sIAAAAAAAAAOOQUeLSz9U3qDAqt7AwN5LPyC8tLsnPU0gqTc5OLVHIySwuUShKLS5JLC1KzCspjpItSa1ILFZIyklMzlbIL89LTUGWPsXIo5-ub5iRUpVRZGZgcoqRF8Q1TDbKzU7JLbQ8xYhk1ylGbpBkSXJlWlluCoyXUVZiZFYGNaegpLKkrCovHco1MjMoiU9JN4AZm1QG5JVXpsD46SmWRmlG5vFwa_PyyguM4st-Mcp74PdWAwvjIlY-j9L0fPViBajaW2ySDKYfW5lq8vfcEXts9iX3yozE77tmGJbbXTYCAA_4N_c2AQAA&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQs9oBKAJ6BAg_EAQ",
                      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Hugo%27s+Houston&stick=H4sIAAAAAAAAAOOQUeLSz9U3qDAqt7AwN5LPyC8tLsnPU0gqTc5OLVHIySwuUShKLS5JLC1KzCspjpItSa1ILFZIyklMzlbIL89LTUGWPsXIo5-ub5iRUpVRZGZgcoqRF8Q1TDbKzU7JLbQ8xYhk1ylGbpBkSXJlWlluCoyXUVZiZFYGNaegpLKkrCovHco1MjMoiU9JN4AZm1QG5JVXpsD46SmWRmlG5vFwa_PyyguM4st-Mcp74PdWAwvjIlY-j9L0fPViBajaW2ySDKYfW5lq8vfcEXts9iX3yozE77tmGJbbXTYCAA_4N_c2AQAA"
                  },
                  {
                      "name": "Brennan's of Houston",
                      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdhK_SIU48Y8650Y5iFXTCGrbA9DlTYGnpjtbQRqLscGaWkpu7mOS&s=0",
                      "link": "https://www.google.com/search?q=Brennan%27s+of+Houston&stick=H4sIAAAAAAAAAOOQUeLWT9c3LEmuTCvLTTGSz8gvLS7Jz1NIKk3OTi1RyMksLlEoSi0uSSwtSswrKY6SLUmtSCxWSMpJTM5WyC_PS01Blj7FyAMyLSOlKqPIzMDkFCMviGuYbJSbnZJbaHmKkUs_V9-gwqjcwsL8FCOyzTBeRlmJkVkZ1JyCksqSsqq8dCjXyMygJD4l3QBmbFIZkFdemQLjp6dYGqUZmcfDrc3LKy8wii_7xSjvgd9bDSyMi1hFnIpS8_IS89SLFfLTFKA6brFJMph-bGWqyd9zR-yx2ZfcKzMSv--aYVhud9kIAHuVfp89AQAA&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQs9oBKAN6BAg_EAU",
                      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Brennan%27s+of+Houston&stick=H4sIAAAAAAAAAOOQUeLWT9c3LEmuTCvLTTGSz8gvLS7Jz1NIKk3OTi1RyMksLlEoSi0uSSwtSswrKY6SLUmtSCxWSMpJTM5WyC_PS01Blj7FyAMyLSOlKqPIzMDkFCMviGuYbJSbnZJbaHmKkUs_V9-gwqjcwsL8FCOyzTBeRlmJkVkZ1JyCksqSsqq8dCjXyMygJD4l3QBmbFIZkFdemQLjp6dYGqUZmcfDrc3LKy8wii_7xSjvgd9bDSyMi1hFnIpS8_IS89SLFfLTFKA6brFJMph-bGWqyd9zR-yx2ZfcKzMSv--aYVhud9kIAHuVfp89AQAA"
                  },
                  {
                      "name": "The Breakfast Klub",
                      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsSrqqezVOWSN-G6KBB1CMjJG8x1IQ8_sqmdG5K7gWKyfOKJJmAQYa&s=0",
                      "link": "https://www.google.com/search?q=The+Breakfast+Klub&stick=H4sIAAAAAAAAAOOQUeLWT9c3LMkoKzEyKzOSz8gvLS7Jz1NIKk3OTi1RyMksLlEoSi0uSSwtSswrKY6SLUmtSCxWSMpJTM5WyC_PS01Blj7FyAMyLSOlKqPIzMDkFCMviGuYbJSbnZJbaHmKkUs_V9-gwqjcwsL8FCPE5uTKtLLcFBgP4g6oOQUllSVlVXnpUK6RmUFJfEq6AczYpDIgr7wyBcZPT7E0SjMyj4dbm5dXXmAUX_aLUd4Dv7caWBgXsQqFZKQqOBWlJmanJQKlvXNKk26xSTKYfmxlqsnfc0fssdmX3CszEr_vmmFYbnfZCACp9OnAOwEAAA&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQs9oBKAR6BAg_EAY",
                      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=The+Breakfast+Klub&stick=H4sIAAAAAAAAAOOQUeLWT9c3LMkoKzEyKzOSz8gvLS7Jz1NIKk3OTi1RyMksLlEoSi0uSSwtSswrKY6SLUmtSCxWSMpJTM5WyC_PS01Blj7FyAMyLSOlKqPIzMDkFCMviGuYbJSbnZJbaHmKkUs_V9-gwqjcwsL8FCPE5uTKtLLcFBgP4g6oOQUllSVlVXnpUK6RmUFJfEq6AczYpDIgr7wyBcZPT7E0SjMyj4dbm5dXXmAUX_aLUd4Dv7caWBgXsQqFZKQqOBWlJmanJQKlvXNKk26xSTKYfmxlqsnfc0fssdmX3CszEr_vmmFYbnfZCACp9OnAOwEAAA"
                  },
                  {
                      "name": "Coltivare",
                      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcc0fL4sL6P3uRqwQkkkcgbXLpv8jhEaNrhm5w03H_zkwf90QIUPv4&s=0",
                      "link": "https://www.google.com/search?q=Coltivare&stick=H4sIAAAAAAAAAOOQUeLRT9c3LCipLCmryks3ks_ILy0uyc9TSCpNzk4tUcjJLC5RKEotLkksLUrMKymOki1JrUgsVkjKSUzOVsgvz0tNQZY-xQg2LiOlKqPIzMDkFCMviGuYbJSbnZJbaHmKkUs_V9-gwqjcwsL8FCM3SLIkuTKtLDcFxssoKzEyK4OaA3MWlGtkZlASn5JuADM2qQzIK69MgfHTUyyN0ozM4-HW5uWVFxjFl_1ilPfA760GFsZFrJzO-TklmWWJRam32CQZTD-2MtXk77kj9tjsS-6VGYnfd80wLLe7bAQAYp2zJjMBAAA&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQs9oBKAV6BAg_EAc",
                      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Coltivare&stick=H4sIAAAAAAAAAOOQUeLRT9c3LCipLCmryks3ks_ILy0uyc9TSCpNzk4tUcjJLC5RKEotLkksLUrMKymOki1JrUgsVkjKSUzOVsgvz0tNQZY-xQg2LiOlKqPIzMDkFCMviGuYbJSbnZJbaHmKkUs_V9-gwqjcwsL8FCM3SLIkuTKtLDcFxssoKzEyK4OaA3MWlGtkZlASn5JuADM2qQzIK69MgfHTUyyN0ozM4-HW5uWVFxjFl_1ilPfA760GFsZFrJzO-TklmWWJRam32CQZTD-2MtXk77kj9tjsS-6VGYnfd80wLLe7bAQAYp2zJjMBAAA"
                  }
              ],
              "see_more_link": "https://www.google.com/search?q=Houston+bucket+list+restaurants&stick=H4sIAAAAAAAAAOOQMZLPyC8tLsnPU0gqTc5OLVHIySwuUShKLS5JLC1KzCspjpItSa1ILFZIyklMzlbIL89LTUGWPsXIo5-ub5iRUpVRZGZgcoqRF8Q1TDbKzU7JLbQ8xciln6tvUGFUbmFhfoqRGyRZklyZVpabAuNllJUYmZVBzSkoqSwpq8pLh3KNzAxK4lPSDWDGJpUBeeWVKTB-eoqlUZqReTzc2ry88gKj-LJfjPIe-L3VwMK4iJWQoltskgymH1uZavL33BF7bPYl98qMxO-7ZhiW2102AgBvjxsVOwEAAA&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ4qYDegQIPxAI",
              "see_more_serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Houston+bucket+list+restaurants&stick=H4sIAAAAAAAAAOOQMZLPyC8tLsnPU0gqTc5OLVHIySwuUShKLS5JLC1KzCspjpItSa1ILFZIyklMzlbIL89LTUGWPsXIo5-ub5iRUpVRZGZgcoqRF8Q1TDbKzU7JLbQ8xciln6tvUGFUbmFhfoqRGyRZklyZVpabAuNllJUYmZVBzSkoqSwpq8pLh3KNzAxK4lPSDWDGJpUBeeWVKTB-eoqlUZqReTzc2ry88gKj-LJfjPIe-L3VwMK4iJWQoltskgymH1uZavL33BF7bPYl98qMxO-7ZhiW2102AgBvjxsVOwEAAA"
          }
      ],
      "related_questions": [
          {
              "question": "Is Prey Houston black owned?",
              "snippet": "New Black owned restaurant in Galleria area on Post Oak. It's named Prey.",
              "title": "Prey Houston (@Prey_Houston) / Twitter",
              "link": "https://mobile.twitter.com/prey_houston",
              "displayed_link": "https://mobile.twitter.com › prey_houston",
              "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxQUJDbUpCUVhSV2JHSkVaRGxxWDFWMVMxZG9VbU41WVY5dWRVNUdOWFZMUldGblZVbGFYMk5GTURKR1IyOVRYMDlTVkU0M1NrTnRUMFV3VFU1VlpITnRWSHBoVlVOb01HWllkVTFsTXkxV2NXTjJMVXRyYTJneVJqTk5aMVoyTkd4UU1YQnJVUklXTUZwWE5GazVXRU5QWkcxMU5VNXZVREpmVDBkTFFSb2lRVVJWZVVWSFkxUnRSbkJTZDBwU1ozZDZaV0kxV210T2NXNTVjMGszYkdvMVVRIiwiZmN2IjoiMyIsImVpIjoiMFpXNFk5WENPZG11NU5vUDJfT0dLQSIsInFjIjoiQ2gxMFpYaGhjeUJpYkdGamF5QnZkMjVsWkNCeVpYTjBZWFZ5WVc1MGN4QUFmZDdNRmo4IiwicXVlc3Rpb24iOiJJcyBQcmV5IEhvdXN0b24gYmxhY2sgb3duZWQ/IiwibGsiOiJHaHRwY3lCd2NtVjVJR2h2ZFhOMGIyNGdZbXhoWTJzZ2IzZHVaV1EiLCJicyI6ImMtTlM1Skx4TEZZSUtFcXRWUERJTHkwdXljOVRTTXBKVE01V3lDX1BTMDJ4bDlqdXk2WFBwUldla1ZpaWtGbXNVSktScXBDZms1SmFYSUtzU3FFSUtKQllXcFNZVjJJdjBSakxwY0dsSEo2UkQ1SXJWa2dxelV0UHpNa3ZWMGdCY2t1QUdHYU52VVM3R1pjMGx4aGNwWGRtY1RGQzhsVzZBQ01BIiwiaWQiOiJmY18yIn0=",
              "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxQUJDbUpCUVhSV2JHSkVaRGxxWDFWMVMxZG9VbU41WVY5dWRVNUdOWFZMUldGblZVbGFYMk5GTURKR1IyOVRYMDlTVkU0M1NrTnRUMFV3VFU1VlpITnRWSHBoVlVOb01HWllkVTFsTXkxV2NXTjJMVXRyYTJneVJqTk5aMVoyTkd4UU1YQnJVUklXTUZwWE5GazVXRU5QWkcxMU5VNXZVREpmVDBkTFFSb2lRVVJWZVVWSFkxUnRSbkJTZDBwU1ozZDZaV0kxV210T2NXNTVjMGszYkdvMVVRIiwiZmN2IjoiMyIsImVpIjoiMFpXNFk5WENPZG11NU5vUDJfT0dLQSIsInFjIjoiQ2gxMFpYaGhjeUJpYkdGamF5QnZkMjVsWkNCeVpYTjBZWFZ5WVc1MGN4QUFmZDdNRmo4IiwicXVlc3Rpb24iOiJJcyBQcmV5IEhvdXN0b24gYmxhY2sgb3duZWQ%2FIiwibGsiOiJHaHRwY3lCd2NtVjVJR2h2ZFhOMGIyNGdZbXhoWTJzZ2IzZHVaV1EiLCJicyI6ImMtTlM1Skx4TEZZSUtFcXRWUERJTHkwdXljOVRTTXBKVE01V3lDX1BTMDJ4bDlqdXk2WFBwUldla1ZpaWtGbXNVSktScXBDZms1SmFYSUtzU3FFSUtKQllXcFNZVjJJdjBSakxwY0dsSEo2UkQ1SXJWa2dxelV0UHpNa3ZWMGdCY2t1QUdHYU52VVM3R1pjMGx4aGNwWGRtY1RGQzhsVzZBQ01BIiwiaWQiOiJmY18yIn0%3D"
          },
          {
              "question": "What is the oldest black owned restaurant?",
              "snippet": "Jones Bar-B-Q Diner is a barbecue joint in Marianna, Arkansas, US, that has been open since at least the 1910s. According to business guide Black Business, it is believed to be the country's oldest black-owned restaurant. In 2012 it was recognized by the James Beard Foundation as an \"American Classic\".",
              "title": "Jones Bar-B-Q Diner",
              "link": "https://en.wikipedia.org/wiki/Jones_Bar-B-Q_Diner",
              "displayed_link": "https://en.wikipedia.org › wiki › Jones_Bar-B-Q_Diner",
              "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxQUJDbUpCUVhSV2JHSkVaRGxxWDFWMVMxZG9VbU41WVY5dWRVNUdOWFZMUldGblZVbGFYMk5GTURKR1IyOVRYMDlTVkU0M1NrTnRUMFV3VFU1VlpITnRWSHBoVlVOb01HWllkVTFsTXkxV2NXTjJMVXRyYTJneVJqTk5aMVoyTkd4UU1YQnJVUklXTUZwWE5GazVXRU5QWkcxMU5VNXZVREpmVDBkTFFSb2lRVVJWZVVWSFkxUnRSbkJTZDBwU1ozZDZaV0kxV210T2NXNTVjMGszYkdvMVVRIiwiZmN2IjoiMyIsImVpIjoiMFpXNFk5WENPZG11NU5vUDJfT0dLQSIsInFjIjoiQ2gxMFpYaGhjeUJpYkdGamF5QnZkMjVsWkNCeVpYTjBZWFZ5WVc1MGN4QUFmZDdNRmo4IiwicXVlc3Rpb24iOiJXaGF0IGlzIHRoZSBvbGRlc3QgYmxhY2sgb3duZWQgcmVzdGF1cmFudD8iLCJsayI6IkdpbDNhR0YwSUdseklIUm9aU0J2YkdSbGMzUWdZbXhoWTJzZ2IzZHVaV1FnY21WemRHRjFjbUZ1ZEEiLCJicyI6ImMtTlM1Skx4TEZZSUtFcXRWUERJTHkwdXljOVRTTXBKVE01V3lDX1BTMDJ4bDlqdXk2WFBwUldla1ZpaWtGbXNVSktScXBDZms1SmFYSUtzU3FFSUtKQllXcFNZVjJJdjBSakxwY0dsSEo2UkQ1SXJWa2dxelV0UHpNa3ZWMGdCY2t1QUdHYU52VVM3R1pjMGx4aGNwWGRtY1RGQzhsVzZBQ01BIiwiaWQiOiJmY18yIn0=",
              "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxQUJDbUpCUVhSV2JHSkVaRGxxWDFWMVMxZG9VbU41WVY5dWRVNUdOWFZMUldGblZVbGFYMk5GTURKR1IyOVRYMDlTVkU0M1NrTnRUMFV3VFU1VlpITnRWSHBoVlVOb01HWllkVTFsTXkxV2NXTjJMVXRyYTJneVJqTk5aMVoyTkd4UU1YQnJVUklXTUZwWE5GazVXRU5QWkcxMU5VNXZVREpmVDBkTFFSb2lRVVJWZVVWSFkxUnRSbkJTZDBwU1ozZDZaV0kxV210T2NXNTVjMGszYkdvMVVRIiwiZmN2IjoiMyIsImVpIjoiMFpXNFk5WENPZG11NU5vUDJfT0dLQSIsInFjIjoiQ2gxMFpYaGhjeUJpYkdGamF5QnZkMjVsWkNCeVpYTjBZWFZ5WVc1MGN4QUFmZDdNRmo4IiwicXVlc3Rpb24iOiJXaGF0IGlzIHRoZSBvbGRlc3QgYmxhY2sgb3duZWQgcmVzdGF1cmFudD8iLCJsayI6IkdpbDNhR0YwSUdseklIUm9aU0J2YkdSbGMzUWdZbXhoWTJzZ2IzZHVaV1FnY21WemRHRjFjbUZ1ZEEiLCJicyI6ImMtTlM1Skx4TEZZSUtFcXRWUERJTHkwdXljOVRTTXBKVE01V3lDX1BTMDJ4bDlqdXk2WFBwUldla1ZpaWtGbXNVSktScXBDZms1SmFYSUtzU3FFSUtKQllXcFNZVjJJdjBSakxwY0dsSEo2UkQ1SXJWa2dxelV0UHpNa3ZWMGdCY2t1QUdHYU52VVM3R1pjMGx4aGNwWGRtY1RGQzhsVzZBQ01BIiwiaWQiOiJmY18yIn0%3D"
          },
          {
              "question": "Who owns bungalow downtown Houston?",
              "snippet": "“Bungalow Downtown has exceeded expectations in soft opening and the restaurant is looking forward to continuing to provide an elevated dining experience with our grand opening before 2023,” owners Martins and Reitzel tell Houstonia.",
              "title": "Martins and Reitzel tell",
              "date": "Oct 18, 2022",
              "link": "https://www.houstoniamag.com/eat-and-drink/bungalow-downtown-houston-restaurant-review",
              "displayed_link": "https://www.houstoniamag.com › eat-and-drink › bungalo...",
              "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsIz6GELro62jZmachbqc0r9z2_t_-u66WaMsxbKJVQ&s",
              "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxQUJDbUpCUVhSV2JHSkVaRGxxWDFWMVMxZG9VbU41WVY5dWRVNUdOWFZMUldGblZVbGFYMk5GTURKR1IyOVRYMDlTVkU0M1NrTnRUMFV3VFU1VlpITnRWSHBoVlVOb01HWllkVTFsTXkxV2NXTjJMVXRyYTJneVJqTk5aMVoyTkd4UU1YQnJVUklXTUZwWE5GazVXRU5QWkcxMU5VNXZVREpmVDBkTFFSb2lRVVJWZVVWSFkxUnRSbkJTZDBwU1ozZDZaV0kxV210T2NXNTVjMGszYkdvMVVRIiwiZmN2IjoiMyIsImVpIjoiMFpXNFk5WENPZG11NU5vUDJfT0dLQSIsInFjIjoiQ2gxMFpYaGhjeUJpYkdGamF5QnZkMjVsWkNCeVpYTjBZWFZ5WVc1MGN4QUFmZDdNRmo4IiwicXVlc3Rpb24iOiJXaG8gb3ducyBidW5nYWxvdyBkb3dudG93biBIb3VzdG9uPyIsImxrIjoiYzVOU0tzX0lWOGd2enl0V1NDck5TMF9NeVM5WFNBRnlTNEJZSVNPX3RMZ2tQdzhBIiwiYnMiOiJjLU5TNUpMeExGWUlLRXF0VlBESUx5MHV5YzlUU01wSlRNNVd5Q19QUzAyeGw5anV5NlhQcFJXZWtWaWlrRm1zVUpLUnFwQ2ZrNUphWElLc1NxRUlLSkJZV3BTWVYySXYwUmpMcGNHbEhKNlJENUlyVmtncXpVdFB6TWt2VjBnQmNrdUFHR2FOdlVTN0daYzBseGhjcFhkbWNURkM4bFc2QUNNQSIsImlkIjoiZmNfMiJ9",
              "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxQUJDbUpCUVhSV2JHSkVaRGxxWDFWMVMxZG9VbU41WVY5dWRVNUdOWFZMUldGblZVbGFYMk5GTURKR1IyOVRYMDlTVkU0M1NrTnRUMFV3VFU1VlpITnRWSHBoVlVOb01HWllkVTFsTXkxV2NXTjJMVXRyYTJneVJqTk5aMVoyTkd4UU1YQnJVUklXTUZwWE5GazVXRU5QWkcxMU5VNXZVREpmVDBkTFFSb2lRVVJWZVVWSFkxUnRSbkJTZDBwU1ozZDZaV0kxV210T2NXNTVjMGszYkdvMVVRIiwiZmN2IjoiMyIsImVpIjoiMFpXNFk5WENPZG11NU5vUDJfT0dLQSIsInFjIjoiQ2gxMFpYaGhjeUJpYkdGamF5QnZkMjVsWkNCeVpYTjBZWFZ5WVc1MGN4QUFmZDdNRmo4IiwicXVlc3Rpb24iOiJXaG8gb3ducyBidW5nYWxvdyBkb3dudG93biBIb3VzdG9uPyIsImxrIjoiYzVOU0tzX0lWOGd2enl0V1NDck5TMF9NeVM5WFNBRnlTNEJZSVNPX3RMZ2tQdzhBIiwiYnMiOiJjLU5TNUpMeExGWUlLRXF0VlBESUx5MHV5YzlUU01wSlRNNVd5Q19QUzAyeGw5anV5NlhQcFJXZWtWaWlrRm1zVUpLUnFwQ2ZrNUphWElLc1NxRUlLSkJZV3BTWVYySXYwUmpMcGNHbEhKNlJENUlyVmtncXpVdFB6TWt2VjBnQmNrdUFHR2FOdlVTN0daYzBseGhjcFhkbWNURkM4bFc2QUNNQSIsImlkIjoiZmNfMiJ9"
          },
          {
              "question": "Who owns Kiss Houston?",
              "snippet": "Thomas Ford, co-owner of the Profit Hospitality Group, and his business partners spent time exploring southern cuisines, and felt like the concept KISS now provides was exactly what Houston was missing.",
              "title": "Thomas Ford",
              "date": "Aug 24, 2021",
              "link": "https://www.houstoniamag.com/eat-and-drink/2021/08/kiss-houston-offers-upscale-ambiance-cajun-cuisine",
              "displayed_link": "https://www.houstoniamag.com › eat-and-drink › 2021/08",
              "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_b1oDblM21GI4SLul9pspzm13fFUtZNTVZQYiT27&s",
              "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxQUJDbUpCUVhSV2JHSkVaRGxxWDFWMVMxZG9VbU41WVY5dWRVNUdOWFZMUldGblZVbGFYMk5GTURKR1IyOVRYMDlTVkU0M1NrTnRUMFV3VFU1VlpITnRWSHBoVlVOb01HWllkVTFsTXkxV2NXTjJMVXRyYTJneVJqTk5aMVoyTkd4UU1YQnJVUklXTUZwWE5GazVXRU5QWkcxMU5VNXZVREpmVDBkTFFSb2lRVVJWZVVWSFkxUnRSbkJTZDBwU1ozZDZaV0kxV210T2NXNTVjMGszYkdvMVVRIiwiZmN2IjoiMyIsImVpIjoiMFpXNFk5WENPZG11NU5vUDJfT0dLQSIsInFjIjoiQ2gxMFpYaGhjeUJpYkdGamF5QnZkMjVsWkNCeVpYTjBZWFZ5WVc1MGN4QUFmZDdNRmo4IiwicXVlc3Rpb24iOiJXaG8gb3ducyBLaXNzIEhvdXN0b24/IiwibGsiOiJHaFYzYUc4Z2IzZHVjeUJyYVhOeklHaHZkWE4wYjI0IiwiYnMiOiJjLU5TNUpMeExGWUlLRXF0VlBESUx5MHV5YzlUU01wSlRNNVd5Q19QUzAyeGw5anV5NlhQcFJXZWtWaWlrRm1zVUpLUnFwQ2ZrNUphWElLc1NxRUlLSkJZV3BTWVYySXYwUmpMcGNHbEhKNlJENUlyVmtncXpVdFB6TWt2VjBnQmNrdUFHR2FOdlVTN0daYzBseGhjcFhkbWNURkM4bFc2QUNNQSIsImlkIjoiZmNfMiJ9",
              "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxQUJDbUpCUVhSV2JHSkVaRGxxWDFWMVMxZG9VbU41WVY5dWRVNUdOWFZMUldGblZVbGFYMk5GTURKR1IyOVRYMDlTVkU0M1NrTnRUMFV3VFU1VlpITnRWSHBoVlVOb01HWllkVTFsTXkxV2NXTjJMVXRyYTJneVJqTk5aMVoyTkd4UU1YQnJVUklXTUZwWE5GazVXRU5QWkcxMU5VNXZVREpmVDBkTFFSb2lRVVJWZVVWSFkxUnRSbkJTZDBwU1ozZDZaV0kxV210T2NXNTVjMGszYkdvMVVRIiwiZmN2IjoiMyIsImVpIjoiMFpXNFk5WENPZG11NU5vUDJfT0dLQSIsInFjIjoiQ2gxMFpYaGhjeUJpYkdGamF5QnZkMjVsWkNCeVpYTjBZWFZ5WVc1MGN4QUFmZDdNRmo4IiwicXVlc3Rpb24iOiJXaG8gb3ducyBLaXNzIEhvdXN0b24%2FIiwibGsiOiJHaFYzYUc4Z2IzZHVjeUJyYVhOeklHaHZkWE4wYjI0IiwiYnMiOiJjLU5TNUpMeExGWUlLRXF0VlBESUx5MHV5YzlUU01wSlRNNVd5Q19QUzAyeGw5anV5NlhQcFJXZWtWaWlrRm1zVUpLUnFwQ2ZrNUphWElLc1NxRUlLSkJZV3BTWVYySXYwUmpMcGNHbEhKNlJENUlyVmtncXpVdFB6TWt2VjBnQmNrdUFHR2FOdlVTN0daYzBseGhjcFhkbWNURkM4bFc2QUNNQSIsImlkIjoiZmNfMiJ9"
          }
      ],
      "organic_results": [
          {
              "position": 1,
              "title": "70 Black-Owned Restaurants In Houston To Dig Into This ...",
              "link": "https://secrethouston.com/black-owned-restaurants-houston/",
              "displayed_link": "https://secrethouston.com › Food & Drink",
              "thumbnail": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/adca21e56e65e48674b8eb3fa38da99ae442105c1f71269827c89a9d51e10df8.jpeg",
              "date": "Feb 18, 2022",
              "snippet": "1. Blessed & Highly Flavored · 2. Cool Runnings Jamaican Grill · 3. Dandelion Cafe · 4. Drip Coffee Cafe · 5. Kamp · 6. Mikki's Cafe · 7. Miss Patty's ...",
              "about_this_result": {
                  "source": {
                      "description": "secrethouston.com was first indexed by Google more than 10 years ago",
                      "source_info_link": "https://secrethouston.com/black-owned-restaurants-houston/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/adca21e56e65e48674b8eb3fa38da99a7d57df4a4b826c1dde9a8e7a8a5675f92a966fc45adba9333fc549648e8cabbd.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://secrethouston.com/black-owned-restaurants-houston/&tbm=ilp&ilps=ADNMCi0zBm-GH038ZrJqhBEjshl7b5kQUA",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi0zBm-GH038ZrJqhBEjshl7b5kQUA&q=About+https%3A%2F%2Fsecrethouston.com%2Fblack-owned-restaurants-houston%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:TSGMlwB1o0UJ:https://secrethouston.com/black-owned-restaurants-houston/&cd=18&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 2,
              "title": "Top 100+ Black-owned Restaurants in Greater Houston",
              "link": "https://365thingsinhouston.com/2022/02/15/black-owned-restaurants-food-trucks-greater-houston-2022/",
              "displayed_link": "https://365thingsinhouston.com › ... › Featured",
              "date": "Feb 15, 2022",
              "snippet": "Fifth Ward & the Heights ; 5th Level Restaurant & Cafe in Fifth Ward ; Fainmous BBQ in First Ward ; Gus's World Famous Fried Chicken on Washington ...",
              "snippet_highlighted_words": [
                  "Restaurant"
              ],
              "sitelinks": {
                  "inline": [
                      {
                          "title": "Fifth Ward & The Heights",
                          "link": "https://365thingsinhouston.com/2022/02/15/black-owned-restaurants-food-trucks-greater-houston-2022/#:~:text=Fifth%20Ward%20%26%20the%20Heights"
                      },
                      {
                          "title": "Montrose, Upper Kirby & West...",
                          "link": "https://365thingsinhouston.com/2022/02/15/black-owned-restaurants-food-trucks-greater-houston-2022/#:~:text=Montrose%2C%20Upper%20Kirby%20%26%20West%20Houston"
                      },
                      {
                          "title": "Third Ward & Museum District",
                          "link": "https://365thingsinhouston.com/2022/02/15/black-owned-restaurants-food-trucks-greater-houston-2022/#:~:text=Third%20Ward%20%26%20Museum%20District"
                      }
                  ]
              },
              "about_this_result": {
                  "source": {
                      "description": "365thingsinhouston.com was first indexed by Google in February 2013",
                      "source_info_link": "https://365thingsinhouston.com/2022/02/15/black-owned-restaurants-food-trucks-greater-houston-2022/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/adca21e56e65e48674b8eb3fa38da99a2048acca31aff07f03c4011febfc3b45a1916709a8ca01264580766787221eea.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://365thingsinhouston.com/2022/02/15/black-owned-restaurants-food-trucks-greater-houston-2022/&tbm=ilp&ilps=ADNMCi1N2a2IF0wkqZGJuDuVRRxf4d6UWQ",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi1N2a2IF0wkqZGJuDuVRRxf4d6UWQ&q=About+https%3A%2F%2F365thingsinhouston.com%2F2022%2F02%2F15%2Fblack-owned-restaurants-food-trucks-greater-houston-2022%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:2kMxAIWjPIwJ:https://365thingsinhouston.com/2022/02/15/black-owned-restaurants-food-trucks-greater-houston-2022/&cd=19&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 3,
              "title": "Black-Owned Restaurants in Houston: Essential Places You ...",
              "link": "https://www.thrillist.com/eat/houston/black-owned-restaurants-in-houston",
              "displayed_link": "https://www.thrillist.com › ... › Black Owned Businesses",
              "snippet": "18 Essential Black-Owned Restaurants You Should Know in Houston · Twisted Grilled Cheese · Taste Bar + Kitchen · Thirteen Houston · Craft Burger · ChòpnBlọk · Mico's ...",
              "snippet_highlighted_words": [
                  "Black",
                  "Owned Restaurants"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Thrillist is an online media website covering food, drink, travel and entertainment. The company was founded in 2004 and is based in New York City, United States.",
                      "source_info_link": "https://www.thrillist.com/eat/houston/black-owned-restaurants-in-houston",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/adca21e56e65e48674b8eb3fa38da99aa309194be78cfec8c8b292ad320ed4729c3417d13724d3e15f51acd83168865e.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.thrillist.com/eat/houston/black-owned-restaurants-in-houston&tbm=ilp&ilps=ADNMCi3UC_nxMSe1_NNhlFlPqNvxHIdW1g",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3UC_nxMSe1_NNhlFlPqNvxHIdW1g&q=About+https%3A%2F%2Fwww.thrillist.com%2Feat%2Fhouston%2Fblack-owned-restaurants-in-houston"
          },
          {
              "position": 4,
              "title": "Black-Owned Restaurants in Texas",
              "link": "https://txrestaurant.org/TXBlackOwnedRestaurants",
              "displayed_link": "https://txrestaurant.org › TXBlackOwnedRestaurants",
              "snippet": "Down South CaJJun Eats 15630 Vision Dr, Pflugerville, TX 78660 ; Emmer & Rye SkyHouse, 51 Rainey St UNIT 110, Austin, TX 78701 ; Fowler's Smokin' Soul Food ( ...",
              "about_this_result": {
                  "source": {
                      "description": "txrestaurant.org was first indexed by Google more than 10 years ago",
                      "source_info_link": "https://txrestaurant.org/TXBlackOwnedRestaurants",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/adca21e56e65e48674b8eb3fa38da99a7fb29ba721fea6c2b5bb5b7122ad235b596153a8808d6560c0d3c80903a241f2.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://txrestaurant.org/TXBlackOwnedRestaurants&tbm=ilp&ilps=ADNMCi3nZY67K6IDLsPiPxCZQXUck3_V5w",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3nZY67K6IDLsPiPxCZQXUck3_V5w&q=About+https%3A%2F%2Ftxrestaurant.org%2FTXBlackOwnedRestaurants",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:chbt4AtkzGcJ:https://txrestaurant.org/TXBlackOwnedRestaurants&cd=21&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 5,
              "title": "A Guide to Dallas' Black-Owned Restaurants and Bars",
              "link": "https://www.dmagazine.com/food-drink/2022/02/a-guide-to-dallas-black-owned-restaurants-and-bars/",
              "displayed_link": "https://www.dmagazine.com › food-drink › 2022/02",
              "date": "Feb 16, 2022",
              "snippet": "Where to Eat & Drink ; DJ's Steakhouse · Meridian 5650 Village Glen Dr., Northeast Dallas · Pangea ; Baby Back Shak · Evan's Bar B Que and Catfish",
              "about_this_result": {
                  "source": {
                      "description": "D Magazine is a monthly magazine covering Dallas–Fort Worth. It is headquartered in Downtown Dallas.\nD Magazine covers a range of topics including politics, business, food, fashion and lifestyle in the city of Dallas. The first issue was published in October 1974 by its founders, Wick Allison and Jim Atkinson.",
                      "source_info_link": "https://www.dmagazine.com/food-drink/2022/02/a-guide-to-dallas-black-owned-restaurants-and-bars/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/adca21e56e65e48674b8eb3fa38da99a75e343a5bbb6f8f2cc9d5c6f75add012c9d91c199a6ad5466e5463f6bdc9a53e.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.dmagazine.com/food-drink/2022/02/a-guide-to-dallas-black-owned-restaurants-and-bars/&tbm=ilp&ilps=ADNMCi0e_88BRcuTzTT8MnvJ2e4xXSsk-Q",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi0e_88BRcuTzTT8MnvJ2e4xXSsk-Q&q=About+https%3A%2F%2Fwww.dmagazine.com%2Ffood-drink%2F2022%2F02%2Fa-guide-to-dallas-black-owned-restaurants-and-bars%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:mLh8hkKz9LEJ:https://www.dmagazine.com/food-drink/2022/02/a-guide-to-dallas-black-owned-restaurants-and-bars/&cd=22&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 6,
              "title": "Top 10 Best Black Owned Restaurants in Houston, TX - Yelp",
              "link": "https://www.yelp.com/search?find_desc=black+owned+restaurants&find_loc=Houston%2C+TX",
              "displayed_link": "https://www.yelp.com › Houston, TX › Restaurants",
              "snippet": "Best black owned restaurants near me in Houston, Texas ; Bungalow Downtown Dining. 0.2 mi. 118 reviews ; Kulture. 0.6 mi. 369 reviews ; Lucille's. 3.1 mi. 1532 ...",
              "snippet_highlighted_words": [
                  "black owned restaurants",
                  "Texas"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Yelp Inc. is an American company that develops the Yelp.com website and the Yelp mobile app, which publish crowd-sourced reviews about businesses. It also operates Yelp Guest Manager, a table reservation service. It is headquartered in San Francisco, California.",
                      "source_info_link": "https://www.yelp.com/search?find_desc=black+owned+restaurants&find_loc=Houston%2C+TX",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/adca21e56e65e48674b8eb3fa38da99af524a5e96e62b3d8edc3cf091775a5dfe81fe9d14bba5123506526afade7ba42.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://m.yelp.com/search?find_desc%3Dblack%2Bowned%2Brestaurants%26find_loc%3DHouston%252C%2BTX&tbm=ilp&ilps=ADNMCi1_xGsY9GHoQn8xHZ5YkZaew6REmg",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi1_xGsY9GHoQn8xHZ5YkZaew6REmg&q=About+https%3A%2F%2Fm.yelp.com%2Fsearch%3Ffind_desc%3Dblack%2Bowned%2Brestaurants%26find_loc%3DHouston%252C%2BTX",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:Oog8i8mCAgkJ:https://www.yelp.com/search%3Ffind_desc%3Dblack%2Bowned%2Brestaurants%26find_loc%3DHouston%252C%2BTX&cd=23&hl=en&ct=clnk&gl=us",
              "related_questions": [
                  {
                      "question": "What are some highly rated black owned restaurants in Houston, TX?",
                      "snippet": "These are some highly rated black owned restaurants in Houston, TX:Houstatlantavegan (5/5)K R A C K Kitchen (5/5)Bobobs (5/5)That's My Dog (5/5)Brown Sugar Cafe and Books (5/5)"
                  },
                  {
                      "question": "What are some black owned restaurants with a large number of reviews in Houston, TX?",
                      "snippet": "These are some black owned restaurants with a large number of reviews in Houston, TX:The Breakfast Klub (5599 reviews)Turkey Leg Hut (2302 reviews)Lucille's (1532 reviews)Taste Bar + Kitchen (1178 reviews)Mico's Hot Chicken (927 reviews)"
                  }
              ]
          },
          {
              "position": 7,
              "title": "10 New Black-Owned Restaurants In Houston To Try In 2022",
              "link": "https://blackrestaurantweeks.com/new-black-owned-restaurants-houston-2022/",
              "displayed_link": "https://blackrestaurantweeks.com › new-black-owned-re...",
              "snippet": "29 Mar 10 New Black-Owned Restaurants in Houston to Try in 2022 · By Jada F. · ChòpnBlọk | 401 Franklin Street (POST HTX) · Esther's Cajun Café | 5007 North ...",
              "snippet_highlighted_words": [
                  "Black",
                  "Owned Restaurants"
              ],
              "sitelinks": {
                  "inline": [
                      {
                          "title": "By Jada F. Smith",
                          "link": "https://blackrestaurantweeks.com/new-black-owned-restaurants-houston-2022/#:~:text=By%20Jada%20F.%20Smith"
                      },
                      {
                          "title": "Greasy Spoon | 10009...",
                          "link": "https://blackrestaurantweeks.com/new-black-owned-restaurants-houston-2022/#:~:text=Greasy%20Spoon%20%7C%2010009%20Broadway%20Street"
                      },
                      {
                          "title": "Stuff'd Wings | 401 Richmond...",
                          "link": "https://blackrestaurantweeks.com/new-black-owned-restaurants-houston-2022/#:~:text=Stuff%27d%20Wings%20%7C%20401%20Richmond%20Avenue"
                      }
                  ]
              },
              "about_this_result": {
                  "source": {
                      "description": "blackrestaurantweeks.com was first indexed by Google in April 2019",
                      "source_info_link": "https://blackrestaurantweeks.com/new-black-owned-restaurants-houston-2022/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/adca21e56e65e48674b8eb3fa38da99aea54731b8cda74ff73a66b60ea83cf7a14e64165c673d051ff206774a1c6009c.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://blackrestaurantweeks.com/new-black-owned-restaurants-houston-2022/&tbm=ilp&ilps=ADNMCi07AlRZNzks_y4WfjCw5HkutBR_dg",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi07AlRZNzks_y4WfjCw5HkutBR_dg&q=About+https%3A%2F%2Fblackrestaurantweeks.com%2Fnew-black-owned-restaurants-houston-2022%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:ZoDa75LuNcoJ:https://blackrestaurantweeks.com/new-black-owned-restaurants-houston-2022/&cd=24&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 8,
              "title": "21 Black-Owned Restaurants in Houston to Support and Eat ...",
              "link": "https://www.papercitymag.com/restaurants/houston-black-owned-restaurants-must-visits-lucilles-breakfast-klub-rays-bbq/",
              "displayed_link": "https://www.papercitymag.com › restaurants › houston-...",
              "about_this_result": {
                  "source": {
                      "description": "papercitymag.com was first indexed by Google more than 10 years ago",
                      "source_info_link": "https://www.papercitymag.com/restaurants/houston-black-owned-restaurants-must-visits-lucilles-breakfast-klub-rays-bbq/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/adca21e56e65e48674b8eb3fa38da99af6ccfe4ac0d3212fbdf11b595e07a539258c1a42fad53f5a02d1019a4668153c.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.papercitymag.com/restaurants/houston-black-owned-restaurants-must-visits-lucilles-breakfast-klub-rays-bbq/&tbm=ilp&ilps=ADNMCi2adBN5V5hSY6pMK2hMhYLmLS7YyQ",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi2adBN5V5hSY6pMK2hMhYLmLS7YyQ&q=About+https%3A%2F%2Fwww.papercitymag.com%2Frestaurants%2Fhouston-black-owned-restaurants-must-visits-lucilles-breakfast-klub-rays-bbq%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:u_n4XsxLYe4J:https://www.papercitymag.com/restaurants/houston-black-owned-restaurants-must-visits-lucilles-breakfast-klub-rays-bbq/&cd=25&hl=en&ct=clnk&gl=us",
              "rich_snippet_list": [
                  "Lucille's",
                  "Glazed: The Doughnut Cafe",
                  "Onion Creek Cafe",
                  "Blue Nile Ethiopian Restaurant",
                  "Hank's Ice Cream Parlor",
                  "Gatlin's BBQ",
                  "Soul Food Vegan",
                  "Taste of Nigeria",
                  "Upper Kirby Bistro",
                  "Craft Burger at Finn Hall",
                  "Ray's Real Pit BBQ Shack",
                  "the breakfast klub"
              ]
          },
          {
              "position": 9,
              "title": "25 Black-Owned Restaurants in Houston (Diverse & Delicious!)",
              "link": "https://www.townandtourist.com/black-owned-restaurants-in-houston/",
              "displayed_link": "https://www.townandtourist.com › black-owned-restaur...",
              "snippet": "Phil and Derek's restaurant is a popular black restaurant located at 1701 Webster Street, Houston, Texas, in the United States of America. It is popular for its ...",
              "snippet_highlighted_words": [
                  "restaurant",
                  "black restaurant",
                  "Texas"
              ],
              "sitelinks": {
                  "inline": [
                      {
                          "title": "1. Phil And Derek's...",
                          "link": "https://www.townandtourist.com/black-owned-restaurants-in-houston/#:~:text=1.%20Phil%20and%20Derek%27s%20Restaurant,-Credit%3A%20Vibe%20Houston"
                      },
                      {
                          "title": "2. Blue Nile",
                          "link": "https://www.townandtourist.com/black-owned-restaurants-in-houston/#:~:text=2.%20Blue%20Nile,-Credit%3A%20Houstonia"
                      },
                      {
                          "title": "3. Mikki's Soulfood Cafe",
                          "link": "https://www.townandtourist.com/black-owned-restaurants-in-houston/#:~:text=3.%20Mikki%27s%20SoulFood%20Cafe,-Credit%3A%20Houston%20Press"
                      }
                  ]
              },
              "about_this_result": {
                  "source": {
                      "description": "townandtourist.com was first indexed by Google in October 2016",
                      "source_info_link": "https://www.townandtourist.com/black-owned-restaurants-in-houston/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b895d17d171a8a6f721112/images/adca21e56e65e48674b8eb3fa38da99a51150c3ab0d67de9b952790e50436c78a64ef393f0c25610bea862ce05bdfa55.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.townandtourist.com/black-owned-restaurants-in-houston/&tbm=ilp&ilps=ADNMCi0b7Fz-CreJViknt7-S2E47rVae4Q",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi0b7Fz-CreJViknt7-S2E47rVae4Q&q=About+https%3A%2F%2Fwww.townandtourist.com%2Fblack-owned-restaurants-in-houston%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:PPeuTHbWIAIJ:https://www.townandtourist.com/black-owned-restaurants-in-houston/&cd=26&hl=en&ct=clnk&gl=us"
          }
      ],
      "related_searches": [
          {
              "query": "black owned restaurants near me",
              "link": "https://www.google.com/search?q=Black+owned+restaurants+near+me&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ1QJ6BAhoEAE"
          },
          {
              "query": "black-owned restaurant houston",
              "link": "https://www.google.com/search?q=Black-owned+restaurant+Houston&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ1QJ6BAhkEAE"
          },
          {
              "query": "50 black-owned restaurants in houston",
              "link": "https://www.google.com/search?q=50+black-owned+restaurants+in+houston&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ1QJ6BAhjEAE"
          },
          {
              "query": "upscale black-owned restaurants houston",
              "link": "https://www.google.com/search?q=Upscale+Black-owned+restaurants+Houston&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ1QJ6BAhhEAE"
          },
          {
              "query": "black-owned restaurants houston with live music",
              "link": "https://www.google.com/search?q=Black-owned+restaurants+Houston+with+live+music&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ1QJ6BAhpEAE"
          },
          {
              "query": "new black-owned restaurants houston",
              "link": "https://www.google.com/search?q=New+Black-owned+restaurants+Houston&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ1QJ6BAhnEAE"
          },
          {
              "query": "black-owned seafood restaurants houston",
              "link": "https://www.google.com/search?q=Black-owned+seafood+restaurants+Houston&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ1QJ6BAhlEAE"
          },
          {
              "query": "black-owned restaurants houston brunch",
              "link": "https://www.google.com/search?q=Black-owned+restaurants+Houston+brunch&sa=X&ved=2ahUKEwiV78rg9LP8AhVZF1kFHdu5AQUQ1QJ6BAhiEAE"
          }
      ],
      "pagination": {
          "current": 1,
          "next": "https://www.google.com/search?q=texas+black-owned+restaurants&oq=texas+black-owned+restaurants&start=10&sourceid=chrome&ie=UTF-8",
          "other_pages": {
              "2": "https://www.google.com/search?q=texas+black-owned+restaurants&oq=texas+black-owned+restaurants&start=10&sourceid=chrome&ie=UTF-8",
              "3": "https://www.google.com/search?q=texas+black-owned+restaurants&oq=texas+black-owned+restaurants&start=20&sourceid=chrome&ie=UTF-8",
              "4": "https://www.google.com/search?q=texas+black-owned+restaurants&oq=texas+black-owned+restaurants&start=30&sourceid=chrome&ie=UTF-8",
              "5": "https://www.google.com/search?q=texas+black-owned+restaurants&oq=texas+black-owned+restaurants&start=40&sourceid=chrome&ie=UTF-8"
          }
      },
      "serpapi_pagination": {
          "current": 1,
          "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black-owned+restaurants&start=10",
          "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black-owned+restaurants&start=10",
          "other_pages": {
              "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black-owned+restaurants&start=10",
              "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black-owned+restaurants&start=20",
              "4": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black-owned+restaurants&start=30",
              "5": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+black-owned+restaurants&start=40"
          }
      }
    }, 
      {
      "search_metadata": {
          "id": "63b8960cb5961e98c70dbb70",
          "status": "Success",
          "json_endpoint": "https://serpapi.com/searches/49553599e58e5c33/63b8960cb5961e98c70dbb70.json",
          "created_at": "2023-01-06 21:43:40 UTC",
          "processed_at": "2023-01-06 21:43:40 UTC",
          "google_url": "https://www.google.com/search?q=texas+indigenous+restaurants&oq=texas+indigenous+restaurants&sourceid=chrome&ie=UTF-8",
          "raw_html_file": "https://serpapi.com/searches/49553599e58e5c33/63b8960cb5961e98c70dbb70.html",
          "total_time_taken": 1.67
      },
      "search_parameters": {
          "engine": "google",
          "q": "texas indigenous restaurants",
          "google_domain": "google.com",
          "device": "desktop"
      },
      "search_information": {
          "organic_results_state": "Results for exact spelling",
          "query_displayed": "texas indigenous restaurants",
          "total_results": 7200000,
          "time_taken_displayed": 0.49,
          "menu_items": [
              {
                  "position": 1,
                  "title": "All"
              },
              {
                  "position": 2,
                  "title": "Maps",
                  "link": "https://maps.google.com/maps?q=texas+indigenous+restaurants&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ_AUoAXoECAEQAw"
              },
              {
                  "position": 3,
                  "title": "News",
                  "link": "https://www.google.com/search?q=texas+indigenous+restaurants&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ_AUoAnoECAEQBA",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+restaurants&tbm=nws"
              },
              {
                  "position": 4,
                  "title": "Images",
                  "link": "https://www.google.com/search?q=texas+indigenous+restaurants&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ_AUoA3oECAEQBQ",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+restaurants&tbm=isch"
              },
              {
                  "position": 5,
                  "title": "Shopping",
                  "link": "https://www.google.com/search?q=texas+indigenous+restaurants&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ_AUoBHoECAEQBg",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+restaurants&tbm=shop"
              }
          ]
      },
      "local_map": {
          "link": "https://www.google.com/search?q=texas+indigenous+restaurants&npsic=0&rflfq=1&rldoc=1&rllag=33094092,-97335238,42204&tbm=lcl&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQtgN6BAhnEAE",
          "image": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/df8733334c65d4205fd4d0ace5cc49a8.png",
          "gps_coordinates": {
              "latitude": 33.094092,
              "longitude": -97.335238,
              "altitude": 42204
          }
      },
      "local_results": {
          "more_locations_link": "https://www.google.com/search?tbs=lf:1,lf_ui:9&tbm=lcl&q=texas+indigenous+restaurants&rflfq=1&num=10&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQjGp6BAhoEAI",
          "places": [
              {
                  "position": 1,
                  "title": "NATIVE Coffee + Kitchen",
                  "place_id": "17666389751779069342",
                  "lsig": "AB86z5WOlDa0YOWW556GG-QlCL4x",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5WOlDa0YOWW556GG-QlCL4x&ludocid=17666389751779069342&q=texas+indigenous+restaurants&tbm=lcl",
                  "reviews": 412,
                  "price": "$$",
                  "type": "Restaurant",
                  "hours": "Laid-back cafe for light fare & drinks",
                  "address": "Fort Worth, TX",
                  "thumbnail": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/1e5fc43951d786b4e9205397f44de4cdb4042a28f2b78804612ccb7103769bb5846a97f5b8b931e7.jpeg",
                  "gps_coordinates": {
                      "latitude": 32.915207,
                      "longitude": -97.31952
                  }
              },
              {
                  "position": 2,
                  "title": "Everest Restaurant",
                  "place_id": "16554335825459805227",
                  "lsig": "AB86z5VX0apiOfI82o9ShShcxsjt",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5VX0apiOfI82o9ShShcxsjt&ludocid=16554335825459805227&q=texas+indigenous+restaurants&tbm=lcl",
                  "reviews": 1200,
                  "price": "$",
                  "type": "Nepalese",
                  "hours": "\"Pork Sekuwa is better than all other nepali and Indian restaurants.\"",
                  "address": "Irving, TX · In Sterling Plaza",
                  "thumbnail": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/1e5fc43951d786b4e9205397f44de4cd61138d18f3d314c27146165ccb5dd437478dca4b8cd5d44d.png",
                  "gps_coordinates": {
                      "latitude": 32.846924,
                      "longitude": -96.9911
                  }
              },
              {
                  "position": 3,
                  "title": "Haveli Indian Restaurant",
                  "place_id": "7113759127766216297",
                  "lsig": "AB86z5WsIXRUTP45hAGfrxahxOJK",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5WsIXRUTP45hAGfrxahxOJK&ludocid=7113759127766216297&q=texas+indigenous+restaurants&tbm=lcl",
                  "description": "Dine-in·Takeout·No delivery",
                  "reviews": 31,
                  "type": "Restaurant",
                  "hours": "Dine-in·Takeout·No delivery",
                  "address": "Alvord, TX",
                  "thumbnail": "https://lh5.googleusercontent.com/p/AF1QipOBOhDykQnovwmie9LRKHvboJZHAvou3VeCrU_9=w92-h92-n-k-no",
                  "gps_coordinates": {
                      "latitude": 33.34133,
                      "longitude": -97.679344
                  }
              }
          ]
      },
      "related_questions": [
          {
              "question": "What did indigenous people of Texas eat?",
              "snippet": "Archaic (as well as later) Indians used many different kinds of wild plants for food. In the drier parts of Texas, some of the most commonly eaten were the bulbs from plants of the agave family. Other frequently eaten plant foods were mesquite beans, acorns, pecans, plums, grapes, persimmon and prickly pear fruits.",
              "title": "Learn About Texas Indians",
              "link": "https://tpwd.texas.gov/publications/pwdpubs/media/pwd_bk_p4000_0016.pdf",
              "displayed_link": "https://tpwd.texas.gov › media › pwd_bk_p4000_0016",
              "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkNlamg2WTFCNlRHSXRTVkJFZGxKWlFuTlhXbTVwZEdaQ2VqZFdiRWcwY0dVd2VrZG5jVUpXU21kT2JGY3pTbXgwTkY5aVRYSkdNMEZTV25aSlRWUmphREJyZGxZd1p6VlhMVE5QYmpaTlJIZDNiMjVsTjNwUVRGZzBkeElYUkZwaE5GazFNbnBFV1VkamNIUlJVR3h6YVZodlFXc2FJa0ZFVlhsRlIyVklOamxVUlVGeldrczBWbUptTFMxMWNsbGZhRzExV1ZReE0zYyIsImZjdiI6IjMiLCJlaSI6IkRaYTRZNTJ6RFlHY3B0UVBsc2lYb0FrIiwicWMiOiJDaHgwWlhoaGN5QnBibVJwWjJWdWIzVnpJSEpsYzNSaGRYSmhiblJ6RUFCOWhGVDVQZyIsInF1ZXN0aW9uIjoiV2hhdCBkaWQgaW5kaWdlbm91cyBwZW9wbGUgb2YgVGV4YXMgZWF0PyIsImxrIjoiR2lkM2FHRjBJR1JwWkNCcGJtUnBaMlZ1YjNWeklIQmxiM0JzWlNCdlppQjBaWGhoY3lCbFlYUSIsImJzIjoiYzAzTU1RckNRQkJBVVd5bnNrd2pqQlpHQy0xVDVSS0M5WktkbUlGMVo5bVpnT0lWUEloNExnOGl4RlhzXzMtd2c4MXhjSWFlUFhMMGZLSW9vMklpU1lGUWVqelF4U21TczdaNjNHQVAyeWxuUlJzSXo2S0dTZElZWFA3ZmV4SGZWdmNHYWxqOWVISTVYSXVuWkJZb0ZfalZ3QnFXWDNncWF2M2czRW5rcm9EUHhYejJCZyIsImlkIjoiZmNfMSJ9",
              "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkNlamg2WTFCNlRHSXRTVkJFZGxKWlFuTlhXbTVwZEdaQ2VqZFdiRWcwY0dVd2VrZG5jVUpXU21kT2JGY3pTbXgwTkY5aVRYSkdNMEZTV25aSlRWUmphREJyZGxZd1p6VlhMVE5QYmpaTlJIZDNiMjVsTjNwUVRGZzBkeElYUkZwaE5GazFNbnBFV1VkamNIUlJVR3h6YVZodlFXc2FJa0ZFVlhsRlIyVklOamxVUlVGeldrczBWbUptTFMxMWNsbGZhRzExV1ZReE0zYyIsImZjdiI6IjMiLCJlaSI6IkRaYTRZNTJ6RFlHY3B0UVBsc2lYb0FrIiwicWMiOiJDaHgwWlhoaGN5QnBibVJwWjJWdWIzVnpJSEpsYzNSaGRYSmhiblJ6RUFCOWhGVDVQZyIsInF1ZXN0aW9uIjoiV2hhdCBkaWQgaW5kaWdlbm91cyBwZW9wbGUgb2YgVGV4YXMgZWF0PyIsImxrIjoiR2lkM2FHRjBJR1JwWkNCcGJtUnBaMlZ1YjNWeklIQmxiM0JzWlNCdlppQjBaWGhoY3lCbFlYUSIsImJzIjoiYzAzTU1RckNRQkJBVVd5bnNrd2pqQlpHQy0xVDVSS0M5WktkbUlGMVo5bVpnT0lWUEloNExnOGl4RlhzXzMtd2c4MXhjSWFlUFhMMGZLSW9vMklpU1lGUWVqelF4U21TczdaNjNHQVAyeWxuUlJzSXo2S0dTZElZWFA3ZmV4SGZWdmNHYWxqOWVISTVYSXVuWkJZb0ZfalZ3QnFXWDNncWF2M2czRW5rcm9EUHhYejJCZyIsImlkIjoiZmNfMSJ9"
          },
          {
              "question": "What is the most popular indigenous food?",
              "snippet": "The most important Indigenous American crops have generally included Indian corn (or maize, from the Taíno name for the plant), beans, squash, pumpkins, sunflowers, wild rice, sweet potatoes, tomatoes, peppers, peanuts, avocados, papayas, potatoes and chocolate.",
              "title": "Indigenous cuisine of the Americas - Wikipedia",
              "link": "https://en.wikipedia.org/wiki/Indigenous_cuisine_of_the_Americas",
              "displayed_link": "https://en.wikipedia.org › wiki › Indigenous_cuisine_of_t...",
              "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJ4-6p-OhsB1OrjkiL0wJC6FaPdisXJAr8Bdh4YHg&s",
              "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkNlamg2WTFCNlRHSXRTVkJFZGxKWlFuTlhXbTVwZEdaQ2VqZFdiRWcwY0dVd2VrZG5jVUpXU21kT2JGY3pTbXgwTkY5aVRYSkdNMEZTV25aSlRWUmphREJyZGxZd1p6VlhMVE5QYmpaTlJIZDNiMjVsTjNwUVRGZzBkeElYUkZwaE5GazFNbnBFV1VkamNIUlJVR3h6YVZodlFXc2FJa0ZFVlhsRlIyVklOamxVUlVGeldrczBWbUptTFMxMWNsbGZhRzExV1ZReE0zYyIsImZjdiI6IjMiLCJlaSI6IkRaYTRZNTJ6RFlHY3B0UVBsc2lYb0FrIiwicWMiOiJDaHgwWlhoaGN5QnBibVJwWjJWdWIzVnpJSEpsYzNSaGRYSmhiblJ6RUFCOWhGVDVQZyIsInF1ZXN0aW9uIjoiV2hhdCBpcyB0aGUgbW9zdCBwb3B1bGFyIGluZGlnZW5vdXMgZm9vZD8iLCJsayI6IkdpaDNhR0YwSUdseklIUm9aU0J0YjNOMElIQnZjSFZzWVhJZ2FXNWthV2RsYm05MWN5Qm1iMjlrIiwiYnMiOiJjMDNNTVFyQ1FCQkFVV3luc2t3ampCWkdDLTFUNVJLQzlaS2RtSUYxWjltWmdPSVZQSWg0TGc4aXhGWHNfMy13ZzgxeGNJYWVQWEwwZktJb28ySWlTWUZRZWp6UXhTbVNzN1o2M0dBUDJ5bG5SUnNJejZLR1NkSVlYUDdmZXhIZlZ2Y0dhbGo5ZUhJNVhJdW5aQllvRl9qVndCcVdYM2dxYXYzZzNFbmtyb0RQeFh6MkJnIiwiaWQiOiJmY18xIn0=",
              "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkNlamg2WTFCNlRHSXRTVkJFZGxKWlFuTlhXbTVwZEdaQ2VqZFdiRWcwY0dVd2VrZG5jVUpXU21kT2JGY3pTbXgwTkY5aVRYSkdNMEZTV25aSlRWUmphREJyZGxZd1p6VlhMVE5QYmpaTlJIZDNiMjVsTjNwUVRGZzBkeElYUkZwaE5GazFNbnBFV1VkamNIUlJVR3h6YVZodlFXc2FJa0ZFVlhsRlIyVklOamxVUlVGeldrczBWbUptTFMxMWNsbGZhRzExV1ZReE0zYyIsImZjdiI6IjMiLCJlaSI6IkRaYTRZNTJ6RFlHY3B0UVBsc2lYb0FrIiwicWMiOiJDaHgwWlhoaGN5QnBibVJwWjJWdWIzVnpJSEpsYzNSaGRYSmhiblJ6RUFCOWhGVDVQZyIsInF1ZXN0aW9uIjoiV2hhdCBpcyB0aGUgbW9zdCBwb3B1bGFyIGluZGlnZW5vdXMgZm9vZD8iLCJsayI6IkdpaDNhR0YwSUdseklIUm9aU0J0YjNOMElIQnZjSFZzWVhJZ2FXNWthV2RsYm05MWN5Qm1iMjlrIiwiYnMiOiJjMDNNTVFyQ1FCQkFVV3luc2t3ampCWkdDLTFUNVJLQzlaS2RtSUYxWjltWmdPSVZQSWg0TGc4aXhGWHNfMy13ZzgxeGNJYWVQWEwwZktJb28ySWlTWUZRZWp6UXhTbVNzN1o2M0dBUDJ5bG5SUnNJejZLR1NkSVlYUDdmZXhIZlZ2Y0dhbGo5ZUhJNVhJdW5aQllvRl9qVndCcVdYM2dxYXYzZzNFbmtyb0RQeFh6MkJnIiwiaWQiOiJmY18xIn0%3D"
          },
          {
              "question": "What did early Texas settlers eat?",
              "snippet": "So Texans ate corn bread, tortillas, hominy -- and they fed corn to their pigs. Pork was really just corn turned into meat. Texas homesteaders looked askance at vegetables. Vegetable gardens too easily got mixed up with human waste.",
              "title": "No. 1080: Food in Early Texas - University of Houston",
              "link": "https://www.uh.edu/engines/epi1080.htm",
              "displayed_link": "https://www.uh.edu › engines › epi1080",
              "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkNlamg2WTFCNlRHSXRTVkJFZGxKWlFuTlhXbTVwZEdaQ2VqZFdiRWcwY0dVd2VrZG5jVUpXU21kT2JGY3pTbXgwTkY5aVRYSkdNMEZTV25aSlRWUmphREJyZGxZd1p6VlhMVE5QYmpaTlJIZDNiMjVsTjNwUVRGZzBkeElYUkZwaE5GazFNbnBFV1VkamNIUlJVR3h6YVZodlFXc2FJa0ZFVlhsRlIyVklOamxVUlVGeldrczBWbUptTFMxMWNsbGZhRzExV1ZReE0zYyIsImZjdiI6IjMiLCJlaSI6IkRaYTRZNTJ6RFlHY3B0UVBsc2lYb0FrIiwicWMiOiJDaHgwWlhoaGN5QnBibVJwWjJWdWIzVnpJSEpsYzNSaGRYSmhiblJ6RUFCOWhGVDVQZyIsInF1ZXN0aW9uIjoiV2hhdCBkaWQgZWFybHkgVGV4YXMgc2V0dGxlcnMgZWF0PyIsImxrIjoiR2lGM2FHRjBJR1JwWkNCbFlYSnNlU0IwWlhoaGN5QnpaWFIwYkdWeWN5QmxZWFEiLCJicyI6ImMwM01NUXJDUUJCQVVXeW5za3dqakJaR0MtMVQ1UktDOVpLZG1JRjFaOW1aZ09JVlBJaDRMZzhpeEZYc18zLXdnODF4Y0lhZVBYTDBmS0lvbzJJaVNZRlFlanpReFNtU3M3WjYzR0FQMnlsblJSc0l6NktHU2RJWVhQN2ZleEhmVnZjR2FsajllSEk1WEl1blpCWW9GX2pWd0JxV1gzZ3FhdjNnM0Vua3JvRFB4WHoyQmciLCJpZCI6ImZjXzEifQ==",
              "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkNlamg2WTFCNlRHSXRTVkJFZGxKWlFuTlhXbTVwZEdaQ2VqZFdiRWcwY0dVd2VrZG5jVUpXU21kT2JGY3pTbXgwTkY5aVRYSkdNMEZTV25aSlRWUmphREJyZGxZd1p6VlhMVE5QYmpaTlJIZDNiMjVsTjNwUVRGZzBkeElYUkZwaE5GazFNbnBFV1VkamNIUlJVR3h6YVZodlFXc2FJa0ZFVlhsRlIyVklOamxVUlVGeldrczBWbUptTFMxMWNsbGZhRzExV1ZReE0zYyIsImZjdiI6IjMiLCJlaSI6IkRaYTRZNTJ6RFlHY3B0UVBsc2lYb0FrIiwicWMiOiJDaHgwWlhoaGN5QnBibVJwWjJWdWIzVnpJSEpsYzNSaGRYSmhiblJ6RUFCOWhGVDVQZyIsInF1ZXN0aW9uIjoiV2hhdCBkaWQgZWFybHkgVGV4YXMgc2V0dGxlcnMgZWF0PyIsImxrIjoiR2lGM2FHRjBJR1JwWkNCbFlYSnNlU0IwWlhoaGN5QnpaWFIwYkdWeWN5QmxZWFEiLCJicyI6ImMwM01NUXJDUUJCQVVXeW5za3dqakJaR0MtMVQ1UktDOVpLZG1JRjFaOW1aZ09JVlBJaDRMZzhpeEZYc18zLXdnODF4Y0lhZVBYTDBmS0lvbzJJaVNZRlFlanpReFNtU3M3WjYzR0FQMnlsblJSc0l6NktHU2RJWVhQN2ZleEhmVnZjR2FsajllSEk1WEl1blpCWW9GX2pWd0JxV1gzZ3FhdjNnM0Vua3JvRFB4WHoyQmciLCJpZCI6ImZjXzEifQ%3D%3D"
          },
          {
              "question": "What is Texas's most iconic food?",
              "snippet": "Today, chili is the official state dish. Texas is known for its own variation of chili con carne. Texas chili is typically made with hot peppers and beef (or sometimes game meats like venison) and is sometimes served with pinto beans, either as a side or in the chili itself.",
              "title": "Texan cuisine - Wikipedia",
              "link": "https://en.wikipedia.org/wiki/Texan_cuisine",
              "displayed_link": "https://en.wikipedia.org › wiki › Texan_cuisine",
              "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEAZPMfXOA2bAN3krgCPjhZXXZO6CuIB-aGpVtUTA7Jg&s",
              "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkNlamg2WTFCNlRHSXRTVkJFZGxKWlFuTlhXbTVwZEdaQ2VqZFdiRWcwY0dVd2VrZG5jVUpXU21kT2JGY3pTbXgwTkY5aVRYSkdNMEZTV25aSlRWUmphREJyZGxZd1p6VlhMVE5QYmpaTlJIZDNiMjVsTjNwUVRGZzBkeElYUkZwaE5GazFNbnBFV1VkamNIUlJVR3h6YVZodlFXc2FJa0ZFVlhsRlIyVklOamxVUlVGeldrczBWbUptTFMxMWNsbGZhRzExV1ZReE0zYyIsImZjdiI6IjMiLCJlaSI6IkRaYTRZNTJ6RFlHY3B0UVBsc2lYb0FrIiwicWMiOiJDaHgwWlhoaGN5QnBibVJwWjJWdWIzVnpJSEpsYzNSaGRYSmhiblJ6RUFCOWhGVDVQZyIsInF1ZXN0aW9uIjoiV2hhdCBpcyBUZXhhcydzIG1vc3QgaWNvbmljIGZvb2Q/IiwibGsiOiJHaUIzYUdGMElHbHpJSFJsZUdGekozTWdiVzl6ZENCcFkyOXVhV01nWm05dlpBIiwiYnMiOiJjMDNNTVFyQ1FCQkFVV3luc2t3ampCWkdDLTFUNVJLQzlaS2RtSUYxWjltWmdPSVZQSWg0TGc4aXhGWHNfMy13ZzgxeGNJYWVQWEwwZktJb28ySWlTWUZRZWp6UXhTbVNzN1o2M0dBUDJ5bG5SUnNJejZLR1NkSVlYUDdmZXhIZlZ2Y0dhbGo5ZUhJNVhJdW5aQllvRl9qVndCcVdYM2dxYXYzZzNFbmtyb0RQeFh6MkJnIiwiaWQiOiJmY18xIn0=",
              "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkNlamg2WTFCNlRHSXRTVkJFZGxKWlFuTlhXbTVwZEdaQ2VqZFdiRWcwY0dVd2VrZG5jVUpXU21kT2JGY3pTbXgwTkY5aVRYSkdNMEZTV25aSlRWUmphREJyZGxZd1p6VlhMVE5QYmpaTlJIZDNiMjVsTjNwUVRGZzBkeElYUkZwaE5GazFNbnBFV1VkamNIUlJVR3h6YVZodlFXc2FJa0ZFVlhsRlIyVklOamxVUlVGeldrczBWbUptTFMxMWNsbGZhRzExV1ZReE0zYyIsImZjdiI6IjMiLCJlaSI6IkRaYTRZNTJ6RFlHY3B0UVBsc2lYb0FrIiwicWMiOiJDaHgwWlhoaGN5QnBibVJwWjJWdWIzVnpJSEpsYzNSaGRYSmhiblJ6RUFCOWhGVDVQZyIsInF1ZXN0aW9uIjoiV2hhdCBpcyBUZXhhcydzIG1vc3QgaWNvbmljIGZvb2Q%2FIiwibGsiOiJHaUIzYUdGMElHbHpJSFJsZUdGekozTWdiVzl6ZENCcFkyOXVhV01nWm05dlpBIiwiYnMiOiJjMDNNTVFyQ1FCQkFVV3luc2t3ampCWkdDLTFUNVJLQzlaS2RtSUYxWjltWmdPSVZQSWg0TGc4aXhGWHNfMy13ZzgxeGNJYWVQWEwwZktJb28ySWlTWUZRZWp6UXhTbVNzN1o2M0dBUDJ5bG5SUnNJejZLR1NkSVlYUDdmZXhIZlZ2Y0dhbGo5ZUhJNVhJdW5aQllvRl9qVndCcVdYM2dxYXYzZzNFbmtyb0RQeFh6MkJnIiwiaWQiOiJmY18xIn0%3D"
          }
      ],
      "organic_results": [
          {
              "position": 1,
              "title": "The Texas Indigenous Food Project - Facebook",
              "link": "https://m.facebook.com/The-Texas-Indigenous-Food-Project-1817560855038636/",
              "displayed_link": "https://m.facebook.com › The-Texas-Indigenous-Food-...",
              "thumbnail": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968fe382b0a5616ee8871a89fa85128b7b95.jpeg",
              "snippet": "The Texas Indigenous Food Project. 448 likes · 1 talking about this. To advance the study and understanding of the history, culture, development and all...",
              "snippet_highlighted_words": [
                  "Texas Indigenous"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Facebook is an online social media and social networking service owned by American company Meta Platforms.",
                      "source_info_link": "https://m.facebook.com/The-Texas-Indigenous-Food-Project-1817560855038636/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968f526e896c04d13468227ed6ede69f1dfe21ee9353e617118c7a08cb9ad698bf40.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://m.facebook.com/The-Texas-Indigenous-Food-Project-1817560855038636/&tbm=ilp&ilps=ADNMCi37_9hVs6T8Mr_uv9mROF93MBilIw",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi37_9hVs6T8Mr_uv9mROF93MBilIw&q=About+https%3A%2F%2Fm.facebook.com%2FThe-Texas-Indigenous-Food-Project-1817560855038636%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:eKCkH6VImy4J:https://m.facebook.com/The-Texas-Indigenous-Food-Project-1817560855038636/&cd=1&hl=en&ct=clnk&gl=us",
              "missing": [
                  "restaurants"
              ],
              "must_include": {
                  "word": "restaurants",
                  "link": "https://www.google.com/search?q=texas+indigenous+%22restaurants%22&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ5t4CegQIIBAB"
              }
          },
          {
              "position": 2,
              "title": "Top 10 Best Native American Food in Dallas, TX - Yelp",
              "link": "https://www.yelp.com/search?find_desc=native+american+food&find_loc=Dallas%2C+TX",
              "displayed_link": "https://www.yelp.com › Dallas, TX › Restaurants",
              "snippet": "Best native american food near me in Dallas, Texas ; Meso Maya Comida y Copas. 3.6 mi. 2777 reviews ; Vidorra Dallas. 4.0 mi. 982 reviews ; Savorista Cafe. 7.8 mi.",
              "snippet_highlighted_words": [
                  "native",
                  "Texas"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Yelp Inc. is an American company that develops the Yelp.com website and the Yelp mobile app, which publish crowd-sourced reviews about businesses. It also operates Yelp Guest Manager, a table reservation service. It is headquartered in San Francisco, California.",
                      "source_info_link": "https://www.yelp.com/search?find_desc=native+american+food&find_loc=Dallas%2C+TX",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968fb7f8cfdd1399d29e3f0f3adc5c1fbd3b4f46127ac51b6746a8c2e0e67c399bf0.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://m.yelp.com/search?find_desc%3Dnative%2Bamerican%2Bfood%26find_loc%3DDallas%252C%2BTX&tbm=ilp&ilps=ADNMCi3AVMXkVV9F7T5yFTPFY6d5WVXL4Q",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3AVMXkVV9F7T5yFTPFY6d5WVXL4Q&q=About+https%3A%2F%2Fm.yelp.com%2Fsearch%3Ffind_desc%3Dnative%2Bamerican%2Bfood%26find_loc%3DDallas%252C%2BTX",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:QHYjRk5li9IJ:https://www.yelp.com/search%3Ffind_desc%3Dnative%2Bamerican%2Bfood%26find_loc%3DDallas%252C%2BTX&cd=2&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 3,
              "title": "Native American heritage felt at Fort Worth restaurant | wfaa.com",
              "link": "https://www.wfaa.com/article/features/fried-onion-burgers-indian-tacos-native-american-heritage-they-help-share/287-6994ffb4-f32d-4440-9fb7-fe5ada726dfb",
              "displayed_link": "https://www.wfaa.com › article › features › fried-onion-...",
              "date": "Nov 20, 2022",
              "snippet": "FORT WORTH, Texas — North Texas is a blend of cultures and ... Her walk-up dining location, popular for its fried onion burgers and Indian ...",
              "snippet_highlighted_words": [
                  "Texas",
                  "Texas",
                  "dining",
                  "Indian"
              ],
              "about_this_result": {
                  "source": {
                      "description": "WFAA is a television station licensed to Dallas, Texas, United States, serving the Dallas–Fort Worth metroplex as an affiliate of ABC.",
                      "source_info_link": "https://www.wfaa.com/article/features/fried-onion-burgers-indian-tacos-native-american-heritage-they-help-share/287-6994ffb4-f32d-4440-9fb7-fe5ada726dfb",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968fb6522dbc640e3ac8a122584112089de2521bc2f78a8a2a2bb954bc52d607781f.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.wfaa.com/article/features/fried-onion-burgers-indian-tacos-native-american-heritage-they-help-share/287-6994ffb4-f32d-4440-9fb7-fe5ada726dfb&tbm=ilp&ilps=ADNMCi0Q2aYERzHvdp44_EWIUp07nIJfhg",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi0Q2aYERzHvdp44_EWIUp07nIJfhg&q=About+https%3A%2F%2Fwww.wfaa.com%2Farticle%2Ffeatures%2Ffried-onion-burgers-indian-tacos-native-american-heritage-they-help-share%2F287-6994ffb4-f32d-4440-9fb7-fe5ada726dfb",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:jilThXWvujEJ:https://www.wfaa.com/article/features/fried-onion-burgers-indian-tacos-native-american-heritage-they-help-share/287-6994ffb4-f32d-4440-9fb7-fe5ada726dfb&cd=13&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 4,
              "title": "Pow wow wow | Restaurants | Dallas Observer - Dallas Observer",
              "link": "https://www.dallasobserver.com/restaurants/pow-wow-wow-6397053",
              "displayed_link": "https://www.dallasobserver.com › restaurants › pow-wo...",
              "snippet": "\"Tenaya is a unique Native American theme restaurant located in the Las Colinas Development, Irving, Texas,\" explains the press release.",
              "snippet_highlighted_words": [
                  "Native",
                  "restaurant",
                  "Texas"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Dallas Observer is a free digital and print publication based in Dallas, Texas. The Observer publishes daily online coverage of local news, restaurants, music, and arts, as well as longform narrative journalism. A weekly print issue circulates every Thursday.",
                      "source_info_link": "https://www.dallasobserver.com/restaurants/pow-wow-wow-6397053",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968fe58b0a74f1c0ae113d24997bd2baf82ef11ed0f84d6bebdca9ae3e96cc895d49.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.dallasobserver.com/restaurants/pow-wow-wow-6397053&tbm=ilp&ilps=ADNMCi368LVwgKb3eseiDbP7muzWP12y-w",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi368LVwgKb3eseiDbP7muzWP12y-w&q=About+https%3A%2F%2Fwww.dallasobserver.com%2Frestaurants%2Fpow-wow-wow-6397053",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:Sz0e9Qqaau8J:https://www.dallasobserver.com/restaurants/pow-wow-wow-6397053&cd=14&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 5,
              "title": "The History of Indigenous Food Traditions in Texas",
              "link": "https://texashighways.com/eat-drink/history-of-indigenous-food-traditions-texas/",
              "displayed_link": "https://texashighways.com › eat-drink › history-of-indi...",
              "snippet": "Indigenous Texas food traditions date back thousands of years · Baking Bread · From Mesquite to Wheat · Ancient Gardens · Earth Ovens · Native Roots of Latinx Foods.",
              "snippet_highlighted_words": [
                  "Indigenous Texas",
                  "Native"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Texas Highways is a monthly magazine put out by the Texas Department of Transportation that, according to the agency, \"promotes travel and tourism to Texas through articles and photography.\"",
                      "source_info_link": "https://texashighways.com/eat-drink/history-of-indigenous-food-traditions-texas/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968f1061f5de7006118b738bbabfe7c42dc2d26e45ff9841ee009f307009e737bff8.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://texashighways.com/eat-drink/history-of-indigenous-food-traditions-texas/&tbm=ilp&ilps=ADNMCi0Rx5uMNrnGRjihYVsJs3WWwd7DUA",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi0Rx5uMNrnGRjihYVsJs3WWwd7DUA&q=About+https%3A%2F%2Ftexashighways.com%2Feat-drink%2Fhistory-of-indigenous-food-traditions-texas%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:zQknozIartAJ:https://texashighways.com/eat-drink/history-of-indigenous-food-traditions-texas/&cd=15&hl=en&ct=clnk&gl=us",
              "missing": [
                  "restaurants"
              ],
              "must_include": {
                  "word": "restaurants",
                  "link": "https://www.google.com/search?q=texas+indigenous+%22restaurants%22&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ5t4CegQIGRAB"
              }
          },
          {
              "position": 6,
              "title": "Indian Restaurants in Texas Gulf Coast - Tripadvisor",
              "link": "https://www.tripadvisor.com/Restaurants-g1438846-c24-Texas_Gulf_Coast_Texas.html",
              "displayed_link": "https://www.tripadvisor.com › ... › Texas Gulf Coast",
              "snippet": "Indian Restaurants in Texas Gulf Coast ; 1. Aga's Restaurant & Catering · 170 reviews · 113.0 mi ; 2. Kiran's · 271 reviews · 123.3 mi ; 3. Maharaja Bhog · 216 ...",
              "snippet_highlighted_words": [
                  "Indian Restaurants",
                  "Texas",
                  "Restaurant"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Tripadvisor, Inc. is an American online travel company that operates a website and mobile app with user-generated content and a comparison shopping website. It also offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants.",
                      "source_info_link": "https://www.tripadvisor.com/Restaurants-g1438846-c24-Texas_Gulf_Coast_Texas.html",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968f79499a8cc881e0ccf922f4b45b7f5a29936420e242bc7afe5e7924f3342e6807.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.tripadvisor.com/Restaurants-g1438846-c24-Texas_Gulf_Coast_Texas.html&tbm=ilp&ilps=ADNMCi2D2eFCzCJFen9ECQVc4tzPWwJlwg",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi2D2eFCzCJFen9ECQVc4tzPWwJlwg&q=About+https%3A%2F%2Fwww.tripadvisor.com%2FRestaurants-g1438846-c24-Texas_Gulf_Coast_Texas.html",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:pQNjcC2LTAgJ:https://www.tripadvisor.com/Restaurants-g1438846-c24-Texas_Gulf_Coast_Texas.html&cd=16&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 7,
              "title": "Best Fusion Restaurants In Texas: Cowboys & Indians",
              "link": "https://www.onlyinyourstate.com/texas/unique-fusion-restaurant-tx/",
              "displayed_link": "https://www.onlyinyourstate.com › texas › unique-fusio...",
              "thumbnail": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968f3d0b4ebe9fe5b0ea54d61d65c2bbe2c2.jpeg",
              "date": "Oct 11, 2022",
              "snippet": "The One Unique Restaurant In Texas Where You Can Eat Both Chicken-Fried Steak And Indian Food ... Why settle for just one type of cuisine when you ...",
              "snippet_highlighted_words": [
                  "Restaurant",
                  "Texas",
                  "Indian"
              ],
              "about_this_result": {
                  "source": {
                      "description": "onlyinyourstate.com was first indexed by Google more than 10 years ago",
                      "source_info_link": "https://www.onlyinyourstate.com/texas/unique-fusion-restaurant-tx/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968f4ecaa16e4ae89b855cb055fb8419dd0b10f94e54047727afc8e570ff0e6502b5.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.onlyinyourstate.com/texas/unique-fusion-restaurant-tx/&tbm=ilp&ilps=ADNMCi32E-7_IXoKYm5pxUdiRACBm-da-A",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi32E-7_IXoKYm5pxUdiRACBm-da-A&q=About+https%3A%2F%2Fwww.onlyinyourstate.com%2Ftexas%2Funique-fusion-restaurant-tx%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:OFc1KiNElsQJ:https://www.onlyinyourstate.com/texas/unique-fusion-restaurant-tx/&cd=17&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 8,
              "title": "Long Before Tex-Mex, a 15000-Year-Old Cuisine Left Its Mark",
              "link": "https://www.atlasobscura.com/articles/texas-mexican-food",
              "displayed_link": "https://www.atlasobscura.com › texas-mexican-food",
              "snippet": "This is why the indigenous food of Texas resembles the food of Mexico, with its squash, corn, beans, prickly pear cactus, chiles, and chocolate. Across Central ...",
              "snippet_highlighted_words": [
                  "indigenous",
                  "Texas"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Atlas Obscura is an American-based online magazine and travel company. It was founded in 2009 by author Joshua Foer and documentary filmmaker/author Dylan Thuras. It catalogs unusual and obscure travel destinations via user-generated content.",
                      "source_info_link": "https://www.atlasobscura.com/articles/texas-mexican-food",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968fe61740ca94675df09b921b83cd9407a0fc8426481ba1593a52bc47acacc40c4d.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.atlasobscura.com/articles/texas-mexican-food&tbm=ilp&ilps=ADNMCi1KpYueautps8HR8EER6qoTvBmq3A",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi1KpYueautps8HR8EER6qoTvBmq3A&q=About+https%3A%2F%2Fwww.atlasobscura.com%2Farticles%2Ftexas-mexican-food",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:9wkhivgxYWoJ:https://www.atlasobscura.com/articles/texas-mexican-food&cd=21&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 9,
              "title": "Are There Any Native American Restaurants in Houston?",
              "link": "https://www.reddit.com/r/houston/comments/l8zfpj/are_there_any_native_american_restaurants_in/",
              "displayed_link": "https://www.reddit.com › houston › comments › are_th...",
              "date": "Jan 31, 2021",
              "snippet": "Keep in mind the indigenous food in Texas is Tex-Mex, most indigenous people of Texas were hispanic and blended into Native Americans northward.",
              "snippet_highlighted_words": [
                  "indigenous",
                  "Texas",
                  "indigenous",
                  "Texas",
                  "Native"
              ],
              "about_this_result": {
                  "source": {
                      "description": "Reddit is an American social news aggregation, content rating, and discussion website. Registered users submit content to the site such as links, text posts, images, and videos, which are then voted up or down by other members.",
                      "source_info_link": "https://www.reddit.com/r/houston/comments/l8zfpj/are_there_any_native_american_restaurants_in/",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968fd9cf988ef645e194dcc1000bd63e00a5be3ffceeb698c44b825bb077ed09674f.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://www.reddit.com/r/houston/comments/l8zfpj/are_there_any_native_american_restaurants_in/&tbm=ilp&ilps=ADNMCi1zrYZxRpFL5mD1gGQO4UjliXpcyw",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi1zrYZxRpFL5mD1gGQO4UjliXpcyw&q=About+https%3A%2F%2Fwww.reddit.com%2Fr%2Fhouston%2Fcomments%2Fl8zfpj%2Fare_there_any_native_american_restaurants_in%2F",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:jFgs19d3lFsJ:https://www.reddit.com/r/houston/comments/l8zfpj/are_there_any_native_american_restaurants_in/&cd=22&hl=en&ct=clnk&gl=us"
          },
          {
              "position": 10,
              "title": "Top 10 Indian Restaurants In Texas, USA | Trip101",
              "link": "https://trip101.com/article/indian-restaurants-in-texas",
              "displayed_link": "https://trip101.com › US › Texas",
              "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1zlqi8DDez2ZVH9KuktyxRZ-jth_WysJI1P8auncUDYZCcpa-o3h&usqp=CAE&s",
              "date": "Dec 22, 2021",
              "snippet": "1. India's Restaurant · 2. Taz Indian Cuisine · 3. Andhra Cafe · 4. Mumtaz Indian Restaurant, Richardson · 5. Punjabi Dhabba · 6. Mogul Indian ...",
              "snippet_highlighted_words": [
                  "Restaurant",
                  "Indian",
                  "Indian Restaurant",
                  "Indian"
              ],
              "about_this_result": {
                  "source": {
                      "description": "trip101.com was first indexed by Google more than 10 years ago",
                      "source_info_link": "https://trip101.com/article/indian-restaurants-in-texas",
                      "security": "secure",
                      "icon": "https://serpapi.com/searches/63b8960cb5961e98c70dbb70/images/c7abd17e810077c33d6fc32a33ee968fa9254b65fe05d69f41b96b7ab7d132ce94bb9040fd05bb56dd31deba5c437fb7.png"
                  }
              },
              "about_page_link": "https://www.google.com/search?q=About+https://trip101.com/article/indian-restaurants-in-texas&tbm=ilp&ilps=ADNMCi3CzhGmSJLlTUnRy7kjC6erg9rsxA",
              "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=ADNMCi3CzhGmSJLlTUnRy7kjC6erg9rsxA&q=About+https%3A%2F%2Ftrip101.com%2Farticle%2Findian-restaurants-in-texas",
              "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:BxIW-FH1xI0J:https://trip101.com/article/indian-restaurants-in-texas&cd=23&hl=en&ct=clnk&gl=us"
          }
      ],
      "related_searches": [
          {
              "query": "texas indigenous food project",
              "link": "https://www.google.com/search?q=Texas+Indigenous+Food+Project&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ1QJ6BAhiEAE"
          },
          {
              "query": "native american restaurant dallas",
              "link": "https://www.google.com/search?q=Native+American+restaurant+Dallas&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ1QJ6BAhkEAE"
          },
          {
              "query": "indigenous restaurant menu",
              "link": "https://www.google.com/search?q=Indigenous+restaurant+menu&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ1QJ6BAhjEAE"
          },
          {
              "query": "texas mexican",
              "link": "https://www.google.com/search?q=Texas+Mexican&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ1QJ6BAhgEAE"
          },
          {
              "query": "truly texas",
              "link": "https://www.google.com/search?q=Truly+Texas&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ1QJ6BAhdEAE"
          },
          {
              "query": "truly texas mexican",
              "link": "https://www.google.com/search?q=Truly+Texas+Mexican&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ1QJ6BAhfEAE"
          },
          {
              "query": "fry bread near me",
              "link": "https://www.google.com/search?q=Fry+bread+near+me&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ1QJ6BAheEAE"
          },
          {
              "query": "truly texas mexican recipes",
              "link": "https://www.google.com/search?q=Truly+Texas+Mexican+recipes&sa=X&ved=2ahUKEwjd7ez89LP8AhUBjokEHRbkBZQQ1QJ6BAhhEAE"
          }
      ],
      "pagination": {
          "current": 1,
          "next": "https://www.google.com/search?q=texas+indigenous+restaurants&oq=texas+indigenous+restaurants&start=10&sourceid=chrome&ie=UTF-8",
          "other_pages": {
              "2": "https://www.google.com/search?q=texas+indigenous+restaurants&oq=texas+indigenous+restaurants&start=10&sourceid=chrome&ie=UTF-8",
              "3": "https://www.google.com/search?q=texas+indigenous+restaurants&oq=texas+indigenous+restaurants&start=20&sourceid=chrome&ie=UTF-8",
              "4": "https://www.google.com/search?q=texas+indigenous+restaurants&oq=texas+indigenous+restaurants&start=30&sourceid=chrome&ie=UTF-8",
              "5": "https://www.google.com/search?q=texas+indigenous+restaurants&oq=texas+indigenous+restaurants&start=40&sourceid=chrome&ie=UTF-8"
          }
      },
      "serpapi_pagination": {
          "current": 1,
          "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+restaurants&start=10",
          "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+restaurants&start=10",
          "other_pages": {
              "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+restaurants&start=10",
              "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+restaurants&start=20",
              "4": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+restaurants&start=30",
              "5": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=texas+indigenous+restaurants&start=40"
          }
      }
    },
    ])


    return (
        <div className='foodpage'>
          <h1 className='foodpagetitle'>FOOD</h1>
          <h2 className='foodpagecaption'>Here you will find an array of black/brown-owned restaurants in Texas.</h2>
          <BusinessMapper businesses = {restaurants} className='foodbusiness'/>
        </div>
    )
}

export default FoodPage