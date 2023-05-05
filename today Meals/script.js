console.log("hello");
Vue.createApp({
    data() {
        return {
            todayMeatsByDiet: [
                {
                    diet: "Meat",
                    meals: [
                        "Garlic",
                        "Swedish",
                        "Lemon",
                        "Beef",
                    ],
                },
                {
                    diet: "Vegetarian",
                    meals: [
                        "Double",
                        "Bean",
                        "Creamy",
                        "Double",
                    ],
                },
                {
                    diet: "Vegan",
                    meals: [
                        "Chilli",
                        "Lentil",
                        "Black",
                        "Chickpea"
                    ],

                },
            ],
        };
    },
}).mount("#app") 