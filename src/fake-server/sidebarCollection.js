class MenuItem {
  constructor (name, route) {
    this.name = name;
    this.link = route;
  }
}

var sidebarData = [
  new MenuItem('Моя страница', '/'),
  new MenuItem('Мои сообщения', '/msg'),
  new MenuItem('Мои друзья', '/friends')
];

export default sidebarData;
