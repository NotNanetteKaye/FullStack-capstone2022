import React, { useState } from 'react';
import BusinessMapper from '../../components/BusinessMapper/BusinessMapper';


const BusinessesPage = () => {
    const [businesses, setBusinesses] = useState([
        {
            "search_metadata": {
              "id": "638ad80cf0adfb24c1872d2d",
              "status": "Success",
              "json_endpoint": "https://serpapi.com/searches/b801334f3993bce9/638ad80cf0adfb24c1872d2d.json",
              "created_at": "2022-12-03 05:01:00 UTC",
              "processed_at": "2022-12-03 05:01:00 UTC",
              "google_url": "https://www.google.com/search?q=brown+boutiques&oq=brown+boutiques&sourceid=chrome&ie=UTF-8",
              "raw_html_file": "https://serpapi.com/searches/b801334f3993bce9/638ad80cf0adfb24c1872d2d.html",
              "total_time_taken": 1.04
            },
            "search_parameters": {
              "engine": "google",
              "q": "brown boutiques",
              "google_domain": "google.com",
              "device": "desktop"
            },
            "search_information": {
              "organic_results_state": "Results for exact spelling",
              "query_displayed": "brown boutiques",
              "total_results": 789000000,
              "time_taken_displayed": 0.59,
              "menu_items": [
                {
                  "position": 1,
                  "title": "All"
                },
                {
                  "position": 2,
                  "title": "Shopping",
                  "link": "https://www.google.com/search?q=brown+boutiques&source=lnms&tbm=shop&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q_AUoAXoECAEQAw",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+boutiques&tbm=shop"
                },
                {
                  "position": 3,
                  "title": "Images",
                  "link": "https://www.google.com/search?q=brown+boutiques&source=lnms&tbm=isch&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q_AUoAnoECAEQBA",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+boutiques&tbm=isch"
                },
                {
                  "position": 4,
                  "title": "Maps",
                  "link": "https://maps.google.com/maps?q=brown+boutiques&um=1&ie=UTF-8&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q_AUoA3oECAEQBQ"
                },
                {
                  "position": 5,
                  "title": "News",
                  "link": "https://www.google.com/search?q=brown+boutiques&source=lnms&tbm=nws&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q_AUoBHoECAEQBg",
                  "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+boutiques&tbm=nws"
                }
              ]
            },
            "local_map": {
              "link": "https://www.google.com/search?q=brown+boutiques&npsic=0&rflfq=1&rldoc=1&rllag=37790252,-122404912,747&tbm=lcl&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0QtgN6BAgfEAE",
              "image": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/563c11c1cbedf70dab94acb1be1daf0f.png",
              "gps_coordinates": {
                "latitude": 37.790252,
                "longitude": -122.404912,
                "altitude": 747
              }
            },
            "local_results": {
              "more_locations_link": "https://www.google.com/search?tbs=lf:1,lf_ui:10&tbm=lcl&q=brown+boutiques&rflfq=1&num=10&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0QjGp6BAggEAI",
              "places": [
                {
                  "position": 1,
                  "title": "Thom Browne San Francisco",
                  "place_id": "6918397542586104785",
                  "lsig": "AB86z5VKEtWo3l3mFnLId5JZiREM",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5VKEtWo3l3mFnLId5JZiREM&ludocid=6918397542586104785&q=brown+boutiques&tbm=lcl",
                  "type": "Clothing store",
                  "hours": "Closed ⋅ Opens 11AM Sat",
                  "address": "432 Jackson St · Near the Transamerica Pyramid",
                  "phone": "(415) 655-3618",
                  "thumbnail": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/0dcdad3a76cdc14adac3063f2df31c7894e3fcce70ae95be17bd7feef244eb8d4f8ad22e804f1f8d.jpeg",
                  "gps_coordinates": {
                    "latitude": 37.796722,
                    "longitude": -122.402596
                  }
                },
                {
                  "position": 2,
                  "title": "BCBGeneration at Macy's",
                  "place_id": "17571282200711349099",
                  "lsig": "AB86z5XSUHY0ikZF024SPvVIFLmP",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5XSUHY0ikZF024SPvVIFLmP&ludocid=17571282200711349099&q=brown+boutiques&tbm=lcl",
                  "reviews": 2,
                  "type": "Women's clothing store",
                  "hours": "Closed ⋅ Opens 10AM Sat",
                  "address": "170 O'Farrell St · In Macy's",
                  "phone": "(415) 397-3333",
                  "thumbnail": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/0dcdad3a76cdc14adac3063f2df31c78d22102f818697350d2ae21abe7eb60f097fbe736c79efcb9.png",
                  "gps_coordinates": {
                    "latitude": 37.787006,
                    "longitude": -122.407234
                  }
                },
                {
                  "position": 3,
                  "title": "Bloomingdale's",
                  "place_id": "15671163270725433288",
                  "lsig": "AB86z5VAl1YIT9s-3faGV4DUYVJK",
                  "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&lsig=AB86z5VAl1YIT9s-3faGV4DUYVJK&ludocid=15671163270725433288&q=brown+boutiques&tbm=lcl",
                  "reviews": 1900,
                  "type": "Clothing store",
                  "hours": "Closed ⋅ Opens 10AM Sat",
                  "address": "845 Market St · In the Westfield San Francisco Centre",
                  "phone": "(415) 856-5300",
                  "thumbnail": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/0dcdad3a76cdc14adac3063f2df31c7833db4e328b1c7663437b464e8d15a0045378d942ce78f89a.jpeg",
                  "gps_coordinates": {
                    "latitude": 37.783783,
                    "longitude": -122.40574
                  }
                }
              ]
            },
            "inline_images": [
              {
                "link": "https://www.google.com/search?source=univ&tbm=isch&q=brown+boutiques&fir=d4hdoRvWO2ELnM%252C-CtSPp7gMd8EKM%252C_%253BCz_IQiXhTP2rYM%252C-b3DdJFX0FF6zM%252C_%253B2BoYnwNjpNVmMM%252C0zZksUSXKG3afM%252C_%253BwP_bu-PcosVbXM%252CsM2rT9mfiU1KUM%252C_%253BFAESaQ60pb6sYM%252C0zZksUSXKG3afM%252C_%253BlFx3TQsR0B45HM%252C-b3DdJFX0FF6zM%252C_%253B9_0tkkNF2XNBWM%252CUnzUpl2QAcjbgM%252C_%253By20GrWJ9npcwKM%252CIbkcwK7W6Ix6IM%252C_%253B40_R3vaij71KjM%252CcKyWdRUkObvLRM%252C_%253BOH8M1ggaMlIP4M%252CLJX0_I6hnqzJZM%252C_&usg=AI4_-kSHRhi3WOtt6Fm9LI7vhX3356hCEg&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q9AF6BAhYEAA#imgrc=d4hdoRvWO2ELnM",
                "source": "https://aboutfarfetch.com/about/browns/",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqcsSvIaJR0XjZD9XyZ4YsK_ilKPrgBX0AO72ueS-7vg&s"
              },
              {
                "link": "https://www.google.com/search?source=univ&tbm=isch&q=brown+boutiques&fir=d4hdoRvWO2ELnM%252C-CtSPp7gMd8EKM%252C_%253BCz_IQiXhTP2rYM%252C-b3DdJFX0FF6zM%252C_%253B2BoYnwNjpNVmMM%252C0zZksUSXKG3afM%252C_%253BwP_bu-PcosVbXM%252CsM2rT9mfiU1KUM%252C_%253BFAESaQ60pb6sYM%252C0zZksUSXKG3afM%252C_%253BlFx3TQsR0B45HM%252C-b3DdJFX0FF6zM%252C_%253B9_0tkkNF2XNBWM%252CUnzUpl2QAcjbgM%252C_%253By20GrWJ9npcwKM%252CIbkcwK7W6Ix6IM%252C_%253B40_R3vaij71KjM%252CcKyWdRUkObvLRM%252C_%253BOH8M1ggaMlIP4M%252CLJX0_I6hnqzJZM%252C_&usg=AI4_-kSHRhi3WOtt6Fm9LI7vhX3356hCEg&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q9AF6BAhXEAA#imgrc=Cz_IQiXhTP2rYM",
                "source": "https://www.orlebarbrown.com/us/stores",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20a6HFYe4OXKdvg1NmwvvR2a2eZs-FGeyP14-b3JsvQ&s"
              },
              {
                "link": "https://www.google.com/search?source=univ&tbm=isch&q=brown+boutiques&fir=d4hdoRvWO2ELnM%252C-CtSPp7gMd8EKM%252C_%253BCz_IQiXhTP2rYM%252C-b3DdJFX0FF6zM%252C_%253B2BoYnwNjpNVmMM%252C0zZksUSXKG3afM%252C_%253BwP_bu-PcosVbXM%252CsM2rT9mfiU1KUM%252C_%253BFAESaQ60pb6sYM%252C0zZksUSXKG3afM%252C_%253BlFx3TQsR0B45HM%252C-b3DdJFX0FF6zM%252C_%253B9_0tkkNF2XNBWM%252CUnzUpl2QAcjbgM%252C_%253By20GrWJ9npcwKM%252CIbkcwK7W6Ix6IM%252C_%253B40_R3vaij71KjM%252CcKyWdRUkObvLRM%252C_%253BOH8M1ggaMlIP4M%252CLJX0_I6hnqzJZM%252C_&usg=AI4_-kSHRhi3WOtt6Fm9LI7vhX3356hCEg&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q9AF6BAhQEAA#imgrc=2BoYnwNjpNVmMM",
                "source": "https://www.thombrowne.com/us/stores",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ShUK-h7YWfBQEhzbTQmJd8vCS-2JzJQHl9Qmxx8L_w&s"
              },
              {
                "link": "https://www.google.com/search?source=univ&tbm=isch&q=brown+boutiques&fir=d4hdoRvWO2ELnM%252C-CtSPp7gMd8EKM%252C_%253BCz_IQiXhTP2rYM%252C-b3DdJFX0FF6zM%252C_%253B2BoYnwNjpNVmMM%252C0zZksUSXKG3afM%252C_%253BwP_bu-PcosVbXM%252CsM2rT9mfiU1KUM%252C_%253BFAESaQ60pb6sYM%252C0zZksUSXKG3afM%252C_%253BlFx3TQsR0B45HM%252C-b3DdJFX0FF6zM%252C_%253B9_0tkkNF2XNBWM%252CUnzUpl2QAcjbgM%252C_%253By20GrWJ9npcwKM%252CIbkcwK7W6Ix6IM%252C_%253B40_R3vaij71KjM%252CcKyWdRUkObvLRM%252C_%253BOH8M1ggaMlIP4M%252CLJX0_I6hnqzJZM%252C_&usg=AI4_-kSHRhi3WOtt6Fm9LI7vhX3356hCEg&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q9AF6BAhZEAA#imgrc=wP_bu-PcosVbXM",
                "source": "https://www.facebook.com/PINKnBROWN/",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7f65MB-I4VK6JuQCqYRr4ecuHt0RskwdAcO9lPewVQ&s"
              },
              {
                "link": "https://www.google.com/search?source=univ&tbm=isch&q=brown+boutiques&fir=d4hdoRvWO2ELnM%252C-CtSPp7gMd8EKM%252C_%253BCz_IQiXhTP2rYM%252C-b3DdJFX0FF6zM%252C_%253B2BoYnwNjpNVmMM%252C0zZksUSXKG3afM%252C_%253BwP_bu-PcosVbXM%252CsM2rT9mfiU1KUM%252C_%253BFAESaQ60pb6sYM%252C0zZksUSXKG3afM%252C_%253BlFx3TQsR0B45HM%252C-b3DdJFX0FF6zM%252C_%253B9_0tkkNF2XNBWM%252CUnzUpl2QAcjbgM%252C_%253By20GrWJ9npcwKM%252CIbkcwK7W6Ix6IM%252C_%253B40_R3vaij71KjM%252CcKyWdRUkObvLRM%252C_%253BOH8M1ggaMlIP4M%252CLJX0_I6hnqzJZM%252C_&usg=AI4_-kSHRhi3WOtt6Fm9LI7vhX3356hCEg&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q9AF6BAhREAA#imgrc=FAESaQ60pb6sYM",
                "source": "https://www.thombrowne.com/us/stores",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LVh6wnSPc0qzXpPPgCMeYn0gSp2uIerTsPmRA9NN8g&s"
              },
              {
                "link": "https://www.google.com/search?source=univ&tbm=isch&q=brown+boutiques&fir=d4hdoRvWO2ELnM%252C-CtSPp7gMd8EKM%252C_%253BCz_IQiXhTP2rYM%252C-b3DdJFX0FF6zM%252C_%253B2BoYnwNjpNVmMM%252C0zZksUSXKG3afM%252C_%253BwP_bu-PcosVbXM%252CsM2rT9mfiU1KUM%252C_%253BFAESaQ60pb6sYM%252C0zZksUSXKG3afM%252C_%253BlFx3TQsR0B45HM%252C-b3DdJFX0FF6zM%252C_%253B9_0tkkNF2XNBWM%252CUnzUpl2QAcjbgM%252C_%253By20GrWJ9npcwKM%252CIbkcwK7W6Ix6IM%252C_%253B40_R3vaij71KjM%252CcKyWdRUkObvLRM%252C_%253BOH8M1ggaMlIP4M%252CLJX0_I6hnqzJZM%252C_&usg=AI4_-kSHRhi3WOtt6Fm9LI7vhX3356hCEg&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q9AF6BAhUEAA#imgrc=lFx3TQsR0B45HM",
                "source": "https://www.orlebarbrown.com/us/stores",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbp3Vt_69No60erLU0gpi8axaec6QV4j_V1d5zFdYuw&s"
              },
              {
                "link": "https://www.google.com/search?source=univ&tbm=isch&q=brown+boutiques&fir=d4hdoRvWO2ELnM%252C-CtSPp7gMd8EKM%252C_%253BCz_IQiXhTP2rYM%252C-b3DdJFX0FF6zM%252C_%253B2BoYnwNjpNVmMM%252C0zZksUSXKG3afM%252C_%253BwP_bu-PcosVbXM%252CsM2rT9mfiU1KUM%252C_%253BFAESaQ60pb6sYM%252C0zZksUSXKG3afM%252C_%253BlFx3TQsR0B45HM%252C-b3DdJFX0FF6zM%252C_%253B9_0tkkNF2XNBWM%252CUnzUpl2QAcjbgM%252C_%253By20GrWJ9npcwKM%252CIbkcwK7W6Ix6IM%252C_%253B40_R3vaij71KjM%252CcKyWdRUkObvLRM%252C_%253BOH8M1ggaMlIP4M%252CLJX0_I6hnqzJZM%252C_&usg=AI4_-kSHRhi3WOtt6Fm9LI7vhX3356hCEg&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q9AF6BAhVEAA#imgrc=9_0tkkNF2XNBWM",
                "source": "https://itsthebrownsugarshop.com/",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdhpVOFiQ-S2Jog8CSyz84zWx3JCW3sKBB5641Lh7Rg&s"
              },
              {
                "link": "https://www.google.com/search?source=univ&tbm=isch&q=brown+boutiques&fir=d4hdoRvWO2ELnM%252C-CtSPp7gMd8EKM%252C_%253BCz_IQiXhTP2rYM%252C-b3DdJFX0FF6zM%252C_%253B2BoYnwNjpNVmMM%252C0zZksUSXKG3afM%252C_%253BwP_bu-PcosVbXM%252CsM2rT9mfiU1KUM%252C_%253BFAESaQ60pb6sYM%252C0zZksUSXKG3afM%252C_%253BlFx3TQsR0B45HM%252C-b3DdJFX0FF6zM%252C_%253B9_0tkkNF2XNBWM%252CUnzUpl2QAcjbgM%252C_%253By20GrWJ9npcwKM%252CIbkcwK7W6Ix6IM%252C_%253B40_R3vaij71KjM%252CcKyWdRUkObvLRM%252C_%253BOH8M1ggaMlIP4M%252CLJX0_I6hnqzJZM%252C_&usg=AI4_-kSHRhi3WOtt6Fm9LI7vhX3356hCEg&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q9AF6BAhWEAA#imgrc=y20GrWJ9npcwKM",
                "source": "https://www.brownsfashion.com/",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ukukPoTynzLcmtfaj3vijQ5CwD1kT5yNLCsWJfyYoA&s"
              },
              {
                "link": "https://www.google.com/search?source=univ&tbm=isch&q=brown+boutiques&fir=d4hdoRvWO2ELnM%252C-CtSPp7gMd8EKM%252C_%253BCz_IQiXhTP2rYM%252C-b3DdJFX0FF6zM%252C_%253B2BoYnwNjpNVmMM%252C0zZksUSXKG3afM%252C_%253BwP_bu-PcosVbXM%252CsM2rT9mfiU1KUM%252C_%253BFAESaQ60pb6sYM%252C0zZksUSXKG3afM%252C_%253BlFx3TQsR0B45HM%252C-b3DdJFX0FF6zM%252C_%253B9_0tkkNF2XNBWM%252CUnzUpl2QAcjbgM%252C_%253By20GrWJ9npcwKM%252CIbkcwK7W6Ix6IM%252C_%253B40_R3vaij71KjM%252CcKyWdRUkObvLRM%252C_%253BOH8M1ggaMlIP4M%252CLJX0_I6hnqzJZM%252C_&usg=AI4_-kSHRhi3WOtt6Fm9LI7vhX3356hCEg&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q9AF6BAhSEAA#imgrc=40_R3vaij71KjM",
                "source": "https://www.shopanomie.com/",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMU_LXyNL5hpBVoK3EF1xFOKxP7xoYs0cJefgJnot&s"
              },
              {
                "link": "https://www.google.com/search?source=univ&tbm=isch&q=brown+boutiques&fir=d4hdoRvWO2ELnM%252C-CtSPp7gMd8EKM%252C_%253BCz_IQiXhTP2rYM%252C-b3DdJFX0FF6zM%252C_%253B2BoYnwNjpNVmMM%252C0zZksUSXKG3afM%252C_%253BwP_bu-PcosVbXM%252CsM2rT9mfiU1KUM%252C_%253BFAESaQ60pb6sYM%252C0zZksUSXKG3afM%252C_%253BlFx3TQsR0B45HM%252C-b3DdJFX0FF6zM%252C_%253B9_0tkkNF2XNBWM%252CUnzUpl2QAcjbgM%252C_%253By20GrWJ9npcwKM%252CIbkcwK7W6Ix6IM%252C_%253B40_R3vaij71KjM%252CcKyWdRUkObvLRM%252C_%253BOH8M1ggaMlIP4M%252CLJX0_I6hnqzJZM%252C_&usg=AI4_-kSHRhi3WOtt6Fm9LI7vhX3356hCEg&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q9AF6BAhTEAA#imgrc=OH8M1ggaMlIP4M",
                "source": "https://www.visitgalveston.com/directory/lady-browns-boutique/",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJE6dVQCqVxXGy3e76oyAiQHrveuwpnPko4SKsm4bVA&s"
              }
            ],
            "related_questions": [
              {
                "question": "Who owns Browns fashion?",
                "title": "Browns/Parent organizations",
                "link": "https://www.google.com/search?q=Farfetch&stick=H4sIAAAAAAAAAONgFuLSz9U3MEnPMbTIUeIGsQ2NMgrSy8u1DDLKrfST83NyUpNLMvPz9POL0hPzMqsSQZxiq4LEotS8EgVkwV-MEuEZ-Qr55XnFCk5FYCotsTgDKGO_iJXDLbEoLbUkOeMWmySD6cdWJkHXIx_-mVhGnG9TYvlnrJzGrp3hAgCsYjhTjwAAAA&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Qs9oBKAB6BAhbEAI",
                "rich_list": [
                  {
                    "title": "Farfetch",
                    "link": "https://www.google.com/search?q=Farfetch&stick=H4sIAAAAAAAAAONgFuLSz9U3MEnPMbTIUeIGsQ2NMgrSy8u1DDLKrfST83NyUpNLMvPz9POL0hPzMqsSQZxiq4LEotS8EgVkwV-MEuEZ-Qr55XnFCk5FYCotsTgDKGO_iJXDLbEoLbUkOeMWmySD6cdWJkHXIx_-mVhGnG9TYvlnrJzGrp3hAgCsYjhTjwAAAA&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Qs9oBKAB6BAhbEAI",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Farfetch&stick=H4sIAAAAAAAAAONgFuLSz9U3MEnPMbTIUeIGsQ2NMgrSy8u1DDLKrfST83NyUpNLMvPz9POL0hPzMqsSQZxiq4LEotS8EgVkwV-MEuEZ-Qr55XnFCk5FYCotsTgDKGO_iJXDLbEoLbUkOeMWmySD6cdWJkHXIx_-mVhGnG9TYvlnrJzGrp3hAgCsYjhTjwAAAA",
                    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcS8gBaWyjVNXRzKhofLzGbNEiipEBHAcxSLK&s=0"
                  },
                  {
                    "title": "Farfetch UK Limited",
                    "link": "https://www.google.com/search?q=Farfetch+UK+Limited&stick=H4sIAAAAAAAAAONgFuLSz9U3MEnPMbTIUeLVT9c3NEwzMDQtMMnO0DLIKLfST87PyUlNLsnMz9PPL0pPzMusSgRxiq0KEotS80oUkAV_MUqEZ-Qr5JfnFSs4FYGptMTiDKCM_SJWYbfEorTUkuQMhVBvBZ_M3MyS1JRbbJIMph9bmQRdj3z4Z2IZcb5NieWfsXIau3aGCwB2YuvtnAAAAA&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Qs9oBKAF6BAhbEAM",
                    "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=Farfetch+UK+Limited&stick=H4sIAAAAAAAAAONgFuLSz9U3MEnPMbTIUeLVT9c3NEwzMDQtMMnO0DLIKLfST87PyUlNLsnMz9PPL0pPzMusSgRxiq0KEotS80oUkAV_MUqEZ-Qr5JfnFSs4FYGptMTiDKCM_SJWYbfEorTUkuQMhVBvBZ_M3MyS1JRbbJIMph9bmQRdj3z4Z2IZcb5NieWfsXIau3aGCwB2YuvtnAAAAA",
                    "thumbnail": "https://www.gstatic.com/knowledgecard/default-72.png"
                  }
                ],
                "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRaazQxVldrNWRGUlliVUpuTkVGdlNERktlRGhQU1d0YVNuVk1aV1pGUWswMU9EbFJhbWg2VUZGaFdYVk1jMmhCTVcxMmNrdGtjMjFoUW1weE9WQTFYME16UVdwSWVXaHNXV2swU1d0VldWaDJRMmxQTjJoemJIbFpkeElYUkU1cFMxazJVR3hOWm5WcmNYUnpVR2h5WlVnMlFXY2FJa0ZFVlhsRlIyTnRTbGRUZEdrMWVtcDFPRGR5UmtoTFNVdEdTM2wwWTJkMGQxRSIsImZjdiI6IjMiLCJlaSI6IkROaUtZNlBsTWZ1a3F0c1BocmVINkFnIiwicWMiOiJDZzlpY205M2JpQmliM1YwYVhGMVpYTVFBSDNJUXhZXyIsInF1ZXN0aW9uIjoiV2hvIG93bnMgQnJvd25zIGZhc2hpb24/IiwibGsiOiJjNU1TTDhfSVY4Z3Z6eXRXU0NvQ1UybUp4Um1aLVhrQSIsImJzIjoiYy1PUzRwSUl6OGhYeUNfUEsxWndLZ0pUYVluRkdabjVlZlpjcWx3S25pQnVVVnBxU1hLR1FtSmVDa3hKU1VhcVFuRmlicXE5eEhwLUxpVXUyZkNNMUtKVWhVeDBJeFRTaXZKejdTWG1PZ2t3QWdBIn0=",
                "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRaazQxVldrNWRGUlliVUpuTkVGdlNERktlRGhQU1d0YVNuVk1aV1pGUWswMU9EbFJhbWg2VUZGaFdYVk1jMmhCTVcxMmNrdGtjMjFoUW1weE9WQTFYME16UVdwSWVXaHNXV2swU1d0VldWaDJRMmxQTjJoemJIbFpkeElYUkU1cFMxazJVR3hOWm5WcmNYUnpVR2h5WlVnMlFXY2FJa0ZFVlhsRlIyTnRTbGRUZEdrMWVtcDFPRGR5UmtoTFNVdEdTM2wwWTJkMGQxRSIsImZjdiI6IjMiLCJlaSI6IkROaUtZNlBsTWZ1a3F0c1BocmVINkFnIiwicWMiOiJDZzlpY205M2JpQmliM1YwYVhGMVpYTVFBSDNJUXhZXyIsInF1ZXN0aW9uIjoiV2hvIG93bnMgQnJvd25zIGZhc2hpb24%2FIiwibGsiOiJjNU1TTDhfSVY4Z3Z6eXRXU0NvQ1UybUp4Um1aLVhrQSIsImJzIjoiYy1PUzRwSUl6OGhYeUNfUEsxWndLZ0pUYVluRkdabjVlZlpjcWx3S25pQnVVVnBxU1hLR1FtSmVDa3hKU1VhcVFuRmlicXE5eEhwLUxpVXUyZkNNMUtKVWhVeDBJeFRTaXZKejdTWG1PZ2t3QWdBIn0%3D"
              },
              {
                "question": "Is farfetch and Browns the same?",
                "snippet": "In May 2015, FARFETCH acquired Browns, an iconic British fashion and luxury goods boutique.",
                "title": "About Browns Fashion - Farfetch",
                "link": "https://aboutfarfetch.com/about/browns/",
                "displayed_link": "https://aboutfarfetch.com › about › browns",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQOV6NZJ3mSGHQ6K1be6cmFq5bcJ5g1RHCMWMNYPsrQ&s",
                "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRaazQxVldrNWRGUlliVUpuTkVGdlNERktlRGhQU1d0YVNuVk1aV1pGUWswMU9EbFJhbWg2VUZGaFdYVk1jMmhCTVcxMmNrdGtjMjFoUW1weE9WQTFYME16UVdwSWVXaHNXV2swU1d0VldWaDJRMmxQTjJoemJIbFpkeElYUkU1cFMxazJVR3hOWm5WcmNYUnpVR2h5WlVnMlFXY2FJa0ZFVlhsRlIyTnRTbGRUZEdrMWVtcDFPRGR5UmtoTFNVdEdTM2wwWTJkMGQxRSIsImZjdiI6IjMiLCJlaSI6IkROaUtZNlBsTWZ1a3F0c1BocmVINkFnIiwicWMiOiJDZzlpY205M2JpQmliM1YwYVhGMVpYTVFBSDNJUXhZXyIsInF1ZXN0aW9uIjoiSXMgZmFyZmV0Y2ggYW5kIEJyb3ducyB0aGUgc2FtZT8iLCJsayI6IkdoOXBjeUJtWVhKbVpYUmphQ0JoYm1RZ1luSnZkMjV6SUhSb1pTQnpZVzFsIiwiYnMiOiJjLU9TNHBJSXo4aFh5Q19QSzFad0tnSlRhWW5GR1puNWVmWmNxbHdLbmlCdVVWcHFTWEtHUW1KZUNreEpTVWFxUW5GaWJxcTl4SHAtTGlVdTJmQ00xS0pVaFV4MEl4VFNpdkp6N1NYbU9na3dBZ0EifQ==",
                "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRaazQxVldrNWRGUlliVUpuTkVGdlNERktlRGhQU1d0YVNuVk1aV1pGUWswMU9EbFJhbWg2VUZGaFdYVk1jMmhCTVcxMmNrdGtjMjFoUW1weE9WQTFYME16UVdwSWVXaHNXV2swU1d0VldWaDJRMmxQTjJoemJIbFpkeElYUkU1cFMxazJVR3hOWm5WcmNYUnpVR2h5WlVnMlFXY2FJa0ZFVlhsRlIyTnRTbGRUZEdrMWVtcDFPRGR5UmtoTFNVdEdTM2wwWTJkMGQxRSIsImZjdiI6IjMiLCJlaSI6IkROaUtZNlBsTWZ1a3F0c1BocmVINkFnIiwicWMiOiJDZzlpY205M2JpQmliM1YwYVhGMVpYTVFBSDNJUXhZXyIsInF1ZXN0aW9uIjoiSXMgZmFyZmV0Y2ggYW5kIEJyb3ducyB0aGUgc2FtZT8iLCJsayI6IkdoOXBjeUJtWVhKbVpYUmphQ0JoYm1RZ1luSnZkMjV6SUhSb1pTQnpZVzFsIiwiYnMiOiJjLU9TNHBJSXo4aFh5Q19QSzFad0tnSlRhWW5GR1puNWVmWmNxbHdLbmlCdVVWcHFTWEtHUW1KZUNreEpTVWFxUW5GaWJxcTl4SHAtTGlVdTJmQ00xS0pVaFV4MEl4VFNpdkp6N1NYbU9na3dBZ0EifQ%3D%3D"
              },
              {
                "question": "Where is Browns fashion from?",
                "snippet": "Joan and Sidney Burstein purchase Browns from Sir William Piggott Brown in 1968. In 1970, they launch their new luxury fashion boutique on South Molton Street in the heart of London's Mayfair. Expanding their horizons further, in 1976 Browns opens up on Sloane Street, in another of London's most luxurious destinations.",
                "title": "London's",
                "link": "https://www.brownsfashion.com/uk/history",
                "displayed_link": "https://www.brownsfashion.com › history",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdH5b0QiZFE95XeWR7Xc7eWsUylnrBj3L2PmP2hvuTnQ&s",
                "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRaazQxVldrNWRGUlliVUpuTkVGdlNERktlRGhQU1d0YVNuVk1aV1pGUWswMU9EbFJhbWg2VUZGaFdYVk1jMmhCTVcxMmNrdGtjMjFoUW1weE9WQTFYME16UVdwSWVXaHNXV2swU1d0VldWaDJRMmxQTjJoemJIbFpkeElYUkU1cFMxazJVR3hOWm5WcmNYUnpVR2h5WlVnMlFXY2FJa0ZFVlhsRlIyTnRTbGRUZEdrMWVtcDFPRGR5UmtoTFNVdEdTM2wwWTJkMGQxRSIsImZjdiI6IjMiLCJlaSI6IkROaUtZNlBsTWZ1a3F0c1BocmVINkFnIiwicWMiOiJDZzlpY205M2JpQmliM1YwYVhGMVpYTVFBSDNJUXhZXyIsInF1ZXN0aW9uIjoiV2hlcmUgaXMgQnJvd25zIGZhc2hpb24gZnJvbT8iLCJsayI6IkdoeDNhR1Z5WlNCcGN5QmljbTkzYm5NZ1ptRnphR2x2YmlCbWNtOXQiLCJicyI6ImMtT1M0cElJejhoWHlDX1BLMVp3S2dKVGFZbkZHWm41ZWZaY3Fsd0tuaUJ1VVZwcVNYS0dRbUplQ2t4SlNVYXFRbkZpYnFxOXhIcC1MaVV1MmZDTTFLSlVoVXgwSXhUU2l2Sno3U1htT2drd0FnQSJ9",
                "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRaazQxVldrNWRGUlliVUpuTkVGdlNERktlRGhQU1d0YVNuVk1aV1pGUWswMU9EbFJhbWg2VUZGaFdYVk1jMmhCTVcxMmNrdGtjMjFoUW1weE9WQTFYME16UVdwSWVXaHNXV2swU1d0VldWaDJRMmxQTjJoemJIbFpkeElYUkU1cFMxazJVR3hOWm5WcmNYUnpVR2h5WlVnMlFXY2FJa0ZFVlhsRlIyTnRTbGRUZEdrMWVtcDFPRGR5UmtoTFNVdEdTM2wwWTJkMGQxRSIsImZjdiI6IjMiLCJlaSI6IkROaUtZNlBsTWZ1a3F0c1BocmVINkFnIiwicWMiOiJDZzlpY205M2JpQmliM1YwYVhGMVpYTVFBSDNJUXhZXyIsInF1ZXN0aW9uIjoiV2hlcmUgaXMgQnJvd25zIGZhc2hpb24gZnJvbT8iLCJsayI6IkdoeDNhR1Z5WlNCcGN5QmljbTkzYm5NZ1ptRnphR2x2YmlCbWNtOXQiLCJicyI6ImMtT1M0cElJejhoWHlDX1BLMVp3S2dKVGFZbkZHWm41ZWZaY3Fsd0tuaUJ1VVZwcVNYS0dRbUplQ2t4SlNVYXFRbkZpYnFxOXhIcC1MaVV1MmZDTTFLSlVoVXgwSXhUU2l2Sno3U1htT2drd0FnQSJ9"
              }
            ],
            "organic_results": [
              {
                "position": 1,
                "title": "San Francisco - Stores | Thom Browne Official Website",
                "link": "https://www.thombrowne.com/us/stores/thom-browne-san-francisco",
                "displayed_link": "https://www.thombrowne.com › stores › thom-browne-...",
                "snippet": "THOM BROWNE - SAN FRANCISCO. 432 Jackson Street. San Francisco, CA 94111. directions. Sunday: Closed; MON - SAT 11:00 am - 6:00 pm.",
                "snippet_highlighted_words": [
                  "BROWNE"
                ],
                "about_this_result": {
                  "source": {
                    "description": "thombrowne.com was first indexed by Google more than 10 years ago",
                    "source_info_link": "https://www.thombrowne.com/us/stores/thom-browne-san-francisco",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2d4ace0779c6c5d3f0bdf15be4b664457384baafbbcaddfaeed68f4c605629a83.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.thombrowne.com/us/stores/thom-browne-san-francisco&tbm=ilp&ilps=ADNMCi2OGLxK9XY88qL29LKKneh2BkJLPg",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi2OGLxK9XY88qL29LKKneh2BkJLPg&q=About+https%3A%2F%2Fwww.thombrowne.com%2Fus%2Fstores%2Fthom-browne-san-francisco",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:FhVmlvbUcZgJ:https://www.thombrowne.com/us/stores/thom-browne-san-francisco&cd=4&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 2,
                "title": "ANOMIE | Online + San Francisco Boutique | Independent ...",
                "link": "https://www.shopanomie.com/",
                "displayed_link": "https://www.shopanomie.com",
                "thumbnail": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2b7c9390e2d870f7fd7614dd673e21a45.jpeg",
                "snippet": "SF based shop and online store featuring emerging, independent brands + designers selling fashion-forward clothing, jewelry, accessories, and more.",
                "snippet_highlighted_words": [
                  "shop",
                  "store"
                ],
                "about_this_result": {
                  "source": {
                    "description": "shopanomie.com was first indexed by Google in January 2013",
                    "source_info_link": "https://www.shopanomie.com/",
                    "security": "secure"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.shopanomie.com/&tbm=ilp&ilps=ADNMCi2L2kMRX9QPy5iD4d_6EufhdVZf1w",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi2L2kMRX9QPy5iD4d_6EufhdVZf1w&q=About+https%3A%2F%2Fwww.shopanomie.com%2F",
                "cached_page_link": "/search?q=related:https://www.shopanomie.com/+brown+boutiques"
              },
              {
                "position": 3,
                "title": "Casual Shoes - The Alden Shop of San Francisco",
                "link": "https://www.aldenshop.com/Store/DrawCategories.aspx?CategoryID=4&PageID=21",
                "displayed_link": "https://www.aldenshop.com › Store › DrawCategories",
                "thumbnail": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2f91ef6339de80d851dfe42a07c83f769.jpeg",
                "snippet": "The Alden Shop showcases the complete collection of these premium Alden Shoes. Easy on-line ordering and ... Available in Brown and Black Soft Grained Calf.",
                "snippet_highlighted_words": [
                  "Shop",
                  "Brown"
                ],
                "images": [
                  "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2ea4d15a7b40005575a5665a137d8bbe5.jpeg",
                  "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2ea4d15a7b4000557a5d437e15c3e17ac.jpeg",
                  "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2ea4d15a7b400055710e47acf31855708.jpeg",
                  "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2ea4d15a7b4000557c4999676d2e4cb4a.jpeg",
                  "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2ea4d15a7b400055791f25d8d259e324d.jpeg",
                  "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2ea4d15a7b40005571bafa788957f9d60.jpeg"
                ],
                "about_this_result": {
                  "source": {
                    "description": "aldenshop.com was first indexed by Google more than 10 years ago",
                    "source_info_link": "https://www.aldenshop.com/Store/DrawCategories.aspx?CategoryID=4&PageID=21",
                    "security": "secure"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.aldenshop.com/Store/DrawCategories.aspx?CategoryID%3D4%26PageID%3D21&tbm=ilp&ilps=ADNMCi1lI92GiuAdcrdcjFyaGNiC5VP6VQ",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi1lI92GiuAdcrdcjFyaGNiC5VP6VQ&q=About+https%3A%2F%2Fwww.aldenshop.com%2FStore%2FDrawCategories.aspx%3FCategoryID%3D4%26PageID%3D21",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:htPonYjmaiUJ:https://www.aldenshop.com/Store/DrawCategories.aspx%3FCategoryID%3D4%26PageID%3D21&cd=6&hl=en&ct=clnk&gl=us",
                "related_pages_link": "https://www.google.com/search?q=related:https://www.aldenshop.com/Store/DrawCategories.aspx%3FCategoryID%3D4%26PageID%3D21+brown+boutiques"
              },
              {
                "position": 4,
                "title": "About Browns Fashion - Farfetch",
                "link": "https://aboutfarfetch.com/about/browns/",
                "displayed_link": "https://aboutfarfetch.com › about › browns",
                "thumbnail": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2fd66bd5e8074866d8f484ea256291b9d.jpeg",
                "snippet": "Browns is an iconic British fashion and luxury goods boutique with two locations in London - find out more about Browns boutiques.",
                "snippet_highlighted_words": [
                  "Browns boutiques"
                ],
                "about_this_result": {
                  "source": {
                    "description": "Farfetch is a British-Portuguese online luxury fashion retail platform that sells products from over 700 boutiques and brands from around the world. The company was founded in 2007 by the Portuguese entrepreneur José Neves with its headquarters in London and main branches in Lisbon and Porto.",
                    "source_info_link": "https://aboutfarfetch.com/about/browns/",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2356b9eb7f45393f56e7ad32c3f1c8fbe27358b1358e726b8f9c1f35c8452417d.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://aboutfarfetch.com/about/browns/&tbm=ilp&ilps=ADNMCi0yZ-6r1ykZGcDQtX73TlCTtP8wIQ",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi0yZ-6r1ykZGcDQtX73TlCTtP8wIQ&q=About+https%3A%2F%2Faboutfarfetch.com%2Fabout%2Fbrowns%2F",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:-CtSPp7gMd8J:https://aboutfarfetch.com/about/browns/&cd=7&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 5,
                "title": "Brown Sugar Boutique (@brownsugarsf) • Instagram photos ...",
                "link": "https://www.instagram.com/brownsugarsf/?hl=en",
                "displayed_link": "https://www.instagram.com › brownsugarsf",
                "snippet": "849 Followers, 412 Following, 354 Posts - See Instagram photos and videos from Brown Sugar Boutique (@brownsugarsf)",
                "snippet_highlighted_words": [
                  "Brown",
                  "Boutique"
                ],
                "about_this_result": {
                  "source": {
                    "description": "Instagram is a photo and video sharing social networking service owned by American company Meta Platforms. The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging. Posts can be shared publicly or with preapproved followers.",
                    "source_info_link": "https://www.instagram.com/brownsugarsf/?hl=en",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e223e488b7fbbad3e5bec1bb0c5293e258202b8635dc2b4b4907712556f425f6df.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.instagram.com/brownsugarsf/&tbm=ilp&ilps=ADNMCi0i21RGzurRAjBQT5V8OwwEp-fX3w",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi0i21RGzurRAjBQT5V8OwwEp-fX3w&q=About+https%3A%2F%2Fwww.instagram.com%2Fbrownsugarsf%2F"
              },
              {
                "position": 6,
                "title": "Top 11 Clothing stores in San Francisco - 2022",
                "link": "https://americantwoshot.com/san-francisco-clothing-stores/",
                "displayed_link": "https://americantwoshot.com › san-francisco-clothing-st...",
                "date": "Aug 17, 2022",
                "snippet": "Indie boutique owners in San Francisco are always happy, ... Located in the city's heart, Onyx is a family-run clothing store.",
                "snippet_highlighted_words": [
                  "boutique",
                  "store"
                ],
                "rich_snippet": {
                  "top": {
                    "detected_extensions": {
                      "rating": 4.8,
                      "votes": 617
                    },
                    "extensions": [
                      "Rating: 4.8",
                      "‎617 votes"
                    ]
                  }
                },
                "about_this_result": {
                  "source": {
                    "description": "americantwoshot.com was first indexed by Google more than 10 years ago",
                    "source_info_link": "https://americantwoshot.com/san-francisco-clothing-stores/",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2f1361b849057c6a5f6e46ee5a1a5a04a28cdbb81b2d5ca1e3ed1161bfbc9e6b8.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://americantwoshot.com/san-francisco-clothing-stores/&tbm=ilp&ilps=ADNMCi1TjWYa9sRlwTkD8oIoee8v_6CtJg",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi1TjWYa9sRlwTkD8oIoee8v_6CtJg&q=About+https%3A%2F%2Famericantwoshot.com%2Fsan-francisco-clothing-stores%2F",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:lP5T99h51IoJ:https://americantwoshot.com/san-francisco-clothing-stores/&cd=9&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 7,
                "title": "Best affordable boutiques near me in San Francisco, CA - Yelp",
                "link": "https://www.yelp.com/search?find_desc=affordable+boutiques&find_loc=San+Francisco%2C+CA",
                "displayed_link": "https://www.yelp.com › San Francisco, CA › Shopping",
                "snippet": "Yes I got stuck there 2 hours. Even though extra 40% off was only for clothes I got a brown purse. Some of the products seems damaged, so I recommend…\".",
                "snippet_highlighted_words": [
                  "brown"
                ],
                "about_this_result": {
                  "source": {
                    "description": "Yelp Inc. is an American company that develops the Yelp.com website and the Yelp mobile app, which publish crowd-sourced reviews about businesses. It also operates Yelp Guest Manager, a table reservation service. It is headquartered in San Francisco, California.",
                    "source_info_link": "https://www.yelp.com/search?find_desc=affordable+boutiques&find_loc=San+Francisco%2C+CA",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e2b7e2c5df2ba05a10814d79cef7096052a3bb402a38dc8da847de49d0eed46f59.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://m.yelp.com/search?find_desc%3Daffordable%2Bboutiques%26find_loc%3DSan%2BFrancisco%252C%2BCA&tbm=ilp&ilps=ADNMCi3SFcREEGl4mzv7CrisbMmXnN4g2w",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi3SFcREEGl4mzv7CrisbMmXnN4g2w&q=About+https%3A%2F%2Fm.yelp.com%2Fsearch%3Ffind_desc%3Daffordable%2Bboutiques%26find_loc%3DSan%2BFrancisco%252C%2BCA",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:xoI4StcpXewJ:https://www.yelp.com/search%3Ffind_desc%3Daffordable%2Bboutiques%26find_loc%3DSan%2BFrancisco%252C%2BCA&cd=10&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 8,
                "title": "Isalis",
                "link": "https://www.shopisalis.com/",
                "displayed_link": "https://www.shopisalis.com",
                "snippet": "Joah Brown Just Female Lisa Says Gah Mandinga Maison Louis Marie Miista Mundaka Nanushka Non-Chalant Nia Nice Things Paloma Wool Pastiche Pistola.",
                "snippet_highlighted_words": [
                  "Brown"
                ],
                "about_this_result": {
                  "source": {
                    "description": "shopisalis.com was first indexed by Google in February 2017",
                    "source_info_link": "https://www.shopisalis.com/",
                    "security": "secure"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://www.shopisalis.com/&tbm=ilp&ilps=ADNMCi1W00bnUYVezsQl5qjFFysYK4xdkQ",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi1W00bnUYVezsQl5qjFFysYK4xdkQ&q=About+https%3A%2F%2Fwww.shopisalis.com%2F",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:0aE_PVlKGUMJ:https://www.shopisalis.com/&cd=11&hl=en&ct=clnk&gl=us"
              },
              {
                "position": 9,
                "title": "Topogato Is San Francisco's Most Audacious ... - Eater SF",
                "link": "https://sf.eater.com/2021/9/29/22697343/topogato-san-francisco-online-chocolate",
                "displayed_link": "https://sf.eater.com › topogato-san-francisco-online-cho...",
                "date": "Sep 29, 2021",
                "snippet": "Meet the Best Friends Behind SF's Most Audacious Online Chocolate Shop ... But Brown and Monroe are on another level when it comes to ...",
                "snippet_highlighted_words": [
                  "Shop",
                  "Brown"
                ],
                "about_this_result": {
                  "source": {
                    "description": "Eater is a food website by Vox Media. It was co-founded by Lockhart Steele and Ben Leventhal in 2005, and originally focused on dining and nightlife in New York City. Eater launched a national site in 2009, and covered nearly 20 cities by 2012.",
                    "source_info_link": "https://sf.eater.com/2021/9/29/22697343/topogato-san-francisco-online-chocolate",
                    "security": "secure",
                    "icon": "https://serpapi.com/searches/638ad80cf0adfb24c1872d2d/images/9e12b92ac98ee5e036a842db0d8fd6e25ff44e64800fed4c2ec18776652637b8df0cab4a00a1440f48a4ba8111d93d88.png"
                  }
                },
                "about_page_link": "https://www.google.com/search?q=About+https://sf.eater.com/2021/9/29/22697343/topogato-san-francisco-online-chocolate&tbm=ilp&ilps=ADNMCi0lg0ove3rKYqTAZ18dOt7CxWpfQg",
                "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&ilps=ADNMCi0lg0ove3rKYqTAZ18dOt7CxWpfQg&q=About+https%3A%2F%2Fsf.eater.com%2F2021%2F9%2F29%2F22697343%2Ftopogato-san-francisco-online-chocolate",
                "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:jw-Q0QJhUxgJ:https://sf.eater.com/2021/9/29/22697343/topogato-san-francisco-online-chocolate&cd=31&hl=en&ct=clnk&gl=us"
              }
            ],
            "related_searches": [
              {
                "query": "thom browne - san francisco",
                "link": "https://www.google.com/search?q=Thom+Browne+-+San+Francisco&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q1QJ6BAg6EAE"
              },
              {
                "query": "browns",
                "link": "https://www.google.com/search?q=Browns&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q1QJ6BAg2EAE"
              },
              {
                "query": "browns farfetch",
                "link": "https://www.google.com/search?q=Browns+FARFETCH&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q1QJ6BAgzEAE"
              },
              {
                "query": "browns london",
                "link": "https://www.google.com/search?q=Browns+London&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q1QJ6BAgyEAE"
              },
              {
                "query": "is browns fashion legit",
                "link": "https://www.google.com/search?q=Is+Browns+Fashion+legit&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q1QJ6BAguEAE"
              },
              {
                "query": "browns fashion uk",
                "link": "https://www.google.com/search?q=Browns+fashion+uk&sa=X&ved=2ahUKEwijm6a51dz7AhV7kmoFHYbbAY0Q1QJ6BAgpEAE"
              }
            ],
            "pagination": {
              "current": 1,
              "next": "https://www.google.com/search?q=brown+boutiques&oq=brown+boutiques&start=10&sourceid=chrome&ie=UTF-8",
              "other_pages": {
                "2": "https://www.google.com/search?q=brown+boutiques&oq=brown+boutiques&start=10&sourceid=chrome&ie=UTF-8",
                "3": "https://www.google.com/search?q=brown+boutiques&oq=brown+boutiques&start=20&sourceid=chrome&ie=UTF-8",
                "4": "https://www.google.com/search?q=brown+boutiques&oq=brown+boutiques&start=30&sourceid=chrome&ie=UTF-8",
                "5": "https://www.google.com/search?q=brown+boutiques&oq=brown+boutiques&start=40&sourceid=chrome&ie=UTF-8"
              }
            },
            "serpapi_pagination": {
              "current": 1,
              "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+boutiques&start=10",
              "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+boutiques&start=10",
              "other_pages": {
                "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+boutiques&start=10",
                "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+boutiques&start=20",
                "4": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+boutiques&start=30",
                "5": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=brown+boutiques&start=40"
              }
            }
          }
    ])
    
    return (
        <div>
          <BusinessMapper businesses = {businesses} />
        </div>
    )
}

export default BusinessesPage