import React, { useState } from 'react';
import EventsMapper from "../../components/EventsMapper/EventsMapper"
import '../EventsPage/EventsPage.css'

const EventsPage  = () => {
    const [events, setEvents] = useState([{
        "search_metadata": {
          "id": "638a634b8cd878eab02e875e",
          "status": "Success",
          "json_endpoint": "https://serpapi.com/searches/6a0a2946c8a5e1e7/638a634b8cd878eab02e875e.json",
          "created_at": "2022-12-02 20:42:51 UTC",
          "processed_at": "2022-12-02 20:42:51 UTC",
          "google_events_url": "https://www.google.com/search?q=heritage+month+events&ibp=htl;events&uule=w+CAIQICITVGV4YXMsVW5pdGVkIFN0YXRlcw&hl=en",
          "raw_html_file": "https://serpapi.com/searches/6a0a2946c8a5e1e7/638a634b8cd878eab02e875e.html",
          "total_time_taken": 4.48
        },
        "search_parameters": {
          "q": "heritage month events",
          "engine": "google_events",
          "location_requested": "texas",
          "location_used": "Texas,United States"
        },
        "search_information": {
          "events_results_state": "Results for exact spelling"
        },
        "events_results": [
          {
            "title": "Irish-American Heritage Month in USA",
            "date": {
              "start_date": "Feb 28",
              "when": "Feb 28, 2023, 13:00 – Mar 1, 2023, 13:00 HAST"
            },
            "address": [
              "United States",
              "United States"
            ],
            "link": "https://www.thereisadayforthat.com/holidays/usa/irish-american-heritage-month",
            "event_location_map": {
              "image": "https://www.google.com/maps/vt/data=kxjyNW6ZbgggH-Jgcqx_aLBetYaomommtxyeAdXFY_KA6UC0eGWEe2z41Sf_Q3sNq0_qd_Wi0w",
              "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x54eab584e432360b:0x1c3bb99243deb742?sa=X&hl=en",
              "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x54eab584e432360b%3A0x1c3bb99243deb742&engine=google_maps&google_domain=google.com&hl=en&q=heritage+month+events&type=place"
            },
            "description": "This is a Holiday in USA. March is Irish-American Heritage Month in USA as St. Patrick's Day falls on 17th March.",
            "ticket_info": [
              {
                "source": "There is a Day for that!",
                "link": "https://www.thereisadayforthat.com/holidays/usa/irish-american-heritage-month",
                "link_type": "more info"
              }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hGnK2QmuAyhDGNtva4GcCy8kTTw6gTAe3OXUR-Kyd1Zuanzs0YhnaMM&s",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5k-Vk_2WcrFNYeNjGX4z0lgZ8wJgRq1xDHipdtjyBcwDQcQj1drnddJ0OOA&s=10"
          },
          {
            "title": "National Arab American Heritage Month in USA",
            "date": {
              "start_date": "Mar 31",
              "when": "Mar 31, 2023, 13:00 – Apr 1, 2023, 13:00 HADT"
            },
            "address": [
              "United States",
              "United States"
            ],
            "link": "https://www.thereisadayforthat.com/holidays/usa/national-arab-american-heritage-month",
            "event_location_map": {
              "image": "https://www.google.com/maps/vt/data=kxjyNW6ZbgggH-Jgcqx_aLBetYaomommtxyeAdXFY_KA6UC0eGWEe2z41Sf_Q3sNq0_qd_Wi0w",
              "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x54eab584e432360b:0x1c3bb99243deb742?sa=X&hl=en",
              "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x54eab584e432360b%3A0x1c3bb99243deb742&engine=google_maps&google_domain=google.com&hl=en&q=heritage+month+events&type=place"
            },
            "description": "This is a Holiday in USA. National Arab American Heritage Month celebrates the Arab American heritage and culture and pays tribute to the contributions of Arab Americans.",
            "ticket_info": [
              {
                "source": "There is a Day for that!",
                "link": "https://www.thereisadayforthat.com/holidays/usa/national-arab-american-heritage-month",
                "link_type": "more info"
              }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-EuUqzN9FlcaMIU8u3lQ1iAIsgq2lttD1O95gbUSImFBq7bkJOQOKXs&s",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPuxBHQl4voZB9w13zD1XlWPEBGQV6UH2fhK1hv9NU9VI991GAYBU257TTWg&s=10"
          },
          {
            "title": "National Hispanic Heritage Month",
            "date": {
              "start_date": "Sep 1",
              "when": "Sep 1 – 30, 2023"
            },
            "address": [
              "United States",
              "United States"
            ],
            "link": "https://gayther.com/significant-events/national-hispanic-heritage-month/",
            "event_location_map": {
              "image": "https://www.google.com/maps/vt/data=kxjyNW6ZbgggH-Jgcqx_aLBetYaomommtxyeAdXFY_KA6UC0eGWEe2z41Sf_Q3sNq0_qd_Wi0w",
              "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x54eab584e432360b:0x1c3bb99243deb742?sa=X&hl=en",
              "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x54eab584e432360b%3A0x1c3bb99243deb742&engine=google_maps&google_domain=google.com&hl=en&q=heritage+month+events&type=place"
            },
            "description": "National Hispanic Heritage Month is a significant and observation event that occurs for one month each year",
            "ticket_info": [
              {
                "source": "Gayther.com",
                "link": "https://gayther.com/significant-events/national-hispanic-heritage-month/",
                "link_type": "tickets"
              }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffwIRT6TxyTz2uhojYdTy1uluqv44INy3P7RaCbsUeIDpY2LlcD0G_YE&s",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UQPfp7TWtXNavpdmCSVR4euKESoRsQzxt4zm-TThDg&s=10"
          },
          {
            "title": "Hispanic Heritage month",
            "date": {
              "start_date": "Sep 15",
              "when": "Fri, Sep 15"
            },
            "address": [
              "United States",
              "United States"
            ],
            "link": "https://www.tmorra.com/item/205724640",
            "event_location_map": {
              "image": "https://www.google.com/maps/vt/data=kxjyNW6ZbgggH-Jgcqx_aLBetYaomommtxyeAdXFY_KA6UC0eGWEe2z41Sf_Q3sNq0_qd_Wi0w",
              "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x54eab584e432360b:0x1c3bb99243deb742?sa=X&hl=en",
              "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x54eab584e432360b%3A0x1c3bb99243deb742&engine=google_maps&google_domain=google.com&hl=en&q=heritage+month+events&type=place"
            },
            "description": "The White House observes start of Hispanic Heritage month.",
            "ticket_info": [
              {
                "source": "Tmorra.com",
                "link": "https://www.tmorra.com/item/205724640",
                "link_type": "more info"
              }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz4F0LisQip16EWrA7_OaNOFcqFF_JXtvsJH1qRVPQ54CTnTYSydkCuhiDHw&s=10",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7q3BphUDroVhrViykB14G_yMZS1b1X8nE9OPMxQEkEd-P5JODipm7gc9sww&s"
          },
          {
            "title": "National Native American Heritage Day in USA",
            "date": {
              "start_date": "Nov 23",
              "when": "Nov 23, 2023, 13:00 – Nov 24, 2023, 13:00 HAST"
            },
            "address": [
              "United States",
              "United States"
            ],
            "link": "https://www.thereisadayforthat.com/holidays/usa/national-native-american-heritage-day",
            "event_location_map": {
              "image": "https://www.google.com/maps/vt/data=kxjyNW6ZbgggH-Jgcqx_aLBetYaomommtxyeAdXFY_KA6UC0eGWEe2z41Sf_Q3sNq0_qd_Wi0w",
              "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x54eab584e432360b:0x1c3bb99243deb742?sa=X&hl=en",
              "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x54eab584e432360b%3A0x1c3bb99243deb742&engine=google_maps&google_domain=google.com&hl=en&q=heritage+month+events&type=place"
            },
            "description": "This is a Holiday in USA. Find out the dates, history and traditions of National Native American Heritage Day",
            "ticket_info": [
              {
                "source": "There is a Day for that!",
                "link": "https://www.thereisadayforthat.com/holidays/usa/national-native-american-heritage-day",
                "link_type": "more info"
              }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpO8R_5bRzgQjgyqjn-LzEeW3FH2L_VLxjGuag9IH5CHyhoDNAGmDCoBE&s",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz4F0LisQip16EWrA7_OaNOFcqFF_JXtvsJH1qRVPQ54CTnTYSydkCuhiDHw&s=10"
          },
          {
            "title": "Native American Indian Month",
            "date": {
              "start_date": "Nov 1",
              "when": "Nov 1 – 30, 2023"
            },
            "address": [
              "United States",
              "United States"
            ],
            "link": "https://gayther.com/significant-events/native-american-indian-month/",
            "event_location_map": {
              "image": "https://www.google.com/maps/vt/data=kxjyNW6ZbgggH-Jgcqx_aLBetYaomommtxyeAdXFY_KA6UC0eGWEe2z41Sf_Q3sNq0_qd_Wi0w",
              "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x54eab584e432360b:0x1c3bb99243deb742?sa=X&hl=en",
              "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x54eab584e432360b%3A0x1c3bb99243deb742&engine=google_maps&google_domain=google.com&hl=en&q=heritage+month+events&type=place"
            },
            "description": "Native American Indian/Alaska Native Heritage Month is a significant and observation event that occurs for one month each year",
            "ticket_info": [
              {
                "source": "Gayther.com",
                "link": "https://gayther.com/significant-events/native-american-indian-month/",
                "link_type": "tickets"
              }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffwIRT6TxyTz2uhojYdTy1uluqv44INy3P7RaCbsUeIDpY2LlcD0G_YE&s",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UQPfp7TWtXNavpdmCSVR4euKESoRsQzxt4zm-TThDg&s=10"
          },
          {
            "title": "LGBT+ Pride Month in USA",
            "date": {
              "start_date": "May 31",
              "when": "May 31, 2023, 13:00 – Jun 1, 2023, 13:00 HADT"
            },
            "address": [
              "United States",
              "United States"
            ],
            "link": "https://www.thereisadayforthat.com/holidays/usa/lgbt-pride-month",
            "event_location_map": {
              "image": "https://www.google.com/maps/vt/data=kxjyNW6ZbgggH-Jgcqx_aLBetYaomommtxyeAdXFY_KA6UC0eGWEe2z41Sf_Q3sNq0_qd_Wi0w",
              "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x54eab584e432360b:0x1c3bb99243deb742?sa=X&hl=en",
              "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x54eab584e432360b%3A0x1c3bb99243deb742&engine=google_maps&google_domain=google.com&hl=en&q=heritage+month+events&type=place"
            },
            "description": "This is a Holiday in USA. Until fairly recently, gay, lesbian, bisexual, and transgender (GLBT) individuals did not have a specific month during which to celebrate and commemorate Pride Days in...",
            "ticket_info": [
              {
                "source": "There is a Day for that!",
                "link": "https://www.thereisadayforthat.com/holidays/usa/lgbt-pride-month",
                "link_type": "more info"
              }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFf6WsXLlcXJPJYITUwYK2UUe6mXA3DKJhz0V83de9Qv2OrmKO-XnotkY&s",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcS9pJdnTuaPYfJzlZqtRrjVS__SUyFOuSQy-rRkzbr0bmPjTT6yWr4HZQA&s=10"
          },
          {
            "title": "Disability Employment Awareness Month in USA",
            "date": {
              "start_date": "Sep 30",
              "when": "Sep 30, 2023, 13:00 – Oct 1, 2023, 13:00 HADT"
            },
            "address": [
              "United States",
              "United States"
            ],
            "link": "https://www.thereisadayforthat.com/holidays/usa/disability-employment-awareness-month",
            "event_location_map": {
              "image": "https://www.google.com/maps/vt/data=kxjyNW6ZbgggH-Jgcqx_aLBetYaomommtxyeAdXFY_KA6UC0eGWEe2z41Sf_Q3sNq0_qd_Wi0w",
              "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x54eab584e432360b:0x1c3bb99243deb742?sa=X&hl=en",
              "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x54eab584e432360b%3A0x1c3bb99243deb742&engine=google_maps&google_domain=google.com&hl=en&q=heritage+month+events&type=place"
            },
            "description": "This is a Holiday in USA. Diversity Awareness Month is all about opening dialogues that foster an appreciation of the differences that separate us as well as the similarities that unite us.",
            "ticket_info": [
              {
                "source": "There is a Day for that!",
                "link": "https://www.thereisadayforthat.com/holidays/usa/disability-employment-awareness-month",
                "link_type": "more info"
              }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7OcDilTv7PhlxAOE15OAl5PIVjgmXa8Lk4CF2V5ozzTgcoGtXq2Kqlk&s",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7UWsgVjflugklG3g4tW5LQpLoMwhMdoLV6Ntcd_OBjeU88ijytPO8uOzHA&s=10"
          }
        ]
      }]);

    return (
        <div className='eventspage'>
          <h1 className='eventspagetitle'>EVENTS</h1>
          <h2 className='eventspagecaption'>Here you will find an array of Texas upcoming events that highlight black/brown communities.</h2>
            <EventsMapper events = {events} />
        </div>
    )
}

export default EventsPage