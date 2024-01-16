export default  () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ullam cumque veniam, sequi facilis consequuntur temporibus',
      picture: null,
    },
    {
      id: new Date().getTime() + 50,
      date: new Date().toDateString(),
      text: 'Deserunt, sint facere aliquid culpa dicta hic voluptas rerum cupiditate doloremque dolorem voluptatem quisquam!',
      picture: null,
    },
    {
      id: new Date().getTime() + 100,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ullam cumque veniam, sequi facilis consequuntur temporibus',
      picture: null,
    },
  ],
})