export class Label {

    public id?: number;
    public url?: string;
    public name?: string;
    public description?: string;
    public color?: string;

    constructor({id, url, name, description, color}: Partial<Label>) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.description = description;
        this.color = color;
    }
}
