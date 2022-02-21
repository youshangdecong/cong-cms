import { useRouter } from 'vue-router'

export function routerMenu(userMenu: any, uRouter?: any) {
  const router = uRouter || useRouter()
  const menuUrls: any[] = []
  const allRoutes: any[] = []

  function getMenuUrls(menus: any) {
    for (const menu of menus) {
      if (menu.type === 2) {
        menuUrls.push(menu.url)
      }
      if (menu.children) {
        getMenuUrls(menu.children)
      }
    }
  }

  getMenuUrls(userMenu)

  const routeFilles = require.context('../router/main', true, /\.ts$/)
  routeFilles.keys().forEach((key) => {
    const route = require('../router/main' + key.slice(1))

    allRoutes.push(route.default)
  })

  // console.log(menuUrls, allRoutes)

  for (let i = 0; i < menuUrls.length; i++) {
    for (let j = 0; j < allRoutes.length; j++) {
      if (menuUrls[i] === allRoutes[j].path) {
        // console.log(router)

        router.addRoute('main', allRoutes[j])
      }
    }
  }
}

export interface IlistObj {
  breadCroumb: string
  breadCroumbItem: any[]
}

export function getBreadcrumbList(userMenu: any) {
  const breadCroumbList: any[] = []
  let breadCroumb = ''
  let breadCroumbItem: any[] = []
  function _getBreadcrumbList(userMenu: any) {
    for (const menu of userMenu) {
      if (menu.type === 1) {
        breadCroumb = menu.name
        breadCroumbItem = []
      }
      if (menu.url && menu.type !== 1) {
        const newBreadCroumbItem = breadCroumbItem.map((item: any) => item)
        newBreadCroumbItem.push(menu.name)
        breadCroumbList.push({
          breadCroumb,
          newBreadCroumbItem
        })
      }
      if (menu.children?.length > 0 && menu.url) {
        _getBreadcrumbList(menu.children)
      }
    }
  }
  _getBreadcrumbList(userMenu)
  console.log(breadCroumbList)

  return breadCroumbList
}

export function getMenuInfo(
  url: string,
  menus: any[],
  returnType: string
): string {
  let result = ''

  const _getMenuName = (menus: any[]) => {
    for (const item of menus) {
      if (item.url === url) {
        result = item[returnType]
      }
      if (item.children && item.children.length > 0) {
        _getMenuName(item.children)
      }
    }
  }
  _getMenuName(menus)
  return result
}
