import React, { useState } from 'react';
import BusinessMapper from "../../components/BusinessMapper/BusinessMapper"



const FoodPage = () => {
    const [restaurants, setRestaurants] = useState([
        {
            "search_metadata": {
              "id": "638ad7bd4055aa09ca91e5bf",
              "status": "Success",
              "json_endpoint": "https://serpapi.com/searches/ae25898902391739/638ad7bd4055aa09ca91e5bf.json",
              "created_at": "2022-12-03 04:59:41 UTC",
              "processed_at": "2022-12-03 04:59:41 UTC",
              "google_url": "https://www.google.com/search?q=brown+restaurants&oq=brown+restaurants&sourceid=chrome&ie=UTF-8",
              "raw_html_file": "https://serpapi.com/searches/ae25898902391739/638ad7bd4055aa09ca91e5bf.html",
              "total_time_taken": 1.52
            },
            "search_parameters": {
              "engine": "google",
              "q": "brown restaurants",
              "google_domain": "google.com",
              "device": "desktop"
            },
            "search_information": {
              "organic_results_state": "Results for exact spelling",
              "query_displayed": "brown restaurants",
              "total_results": 958000000,
              "time_taken_displayed": 0.68,
              "menu_items": [
                {
                  "position": 1,
                  "title": "All"
                },
                {
                  "position": 2,
                  "title": "Maps",
                  "link": "https://maps.google.com/maps?q=brown+restaurants&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ_AUoAXoECAEQAw"
                },
                {
                  "position": 3,
                  "title": "Images",
                  "link": "https://www.google.com/search?q=brown+restaurants&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ_AUoAnoECAEQBA",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&tbm=isch"
                },
                {
                  "position": 4,
                  "title": "Shopping",
                  "link": "https://www.google.com/search?q=brown+restaurants&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ_AUoA3oECAEQBQ",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&tbm=shop"
                },
                {
                  "position": 5,
                  "title": "News",
                  "link": "https://www.google.com/search?q=brown+restaurants&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ_AUoBHoECAEQBg",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&tbm=nws"
                }
              ]
            },
            "local_map": {
              "link": "https://www.google.com/search?q=brown+restaurants&npsic=0&rflfq=1&rldoc=1&rllag=40612494,-74095142,25268&tbm=lcl&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQtgN6BAgcEAE",
              "image": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/bd26af1eaa819b65c90591a62b70b606.png",
              "gps_coordinates": {
                "latitude": 40.612494,
                "longitude": -74.095142,
                "altitude": 25268
              }
            },
            "local_results": {
              "more_locations_link": "https://www.google.com/search?tbs=lf:1,lf_ui:9&tbm=lcl&q=brown+restaurants&rflfq=1&num=10&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQjGp6BAgeEAE",
              "places": [
                {
                  "position": 1,
                  "title": "Third & Seven",
                  "place_id": "11520512695532677446",
                  "lsig": "AB86z5WsY74SejruxLYMU93gRAvd",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5WsY74SejruxLYMU93gRAvd&ludocid=11520512695532677446&q=brown+restaurants&tbm=lcl",
                  "reviews": 290,
                  "price": "$$",
                  "type": "Pub",
                  "hours": "\"Best bar/restaurant in the neighborhood.\"",
                  "address": "3622 Quentin Rd",
                  "thumbnail": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/7d9eeaef889a3547be671c1fbc3638de82fb99ecedd040bb979eaec34347cb5b20ef250d29a169ef.png",
                  "gps_coordinates": {
                    "latitude": 40.614967,
                    "longitude": -73.936066
                  }
                },
                {
                  "position": 2,
                  "title": "Brown Stone Bar & Grill",
                  "place_id": "7869384231127217142",
                  "lsig": "AB86z5VoqgqOzqX6cdG4Ma1UKjR6",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5VoqgqOzqX6cdG4Ma1UKjR6&ludocid=7869384231127217142&q=brown+restaurants&tbm=lcl",
                  "reviews": 1100,
                  "price": "$$",
                  "type": "American",
                  "hours": "Upbeat American bar & grill with a patio",
                  "address": "Metuchen, NJ",
                  "thumbnail": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/7d9eeaef889a3547be671c1fbc3638de93b1f72cd18a00cd140f42e522ab560c1c6aee1ef55335dc.jpeg",
                  "gps_coordinates": {
                    "latitude": 40.534428,
                    "longitude": -74.37649
                  }
                },
                {
                  "position": 3,
                  "title": "Brown Betty",
                  "place_id": "12813407870517011078",
                  "lsig": "AB86z5XguB2vVazKq1SINWz_048X",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5XguB2vVazKq1SINWz_048X&ludocid=12813407870517011078&q=brown+restaurants&tbm=lcl",
                  "description": "Takeout",
                  "reviews": 143,
                  "price": "$",
                  "type": "Caribbean",
                  "hours": "Closed ⋅ Opens 10AM Sat",
                  "address": "132-04 Liberty Ave",
                  "thumbnail": "https://lh5.googleusercontent.com/p/AF1QipNsbETDC6s_1_GLL0e_sVfdfFMivm8pW4xnwVi1=w92-h92-n-k-no",
                  "gps_coordinates": {
                    "latitude": 40.690502,
                    "longitude": -73.813774
                  }
                }
              ]
            },
            "related_questions": [
              {
                "question": "How many Browns restaurants are there?",
                "snippet": "BRG offers and supports franchises under the names Browns Socialhouse®, Browns Crafthouse®, and Liberty Kitchen® in Canada, and Scotty Browns® in the United States. There are currently over 80 total locations in operation, with more in various stages of development.",
                "title": "ABOUT — Browns Restaurant Group",
                "link": "https://www.brownsrestaurantgroup.com/about-brownsrestaurantgroup",
                "displayed_link": "https://www.brownsrestaurantgroup.com › about-brownsr...",
                "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRkalZtZFZCTFZ6QnpUM3BGV0MxaGJFRkpURVZoWTJaelExTjBObHBaT0ZOelJYQnBNbFo2UlVGeE9WZDROVFJYUjJWTWVscE9ZVFZvVVd0cFVGbEdiMmh1TkdkblFreE9OWEk1UkdrMGRtOWZZbUp0UVdNNU9YWnJkeElYZG1SbFMxazNTMWxPU21GcWVYUk5VSGxqYlRadlFVVWFJa0ZFVlhsRlIyTnhlVU5tWTNoSk5WZDBMVTl1UWtzM2FIbHRZbkJPVEdoQlJYYyIsImZjdiI6IjMiLCJlaSI6InZkZUtZN0tZTkphanl0TVB5Y202b0FFIiwicWMiOiJDaEZpY205M2JpQnlaWE4wWVhWeVlXNTBjeEFBZlRncTlUNCIsInF1ZXN0aW9uIjoiSG93IG1hbnkgQnJvd25zIHJlc3RhdXJhbnRzIGFyZSB0aGVyZT8iLCJsayI6IkdpVm9iM2NnYldGdWVTQmljbTkzYm5NZ2NtVnpkR0YxY21GdWRITWdZWEpsSUhSb1pYSmwiLCJicyI6ImMtUFM1bEx6eUM5WHlFM01xMVJ3S3Nvdnp5dFdLRW90TGtrc0xVck1LeWxXU0N4S1ZTakpTQzFLdFpkNEdzdWx6cVVVbnBHdmtGbU1xVlFCeUU5TlVVaXF0SmY0NkE5Um1KcW5rSktaQWxPYW1hZmduSmliVkpTWmtwNnFrRi1RbW1jdmNaaVJTNE5MT1R3anNRUlpvVk5SWm5GSmZvNUNhVEhRdkpKOGhTU2czZDFPQW93QSJ9",
                "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRkalZtZFZCTFZ6QnpUM3BGV0MxaGJFRkpURVZoWTJaelExTjBObHBaT0ZOelJYQnBNbFo2UlVGeE9WZDROVFJYUjJWTWVscE9ZVFZvVVd0cFVGbEdiMmh1TkdkblFreE9OWEk1UkdrMGRtOWZZbUp0UVdNNU9YWnJkeElYZG1SbFMxazNTMWxPU21GcWVYUk5VSGxqYlRadlFVVWFJa0ZFVlhsRlIyTnhlVU5tWTNoSk5WZDBMVTl1UWtzM2FIbHRZbkJPVEdoQlJYYyIsImZjdiI6IjMiLCJlaSI6InZkZUtZN0tZTkphanl0TVB5Y202b0FFIiwicWMiOiJDaEZpY205M2JpQnlaWE4wWVhWeVlXNTBjeEFBZlRncTlUNCIsInF1ZXN0aW9uIjoiSG93IG1hbnkgQnJvd25zIHJlc3RhdXJhbnRzIGFyZSB0aGVyZT8iLCJsayI6IkdpVm9iM2NnYldGdWVTQmljbTkzYm5NZ2NtVnpkR0YxY21GdWRITWdZWEpsSUhSb1pYSmwiLCJicyI6ImMtUFM1bEx6eUM5WHlFM01xMVJ3S3Nvdnp5dFdLRW90TGtrc0xVck1LeWxXU0N4S1ZTakpTQzFLdFpkNEdzdWx6cVVVbnBHdmtGbU1xVlFCeUU5TlVVaXF0SmY0NkE5Um1KcW5rSktaQWxPYW1hZmduSmliVkpTWmtwNnFrRi1RbW1jdmNaaVJTNE5MT1R3anNRUlpvVk5SWm5GSmZvNUNhVEhRdkpKOGhTU2czZDFPQW93QSJ9"
              },
              {
                "question": "Who is Browns restaurant owned by?",
                "snippet": "Browns is unique in its offering and unique in its history; entrepreneur Jeremy Mogford, the company's founder, is often cited as an enlightened employer, training and fostering staff to deliver the first class service we are renowned for.",
                "title": "About Us - Browns Restaurants - Brasserie & Bar",
                "link": "https://www.browns-restaurants.co.uk/about-us",
                "displayed_link": "https://www.browns-restaurants.co.uk › about-us",
                "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRkalZtZFZCTFZ6QnpUM3BGV0MxaGJFRkpURVZoWTJaelExTjBObHBaT0ZOelJYQnBNbFo2UlVGeE9WZDROVFJYUjJWTWVscE9ZVFZvVVd0cFVGbEdiMmh1TkdkblFreE9OWEk1UkdrMGRtOWZZbUp0UVdNNU9YWnJkeElYZG1SbFMxazNTMWxPU21GcWVYUk5VSGxqYlRadlFVVWFJa0ZFVlhsRlIyTnhlVU5tWTNoSk5WZDBMVTl1UWtzM2FIbHRZbkJPVEdoQlJYYyIsImZjdiI6IjMiLCJlaSI6InZkZUtZN0tZTkphanl0TVB5Y202b0FFIiwicWMiOiJDaEZpY205M2JpQnlaWE4wWVhWeVlXNTBjeEFBZlRncTlUNCIsInF1ZXN0aW9uIjoiV2hvIGlzIEJyb3ducyByZXN0YXVyYW50IG93bmVkIGJ5PyIsImxrIjoiR2lGM2FHOGdhWE1nWW5KdmQyNXpJSEpsYzNSaGRYSmhiblFnYjNkdVpXUWdZbmsiLCJicyI6ImMtUFM1bEx6eUM5WHlFM01xMVJ3S3Nvdnp5dFdLRW90TGtrc0xVck1LeWxXU0N4S1ZTakpTQzFLdFpkNEdzdWx6cVVVbnBHdmtGbU1xVlFCeUU5TlVVaXF0SmY0NkE5Um1KcW5rSktaQWxPYW1hZmduSmliVkpTWmtwNnFrRi1RbW1jdmNaaVJTNE5MT1R3anNRUlpvVk5SWm5GSmZvNUNhVEhRdkpKOGhTU2czZDFPQW93QSJ9",
                "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRkalZtZFZCTFZ6QnpUM3BGV0MxaGJFRkpURVZoWTJaelExTjBObHBaT0ZOelJYQnBNbFo2UlVGeE9WZDROVFJYUjJWTWVscE9ZVFZvVVd0cFVGbEdiMmh1TkdkblFreE9OWEk1UkdrMGRtOWZZbUp0UVdNNU9YWnJkeElYZG1SbFMxazNTMWxPU21GcWVYUk5VSGxqYlRadlFVVWFJa0ZFVlhsRlIyTnhlVU5tWTNoSk5WZDBMVTl1UWtzM2FIbHRZbkJPVEdoQlJYYyIsImZjdiI6IjMiLCJlaSI6InZkZUtZN0tZTkphanl0TVB5Y202b0FFIiwicWMiOiJDaEZpY205M2JpQnlaWE4wWVhWeVlXNTBjeEFBZlRncTlUNCIsInF1ZXN0aW9uIjoiV2hvIGlzIEJyb3ducyByZXN0YXVyYW50IG93bmVkIGJ5PyIsImxrIjoiR2lGM2FHOGdhWE1nWW5KdmQyNXpJSEpsYzNSaGRYSmhiblFnYjNkdVpXUWdZbmsiLCJicyI6ImMtUFM1bEx6eUM5WHlFM01xMVJ3S3Nvdnp5dFdLRW90TGtrc0xVck1LeWxXU0N4S1ZTakpTQzFLdFpkNEdzdWx6cVVVbnBHdmtGbU1xVlFCeUU5TlVVaXF0SmY0NkE5Um1KcW5rSktaQWxPYW1hZmduSmliVkpTWmtwNnFrRi1RbW1jdmNaaVJTNE5MT1R3anNRUlpvVk5SWm5GSmZvNUNhVEhRdkpKOGhTU2czZDFPQW93QSJ9"
              },
              {
                "question": "When did Browns in Cambridge open?",
                "snippet": "We have been serving simple, classic and freshly prepared dishes in elegant surroundings since the first Browns opened in 1973.",
                "title": "Browns Brasserie & Bar Cambs (@brownscambridge) • Instagram ...",
                "link": "https://www.instagram.com/brownscambridge/",
                "displayed_link": "https://www.instagram.com › brownscambridge",
                "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRkalZtZFZCTFZ6QnpUM3BGV0MxaGJFRkpURVZoWTJaelExTjBObHBaT0ZOelJYQnBNbFo2UlVGeE9WZDROVFJYUjJWTWVscE9ZVFZvVVd0cFVGbEdiMmh1TkdkblFreE9OWEk1UkdrMGRtOWZZbUp0UVdNNU9YWnJkeElYZG1SbFMxazNTMWxPU21GcWVYUk5VSGxqYlRadlFVVWFJa0ZFVlhsRlIyTnhlVU5tWTNoSk5WZDBMVTl1UWtzM2FIbHRZbkJPVEdoQlJYYyIsImZjdiI6IjMiLCJlaSI6InZkZUtZN0tZTkphanl0TVB5Y202b0FFIiwicWMiOiJDaEZpY205M2JpQnlaWE4wWVhWeVlXNTBjeEFBZlRncTlUNCIsInF1ZXN0aW9uIjoiV2hlbiBkaWQgQnJvd25zIGluIENhbWJyaWRnZSBvcGVuPyIsImxrIjoiR2lGM2FHVnVJR1JwWkNCaWNtOTNibk1nYVc0Z1kyRnRZbkpwWkdkbElHOXdaVzQiLCJicyI6ImMtUFM1bEx6eUM5WHlFM01xMVJ3S3Nvdnp5dFdLRW90TGtrc0xVck1LeWxXU0N4S1ZTakpTQzFLdFpkNEdzdWx6cVVVbnBHdmtGbU1xVlFCeUU5TlVVaXF0SmY0NkE5Um1KcW5rSktaQWxPYW1hZmduSmliVkpTWmtwNnFrRi1RbW1jdmNaaVJTNE5MT1R3anNRUlpvVk5SWm5GSmZvNUNhVEhRdkpKOGhTU2czZDFPQW93QSJ9",
                "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRkalZtZFZCTFZ6QnpUM3BGV0MxaGJFRkpURVZoWTJaelExTjBObHBaT0ZOelJYQnBNbFo2UlVGeE9WZDROVFJYUjJWTWVscE9ZVFZvVVd0cFVGbEdiMmh1TkdkblFreE9OWEk1UkdrMGRtOWZZbUp0UVdNNU9YWnJkeElYZG1SbFMxazNTMWxPU21GcWVYUk5VSGxqYlRadlFVVWFJa0ZFVlhsRlIyTnhlVU5tWTNoSk5WZDBMVTl1UWtzM2FIbHRZbkJPVEdoQlJYYyIsImZjdiI6IjMiLCJlaSI6InZkZUtZN0tZTkphanl0TVB5Y202b0FFIiwicWMiOiJDaEZpY205M2JpQnlaWE4wWVhWeVlXNTBjeEFBZlRncTlUNCIsInF1ZXN0aW9uIjoiV2hlbiBkaWQgQnJvd25zIGluIENhbWJyaWRnZSBvcGVuPyIsImxrIjoiR2lGM2FHVnVJR1JwWkNCaWNtOTNibk1nYVc0Z1kyRnRZbkpwWkdkbElHOXdaVzQiLCJicyI6ImMtUFM1bEx6eUM5WHlFM01xMVJ3S3Nvdnp5dFdLRW90TGtrc0xVck1LeWxXU0N4S1ZTakpTQzFLdFpkNEdzdWx6cVVVbnBHdmtGbU1xVlFCeUU5TlVVaXF0SmY0NkE5Um1KcW5rSktaQWxPYW1hZmduSmliVkpTWmtwNnFrRi1RbW1jdmNaaVJTNE5MT1R3anNRUlpvVk5SWm5GSmZvNUNhVEhRdkpKOGhTU2czZDFPQW93QSJ9"
              },
              {
                "question": "What did Browns Bristol used to be?",
                "snippet": "This building was originally a museum and library. It was designed by Foster and Ponton in 1867-71 in a Venetian Gothic style.",
                "title": "Brown's Restaurant, Queens Road, Bristol | Educational Images",
                "link": "https://historicengland.org.uk/services-skills/education/educational-images/browns-restaurant-queens-road-5729",
                "displayed_link": "https://historicengland.org.uk › services-skills › education",
                "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRkalZtZFZCTFZ6QnpUM3BGV0MxaGJFRkpURVZoWTJaelExTjBObHBaT0ZOelJYQnBNbFo2UlVGeE9WZDROVFJYUjJWTWVscE9ZVFZvVVd0cFVGbEdiMmh1TkdkblFreE9OWEk1UkdrMGRtOWZZbUp0UVdNNU9YWnJkeElYZG1SbFMxazNTMWxPU21GcWVYUk5VSGxqYlRadlFVVWFJa0ZFVlhsRlIyTnhlVU5tWTNoSk5WZDBMVTl1UWtzM2FIbHRZbkJPVEdoQlJYYyIsImZjdiI6IjMiLCJlaSI6InZkZUtZN0tZTkphanl0TVB5Y202b0FFIiwicWMiOiJDaEZpY205M2JpQnlaWE4wWVhWeVlXNTBjeEFBZlRncTlUNCIsInF1ZXN0aW9uIjoiV2hhdCBkaWQgQnJvd25zIEJyaXN0b2wgdXNlZCB0byBiZT8iLCJsayI6IkdpSjNhR0YwSUdScFpDQmljbTkzYm5NZ1luSnBjM1J2YkNCMWMyVmtJSFJ2SUdKbCIsImJzIjoiYy1QUzVsTHp5QzlYeUUzTXExUndLc292enl0V0tFb3RMa2tzTFVyTUt5bFdTQ3hLVlNqSlNDMUt0WmQ0R3N1bHpxVVVucEd2a0ZtTXFWUUJ5RTlOVVVpcXRKZjQ2QTlSbUpxbmtKS1pBbE9hbWFmZ25KaWJWSlNaa3A2cWtGLVFtbWN2Y1ppUlM0TkxPVHdqc1FSWm9WTlJabkZKZm81Q2FUSFF2Sko4aFNTZzNkMU9Bb3dBIn0=",
                "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRkalZtZFZCTFZ6QnpUM3BGV0MxaGJFRkpURVZoWTJaelExTjBObHBaT0ZOelJYQnBNbFo2UlVGeE9WZDROVFJYUjJWTWVscE9ZVFZvVVd0cFVGbEdiMmh1TkdkblFreE9OWEk1UkdrMGRtOWZZbUp0UVdNNU9YWnJkeElYZG1SbFMxazNTMWxPU21GcWVYUk5VSGxqYlRadlFVVWFJa0ZFVlhsRlIyTnhlVU5tWTNoSk5WZDBMVTl1UWtzM2FIbHRZbkJPVEdoQlJYYyIsImZjdiI6IjMiLCJlaSI6InZkZUtZN0tZTkphanl0TVB5Y202b0FFIiwicWMiOiJDaEZpY205M2JpQnlaWE4wWVhWeVlXNTBjeEFBZlRncTlUNCIsInF1ZXN0aW9uIjoiV2hhdCBkaWQgQnJvd25zIEJyaXN0b2wgdXNlZCB0byBiZT8iLCJsayI6IkdpSjNhR0YwSUdScFpDQmljbTkzYm5NZ1luSnBjM1J2YkNCMWMyVmtJSFJ2SUdKbCIsImJzIjoiYy1QUzVsTHp5QzlYeUUzTXExUndLc292enl0V0tFb3RMa2tzTFVyTUt5bFdTQ3hLVlNqSlNDMUt0WmQ0R3N1bHpxVVVucEd2a0ZtTXFWUUJ5RTlOVVVpcXRKZjQ2QTlSbUpxbmtKS1pBbE9hbWFmZ25KaWJWSlNaa3A2cWtGLVFtbWN2Y1ppUlM0TkxPVHdqc1FSWm9WTlJabkZKZm81Q2FUSFF2Sko4aFNTZzNkMU9Bb3dBIn0%3D"
              }
            ],
            "organic_results": [
              {
                "position": 1,
                "title": "Brown | NYC Restaurants - Cititour.com",
                "link": "https://cititour.com/NYC_Restaurants/Brown/1626",
                "displayed_link": "https://cititour.com › NYC_Restaurants › Brown",
                "snippet": "Contact Info: Address: 61 Hester Street (at Essex) City: New York, NY Zip: 10002 map: Map Phone: (212) 254-9825. Nearby: Restaurants",
                "snippet_highlighted_words": [
                  "Restaurants"
                ],
                "about_this_result": {
                  "source": {
                    "description": "cititour.com was first indexed by Google more than 10 years ago",
                    "source_info_link": "https://cititour.com/NYC_Restaurants/Brown/1626",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/534468f44628d8776518c8c57a26f8d314e5d3d3c773c2c5156cfc69e687baa64e9082d9b54b59a5d19b9c0cdc6e6d51.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://cititour.com/NYC_Restaurants/Brown/1626&tbm=ilp&ilps=ADNMCi3HFtKTYkSpiEBtl1nwMn15r5OwSA",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi3HFtKTYkSpiEBtl1nwMn15r5OwSA&q=About+https%3A%2F%2Fcititour.com%2FNYC_Restaurants%2FBrown%2F1626",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:_cDKWGyhCksJ:https://cititour.com/NYC_Restaurants/Brown/1626&cd=13&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 2,
                "title": "Brown - New American Restaurant in New York - Foursquare",
                "link": "https://foursquare.com/v/brown/44e5f19df964a52074371fe3",
                "displayed_link": "https://foursquare.com › ... › New American Restaurant",
                "snippet": "See 41 photos and 23 tips from 769 visitors to Brown. \"Great place for lunch or ... Brown. (Now Closed). New American Restaurant, Coffee Shop, and Café$$$$.",
                "snippet_highlighted_words": [
                  "Brown",
                  "Brown",
                  "Restaurant"
                ],
                "about_this_result": {
                  "source": {
                    "description": "foursquare.com was first indexed by Google more than 10 years ago",
                    "source_info_link": "https://foursquare.com/v/brown/44e5f19df964a52074371fe3",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/534468f44628d8776518c8c57a26f8d39df7de679e10b4f2154873c8dc7669ab5675024f992ccc0cbbb3553e638cb5d2.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://foursquare.com/v/brown/44e5f19df964a52074371fe3&tbm=ilp&ilps=ADNMCi2umAFi2d3MvUSRCXFUKnlZWlMa6w",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi2umAFi2d3MvUSRCXFUKnlZWlMa6w&q=About+https%3A%2F%2Ffoursquare.com%2Fv%2Fbrown%2F44e5f19df964a52074371fe3",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:0DgzwNYivFQJ:https://foursquare.com/v/brown/44e5f19df964a52074371fe3&cd=14&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 3,
                "title": "Brown Cafe menu - New York NY 10002 - (212) 477-2427",
                "link": "https://www.allmenus.com/ny/new-york/442196-brown-cafe/menu/",
                "displayed_link": "https://www.allmenus.com › NY",
                "snippet": "Restaurant menu, map for Brown Cafe located in 10002, New York NY, 61 Hester St. ... Brown Breakfast Platter $11.25. Raisin toast, french butter, preserves, ...",
                "snippet_highlighted_words": [
                  "Restaurant",
                  "Brown",
                  "Brown"
                ],
                "about_this_result": {
                  "source": {
                    "description": "allmenus.com was first indexed by Google more than 10 years ago",
                    "source_info_link": "https://www.allmenus.com/ny/new-york/442196-brown-cafe/menu/",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/534468f44628d8776518c8c57a26f8d3c099c70b96d9214fdbf74215ba75cf37e1b4b7cb90e2838ccab5e5a4bd93da17.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.allmenus.com/ny/new-york/442196-brown-cafe/menu/&tbm=ilp&ilps=ADNMCi3cduYAKmN8FvWdmmMrCYmmQgnn-A",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi3cduYAKmN8FvWdmmMrCYmmQgnn-A&q=About+https%3A%2F%2Fwww.allmenus.com%2Fny%2Fnew-york%2F442196-brown-cafe%2Fmenu%2F",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:Pm87JzCl2kMJ:https://www.allmenus.com/ny/new-york/442196-brown-cafe/menu/&cd=15&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 4,
                "title": "BROWN'S LOUNGE - 2828 W 28th St, New York, NY - Yelp",
                "link": "https://www.yelp.com/biz/browns-lounge-new-york",
                "displayed_link": "https://www.yelp.com › ... › Nightlife › Bars › Lounges",
                "snippet": "Recommended Reviews - Brown's Lounge · Map · 2828 W 28th St. New York, NY 11224. Coney Island. Directions · More Info. Menu for Brown's Lounge · Known For. No.",
                "snippet_highlighted_words": [
                  "Brown's",
                  "Brown's"
                ],
                "rich_snippet": {
                  "top": {
                    "detected_extensions": {
                      "rating": 5,
                      "review": 1
                    },
                    "extensions": [
                      "Rating: 5",
                      "‎1 review",
                      "‎Price range: $$"
                    ]
                  }
                },
                "about_this_result": {
                  "source": {
                    "description": "Yelp Inc. is an American company that develops the Yelp.com website and the Yelp mobile app, which publish crowd-sourced reviews about businesses. It also operates Yelp Guest Manager, a table reservation service. It is headquartered in San Francisco, California.",
                    "source_info_link": "https://www.yelp.com/biz/browns-lounge-new-york",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/534468f44628d8776518c8c57a26f8d358cfab691ea9cd7e911b63d932b84ceae20d99f06e5b832cb9e02688b10c75c4.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://m.yelp.com/biz/browns-lounge-new-york&tbm=ilp&ilps=ADNMCi3xSlnzuL5qLKSt87FQkrk0JY3_wg",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi3xSlnzuL5qLKSt87FQkrk0JY3_wg&q=About+https%3A%2F%2Fm.yelp.com%2Fbiz%2Fbrowns-lounge-new-york",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:0tXffnecFwYJ:https://www.yelp.com/biz/browns-lounge-new-york&cd=16&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 5,
                "title": "Browns Socialhouse",
                "link": "https://brownssocialhouse.com/",
                "displayed_link": "https://brownssocialhouse.com",
                "snippet": "Browns Socialhouse - an upscale casual dining restaurant. Sports, Bar, Lunch, Dinner, Brunch.",
                "snippet_highlighted_words": [
                  "Browns",
                  "dining restaurant"
                ],
                "sitelinks": {
                  "inline": [
                    {
                      "title": "McCallum",
                      "link": "https://brownssocialhouse.com/mccallum-abbotsford"
                    },
                    {
                      "title": "Upper Lonsdale",
                      "link": "https://brownssocialhouse.com/lonsdale/"
                    },
                    {
                      "title": "Semiahmoo",
                      "link": "https://brownssocialhouse.com/semiahmoo"
                    },
                    {
                      "title": "Guildford",
                      "link": "https://brownssocialhouse.com/guildford"
                    }
                  ]
                },
                "about_this_result": {
                  "source": {
                    "description": "brownssocialhouse.com was first indexed by Google more than 10 years ago",
                    "source_info_link": "https://brownssocialhouse.com/",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/534468f44628d8776518c8c57a26f8d33a93de80f1be9599c58f55ba17d29cdb5ec60d87a280289547b61b572bcab850.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://brownssocialhouse.com/&tbm=ilp&ilps=ADNMCi0OD70khQG54S805AsAkyr837DRNA",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi0OD70khQG54S805AsAkyr837DRNA&q=About+https%3A%2F%2Fbrownssocialhouse.com%2F",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:qGFcSLzfgcIJ:https://brownssocialhouse.com/&cd=17&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 6,
                "title": "Browns Restaurants - Dining Experiences with Ambience ...",
                "link": "https://www.browns-restaurants.co.uk/",
                "displayed_link": "https://www.browns-restaurants.co.uk",
                "snippet": "With restaurants housed in a variety of historic & often listed buildings across the UK, Browns offers a unique dining experience with a high quality menu ...",
                "snippet_highlighted_words": [
                  "restaurants",
                  "Browns",
                  "dining"
                ],
                "about_this_result": {
                  "source": {
                    "description": "Browns Brasserie & Bar is a British chain of restaurants, mostly located in the south of England.\nBrowns was the first hospitality venture established by Jeremy Mogford, who in 1973 invested £10,000 in the first Browns Restaurant and Bar in Brighton, East Sussex.",
                    "source_info_link": "https://www.browns-restaurants.co.uk/",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/534468f44628d8776518c8c57a26f8d3b9ed4f3dd913fa89ea1dce9a85bbefdc1c7c7c92a7e1cff186144ff677e7d207.jpeg"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.browns-restaurants.co.uk/&tbm=ilp&ilps=ADNMCi2a1KrpretzLBvK3nc5Tr4n1-e2wA",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi2a1KrpretzLBvK3nc5Tr4n1-e2wA&q=About+https%3A%2F%2Fwww.browns-restaurants.co.uk%2F",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:oUUIjRVRN_wJ:https://www.browns-restaurants.co.uk/&cd=18&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 7,
                "title": "A Running List of New Restaurants That Opened in ... - Eater NY",
                "link": "https://ny.eater.com/2022/6/2/23143536/nyc-restaurant-openings-june-2022",
                "displayed_link": "https://ny.eater.com › nyc-restaurant-openings-june-2022",
                "date": "Jun 30, 2022",
                "snippet": "A weekly updated roundup of new restaurants in New York City. ... Brown Butter, has expanded with its Brown Butter Creamery gelato shop, ...",
                "snippet_highlighted_words": [
                  "restaurants",
                  "Brown",
                  "Brown"
                ],
                "about_this_result": {
                  "source": {
                    "description": "Eater is a food website by Vox Media. It was co-founded by Lockhart Steele and Ben Leventhal in 2005, and originally focused on dining and nightlife in New York City. Eater launched a national site in 2009, and covered nearly 20 cities by 2012.",
                    "source_info_link": "https://ny.eater.com/2022/6/2/23143536/nyc-restaurant-openings-june-2022",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/534468f44628d8776518c8c57a26f8d3462d3dcf1897cdfb13569bc9a201469253c4e777ccf04de5410dd5dfb81c3499.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://ny.eater.com/2022/6/2/23143536/nyc-restaurant-openings-june-2022&tbm=ilp&ilps=ADNMCi3cRoBpUrINOtVSIoo8rnpjJ_2Tpw",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi3cRoBpUrINOtVSIoo8rnpjJ_2Tpw&q=About+https%3A%2F%2Fny.eater.com%2F2022%2F6%2F2%2F23143536%2Fnyc-restaurant-openings-june-2022",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:sJ1KbHeI46AJ:https://ny.eater.com/2022/6/2/23143536/nyc-restaurant-openings-june-2022&cd=19&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 8,
                "title": "Ed Brown - Chief Executive Officer - Restaurant Associates",
                "link": "https://www.linkedin.com/in/ed-brown-0b63a79b",
                "displayed_link": "https://www.linkedin.com › ed-brown-0b63a79b",
                "snippet": "A graduate of the prestigious Culinary Institute of America, Brown's professional life began at the New York Times three-star Maurice Restaurant as Sous ...",
                "snippet_highlighted_words": [
                  "Brown's",
                  "Restaurant"
                ],
                "about_this_result": {
                  "source": {
                    "description": "LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.",
                    "source_info_link": "https://www.linkedin.com/in/ed-brown-0b63a79b",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/534468f44628d8776518c8c57a26f8d3f6224f811d53df2d8e7a13a3527b8f9b228c7242bea190b8b64de088ce9fa16b.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.linkedin.com/in/ed-brown-0b63a79b&tbm=ilp&ilps=ADNMCi0Ud4VcMZ_9HFku-qiqEo3aNVhAUw",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi0Ud4VcMZ_9HFku-qiqEo3aNVhAUw&q=About+https%3A%2F%2Fwww.linkedin.com%2Fin%2Fed-brown-0b63a79b",
                "cached_page_link": "/search?q=related:https://www.linkedin.com/in/ed-brown-0b63a79b+brown+restaurants"
              },
              {
                "position": 9,
                "title": "Browns Restaurants - Wikipedia",
                "link": "https://en.wikipedia.org/wiki/Browns_Restaurants",
                "displayed_link": "https://en.wikipedia.org › wiki › Browns_Restaurants",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5ZAShvvB4n4uv_NSRGM2nL4YDQeY43OPa7rYaXTJQ0i8DpOX3duX&usqp=CAE&s",
                "snippet": "Browns Brasserie & Bar is a British chain of restaurants, mostly located in the south of England. Browns was the first hospitality venture established by ...",
                "snippet_highlighted_words": [
                  "Browns",
                  "restaurants",
                  "Browns"
                ],
                "about_this_result": {
                  "source": {
                    "description": "Wikipedia is a multilingual free online encyclopedia written and maintained by a community of volunteers through open collaboration and a wiki-based editing system. Its editors are known as Wikipedians. Wikipedia is the largest and most-read reference work in history.",
                    "source_info_link": "https://en.wikipedia.org/wiki/Browns_Restaurants",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad7bd4055aa09ca91e5bf/images/534468f44628d8776518c8c57a26f8d3bc4c8a9806b7b843990e24a1e6b386e54a54c4ad0ab8a90e3f9813b7d3359463.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://en.wikipedia.org/wiki/Browns_Restaurants&tbm=ilp&ilps=ADNMCi1kybTcRpxc7jjpY92b3mDKA8W9FA",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi1kybTcRpxc7jjpY92b3mDKA8W9FA&q=About+https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBrowns_Restaurants",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:FCsdJh9ZqsYJ:https://en.wikipedia.org/wiki/Browns_Restaurants&cd=21&hl=en&ct=clnk&gl=us",
                "related_pages_link": "https://www.google.com/search?q=related:https://en.wikipedia.org/wiki/Browns_Restaurants+brown+restaurants"
              }
            ],
            "related_searches": [
              {
                "query": "brown house menu",
                "link": "https://www.google.com/search?q=Brown+House+menu&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ1QJ6BAg2EAE"
              },
              {
                "query": "browns lunch menu",
                "link": "https://www.google.com/search?q=Browns+lunch+menu&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ1QJ6BAg0EAE"
              },
              {
                "query": "browns vegan menu",
                "link": "https://www.google.com/search?q=Browns+vegan+menu&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ1QJ6BAgzEAE"
              },
              {
                "query": "social house restaurant",
                "link": "https://www.google.com/search?q=Social+House+restaurant&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ1QJ6BAgyEAE"
              },
              {
                "query": "browns feedback",
                "link": "https://www.google.com/search?q=Browns+feedback&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ1QJ6BAgwEAE"
              },
              {
                "query": "browns social house chestermere happy hour",
                "link": "https://www.google.com/search?q=Browns+Social+house+Chestermere+happy+Hour&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ1QJ6BAgqEAE"
              },
              {
                "query": "browns menu breakfast",
                "link": "https://www.google.com/search?q=Browns+menu+breakfast&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ1QJ6BAgpEAE"
              },
              {
                "query": "social club restaurant near me",
                "link": "https://www.google.com/search?q=Social+Club+restaurant+near+me&sa=X&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ1QJ6BAgmEAE"
              }
            ],
            "pagination": {
              "current": 1,
              "next": "https://www.google.com/search?q=brown+restaurants&ei=vdeKY7KYNJajytMPycm6oAE&start=10&sa=N&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ8NMDegQIAhAW",
              "other_pages": {
                "2": "https://www.google.com/search?q=brown+restaurants&ei=vdeKY7KYNJajytMPycm6oAE&start=10&sa=N&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ8tMDegQIAhAE",
                "3": "https://www.google.com/search?q=brown+restaurants&ei=vdeKY7KYNJajytMPycm6oAE&start=20&sa=N&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ8tMDegQIAhAG",
                "4": "https://www.google.com/search?q=brown+restaurants&ei=vdeKY7KYNJajytMPycm6oAE&start=30&sa=N&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ8tMDegQIAhAI",
                "5": "https://www.google.com/search?q=brown+restaurants&ei=vdeKY7KYNJajytMPycm6oAE&start=40&sa=N&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ8tMDegQIAhAK",
                "6": "https://www.google.com/search?q=brown+restaurants&ei=vdeKY7KYNJajytMPycm6oAE&start=50&sa=N&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ8tMDegQIAhAM",
                "7": "https://www.google.com/search?q=brown+restaurants&ei=vdeKY7KYNJajytMPycm6oAE&start=60&sa=N&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ8tMDegQIAhAO",
                "8": "https://www.google.com/search?q=brown+restaurants&ei=vdeKY7KYNJajytMPycm6oAE&start=70&sa=N&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ8tMDegQIAhAQ",
                "9": "https://www.google.com/search?q=brown+restaurants&ei=vdeKY7KYNJajytMPycm6oAE&start=80&sa=N&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ8tMDegQIAhAS",
                "10": "https://www.google.com/search?q=brown+restaurants&ei=vdeKY7KYNJajytMPycm6oAE&start=90&sa=N&ved=2ahUKEwjy6tKT1dz7AhWWkXIEHcmkDhQQ8tMDegQIAhAU"
              }
            },
            "serpapi_pagination": {
              "current": 1,
              "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&start=10",
              "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&start=10",
              "other_pages": {
                "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&start=10",
                "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&start=20",
                "4": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&start=30",
                "5": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&start=40",
                "6": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&start=50",
                "7": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&start=60",
                "8": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&start=70",
                "9": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&start=80",
                "10": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+restaurants&start=90"
              }
            }
          }
    ])


    return (
        <div>
          <BusinessMapper businesses = {restaurants} />
        </div>
    )
}

export default FoodPage