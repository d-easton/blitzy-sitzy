
class Space {
    constructor(id, text, nation) {
        this.id = id;
        this.text = text;
        this.nation = nation;
    }

    // accessors
    get id() {
        return this.id;
    }

    get text() {
        return this.text;
    }

    get nation(){
        return this.nation;
    }
};

export default Space;