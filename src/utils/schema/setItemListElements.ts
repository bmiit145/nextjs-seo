import { ItemListElements } from '../../types';

export function setItemListElements(items: ItemListElements[]) {
  if (items && items.length) {
    return items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      item: item.item,
      name: item.name,
    }));
  }

  return undefined;
}
