const {v4:uuid} = require('uuid');


const quizData = {
    "data" :[
        {
            id  : uuid(),
            category:"Geography",
            image:"https://www.bing.com/images/search?view=detailV2&ccid=ZEWBOOoU&id=1BCDBD6F0425FD25039DDD4DF23EC91D5F4408FF&thid=OIP.ZEWBOOoUAlOu7w60irpmdwHaDj&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fpreviews%2f001%2f338%2f057%2fnon_2x%2fgeography-subject-with-worldmap-and-books-free-vector.jpg&exph=980&expw=2038&q=geography&simid=608038374764324180&FORM=IRPRST&ck=E7FAE2D9DD6AA4EEB7066D4A136A17C0&selectedIndex=11&itb=0",
            description : "geography quiz" ,
            quiz : [
            {
                id:uuid(),
                question:"What teardrop shaped island country has maritime borders with the Maldives, and another country to its north?",
                options:[
                    {
                        id:uuid(),
                        option:"Sri Lanka",
                        isOptionCorrect:true
                    },
                    {
                        id:uuid(),
                        option:"India",
                        isOptionCorrect:false
                    },
                    {
                        id:uuid(),
                        option:"Seychelles",
                        isOptionCorrect:false
                    },
                    {
                        id:uuid(),
                        option:"Phuket",
                        isOptionCorrect:false
                    }
                ]
            },
            {
                id:uuid(),
                question:"There is one Canadian province and/or territory that borders the Pacific Ocean. Which is it?",
                options:[
                    {
                        id:uuid(),
                        option: "Nova Scotia",
                        isOptionCorrect:false
                    },
                    {
                        id:uuid(),
                        option: "British Columbia",
                        isOptionCorrect:true
                    },
                    {
                        id:uuid(),
                        option: "Newfoundland",
                        isOptionCorrect:false
                    },
                    {
                        id:uuid(),
                        option: "Yukon Territory",
                        isOptionCorrect:false
                    }
                ]
            },
            {
                id:uuid(),
                question:"This is the main river of the primarily-desert state of Rajasthan. Flowing south-westerly, it is a fine example of a river with inland drainage. Which river is this?",
                options:[
                    {
                        id:uuid(),
                        option:"Mahanadi",
                        isOptionCorrect:false
                    },
                    {
                        id:uuid(),
                        option:"Luni",
                        isOptionCorrect:true
                    },
                    {
                        id:uuid(),
                        option:"Godavari",
                        isOptionCorrect:false
                    },
                    {
                        id:uuid(),
                        option:"Yamuna",
                        isOptionCorrect:false
                    }
                ]
            },
            {
                id:uuid(),
                question:" Punjab, a state in northern India, is known as the 'Land of Five RIvers'. Tell me, what are the names of these five rivers?",
                options:[
                    {
                        id:uuid(),
                        option:"Krishna, Tungabhadra, Godavari, Bhima, Vaigai ",
                        isOptionCorrect:false
                    },
                    {
                        id:uuid(),
                        option:"Chenab, Ravi, Beas, Jhelum, Sutlej",
                        isOptionCorrect:true
                    },
                    {
                        id:uuid(),
                        option:"Gomati, Son, Gandak, Damodar, Yamuna",
                        isOptionCorrect:false
                    },
                    {
                        id:uuid(),
                        option:"Narmada, Tapi, Sabarmati, Luni, Mahi",
                        isOptionCorrect:false
                    }
                ]
            },
            {
                id:uuid(),
                question:"Which of the following rivers does NOT meet the Bay of Bengal?",
                options:[
                    {
                        id:uuid(),
                        option:"Tapi (Tapti)",
                        isOptionCorrect:true
                    },
                    {
                        id:uuid(),
                        option:"Mahanadi",
                        isOptionCorrect:false
                    },
                    {
                        id:uuid(),
                        option:"Krishna",
                        isOptionCorrect:false
                    },
                    {
                        id:uuid(),
                        option:"Godavari",
                        isOptionCorrect:false
                    }
                ]
            }
            ]
        },
        {
            id:uuid(),
            category:"History",
            image:"https://www.bing.com/images/search?view=detailV2&ccid=RPMkdL5E&id=F4513D8E1FF0EAB262DF1FB7AA94B87BE11B5F6A&thid=OIP.RPMkdL5ENnQsvYuA2DL8YQHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.44f32474be4436742cbd8b80d832fc61%3frik%3dal8b4Xu4lKq3Hw%26riu%3dhttp%253a%252f%252fwww.nct.ac.in%252fassets%252fimg%252fhistory%252fslider%252f2.png%26ehk%3dtdBZUFMOVHvyoK1cBS3AypVbJxur913uqAQlMVnxufM%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=667&expw=1000&q=history&simid=607997551095782529&FORM=IRPRST&ck=DCA8806188DAB26307790B76B679DB57&selectedIndex=8&itb=0",
            description:"History quiz",
            quiz:[
                {

                },
                {
                    
                }
            ]
        }
    ],

}


module.exports = quizData;