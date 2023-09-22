interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Inventory Manager', 'Shipping Coordinator', 'Receiving Clerk', 'End Customer'],
  tenantName: 'Warehouse',
  applicationName: 'HG DEPO YÖNETİMİ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage inventory', 'Manage user accounts', 'Manage warehouse'],
  getQuoteUrl: 'https://app.roq.ai/proposal/09f8a5bf-e566-4323-8ece-9cf10f64cc5f',
};
