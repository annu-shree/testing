const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "gunjan",
        email: "gunjan@example.com",
      },
      {
        name: "anushree",
        email: "anushree@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "gunjan",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "chunmun",
        email: "chunmun@example.com",
      },
      {
         name: "anushree",
        email: "anushree@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "chunmun",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "linu",
        email: "linu@example.com",
      },
      {
        name: "anushree",
        email: "anushree@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "linu",
  },
  {
    isGroupChat: true,
    users: [
      {
         name: "gunjan",
        email: "gunjan@example.com",
      },
      {
         name: "anushree",
        email: "anushree@example.com",
      },
      {
        name: "chunmun",
        email: "chunmun@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "chunmun",
        email: "chunmun@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "gunjan",
        email: "gunjan@example.com",
      },
      {
         name: "anushree",
        email: "anushree@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "gunjan",
  },
  {
    isGroupChat: true,
    users: [
      {
         name: "gunjan",
        email: "gunjan@example.com",
      },
      {
         name: "anushree",
        email: "anushree@example.com",
      },
      {
         name: "chunmun",
        email: "chunmun@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "chunnmun",
        email: "chunmun@example.com",
    },
  },
];

module.exports= { chats };  