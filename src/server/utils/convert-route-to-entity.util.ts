const mapping: Record<string, string> = {
  inventories: 'inventory',
  users: 'user',
  warehouses: 'warehouse',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
