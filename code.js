class Randomcircles {

    constructor() {
        this.properties = {
            top: 0,
            left: 0,
            maxradius: 200,
            minradius: 50,
            radius: 0,
            bgcolor: '',
            opacity: 0.5
        };
        this.mainbody = document.createElement("div");
        this._setProperties();
        this._addToScreen();
    }

    _setProperties() {
        this.properties.top = Math.ceil(document.documentElement.clientHeight * Math.random());
        this.properties.left = Math.ceil(document.documentElement.clientWidth * Math.random());
        this.properties.radius = Math.ceil(this.properties.minradius + this.properties.maxradius * Math.random());
        let x = Math.ceil(255 * Math.random());
        let y = Math.ceil(255 * Math.random());
        let z = Math.ceil(255 * Math.random());
        this.properties.bgcolor = `rgba(${x},${y},${z},${this.properties.opacity})`;
    }

    _addToScreen() {
        this.mainbody.classList.add('my-circle');
        this.mainbody.style.top = this.properties.top + 'px';
        this.mainbody.style.left = this.properties.left + 'px';
        this.mainbody.style.width = this.properties.radius + 'px';
        this.mainbody.style.height = this.properties.radius + 'px';
        this.mainbody.style.background = this.properties.bgcolor;
        document.body.appendChild(this.mainbody);
    }
}

for (let i = 0; i <= 50; i++) {
    raindrop = new Randomcircles();
}