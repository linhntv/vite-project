<template>
  <div class="user-management">
    <div class="user-management_filter">
      <button class="btn-delete">
        <img :src="deleteIcon" alt="" class="icon-delete" />
        <span>Delete</span>
      </button>
      <div class="user-management_warp">
        <div class="input-search">
          <input type="text" placeholder="search" />
          <span>
            <img :src="search" alt="" />
          </span>
        </div>
        <button class="btn-add_user">
          <img :src="addUserIcon" alt="" class="add-user-icon" />
          <span>Add user</span>
        </button>
      </div>
    </div>
    <table class="table-user">
      <thead class="table-user_warp">
        <tr class="table-user_header">
          <th class="header-checkbox">
            <input
              type="checkbox"
              name=""
              id=""
              v-model="checkAll"
              @click="handleCheckAll()"
            />
          </th>
          <th
            v-for="(headerItem, index) in headerDataTable"
            :key="index"
            class="header-user_name"
          >
            {{ headerItem.headerName }}
          </th>
        </tr>
      </thead>
      <tbody class="table-user_content">
        <tr
          v-for="(user, index) in userManagement"
          :key="index"
          class="user-content_item"
        >
          <td class="user-content_checkbox">
            <input
              type="checkbox"
              v-model="user.checked"
              @click="handleCheckbox(index, user.checked)"
            />
          </td>
          <td>{{ user.userName }}</td>
          <td>{{ user.starAt }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.type }}</td>
          <td>{{ user.lastAccess }}</td>
          <td class="btn">
            <button class="btn-edit" @click="editUser(index)">Edit</button>
            <button class="btn-delete">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import deleteIcon from "../assets/deleteIcon.svg";
import search from "../assets/search.svg";
import addUserIcon from "../assets/addUserIcon.svg";
import { ref, reactive, watch } from "vue";
const props = defineProps({
  userManagement: {
    type: Array,
  }
})
const headerDataTable = reactive([
  {
    headerName: "User Name",
  },
  {
    headerName: "Data Added",
  },
  {
    headerName: "Email",
  },
  {
    headerName: "Type",
  },
  {
    headerName: "Last Access",
  },
  {
    headerName: "Action",
  },
]);
const userData = reactive({
  checked: '',
  userName: "",
  starAt: "",
  email: "",
  type: "",
  lastAccess: "",
});
const checkAll = ref(false);
function handleCheckAll() {
  this.checkAll = !this.checkAll;
  if (this.checkAll) {
    userManagement.forEach((item) => {
      item.checked = true;
    });
  } else {
    userManagement.forEach((item) => {
      item.checked = false;
    });
  }
}
function handleCheckbox(index, checked) {
  checked = !checked;
  console.log(index, checked);
}
const editUser = (index) => {
  console.log(index, "index");
};
</script>

<style lang="scss" scoped>
.user-management {
  width: 100%;
  .user-management_filter {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin-bottom: 24px;
    .btn-delete {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 5px 10px;
      border: 1px solid #e5dbdb;
      border-radius: 4px;
      cursor: pointer;
      color: #d5c7c7;
      &:hover {
        color: #4d4d4d;
        .icon-delete {
          opacity: 0.9;
        }
      }
      .icon-delete {
        width: 13px;
        height: 13px;
        opacity: 0.3;
      }
    }
    .user-management_warp {
      display: flex;
      gap: 10px;
      .input-search {
        input {
          padding: 5px 10px;
          outline: none;
          border: 1px solid #e5dbdb;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
        span {
          padding: 5px 8px;
          border: 1px solid #e5dbdb;
          text-align: center;
          cursor: pointer;
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
          img {
            margin-top: 4px;
            width: 10px;
            height: 10px;
          }
        }
      }
      .btn-add_user {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 5px 10px;
        border: 1px solid #e5dbdb;
        border-radius: 4px;
        cursor: pointer;
        color: #6448a3;
        &:hover {
          color: #4d4d4d;
          .add-user-icon {
            opacity: 0.9;
          }
        }
        .add-user-icon {
          width: 13px;
          height: 13px;
          opacity: 0.3;
        }
      }
    }
  }
  .table-user {
    width: 100%;
    border-spacing: 0px;
    border-collapse: collapse;
    &_warp {
      background-color: #eae7f1;
      height: 32px;
      .table-user_header {
        .header-checkbox {
          padding: 0 0 0 12px;
          text-align: left;
          width: 40px;
        }
        .header-user_name {
          font-size: 12px;
          font-weight: 400;
          color: #4d4d4d;
          text-align: left;
        }
      }
    }
    .table-user_content {
      .user-content_item {
        height: 32px;
        font-size: 12px;
        border-bottom: 1px solid #e2dddd;
        .user-content_checkbox {
          padding: 0 0 0 12px;
        }
        .btn {
          height: 32px;
          max-width: 90px;
          display: flex;
          gap: 4px;
          align-items: center;
          &-edit,
          &-delete {
            padding: 4px 8px;
            border-radius: 4px;
            cursor: pointer;
            background: #f3dcdc;
            border: none;
            &:hover {
              background: #d5bcce;
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>