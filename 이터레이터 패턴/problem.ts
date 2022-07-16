/**
 * Javascript에서는 ArrayList가 없어 직접 구현
 */
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

  getMenuItem(): ArrayList {
    return this.menuItems;
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

  getMenuItem(): Array<MenuItem> {
    return this.menuItems;
  }
}

class Waitress {
  pancakeHouseMenu: PancakeHouseMenu;
  dinerMenu: DinerMenu;

  constructor() {
    this.pancakeHouseMenu = new PancakeHouseMenu();
    this.dinerMenu = new DinerMenu();
  }

  printMenu() {
    const breakfastItems = this.pancakeHouseMenu.getMenuItem();
    const lunchItems = this.dinerMenu.getMenuItem();

    // 둘다 구성요소가 다르기 때문에 각자 구성에 맞게 루프를 돌려야한다.
    console.log("---------- Dinner ----------");
    for (let i = 0; i < breakfastItems.size(); i++) {
      const menuItem: MenuItem = breakfastItems.get(i);
      console.log(menuItem.getName() + "");
      console.log(menuItem.getPrice() + "");
      console.log(menuItem.getDescription() + "");
    }

    console.log("---------- Lunch ----------");
    for (let i = 0; i < lunchItems.length; i++) {
      const menuItem = lunchItems[i];
      console.log(menuItem.getName() + "");
      console.log(menuItem.getPrice() + "");
      console.log(menuItem.getDescription() + "");
    }
  }
}

new Waitress().printMenu();

/**
 * 이 코드의 가장 큰 문제점은 각자 구성한 코드가 다르기 때문에 두개 class 중 하나가 통합시키지 않는 이상 루프를 2번돌리는 코드를 지우기가 힘들다.
 * 또한 나중에 가게가 들어오고 그 가게도 다른 구성에 배열을 쓰게되면 루프문을 3번 쓸수도있다.
 * 이러한 방법에 코드를 크게 건들지 않고 각 메뉴에 대한 똑같은 인터페이스를 구현 즉 통합시키는 방향으로 가야된다.
 * *각 class는 인터페이스가 아닌 구상클래스에 맞춰서 코딩하고있다.*
 */
