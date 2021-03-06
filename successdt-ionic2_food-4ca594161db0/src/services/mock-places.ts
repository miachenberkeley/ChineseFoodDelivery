export let PLACES = [
  {
    id: 1,
    name: "陈妈麻辣店",
    district: "Theater District",
    city: "巴黎",
    website: "http://daoduythanh.com",
    phone: "+84988888888",
    num_reviews: 30,
    num_photos: 32,
    num_bookmarks: 27,
    num_check_in: 1316,
    num_votes: 232,
    bookmarked: false,
    address: "231W 46th street, New York",
    rating: 4.1,
    cuisines: "四川菜",
    cost: 20,
    accepted_card: 1,
    accepted_cash: 1,
    highlights: ['Breakfast', 'Takeaway available'],
    working_hours: {
      monday: {
        from: 7,
        to: 24
      },
      tuesday: {
        from: 7,
        to: 24
      },
      wednesday: {
        from: 7,
        to: 24
      },
      thursday: {
        from: 7,
        to: 24
      },
      friday: {
        from: 7,
        to: 24
      },
      saturday: {
        from: 7,
        to: 24
      },
      sunday: {
        from: 7,
        to: 24
      }
    },
    menu: [
      {
        id: 1,
        name: "麻辣系列",
        items: [
          {
            id: 1,
            name: "兔头",
            price: 5
          },
          {
            id: 2,
            name: "兔丁",
            price: 5
          },
          {
            id: 3,
            name: "鸭头",
            price: 4
          },
          {
            id: 4,
            name: "鸭舌",
            price: 8
          }
        ]
      },
      {
        id: 2,
        name: "Salad",
        items: [
          {
            id: 4,
            name: "Small Ceasar Salad",
            price: 6.95
          },
          {
            id: 5,
            name: "Ceasar Salad with Grilled Steak",
            price: 13.95
          },
          {
            id: 6,
            name: "Ceasar Salad"
          }
        ]
      },
      {
        id: 3,
        name: "Pizza",
        items: [
          {
            id: 7,
            name: "Neopolitan Pizza",
            price: 3
          },
          {
            id: 8,
            name: "Sicilian Slice Pie",
            price: 4
          },
          {
            id: 9,
            name: "Sicilian Pizza",
            price: 28
          }
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        username: "Cowntown Foodie",
        profile_picture: "assets/img/user/adam.jpg",
        rating: 4.5,
        comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
      },
      {
        id: 2,
        username: "Christian Do",
        profile_picture: "assets/img/user/ben.png",
        rating: 4.5,
        comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
      }
    ],
    photos: [
      {
        thumb: "assets/img/四川.JPG",
        full_size: "assets/img/四川.jpg",
        description: ""
      },
      {
        thumb: "assets/img/menu/鸡头.jpg",
        full_size: "assets/img/menu/鸡头.jpg",
        description: ""
      },
      {
        thumb: "assets/img/menu/鸡脖.jpg",
        full_size: "assets/img/menu/鸡脖.jpg",
        description: ""
      },
      {
        thumb: "assets/img/menu/麻辣鸡爪.jpg",
        full_size: "assets/img/menu/麻辣鸡爪.jpg",
        description: ""
      }
    ]
  },
  {
    id: 2,
    name: "小嘉兴粽子",
    district: "Nolita",
    city: "巴黎",
    website: "http://daoduythanh.com",
    phone: "+84988888888",
    num_reviews: 193,
    num_photos: 32,
    num_bookmarks: 27,
    num_check_in: 1316,
    num_votes: 232,
    bookmarked: false,
    address: "231W 46th street, New York",
    rating: 4.1,
    cuisines: "嘉兴菜",
    cost: 20,
    accepted_card: 1,
    accepted_cash: 1,
    highlights: ['Breakfast', 'Takeaway available'],
    working_hours: {
      monday: {
        from: 7,
        to: 24
      },
      tuesday: {
        from: 7,
        to: 24
      },
      wednesday: {
        from: 7,
        to: 24
      },
      thursday: {
        from: 7,
        to: 24
      },
      friday: {
        from: 7,
        to: 24
      },
      saturday: {
        from: 7,
        to: 24
      },
      sunday: {
        from: 7,
        to: 24
      }
    },
    menu: [
      {
        id: 1,
        name: "Soup",
        items: [
          {
            id: 1,
            name: "Pasta Fagioli Soup",
            price: 4.95
          },
          {
            id: 2,
            name: "3 Bean Chili Soup with Sour Cream",
            price: 5.95
          },
          {
            id: 3,
            name: "Soup of the day",
            price: 4.95
          }
        ]
      },
      {
        id: 2,
        name: "Salad",
        items: [
          {
            id: 4,
            name: "Small Ceasar Salad",
            price: 6.95
          },
          {
            id: 5,
            name: "Ceasar Salad with Grilled Steak",
            price: 13.95
          },
          {
            id: 6,
            name: "Ceasar Salad"
          }
        ]
      },
      {
        id: 3,
        name: "Pizza",
        items: [
          {
            id: 7,
            name: "Neopolitan Pizza",
            price: 3
          },
          {
            id: 8,
            name: "Sicilian Slice Pie",
            price: 4
          },
          {
            id: 9,
            name: "Sicilian Pizza",
            price: 28
          }
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        username: "Cowntown Foodie",
        profile_picture: "assets/img/user/adam.jpg",
        rating: 4.5,
        comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
      },
      {
        id: 2,
        username: "Christian Do",
        profile_picture: "assets/img/user/ben.png",
        rating: 4.5,
        comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
      }
    ],
    photos: [
      {
        thumb: "assets/img/粽子.JPG",
        full_size: "assets/img/menu/r4.jpg",
        description: ""
      },
      {
        thumb: "assets/img/menu/r5_thumb.jpg",
        full_size: "assets/img/menu/r5.jpg",
        description: ""
      },
      {
        thumb: "assets/img/menu/r6_thumb.jpg",
        full_size: "assets/img/menu/r6.jpg",
        description: ""
      },
      {
        thumb: "assets/img/menu/r7_thumb.jpg",
        full_size: "assets/img/menu/r7.jpg",
        description: ""
      }
    ]
  },
  {
    id: 3,
    name: "青蚨凉皮",
    district: "Nolita",
    city: "巴黎",
    website: "http://daoduythanh.com",
    phone: "+84988888888",
    num_reviews: 193,
    num_photos: 32,
    num_bookmarks: 27,
    num_check_in: 1316,
    num_votes: 232,
    bookmarked: false,
    address: "231W 46th street, New York",
    rating: 4.5,
    cuisines: "小摊菜",
    cost: 20,
    accepted_card: 1,
    accepted_cash: 1,
    highlights: ['Breakfast', 'Takeaway available'],
    working_hours: {
      monday: {
        from: 7,
        to: 24
      },
      tuesday: {
        from: 7,
        to: 24
      },
      wednesday: {
        from: 7,
        to: 24
      },
      thursday: {
        from: 7,
        to: 24
      },
      friday: {
        from: 7,
        to: 24
      },
      saturday: {
        from: 7,
        to: 24
      },
      sunday: {
        from: 7,
        to: 24
      }
    },
    menu: [
      {
        id: 1,
        name: "Soup",
        items: [
          {
            id: 1,
            name: "Pasta Fagioli Soup",
            price: 4.95
          },
          {
            id: 2,
            name: "3 Bean Chili Soup with Sour Cream",
            price: 5.95
          },
          {
            id: 3,
            name: "Soup of the day",
            price: 4.95
          }
        ]
      },
      {
        id: 2,
        name: "Salad",
        items: [
          {
            id: 4,
            name: "Small Ceasar Salad",
            price: 6.95
          },
          {
            id: 5,
            name: "Ceasar Salad with Grilled Steak",
            price: 13.95
          },
          {
            id: 6,
            name: "Ceasar Salad"
          }
        ]
      },
      {
        id: 3,
        name: "Pizza",
        items: [
          {
            id: 7,
            name: "Neopolitan Pizza",
            price: 3
          },
          {
            id: 8,
            name: "Sicilian Slice Pie",
            price: 4
          },
          {
            id: 9,
            name: "Sicilian Pizza",
            price: 28
          }
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        username: "Cowntown Foodie",
        profile_picture: "assets/img/user/adam.jpg",
        rating: 4.5,
        comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
      },
      {
        id: 2,
        username: "Christian Do",
        profile_picture: "assets/img/user/ben.png",
        rating: 4.5,
        comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
      }
    ],
    photos: [
      {
        thumb: "assets/img/menu/凉皮.jpeg",
        full_size: "assets/img/menu/凉皮.jpeg",
        description: "麻辣口味凉皮，牛肉凉口味皮以及乡巴佬卤蛋"
      },
      {
        thumb: "assets/img/menu/r2_thumb.jpg",
        full_size: "assets/img/menu/r2.jpg",
        description: ""
      },
      {
        thumb: "assets/img/menu/r1_thumb.jpg",
        full_size: "assets/img/menu/r1.jpg",
        description: ""
      },
      {
        thumb: "assets/img/menu/r4_thumb.jpg",
        full_size: "assets/img/menu/r4.jpg",
        description: ""
      }
    ]
  }
];
