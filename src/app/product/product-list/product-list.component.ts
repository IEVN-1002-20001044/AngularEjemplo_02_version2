import { Component } from '@angular/core';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImg:Boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:Iproducto[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas familiar",
    "year":"febrero 3 2020",
    "precio":120000,
    "Marca":"NISSAN",
    "Color":"Verde",
    "imagenUrl":"https://img.automexico.com/2020/08/21/6d38799c-66d0.jpg"
  },
  {
    "productoId":2,
    "Modelo":"A4",
    "Descripcion":"2 puertas",
    "year":"marzo 3 2022",
    "precio":180000,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imagenUrl":"https://static.vecteezy.com/system/resources/previews/008/728/925/non_2x/side-turkey-february-28-2022-white-audi-a4-is-parked-on-the-street-on-a-warm-day-against-the-backdrop-of-park-free-photo.jpg"
  },
  {
    "productoId":3,
    "Modelo":"Rio",
    "Descripcion":"2 puertas familiar",
    "year":"enero 3 2023",
    "precio":200000,
    "Marca":"KIA",
    "Color":"Azul",
    "imagenUrl":"https://www.kia.com/us/content/dam/kia/us/en/vehicles/rio/2023/gallery/exterior/gallery_rio_2023_exterior_1.jpg/_jcr_content/renditions/cq5dam.thumbnail.626.417.png"
  }
  ]

}
