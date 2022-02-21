<template>
  <div class="table">
    <div class="header">
      <h2 :style="{ paddingLeft: '10px' }">{{ tableTitle }}</h2>
      <el-button v-if="userlist.length > 0" type="primary" @click="showDialog"
        >新建数据</el-button
      >
    </div>

    <div class="content">
      <el-table
        :data="userlist"
        style="width: 100%"
        :border="true"
        row-key="id"
        fit
      >
        <template v-if="tableConfig.isSelect">
          <el-table-column type="selection" width="60px"> </el-table-column>
        </template>

        <template v-if="tableConfig.isIndex">
          <el-table-column
            label="序号"
            width="80px"
            type="index"
          ></el-table-column>
        </template>

        <template v-for="item in tableConfig.tabConfigItem" :key="item.label">
          <el-table-column
            :prop="item.prop"
            :min-width="item.width"
            :label="item.label"
          >
            <template v-if="item.prop === 'enable'" #default="scope">
              <template v-if="scope.row[item.prop] === 1">
                <el-button size="small" type="success" plain>启用</el-button>
              </template>
              <template v-else-if="scope.row[item.prop] === 0">
                <el-button size="small" type="danger" plain>禁用</el-button>
              </template>
            </template>

            <template
              v-else-if="item.prop === 'createAt' || item.prop === 'updateAt'"
              #default="scope"
            >
              <div>{{ fomatData(scope.row[item.prop]) }}</div>
            </template>

            <template v-else-if="item.prop === 'imgUrl'" #default="scope">
              <div class="goods-img-box">
                <img class="goods-img" :src="scope.row[item.prop]" alt="" />
              </div>
            </template>
          </el-table-column>
        </template>

        <slot>
          <el-table-column label="操作" width="160px">
            <template #default="scope">
              <div class="operation">
                <div class="edit" @click="writeFormData(scope)">
                  <el-icon>
                    <edit></edit>
                  </el-icon>
                  <el-link type="primary">操作</el-link>
                </div>
                <div class="remove" @click="deleteUser(scope)">
                  <el-icon>
                    <delete />
                  </el-icon>
                  <el-link type="primary">删除</el-link>
                </div>
              </div>
            </template>
          </el-table-column>
        </slot>
      </el-table>

      <slot name="pagination">
        <div class="pagination">
          <el-pagination
            v-model:currentPage="currentPage"
            :page-sizes="[3, 20, 30, 40]"
            :small="small"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="TotalCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { ItableConfig } from '../../components/pc-table/type'
import { Edit, Delete } from '@element-plus/icons-vue'
import { fomatDataUtc } from '@/utils/fomatDataUtc'
export default defineComponent({
  emits: ['isShowDialog', 'changeFromData', 'deleteInfo', 'changePages'],
  props: {
    tableTitle: {
      type: String,
      default: ''
    },
    TotalCount: {
      type: Number,
      default: 0
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    userlist: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableConfig: {
      type: Object as PropType<ItableConfig>,
      default: () => ({})
    }
  },
  components: {
    Edit,
    Delete
  },
  setup(props, { emit }) {
    const showDialog = () => {
      emit('isShowDialog', {
        type: 'new'
      })
    }
    const writeFormData = (scope: any) => {
      const formData = scope.row
      console.log(formData, '9090')

      emit('isShowDialog', {
        type: 'edit',
        formData
      })
    }

    const deleteUser = (scope: any) => {
      const id = scope.row.id
      emit('deleteInfo', {
        id
      })
    }
    // 过滤时间
    const fomatData = computed(() => {
      return fomatDataUtc
    })

    const handleSizeChange = (pages: number) => {
      emit('changePages', { size: pages })
    }
    const handleCurrentChange = (curentpage: number) => {
      emit('changePages', { offset: curentpage - 1 })
    }

    const currentPage = ref(1)

    return {
      showDialog,
      writeFormData,
      deleteUser,
      fomatData,
      handleSizeChange,
      handleCurrentChange,
      currentPage
    }
  }
})
</script>

<style lang="less">
.table {
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  .header {
    display: flex;
    padding-top: 20px;
    align-items: center;

    justify-content: space-between;

    h2 {
      font-size: 20px;
    }
  }
  .content {
    margin-top: 10px;
    .el-table {
      .cell {
        text-align: center;
      }
      .operation {
        display: flex;
        justify-content: space-evenly;
        .edit,
        .remove {
          display: flex;
          align-items: center;
          .el-icon {
            color: #409eff;
          }
        }
      }
    }
  }
}
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
.el-table__cell {
  padding: 7px 0 !important;
}
.cell {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  line-height: 35px !important;
}
.goods-img-box {
  display: flex;
  justify-content: center;
  align-items: center;
  .goods-img {
    width: 50px;
    height: 50px;
    padding: 10px 0;
    // transform: translateY(-50%);
  }
}
</style>
