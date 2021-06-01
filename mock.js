 const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Home',
      src :`${require('./assets/home.jpeg')}`
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Experiences',
      src :`${require('./assets/experiences.jpeg')}`
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Restaurants',
      src :`${require('./assets/restaurant.jpeg')}`
    },
  ];

  const HOMES = [
      {
          id:1, name:'Donalds Tavern', title:'PRIVATE ROOM FOR COUPLES - 2 BED', 
          price:(Math.random() * 10 + 50), starRating: Math.floor(Math.random() * 6)
      },
      {
        id:2, name:'Blue View', title:'PRIVATE ROOM FOR COUPLES - 1 BED', 
        price:(Math.random() * 100 + 50), starRating: Math.floor(Math.random() * 6)
    },
    {
        id:3, name:'Martins Tavern', title:'ROOMS FOR FRIENDS - 5 BED', 
        price:(Math.random() * 280 + 50), starRating: Math.floor(Math.random() * 6)
    },
    {
        id:4, name:'Collective Site', title:'PRIVATE ROOM FOR COUPLES - 3 BED', 
        price:(Math.random() * 90 + 50), starRating: Math.floor(Math.random() * 6)
    },
    {
        id:5, name:'Boutique motel', title:'PRIVATE ROOM GIRLS - 2 BED', 
        price:(Math.random() * 70 + 50), starRating: Math.floor(Math.random() * 6)
    },
    {
        id:6, name:'The choice', title:'PRIVATE HOUSE- 4 BED', 
        price:(Math.random() * 50 + 50), starRating: Math.floor(Math.random() * 6)
    },
    {
        id:7, name:'Vein Yard', title:'PRIVATE ROOM FOR COUPLES - 2 BED', 
        price:(Math.random() * 500 + 50), starRating: Math.floor(Math.random() * 6)
    },
    {
        id:8, name:'Alis Tavern', title:'BONGALOW FOR COUPLES - 1 BED', 
        price:(Math.random() * 100 + 50), starRating: Math.floor(Math.random() * 6)
    },
    {
        id:9, name:'Maven hotel', title:'PRIVATE ROOM FOR COUPLES - 1 BED', 
        price:(Math.random() * 300 + 50), starRating:Math.floor(Math.random() * 6)
    },
    {
        id:10, name:'Family go Away', title:'APARTMENT FOR COUPLES - 4 BED', 
        price:(Math.random() * 100 + 50), starRating: Math.floor(Math.random() * 6)
    },
      
  ]
  export {DATA, HOMES}