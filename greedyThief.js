function greedyThief(items, n) {
  let counter = 0;
  const listItem = [];
  let i = 0;

  while (counter != n && counter + items[i].weight <= n) {
    counter += items[i].weight;
    listItem.push(items[i]);
    i++;
  }

  return listItem;
}

function greedyThief(items, n) {
  let counter = 0;
  const listItem = [];

  // Loop until we can't add any more items or we've used all the available items
  while (counter < n && items.length > 0) {
    // Find the item with the highest price-to-weight ratio
    let bestItem = items[0];
    for (let i = 1; i < items.length; i++) {
      if (items[i].price / items[i].weight > bestItem.price / bestItem.weight) {
        bestItem = items[i];
      }
    }

    // Check if we can add the best item to our list
    if (counter + bestItem.weight <= n) {
      counter += bestItem.weight;
      listItem.push(bestItem);
    }

    // Remove the best item from the available items list
    items = items.filter((item) => item !== bestItem);
  }

  return listItem;
}
