import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public readonly DATA = [{
     product: {
      description: "\"Uncharted 4: A Thief's End\" is an exhilarating action-adventure video game developed by Naughty Dog and published by Sony Computer Entertainment. Released in 2016 as the fourth installment in the critically acclaimed Uncharted series, the game follows the adventures of Nathan Drake, a charismatic and resourceful treasure hunter, as he embarks on his final and most personal quest. Set against stunning landscapes and intricately designed environments, players navigate through a thrilling narrative filled with intense action sequences, clever puzzles, and cinematic storytelling. Uncharted 4 showcases breathtaking graphics, seamless gameplay, and a compelling story that delves into Drake's past, making it a must-play title for fans of high-octane adventures and engaging storytelling.",
      id: 2,
      imageUrl: 
      "https://m.media-amazon.com/images/M/MV5BMTYzYzIxMjktMDM4NS00MTM5LWJlMDgtNDRhMDNhOGRmY2EwXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg",
      name: "Uncharted 4",
      previousPrice: 79,
      price: 39,
      productType: "VIDEO_GAMES",
      quantity: 40,
      rating: 4.4,
      ratingAmount: 2002,
      },
    quantity: 3
  }
]

  public trackByFn(index: number, item: any): number {
    return item.id; // or index, or unique identifier property
  }
}
