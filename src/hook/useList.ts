import { useStore } from '@/store'
import { ref } from 'vue'
import { PcDialog } from '@/base-ui/src'
interface IdefaultOffsetSize {
  offset?: number
  size?: number
}
export function useList(name: string) {
  const defaultOffsetSize: IdefaultOffsetSize = {
    offset: 0,
    size: 10
  }
  const store = useStore()

  store.dispatch('system/getListAction', {
    name
  })

  //控制PcDialog的显示
  const changeType = ref('')
  const formDataResult = ref({})
  const dialogRef = ref<InstanceType<typeof PcDialog>>()
  const isShowDialog = (playload: any) => {
    const { type, formData } = playload
    if (dialogRef.value) {
      dialogRef.value.dialogVisible = true
      changeType.value = type
      formDataResult.value = formData
    }
  }

  //删除用户信息
  const deleteInfo = (id: number) => {
    console.log('123')

    store.dispatch('system/deleteUserAction', {
      id: id,
      name
    })
  }

  // 监听分页的改变
  const changePages = (data: IdefaultOffsetSize) => {
    const { offset = defaultOffsetSize.offset, size = defaultOffsetSize.size } =
      data

    if (offset !== undefined && size !== undefined) {
      defaultOffsetSize.offset = offset * size
      defaultOffsetSize.size = size
    }
    // console.log(defaultOffsetSize)

    store.dispatch('system/getListAction', {
      data: defaultOffsetSize,
      name
    })
  }

  //获取用户列表的最大值

  return {
    isShowDialog,
    deleteInfo,
    changePages,
    changeType,
    formDataResult,
    dialogRef
  }
}
