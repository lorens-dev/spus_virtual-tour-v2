var myTour = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "sceneZero",
        "author": "ICT ",
        "sceneFadeDuration": 1000, 
        "autoLoad": true,
        "hotSpotDebug": true
    },

    "scenes": {

        // ==========================================
        // SCENE: Outside of Main Campus (sceneZero)
        // ==========================================
        "sceneZero": {
            "type": "equirectangular",
            "panorama": "images/OUTSIDE OF MAIN CAMPUS.jpg",
            "pitch": 21.540149931509145, 
            "yaw": 73.82,  
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -6.09,
                    "yaw": 66.07,   
                    "type": "scene",
                    "text": "Go to Main Hall",
                    "sceneId": "mainHall", 
                    "cssClass": "my-custom-arrow"
                }
            ]
        },

        // ==========================================
        // SCENE: Main Hall / Main Entrance
        // ==========================================
        "mainHall": {
            "type": "equirectangular",
            "panorama": "images/MAIN ENTRANCE.jpg",
            "pitch": 2.5168645426735026,
            "yaw": -0.6807835060917149,  
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -1.78,
                    "yaw": -23.34,
                    "type": "scene",
                    "text": "second floor ",
                    "sceneId": "library", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -4.421628588227058, 
                    "yaw": 16.835179207941508,  
                    "type": "scene",
                    "text": "",
                    "sceneId": "HALLWAY", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -6.740230777221342, 
                    "yaw": -55.28755779187011,  
                    "type": "scene",
                    "text": "",
                    "sceneId": "left hallway", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -1.2706878293198034, 
                    "yaw": -44.62267136538091,  
                    "type": "scene",
                    "text": "",
                    "sceneId": "left hallway 2", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 15.919021601249236,  
                    "yaw": 71.14302821440482,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SPUS Program Accreditation Certification & Evaluation (SPACE) Center"
                },
                {
                    "pitch": 13.623229657775022,  
                    "yaw": 117.16884930582766,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "ROOM"
                }
            ]
        },

        // ==========================================
        // SCENE: Hallway 1
        // ==========================================
        "HALLWAY": {
            "type": "equirectangular",
            "panorama": "images/HALLWAY 1.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": 18.157574863263314,  
                    "yaw": -17.87543267987834,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "LIAISON OFFICE FOR ALUMNI"
                },
                {
                    "pitch": -0.8604771314701481,  
                    "yaw": -82.32671361676205,    
                    "type": "info",
                    "text": "Canteen",
                    "sceneId": "canteen",
                    "cssClass": "my-custom-door"
                },
                {
                    "pitch": -7.2966618972784,
                    "yaw":  96.08260555868478,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "mainHall", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -2.685737360916323,
                    "yaw": -94.83285731715165,
                    "type": "scene",
                    "text": "Open Space ",
                    "sceneId": "open space", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 13.612338726398859,  
                    "yaw": 50.01814243860789,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "College Freshmen Program (CFP)"
                },
                {
                    "pitch": 14.119525594370264,  
                    "yaw": -40.06781347944743,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Publication, Brand & Marketing Office"
                },
            ]
        },
    
        // ==========================================
        // SCENE: Open Space
        // ==========================================
        "open space": {
            "type": "equirectangular",
            "panorama": "images/OPEN SPACE.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -1.30151506770048524,  
                    "yaw": 35.36311826384383,    
                    "type": "info",
                    "text": "Canteen",
                    "sceneId": "canteen",
                    "cssClass": "my-custom-door"
                },
                {
                    "pitch": -9.633831701394453,
                    "yaw": 135.3866379534809,
                    "type": "scene",
                    "text": "Open Space ",
                    "sceneId": "HALLWAY", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -4.256964713725777,
                    "yaw": -30.674677932042208,
                    "type": "scene",
                    "text": " ",
                    "sceneId": "left hallway 3", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 8.487130676579964,  
                    "yaw": 60.57310092641376,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "VICE PRESIDENT FOR ADMINISTRATIVE SERVICES"
                },
                    
            ]
        },

        // ==========================================
        // SCENE: Left Hallway 2
        // ==========================================
        "left hallway 2": {
            "type": "equirectangular",
            "panorama": "images/LEFT HALLWAY.jpg",
            "pitch": 4.913857051771365,
            "yaw": 68.275375528082,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -6.300117875140536,
                    "yaw": 84.11226140264326,
                    "type": "scene",
                    "text": "",
                    "sceneId": "left hallway 3", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -9.02063110876145,
                    "yaw": -91.76439079397147,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "mainHall", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 18.21895974332952,  
                    "yaw": -17.704027121379113,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "UNIVERSITY CHAPLAIN"
                },
                {
                    "pitch": 10.18612590364358,  
                    "yaw": 42.9649537603230563,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "PRISM OFFICE"
                },
            ]
        },

        // ==========================================
        // SCENE: Left Hallway 3 (Trashbin)
        // ==========================================
        "left hallway 3": {
            "type": "equirectangular",
            "panorama": "images/HALLWAY TRASHBIN.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -7.344992041024131,
                    "yaw": 170.6811939324425,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "left hallway 2", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -0.393816713282553,
                    "yaw": -125.82520918980774,
                    "type": "scene",
                    "text": "Clinic",
                    "sceneId": "clinic", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -7.563358993750339,
                    "yaw": -76.5487937696785,
                    "type": "scene",
                    "text": "Basketball Court",
                    "sceneId": "basketball court", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -11.844227432953987,
                    "yaw": -0.901624633228006,
                    "type": "scene",
                    "text": "",
                    "sceneId": "left hallway 4", 
                    "cssClass": "my-custom-arrow"
                }
            ]
        },
        
        // ==========================================
        // SCENE: Left Hallway 4
        // ==========================================
        "left hallway 4": {
            "type": "equirectangular",
            "panorama": "images/LEFT HALLWAY 2.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -8.831767490236551,
                    "yaw": -0.507606551363601,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -10.29327794799220,
                    "yaw": 178.00211145768756,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "left hallway 3", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 21.689257987251167,  
                    "yaw":  36.29865180514578,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Visitor's Lounge"
                },
            ]
        },

        // ==========================================
        // SCENE: Major Hallway 1
        // ==========================================
        "major hallway": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 1.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -10.035261108668108,
                    "yaw": -46.227034452918936,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 2", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -12.53435367105339,
                    "yaw": -138.7151973814119,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "left hallway 4", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 21.914428124091945,  
                    "yaw":  7.242536245317681,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "College of Education Arts & Sciences (CEAS)"
                },
                {
                    "pitch": 13.67378934283267,  
                    "yaw":  -20.58313841475225,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Human Resource Management Office"
                },
            ]
        },

        // ==========================================
        // SCENE: Major Hallway 2
        // ==========================================
        "major hallway 2": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 2.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -9.456113476432373,
                    "yaw": -35.44595419962178,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 3", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -8.872837793017114,
                    "yaw": 139.8271655860146,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 23.47822412070287,  
                    "yaw":  15.71116604673266,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "College of Business Management & Accountancy (CBMA)"
                },
                {
                    "pitch": 15.580259142631263,  
                    "yaw":  -12.479839796811948,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "DEAN OF GRADUATE SCHOOL"
                },
            ]
        },

        // ==========================================
        // SCENE: Major Hallway 3
        // ==========================================
        "major hallway 3": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 3.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -7.710710726397707,
                    "yaw": -3.8556772716043426,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 4", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -9.705695708195108,
                    "yaw": 178.29478391924278,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway 2", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 20.759635748154487,  
                    "yaw":   146.44240365823308,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "PRESIDENT'S OFFICE"
                },
            ]
        },

        // ==========================================
        // SCENE: Major Hallway 4
        // ==========================================
        "major hallway 4": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 4.jpg",
            "pitch": 0.35239085297499895,
            "yaw": -51.18265191661601,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -12.595693329518978,
                    "yaw": -49.02716279789851,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 5", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -6.006567940952827,
                    "yaw": 123.82144363990741,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway 3", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 28.186545017632533,  
                    "yaw":   44.39080527874944,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "PRESIDENT'S BOARDROOM"
                },
                {
                    "pitch": 24.944908262756606,  
                    "yaw":  -10.859230906052964,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "International & Networking for Scholarship Partherships Innovation Research & Engagement (INSPIRE)"
                },
            ]
        },

        // ==========================================
        // SCENE: Major Hallway 5
        // ==========================================
        "major hallway 5": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 5.jpg",
            "pitch": -4.1823554917359465,
            "yaw": -26.214559066168512,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -15.055224221324462,
                    "yaw": -36.360175150051155,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 6", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -13.068305745207917,
                    "yaw": 139.88746910568213,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway 4", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 21.100511889307096,  
                    "yaw":   5.623155988907037,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "COMMUNITY DEVELOPMENT SERVICES"
                },
            ]
        },

        // ==========================================
        // SCENE: Major Hallway 6
        // ==========================================
        "major hallway 6": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 6.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -9.456113476432373,
                    "yaw": -35.44595419962178,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 7", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -9.105839985630483,
                    "yaw": 147.50846296830014,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway 5", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 25.990889524098677,  
                    "yaw":   115.31443151125094,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "DEAN OF CRIMINAL JUSTICE EDUCATION"
                },
                {
                    "pitch": 23.48024986501566,  
                    "yaw":   -2.3556577289698932,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "COLLEGE OF ENGINEERING & INFORMATION TECHNOLOGY (CEIT)"
                },
            ]
        },

        // ==========================================
        // SCENE: Major Hallway 7
        // ==========================================
        "major hallway 7": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 7.jpg",
            "pitch": 9.686323176563372,
            "yaw": -35.447251484052366,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -3.2363516357444446,
                    "yaw": -80.6785607145679,
                    "type": "scene",
                    "text": "",
                    "sceneId": "mh 1", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -4.5152258287366935,
                    "yaw": 76.16752887823083,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway 6", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 10.834241802478234,  
                    "yaw":   -62.518591311680254,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "VICE PRESIDENT FOR ACADEMIC SERVICES"
                },
            ]
        },


        // ==========================================
        // SCENE: MH 1
        // ==========================================
        "mh 1": {
            "type": "equirectangular",
            "panorama": "images/MH REGISTRAR 1.jpg",
            "pitch": 9.133624294504054,
            "yaw": -4.746511787055521,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -8.8848362044217,
                    "yaw": -120.99094153421112,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 9", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -5.7176232587141165,
                    "yaw": 64.0372132754586,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway 7", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 22.69885613617861,  
                    "yaw":   29.894730454132716,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "UNIVERSITY REGISTRAR"
                },
            ]
        },



        // ==========================================
        // SCENE: MAJOR HALLWAY 9
        // ==========================================
        "major hallway 9": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 9.jpg",
            "pitch": 9.473551515212597,
            "yaw": -131.54385677733177,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -6.687782418659474,
                    "yaw": -179.04386138647928,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 10", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -3.8210827894234614,
                    "yaw": 0.6132808427459082,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "mh 1", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 22.464723509215794,  
                    "yaw":   -88.01770054840429,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "FINANCE SERVICES OFFICE"
                },
                {
                    "pitch": 16.747173259619398,  
                    "yaw":   118.89958076689209,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "UNIVERSITY BOOKSTORE"
                },
            ]
        },

        // ==========================================
        // SCENE: MAJOR HALLWAY 10
        // ==========================================
        "major hallway 10": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 10.jpg",
            "pitch": 3.5514475777442764,
            "yaw": -34.78118343479125,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -2.3027085961292286,
                    "yaw": -35.693745577384405,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 11", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -12.558212659456425,
                    "yaw": 156.12320023354107,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway 9", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 27.00392603863884,  
                    "yaw":   -68.43999657174544,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "BOUTIQUE"
                },
                {
                    "pitch": 21.976868667978138,  
                    "yaw":   -2.197559655609758,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Student Lounge"
                },
                {
                    "pitch": 11.748271834981368,  
                    "yaw":   -48.3614024265502,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Student Lounge"
                },
            ]
        },


        // ==========================================
        // SCENE: MAJOR HALLWAY 11
        // ==========================================
        "major hallway 11": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 11.jpg",
            "pitch": 8.02265065698678,
            "yaw": -31.47052763713364,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -11.797835457824041,
                    "yaw": -127.21854552548376,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 12", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -7.79476152940105,
                    "yaw": 44.29337602324878,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway 10", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 27.00392603863884,  
                    "yaw":   -68.43999657174544,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "ICT OFFICE"
                },
                {
                    "pitch": 19.360734380987843,  
                    "yaw":   11.817456971300473,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "ICT OFFICE"
                },
                {
                    "pitch": 19.836930953812058,  
                    "yaw":   63.50863986902604,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SAO"
                },
                
            ]
        },




         // ==========================================
        // SCENE: MAJOR HALLWAY 12
        // ==========================================
        "major hallway 12": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 12.jpg",
            "pitch": 3.1735828531528014,
            "yaw": -125.74222267910228,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -11.797835457824041,
                    "yaw": -127.21854552548376,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 13", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -10.30516934157254,
                    "yaw": 50.032558636108725,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway 11", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 20.088587870979975,  
                    "yaw":   -86.2903507070377,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "iMac Laboratory"
                },
                {
                    "pitch": 21.476595401384134,  
                    "yaw":   6.244017445441106,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "iMac Laboratory"
                },
                {
                    "pitch": 24.21959813839677,  
                    "yaw":   94.67075600306438,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Elevator"
                },
                {
                    "pitch": -2.3226599097215135,  
                    "yaw": 4.684842739485223,    
                    "type": "info",
                    "text": "Go Inside",
                    "sceneId": "imac",
                    "cssClass": "my-custom-door"
                },
                {
                    "pitch": -3.0491514570239007,  
                    "yaw": -86.55084082063786,    
                    "type": "info",
                    "text": "Go Inside",
                    "sceneId": "imac",
                    "cssClass": "my-custom-door"
                },
                
                
            ]
        },

        // ==========================================
        // SCENE: MAJOR HALLWAY 13
        // ==========================================
        "major hallway 13": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 13.jpg",
            "pitch": 5.76113691766982,
            "yaw": -136.33538890896995,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -10.714516637634235,
                    "yaw": -134.87197004767606,
                    "type": "scene",
                    "text": "",
                    "sceneId": "major hallway 14", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -10.313962502093451,
                    "yaw": 37.992864305492546,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway 12", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 22.916772090893364,  
                    "yaw":   -88.1237145671825,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Room"
                },
                {
                    "pitch": 21.476595401384134,  
                    "yaw":   6.244017445441106,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "MUSIC ROOM"
                },
                {
                    "pitch": 24.21959813839677,  
                    "yaw":   94.67075600306438,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Elevator"
                },
                
                
            ]
        },

        // ==========================================
        // SCENE: MAJOR HALLWAY 14
        // ==========================================
        "major hallway 14": {
            "type": "equirectangular",
            "panorama": "images/MAJOR HALLWAY 14.jpg",
            "pitch": 5.76113691766982,
            "yaw": -136.33538890896995,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -10.714516637634235,
                    "yaw": -134.87197004767606,
                    "type": "scene",
                    "text": "",
                    "sceneId": "", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -8.201285991463962,
                    "yaw": 53.088177985147176,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "major hallway 13", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 11.225922104427136,  
                    "yaw":   -112.54430582386813,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "CARAGA CULINARY CENTER (HRM LAB)"
                },
                {
                    "pitch": 25.927954916641166,  
                    "yaw":   -2.1416918125601807,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "CARAGA CULINARY CENTER (HRM LAB)"
                },
                {
                    "pitch": 1.0493677462278688,  
                    "yaw": -2.8803753959321234,    
                    "type": "info",
                    "text": "Go Inside",
                    "sceneId": "hrm",
                    "cssClass": "my-custom-door"
                },
                
                
                
            ]
        },

        // ==========================================
        // SCENE: HRM
        // ==========================================
        "hrm": {
            "type": "equirectangular",
            "panorama": "images/HRM 1.jpg",
            "pitch": 1.5663172052528649,
            "yaw": 162.06849722425804,
            "hfov": 1000,
            "hotSpots": [
            
                {
                    "pitch": -5.672626441811044,  
                    "yaw": 31.28038534089586,    
                    "type": "info",
                    "text": "Go Back",
                    "sceneId": "major hallway 14",
                    "cssClass": "my-custom-door"
                },
                {
                    "pitch": 0.44356750755839836,  
                    "yaw": -141.97779279370255,    
                    "type": "info",
                    "text": "Go Inside",
                    "sceneId": "hrm 3",
                    "cssClass": "my-custom-door"
                },
                {
                    "pitch": -10.841013208886082,
                    "yaw": 126.33570567402319,
                    "type": "scene",
                    "text": "",
                    "sceneId": "hrm 2", 
                    "cssClass": "my-custom-arrow"
                },
                
                
                
            ]
        },

        // ==========================================
        // SCENE: HRM
        // ==========================================
        "hrm 2": {
            "type": "equirectangular",
            "panorama": "images/HRM 2.jpg",
            "pitch": 5.479207972335988,
            "yaw": 136.01953019911107,
            "hfov": 1000,
            "hotSpots": [
            
        
                {
                    "pitch": 1.029210164918646,  
                    "yaw": -23.332745350685222,    
                    "type": "info",
                    "text": "Go Back",
                    "sceneId": "major hallway 14",
                    "cssClass": "my-custom-door"
                },
                {
                    "pitch": -6.784652160325437,
                    "yaw": -168.54886334183664,
                    "type": "scene",
                    "text": "",
                    "sceneId": "hrm", 
                    "cssClass": "my-custom-arrow"
                },         
                
            ]
        },

        // ==========================================
        // SCENE: HRM
        // ==========================================
        "hrm 3": {
            "type": "equirectangular",
            "panorama": "images/HRM 3.jpg",
            "pitch": 6.303823036788306,
            "yaw": -160.4402142211314,
            "hfov": 1000,
            "hotSpots": [
            
        
                {
                    "pitch": 0.020890959253365867,  
                    "yaw": 30.00866938146669,    
                    "type": "info",
                    "text": "Go Inside",
                    "sceneId": "hrm 4",
                    "cssClass": "my-custom-door"
                },
                {
                    "pitch": -5.785831280107997,  
                    "yaw": 116.7566302386032,    
                    "type": "info",
                    "text": "Go Back",
                    "sceneId": "hrm",
                    "cssClass": "my-custom-door"
                },
                         
                
            ]
        },


        // ==========================================
        // SCENE: HRM
        // ==========================================
        "hrm 4": {
            "type": "equirectangular",
            "panorama": "images/HRM 4.jpg",
            "pitch": 6.303823036788306,
            "yaw": -160.4402142211314,
            "hfov": 1000,
            "hotSpots": [
        
                {
                    "pitch": -3.103129909220954,  
                    "yaw": 41.00674263583619,    
                    "type": "info",
                    "text": "Go Back",
                    "sceneId": "hrm",
                    "cssClass": "my-custom-door"
                },
                         
                
            ]
        },



        // ==========================================
        // SCENE: iMac Laboratory
        // ==========================================
        "imac": {
            "type": "equirectangular",
            "panorama": "images/iMac.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -6.723303116820608,  
                    "yaw": -90.53022533967726,    
                    "type": "info",
                    "text": "Back",
                    "sceneId": "major hallway 12",
                    "cssClass": "my-custom-door"
                },
                   
            ]
        },







    
        // ==========================================
        // SCENE: Clinic
        // ==========================================
        "clinic": {
            "type": "equirectangular",
            "panorama": "images/CLINIC OUTSIDE.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -0.6905828146182175,  
                    "yaw": -1.0253414240563554,    
                    "type": "info",
                    "text": "Go Inside",
                    "sceneId": "",
                    "cssClass": "my-custom-door"
                },
                {
                    "pitch": -9.711533186559574,
                    "yaw": 163.9352028639032,
                    "type": "scene",
                    "text": "BasketBall Court",
                    "sceneId": "basketball court", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 21.71842186197959,  
                    "yaw": -0.19463649427462215,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Clinic"
                },
            ]
        },
    
        // ==========================================
        // SCENE: Basketball Court
        // ==========================================
        "basketball court": {
            "type": "equirectangular",
            "panorama": "images/BASKETBALL COURT.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -0.7961908969536118,
                    "yaw": 112.78997478896918,
                    "type": "scene",
                    "text": "Go Back to Hallway",
                    "sceneId": "left hallway 3", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 2.510923845163367,
                    "yaw": 175.20253133586422,
                    "type": "scene",
                    "text": "Clinic",
                    "sceneId": "clinic", 
                    "cssClass": "my-custom-arrow"
                }
            ]
        },

        // ==========================================
        // SCENE: Canteen
        // ==========================================
        "canteen": {
            "type": "equirectangular",
            "panorama": "images/CANTEEN.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -2.0163759060344204,  
                    "yaw": -32.59752184646217,    
                    "type": "info",
                    "text": "Back to Hallway",
                    "sceneId": "HALLWAY",
                    "cssClass": "my-custom-door"
                }   
            ]
        },

        // ==========================================
        // SCENE: Left Hallway 1
        // ==========================================
        "left hallway": {
            "type": "equirectangular",
            "panorama": "images/HALLWAY 2.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": 31.202580338065136,  
                    "yaw": 1.4048410120639332,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Guidance & Counseling Office"
                },
                {
                    "pitch": 23.419595486586438,  
                    "yaw": 112.65109033363845,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "test"
                },
                {
                    "pitch": 32.75497790772191,  
                    "yaw":  -152.75361687191017,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Prayer Room"
                },
                {
                    "pitch": 4.776582405418075,  
                    "yaw": -156.46939846119713,    
                    "type": "info",
                    "text": "Inside",
                    "sceneId": "prayer room",
                    "cssClass": "my-custom-door"
                },
                {
                    "pitch": -5.030115254441995, 
                    "yaw": -89.11921082978843,  
                    "type": "scene",
                    "text": "Go back to Main Hall",
                    "sceneId": "mainHall", 
                    "cssClass": "my-custom-arrow"
                }
            ]
        },

        // ==========================================
        // SCENE: Library Outside
        // ==========================================
        "library": {
            "type": "equirectangular",
            "panorama": "images/LIBRARY OUTSIDE.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -26.16,
                    "yaw": -157.24,
                    "type": "scene",
                    "text": "Go back to Main Gate",
                    "sceneId": "mainHall", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -6.16729917260858,
                    "yaw": 109.77603526954631,
                    "type": "scene",
                    "text": "",
                    "sceneId": "2nd 1", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 6.760944439969785,
                    "yaw": 168.5089213790045,
                    "type": "scene",
                    "text": "",
                    "sceneId": "3rd 1", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -0.1626953040994256,  
                    "yaw": -6.112679441189537,    
                    "type": "info",
                    "text": "Inside",
                    "sceneId": "lib",
                    "cssClass": "my-custom-door"
                },
                {
                    "pitch": 26.25842315104644,  
                    "yaw": -6.986428643082405,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "University Library"
                },
                
            ]
        },


        // ==========================================
        // SCENE: Prayer Room
        // ==========================================
        "prayer room": {
            "type": "equirectangular",
            "panorama": "images/CHAPEL.jpg",
            "pitch": 2.63403663748419,
            "yaw": -149.76398625963267,
            "hfov": 1000,
            "hotSpots": [
             
                {
                    "pitch": -3.8814797999930764,  
                    "yaw": 37.01640074335519,    
                    "type": "info",
                    "text": "Go Back",
                    "sceneId": "left hallway",
                    "cssClass": "my-custom-door"
                },
                
            ]
        },


        // ==========================================
        // SCENE: 2ND FLOOR
        // ==========================================
        "2nd 1": {
            "type": "equirectangular",
            "panorama": "images/2ND 1.jpg",
            "pitch": 6.545878546074505,
            "yaw": -156.80481562983883,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -9.305048173005265,
                    "yaw": -11.176239232823605,
                    "type": "scene",
                    "text": "Go back",
                    "sceneId": "library", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch":1.4408906600966895,
                    "yaw": -156.9563319892768,
                    "type": "scene",
                    "text": "",
                    "sceneId": "2nd 2", 
                    "cssClass": "my-custom-arrow"
                },
                
                
            ]
        },

        // ==========================================
        // SCENE: 2ND FLOOR
        // ==========================================
        "2nd 2": {
            "type": "equirectangular",
            "panorama": "images/2ND 2.jpg",
            "pitch": 6.545878546074505,
            "yaw": -156.80481562983883,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -3.4117321856100076,
                    "yaw": 118.33126199512479,
                    "type": "scene",
                    "text": "Go back",
                    "sceneId": "2nd 1", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch":-0.3321482945584529,
                    "yaw": -158.66877986803996,
                    "type": "scene",
                    "text": "",
                    "sceneId": "2nd 3", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 22.58482811692868,  
                    "yaw": -136.91174300828212,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "POPE FRANCIS"
                },
                
                
            ]
        },

        // ==========================================
        // SCENE: 2ND FLOOR
        // ==========================================
        "2nd 3": {
            "type": "equirectangular",
            "panorama": "images/2ND 3.jpg",
            "pitch": 6.545878546074505,
            "yaw": -156.80481562983883,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch":  -0.1794990962044512,
                    "yaw": -24.017997265105485,
                    "type": "scene",
                    "text": "Go back",
                    "sceneId": "2nd 2", 
                    "cssClass": "my-custom-arrow"
                },
               
                {
                    "pitch": 25.803530275231072,  
                    "yaw": -135.35550689458327,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 204"
                },
                {
                    "pitch": 9.50258608245033,  
                    "yaw": 175.94602751716997,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 203"
                },
                {
                    "pitch": 7.390141381549511,  
                    "yaw": 173.68332547602947,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "DEFENSE ROOM"
                },
                {
                    "pitch": 5.599412470075267,  
                    "yaw": 170.80026070580334,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "KARATE ROOM"
                },
                
            ]
        },

        // ==========================================
        // SCENE: 3RD FLOOR
        // ==========================================
        "3rd 1": {
            "type": "equirectangular",
            "panorama": "images/3RD 1.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": -29.771688846925194,
                    "yaw": -174.20609249558504,
                    "type": "scene",
                    "text": "Go back to Second Floor",
                    "sceneId": "library", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -12.078248956464385,
                    "yaw": 100.11656258708416,
                    "type": "scene",
                    "text": "",
                    "sceneId": "3rd 3", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -13.346466557565472,
                    "yaw": -118.3910621577722,
                    "type": "scene",
                    "text": "",
                    "sceneId": "3rd 2", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 2.909103262007715,
                    "yaw": 151.25460857941766,
                    "type": "scene",
                    "text": "",
                    "sceneId": "4th 1", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 11.587955863461103,  
                    "yaw": -65.7677306734586,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "GUEST ROOM"
                },
                {
                    "pitch": 16.493098955324474,  
                    "yaw": 53.19952688770815,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SN 307"
                },
                {
                    "pitch": 4.09080585704419,  
                    "yaw": 87.52664192671484,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SN 305"
                },
                {
                    "pitch": 10.485771213632662,  
                    "yaw": 65.5550359629984,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SN 306"
                },
                {
                    "pitch": 9.96673086457863,  
                    "yaw": -106.91531921881986,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SN 308"
                },
                
            ]
        },

        // ==========================================
        // SCENE: 3RD FLOOR
        // ==========================================
        "3rd 2": {
            "type": "equirectangular",
            "panorama": "images/3RD 2.jpg",
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -12.31987114311768,
                    "yaw": 144.56968477245798,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "3rd 1", 
                    "cssClass": "my-custom-arrow"
                },
               
        
                {
                    "pitch": 8.92472647631172,  
                    "yaw": 115.99759578910631,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SN 305"
                },
                {
                    "pitch": 11.787146791814427,  
                    "yaw": -5.812645177769035,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "FIRE BRIGADE ROOM"
                },
                {
                    "pitch": 5.834027459452608,  
                    "yaw": -27.194339815000763,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SN 303"
                },
                {
                    "pitch": 2.66359197835607,  
                    "yaw": -38.338027848956386,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "CRIMINALISTICS LABORATORY"
                },
                
                
            ]
        },

         // ==========================================
        // SCENE: 3RD FLOOR
        // ==========================================
        "3rd 3": {
            "type": "equirectangular",
            "panorama": "images/3RD 3.jpg",
            "pitch": 6.416892026177209,
            "yaw": 113.92274129424646,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -5.828781102720813,
                    "yaw": -53.5351823903318,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "3rd 1", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -3.2462471699256734,
                    "yaw": 133.45182265633292,
                    "type": "scene",
                    "text": "",
                    "sceneId": "3rd 4", 
                    "cssClass": "my-custom-arrow"
                },
               
        
                {
                    "pitch": 15.061110772330423,  
                    "yaw": 93.16197208307229,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "GUEST ROOM"
                },

                {
                    "pitch": 15.53723280827319,  
                    "yaw": 5.823305854583613,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Business Simulation Room"
                },
                
                
            ]
        },

          // ==========================================
        // SCENE: 3RD FLOOR
        // ==========================================
        "3rd 4": {
            "type": "equirectangular",
            "panorama": "images/3RD 4.jpg",
            "pitch": -1.6220939873864106,
            "yaw": 4.344096959396808,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -5.664550864060274,
                    "yaw": 171.55555389217932,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "3rd 3", 
                    "cssClass": "my-custom-arrow"
                },  
                {
                    "pitch": -5.053507711910564,
                    "yaw": 3.442335754866306,
                    "type": "scene",
                    "text": "",
                    "sceneId": "3rd 5", 
                    "cssClass": "my-custom-arrow"
                },      
                
            ]
        },

        // ==========================================
        // SCENE: 3RD FLOOR
        // ==========================================
        "3rd 5": {
            "type": "equirectangular",
            "panorama": "images/3RD 5.jpg",
            "pitch": 3.9322430261780563,
            "yaw": -131.23590742858138,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -11.053172178791172,
                    "yaw": 162.13834316083927,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "3rd 4", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -10.228172621947035,
                    "yaw": -108.64469081290432,
                    "type": "scene",
                    "text": "",
                    "sceneId": "3rd 6", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 5.822773066210105,  
                    "yaw": -93.42420344550571,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 306"
                },       
                
            ]
        },

        // ==========================================
        // SCENE: 3RD FLOOR
        // ==========================================
        "3rd 6": {
            "type": "equirectangular",
            "panorama": "images/3RD 6.jpg",
            "pitch": 14.621207402966071,
            "yaw": -0.7544127476473994,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -5.3404386267585355,
                    "yaw": -176.24545309848264,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "3rd 5", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -5.470311349314453,
                    "yaw": 0.005699930537824471,
                    "type": "scene",
                    "text": "",
                    "sceneId": "3rd 7", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": 10.729123737504274,  
                    "yaw": 16.723172221905724,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 303"
                },
                {
                    "pitch": 27.41536729890568,  
                    "yaw": 37.40046593850295,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 304"
                },
                {
                    "pitch": 6.268580311059387,  
                    "yaw": 173.85666129900483,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 305"
                },         
                
            ]
        },

        // ==========================================
        // SCENE: 3RD FLOOR
        // ==========================================
        "3rd 7": {
            "type": "equirectangular",
            "panorama": "images/3RD 7.jpg",
            "pitch": 6.655914744328821,
            "yaw": 45.340979134956456,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -5.484469954400025,
                    "yaw": -0.567893775775417,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "3rd 6", 
                    "cssClass": "my-custom-arrow"
                },
               
                {
                    "pitch": 9.471315250300682,  
                    "yaw": -16.08197461480387,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 301"
                },
                {
                    "pitch": 6.330687977463298,  
                    "yaw": -10.535933352971597,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 302"
                },
                       
                
            ]
        },



        // ==========================================
        // SCENE: 4TH FLOOR
        // ==========================================
        "4th 1": {
            "type": "equirectangular",
            "panorama": "images/4TH 1.jpg",
            "pitch": 6.655914744328821,
            "yaw": 45.340979134956456,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -36.015321313896315,
                    "yaw": -173.29937782728646,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "3rd 1", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -10.595258344788354,
                    "yaw": 99.61221354445769,
                    "type": "scene",
                    "text": "",
                    "sceneId": "4th 2", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -13.548843186222385,
                    "yaw": -116.78010278102823,
                    "type": "scene",
                    "text": "",
                    "sceneId": "4th a", 
                    "cssClass": "my-custom-arrow"
                },
               
                {
                    "pitch": 10.872863077577383,  
                    "yaw": 55.01258427739005,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "Massage Room"
                },
                {
                    "pitch": 16.50344365630932,  
                    "yaw": 38.83291976177,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SN 406"
                },
                {
                    "pitch": 9.91981028514509,  
                    "yaw": -70.71957394180953,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "CSS LAB"
                },
                {
                    "pitch": 9.956612498991037,  
                    "yaw": -112.16568511553449,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "CSS LAB"
                },
                {
                    "pitch": 3.252784273497372,  
                    "yaw": 97.45659801448897,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "COMPUTER LAB 1"
                },
                       
                
            ]
        },

        // ==========================================
        // SCENE: 4TH FLOOR
        // ==========================================
        "4th a": {
            "type": "equirectangular",
            "panorama": "images/4TH A.jpg",
            "pitch": -3.00846603641532,
            "yaw":  7.716597428642882,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -11.082074983705539,
                    "yaw": -179.9807893811769,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "4th 1", 
                    "cssClass": "my-custom-arrow"
                },
                
               
                {
                    "pitch": 7.524986898256644,  
                    "yaw": 163.54516053294645,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "CSS LAB"
                },
                {
                    "pitch": 24.790821891522356,  
                    "yaw": 49.906179584295394,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "LEARNING AREAS"
                },
                {
                    "pitch": 11.020346691082157,  
                    "yaw": 1.0826673544336103,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "DEMO ROOM"
                },
                
            ]
        },





        // ==========================================
        // SCENE: 4TH FLOOR
        // ==========================================
        "4th 2": {
            "type": "equirectangular",
            "panorama": "images/4TH 2.jpg",
            "pitch": 6.655914744328821,
            "yaw": 45.340979134956456,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -6.834208587937992,
                    "yaw": -132.9060772510984,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "4th 1", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -8.135790694083953,
                    "yaw": 47.01508995260507,
                    "type": "scene",
                    "text": "",
                    "sceneId": "4th 3", 
                    "cssClass": "my-custom-arrow"
                },
               
                {
                    "pitch": 14.635665475425284,  
                    "yaw": -2.6326933927073745,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "COMPUTER LAB 2"
                },
                {
                    "pitch": 4.654107587654133,  
                    "yaw": 30.586243724707664,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "COMPUTER LAB 2"
                },
                {
                    "pitch": 17.342499477577068,  
                    "yaw": -60.185219047003756,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "COMPUTER LAB 1"
                },
                
            ]
        },


        // ==========================================
        // SCENE: 4TH FLOOR
        // ==========================================
        "4th 3": {
            "type": "equirectangular",
            "panorama": "images/4TH 3.jpg",
            "pitch": 2.4522187505083926,
            "yaw": -52.400814549158305,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -7.0339294910566466,
                    "yaw": 167.2319446002981,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "4th 2", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -4.273431377330594,
                    "yaw": -2.59358307871839247,
                    "type": "scene",
                    "text": "",
                    "sceneId": "4th 4", 
                    "cssClass": "my-custom-arrow"
                },
               
                {
                    "pitch": 1.4165413621612124,  
                    "yaw": -109.40630879419379,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "COMPUTER LAB 3"
                },
                {
                    "pitch": 3.578593093154009,  
                    "yaw": -179.32308754034483,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "COMPUTER LAB 2"
                },
                {
                    "pitch": 0.9981644776158666,  
                    "yaw": 172.8566370136044,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "COMPUTER LAB 1"
                },
                
            ]
        },


        // ==========================================
        // SCENE: 4TH FLOOR
        // ==========================================
        "4th 4": {
            "type": "equirectangular",
            "panorama": "images/4TH 4.jpg",
            "pitch": 1.8619206440088505,
            "yaw": -31.65907706299322,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -6.546443222569324,
                    "yaw": -91.76890978237574,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "4th 3", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -6.42761429534382,
                    "yaw": 0.23985567174360511,
                    "type": "scene",
                    "text": "",
                    "sceneId": "4th 5", 
                    "cssClass": "my-custom-arrow"
                },
               
                {
                    "pitch": 12.315127408924678,  
                    "yaw": 12.878471848407417,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 405"
                },
                
            ]
        },

        // ==========================================
        // SCENE: 4TH FLOOR
        // ==========================================
        "4th 5": {
            "type": "equirectangular",
            "panorama": "images/4TH 5.jpg",
            "pitch": -2.4054032209111083,
            "yaw": 3.166710707204291,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -9.313883148124598,
                    "yaw": -175.7390910693969,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "4th 3", 
                    "cssClass": "my-custom-arrow"
                },
                {
                    "pitch": -8.096056945728401,
                    "yaw": 3.091204132715502,
                    "type": "scene",
                    "text": "",
                    "sceneId": "4th 6", 
                    "cssClass": "my-custom-arrow"
                },
               
                {
                    "pitch": 32.05001828302008,  
                    "yaw": 54.7538132619191,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 404"
                },
                {
                    "pitch": 5.477528546226334,  
                    "yaw": 9.751105819622353,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 403"
                },
                {
                    "pitch": 7.4113388659042405,
                    "yaw": 175.0245646390138,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 405"
                },

                
                
            ]
        },

        // ==========================================
        // SCENE: 4TH FLOOR
        // ==========================================
        "4th 6": {
            "type": "equirectangular",
            "panorama": "images/4TH 6.jpg",
            "pitch": -2.4054032209111083,
            "yaw": 3.166710707204291,
            "hfov": 1000,
            "hotSpots": [
                
                {
                    "pitch": -6.145522048077652,
                    "yaw": -0.4121384419196703,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "4th 5", 
                    "cssClass": "my-custom-arrow"
                },
             
                {
                    "pitch": 24.830858328334443,  
                    "yaw": -27.708164296040614,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 401"
                },
                {
                    "pitch": 6.112533974062908,  
                    "yaw":-8.336418571787723,    
                    "createTooltipFunc": createCustomLabel,
                    "createTooltipArgs": "SP 402"
                },  
                
            ]
        },

        
        
        

        // ==========================================
        // SCENE: Graduate School Library
        // ==========================================
        "lib": {
            "title": "Atrium",
            "type": "equirectangular",
            "panorama": "images/GRADUATE SCHOOL LIBRARY.jpg", 
            "pitch": 0,
            "yaw": 0,
            "hfov": 1000,
            "hotSpots": [
                {
                    "pitch": 3.72,
                    "yaw": 50.37,
                    "type": "scene",
                    "text": "Head back to the Library",
                    "sceneId": "library",
                    "cssClass": "my-custom-arrow"
                },
                
            ]
        }
    }

    
});





