import { MenuItem } from '@/store/modules/menu';
/**
 * @description 使用递归找出所有面包屑存储到 pinia/vuex 中
 * @param {Array} menuList 菜单列表
 * @param {Array} parent 父级菜单
 * @param {Object} result 处理后的结果
 * @returns {Object}
 */
export const handleAllBreadcrumbList = (
  menuList: MenuItem[],
  parent = [],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: { [key: string]: any } = {}
) => {
  for (const item of menuList) {
    result[item.path] = [...parent, item];
    if (item.children) handleAllBreadcrumbList(item.children, result[item.path], result);
  }
  return result;
};

/**
 * @description 扁平化菜单，好动态添加路由
 * @param menuList 菜单列表
 * @returns {Array}
 */
export const handleFlatMenuList = (menuList: MenuItem[]): MenuItem[] => {
  const newMenuList: MenuItem[] = JSON.parse(JSON.stringify(menuList));
  return newMenuList.flatMap((item) => {
    return [item, ...(item.children ? handleFlatMenuList(item.children) : [])];
  });
};
