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
                    img: 'assets/img/thor.jpeg'
                },
                {
                    name: 'Hulk',
                    power: 'Strong',
                    weapon: 'Fighting',
                    img: 'assets/img/hulk.jpeg'
                }
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        handleEvent(e, data) {
            console.log(e, e.type)
            if(data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount("#app")