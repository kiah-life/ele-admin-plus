import { RouteRecordRaw, _RouteRecordBase, RouteComponent } from 'vue-router';
import { MenuItem } from '../ele-pro-layout/types';

/**
 * 获取路由组件方法
 */
export type GetComponent = (component?: string, menu?: MenuItem, name?: string) => (() => Promise<RouteComponent>) | RouteComponent | undefined;
/**
 * 菜单数据转为路由数据
 * @param menus 菜单数据
 * @param getComponent 加载组件的方法
 * @param added 已添加的路由
 */
export declare function menuToRoutes(menus: MenuItem[] | undefined, getComponent: GetComponent, added?: _RouteRecordBase[]): RouteRecordRaw[] | undefined;