// ==========================================
// --- NEW SIDEBAR LOGIC ---
// ==========================================

// Get the elements
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

// Open menu
menuBtn.addEventListener('click', function() {
    sidebar.classList.add('open');
});

// Close menu
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('open');
});

// Function to change scene from the sidebar
function goToLocation(sceneId) {
    // Tell Pannellum to load the specific scene
    myTour.loadScene(sceneId);
    
    // Optional: automatically close the sidebar after clicking a location
    sidebar.classList.remove('open');
}

// ==========================================
// --- INTRO SCREEN LOGIC ---
// ==========================================

const exploreBtn = document.getElementById('exploreBtn');
const introScreen = document.getElementById('intro-screen');

exploreBtn.addEventListener('click', function() {
    // Fade out the overlay
    introScreen.style.opacity = '0';
    
    // Completely hide it from the screen after the fade animation finishes (600ms)
    setTimeout(function() {
        introScreen.style.visibility = 'hidden';
    }, 600);
});



// Function to generate the HTML for the animated callout
function createCustomLabel(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-label-wrapper');

    // Create the dot
    var dot = document.createElement('div');
    dot.classList.add('callout-dot');

    // Create the line
    var line = document.createElement('div');
    line.classList.add('callout-line');

    // Create the text box
    var text = document.createElement('div');
    text.classList.add('callout-text');
    text.innerHTML = args; // The text passed from the JSON

    // Append everything to the hotspot container
    hotSpotDiv.appendChild(dot);
    hotSpotDiv.appendChild(line);
    hotSpotDiv.appendChild(text);

    document.addEventListener('DOMContentLoaded', function() {
            const categories = document.querySelectorAll('.nav-category');

            categories.forEach(category => {
                category.addEventListener('click', function() {
                    // Toggle the active class on the button
                    this.classList.toggle('active');
                    
                    // Get the specific sub-list attached to this category
                    const subList = this.nextElementSibling;
                    
                    // Toggle max-height for smooth expand/collapse
                    if (subList.style.maxHeight) {
                        subList.style.maxHeight = null;
                    } else {
                        // Set it to scrollHeight to dynamically fit the number of items
                        subList.style.maxHeight = subList.scrollHeight + "px";
                    }
                });
            });
        });
}