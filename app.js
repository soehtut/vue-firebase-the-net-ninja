const app = Vue.createApp({
    // data, functions
    // template: '<h2>This is the template</h2>'
    data() {
        return {
            avengers: [
                {
                    name: 'Thor',
                    power: 'God of Thunder',
                    weapon: 'Hammer',
                    img: 'assets/img/thor.jpeg',
                    isStrongest: true
                },
                {
                    name: 'Hulk',
                    power: 'Strong',
                    weapon: 'Fighting',
                    img: 'assets/img/hulk.jpeg',
                    strongest: false
                }
            ]
        }
    },
    methods: {
       handleAvenger(avenger) {
           avenger.isStrongest = !avenger.isStrongest
       }
    }
});

app.mount("#app")