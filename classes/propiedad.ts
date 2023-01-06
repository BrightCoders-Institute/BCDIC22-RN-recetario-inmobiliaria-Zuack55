export default class Propiedad {
    public id: number | string;
    public name: string;
    public ubi: string;
    public room: number;
    public img: string;
    public bathrooms: number;
    public tf: number;
    public price: number;
    public puntuacion: number;
  constructor(id: number, name: string, ubi: string, room: number, img: string, bathrooms: number, tf: number, price: number, puntuacion: number) {
    this.id = id;
    this.name = name;
    this.ubi = ubi;
    this.room = room;
    this.img = img;
    this.bathrooms = bathrooms;
    this.tf = tf;
    this.price = price;
    this.puntuacion = puntuacion;
  }
}