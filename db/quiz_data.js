const v4 = require('uuid');
const uuid = v4;

const quizData = {
    "data" :[
        {
            id  : uuid(),
            category:"Geography",
            image:"",
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