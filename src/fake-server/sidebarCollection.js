class MenuItem {
  constructor (name, route, iconX, iconY) {
    this.name = name;
    this.link = route;
    this.icon = {
      x: iconX,
      y: iconY
    };
  }
}

var sidebarData = [
  new MenuItem('Моя страница', '/', 7, 6),
  new MenuItem('Мои сообщения', '/msg', 7, -21),
  new MenuItem('Мои друзья', '/friends', 7, -77)
];

export default sidebarData;
