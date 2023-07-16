class Color{
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }

    HSL(){
        const {h, s, l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    innerRGB(){
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb(){
        const {r, g, b} = this;
        return `rgb(${this.innerRGB()})`;
    }


    rgbca(){
        const {r, g, b, a} = this;
        return `rgba(${this.innerRGB()} , ${a})`;
    }

    hex(){
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    calcHSL(){
        const {r, g, b} = this;
        let h, s, l;
        // Make r, g, and b fractions of 1
        const red = r / 255;
        const green = g / 255;
        const blue = b / 255;
        
        const min = Math.min(red, green, blue);
        const max = Math.max(red, green, blue);

        if(max === min){
            h = 0;
        }else if(max === red){
            h = 60 * (green - blue) / (max - min);
        }else if(max === green){
            h = 60 * (blue - red) / (max - min) + 120;
        }else if(max === blue){
            h = 60 * (red - green) / (max - min) + 240;
        }
        
        if(h < 0){
            h = h + 360;
        }
        
        // Calculate lightness
        l = (min + max) / 2;
        
        // Calculate saturation
        if(l === 0 || max === min){
            s = 0;
        }else if(0 < l && l <= 0.5){
            s = (max - min) / (max + min);
        }else if(l > 0.5){
            s = (max - min) / (2 - max - min);
        }

        // Multiply s and l by 100 to get the value in percent, rather than [0, 1]
        s = Math.round(s * 100);
        l = Math.round(l * 100);

        this.h = h;
        this.s = s;
        this.l = l;
    } 

}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');