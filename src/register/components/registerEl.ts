import { ElButton, ElTable } from 'element-plus'

export function registerEl(app: any): void {
  const components = [ElButton, ElTable]

  for (const com of components) {
    console.log(app)

    app.component(com.name, com)
  }
}
