const users = [
  {
    id: "amyrobson",
    info: { avatar: "./images/avatars/image-amyrobson.png" },
    comments: [
      {
        time: "last week",
        rate: 5,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem quaerat voluptatum similique provident porro libero, eveniet quae explicabo cum dolores ab incidunt iste nemo!",
        replies: [
          {
            id: "juliusomo",
            comments:
              "oluptatum similique provident porrolibero, eveniet quae explicabo cum dolor..",
            rate: "0",
            time: "last week",
          },
        ],
      },
    ],
  },
  {
    id: "juliusomo",
    info: { avatar: "./images/avatars/image-juliusomo.png" },
    comments: [
      {
        time: "2 weeks ago",
        rate: 12,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem quaerat voluptatum similique provident porrolibero, eveniet quae explicabo cum dolores ab incidunt iste nemo! Lorem ipsum dolor sit.",
        replies: [],
      },
    ],
  },
  {
    id: "maxblagun",
    info: { avatar: "./images/avatars/image-maxblagun.png" },
    comments: [
      {
        time: "1 hour ago",
        rate: 3,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem quaerat voluptatum simipsum dolor sit amet consectetur adipisicing elit. Nam quidem quaerat voluptatum similique provident porrolibero, eveniet quae explicabo cum dolores ab incidunt iste nemo! Lorem ipsum dolor sit.",
        replies: [
          {
            id: "ramsesmiron",
            comments:
              "oluptatum similique provident porrolibero, eveniet quae explicabo cum dolores ab incidunt iste nemo! Lorem ipsum dolor sit.",
            rate: "1",
            time: "8 minutes ago",
          },
          {
            id: "juliusomo",
            comments:
              "oluptatum similique provident porrolibero, eveniet quae explicabo cum dolores ab incidunt iste nemo! Lorem ipsum dolor sitoluptatum similique provident porrolibero, eveniet quae explicabo cum dolores ab incidunt iste nemo! Lorem ipsum dolor sit.",
            rate: "10",
            time: "1 minute ago",
          },
        ],
      },
    ],
  },
  {
    id: "ramsesmiron",
    info: { avatar: "./images/avatars/image-ramsesmiron.png" },
    comments: [
      {
        time: "last year",
        rate: 0,
        comment:
          "et consectetur adipisicing elit. Nam quidem quaerat voluptatum similique provident porro",
        replies: [
          {
            id: "maxblagun",
            comments:
              "oluptatum similique provident porrolibero, eveniet quae explicabo cum dolores ab incidunt iste nemo! Lorem ipsum dolor sit.",
            rate: "10",
            time: "8 months ago",
          },
        ],
      },
    ],
  },
];
