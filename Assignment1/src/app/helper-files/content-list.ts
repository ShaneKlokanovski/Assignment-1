class ContentList{
  static contentCount = 0;
  private items: Content[];
  constructor(item: Content) {
    this.items[0] = item;
    this.increaseCount();
  }
  increaseCount(): number {
    return ContentList.contentCount++;
  }
  get _items(): Content[]{
    return this._items;
  }
  itemCount(items): number {
    return items.count();
  }
}
