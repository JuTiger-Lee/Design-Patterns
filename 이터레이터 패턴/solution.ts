class ArrayList {
  private items: Array<any>;

  constructor() {
    this.items = [];
  }

  add(item: any) {
    this.items.push(item);
  }

  size() {
    return this.items.length;
  }

  get(index: number) {
    return this.items[index];
  }
}

interface Iterators {
  hasNext(): boolean;
  next(): MenuItem;
}

class MenuItem {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  isVegetarian(): boolean {
    return this.vegetarian;
  }
}

class PancakeHouselterator implements Iterators {
  items: ArrayList;
  position = 0;

  constructor(items: ArrayList) {
    this.items = items;
  }

  next(): MenuItem {
    const menuItem: MenuItem = this.items.get(this.position);
    this.position += 1;

    return menuItem;
  }

  hasNext(): boolean {
    if (
      this.position >= this.items.size() ||
      this.items.get(this.position) == null
    ) {
      return false;
    } else {
      return true;
    }
  }
}

class DinnerMenuIterator implements Iterators {
  items: MenuItem[];
  position = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  next(): MenuItem {
    const menuItem: MenuItem = this.items[this.position];
    this.position += 1;

    return menuItem;
  }

  hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] == null
    ) {
      return false;
    } else {
      return true;
    }
  }
}

class DinerMenu {
  static readonly MAX_ITEMS = 6;
  numberOfItems = 0;
  menuItems: Array<MenuItem>;

  constructor() {
    this.menuItems = [];

    this.addItem(
      "채식주의자용 BLT",
      "통밀 위에(식물성) 베이컨, 상추, 토마토를 얹은 메뉴",
      true,
      2.99
    );

    this.addItem(
      "BLT",
      "통밀 위에 베이컨, 상추, 토마토를 얹은 메뉴",
      false,
      2.99
    );

    this.addItem("오늘의 슬프", "감자 샐러드를 겉들인 오늘의 스프", true, 3.29);

    this.addItem(
      "핫도그",
      "사워크라우트, 갖은 양념, 양파, 치즈가 곁들여진 핫도그",
      true,
      3.05
    );
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    const menuItem: MenuItem = new MenuItem(
      name,
      description,
      vegetarian,
      price
    );

    if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
      console.log("죄송합니다 메뉴가 꽉찼습니다.");
    } else {
      this.menuItems.push(menuItem);
      this.numberOfItems += 1;
    }
  }
  /**
   * 내부구조가 다 드러내는 단점이 있다 즉 캡슐화 원칙 위반이기에 없애는게 낫다.
   */
  //   getMenuItem(): Array<MenuItem> {
  //     return this.menuItems;
  //   }

  /**
   * createIterator() 메서드는 menuItmes 배열을 가지고
   * DinnerMenuIterator를 생성한 다음 클라이언트한테 던진다.
   */
  createIterator(): Iterators {
    return new DinnerMenuIterator(this.menuItems);
  }
}

class PancakeHouseMenu {
  menuItems: ArrayList;

  constructor() {
    this.menuItems = new ArrayList();

    this.addItem(
      "K&B 팬케이크 세트",
      "스크램블드 에그와 토스트가 곁들여진 팬케이크",
      true,
      2.99
    );
    this.addItem(
      "레귤러 팬케이크 세트",
      "달걀 후라이와 소시지가 곁들여진 팬케이크",
      false,
      2.99
    );
    this.addItem(
      "블루베리 팬케이크",
      "신선한 블루베리와 블루베리 시럽으로 만든 팬케이크",
      true,
      2.99
    );
    this.addItem(
      "K&B 팬케이크 세트",
      "와플, 취향에 따라 블루베리나 딸기를 얹을 수 있습니다.",
      true,
      2.99
    );
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    const menuItem: MenuItem = new MenuItem(
      name,
      description,
      vegetarian,
      price
    );

    this.menuItems.add(menuItem);
  }

  // getMenuItem(): ArrayList {
  //   return this.menuItems;
  // }

  createIterator(): Iterators {
    return new PancakeHouselterator(this.menuItems);
  }
}

class Waitress {
  pancakeHouseMenu: PancakeHouseMenu;
  dinnerMenu: DinerMenu;

  constructor(pancakeHouseMenu: PancakeHouseMenu, dinnerMenu: DinerMenu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinnerMenu = dinnerMenu;
  }

  printMenu() {
    const pancakeIterator: Iterators = this.pancakeHouseMenu.createIterator();
    const dinnerIterator: Iterators = this.dinnerMenu.createIterator();
    console.log("메뉴\n----\n아침메뉴");
    this.printMenu2(pancakeIterator);
    console.log("\n점심메뉴");
    this.printMenu2(dinnerIterator);
  }

  /**
   * typescript는 오버로디잉 안됨
   */
  printMenu2(iterator: Iterators) {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(menuItem.getName() + "");
      console.log(menuItem.getPrice() + "--");
      console.log(menuItem.getDescription() + "");
    }
  }
}

new Waitress(new PancakeHouseMenu(), new DinerMenu()).printMenu();
