const app = Vue.createApp({
    // data, functions
    // template: '<h2>This is the template</h2>'
    data() {
        return {
            name: 'Thor',
            power: 'God of Thunder',
            weapon: 'Hammer',
            age: 30,
            isAvenger: true,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleAvenger() {
            this.isAvenger = !this.isAvenger
        },
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