<template>
  <div class="pos-customer">
    <Title class="p-4 mb-1" :badge="0">Your Order</Title>

    <div class="px-4">
      <el-table class="pos-customer__table" :data="tableData" height="510px">
        <el-table-column
          prop="cover"
          label="Image"
          width="100"
          header-align="center"
        >
          <template slot-scope="scope">
            <el-image
              class="pos-customer__image mr-3"
              :src="scope.row.cover"
              fit="cover"
            >
              <div slot="error">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="Name">
          <template slot-scope="scope">
            <div class="pos-customer__product-code">#{{ scope.row.id }}</div>
            {{ scope.row.title }}
            <div class="pos-customer__product-remark" v-if="scope.row.discount">
              &#8226; buy 2 unique series books discount 10%
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          label="Price"
          width="100"
          header-align="center"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="qty"
          label="Qty"
          width="100"
          header-align="center"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="discount"
          label="Discount"
          width="100"
          header-align="center"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="total"
          label="Total"
          width="100"
          header-align="center"
          align="center"
        ></el-table-column>
      </el-table>
    </div>

    <div class="px-4 d-flex flex-column align-items-end mt-auto">
      <div class="pos-customer__total my-4">
        <div>Total :</div>
        <div class="ml-auto">฿600</div>
      </div>
    </div>

    <!-- <div class="pos-customer__empty px-4">
      <div>
        <i class="el-icon-s-shop"></i>
        <span>
          Welcome
        </span>
      </div>
    </div> -->
    <ModalThankyou />
  </div>
</template>

<script>
import ModalThankyou from "@/components/ModalThankyou";
import Title from "@/components/Title";
export default {
  name: "Customer",
  components: { Title, ModalThankyou },
  data() {
    return {
      tableData: [
        {
          cover:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
          price: "฿350",
          total: "฿350",
          discount: "฿100",
          title: "Harry Potter and the Philosopher's Stone (I)",
          id: "9781408855652",
          qty: 1
        },
        {
          cover:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855676.jpg",
          price: "฿350",
          total: "฿350",
          discount: null,
          title: "Harry Potter and the Philosopher's Stone (I)",
          id: "9781408855652",
          qty: 1
        },
        {
          cover:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855676.jpg",
          price: "฿350",
          total: "฿350",
          discount: null,
          title: "Harry Potter and the Philosopher's Stone (I)",
          id: "9781408855652",
          qty: 1
        },
        {
          cover:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855676.jpg",
          price: "฿350",
          total: "฿350",
          discount: null,
          title: "Harry Potter and the Philosopher's Stone (I)",
          id: "9781408855652",
          qty: 1
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@include block("customer") {
  background-color: #34373f;
  width: 982px;
  min-width: 982px;
  height: 680px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 4px 0px 50px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  @include element("product-code") {
    font-size: 12px;
    opacity: 0.6;
    line-height: 12px;
  }
  @include element("product-remark") {
    font-size: 12px;
    opacity: 0.6;
  }
  @include element("empty") {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      margin-top: -78px;
      text-align: center;
      i {
        color: #fff;
        font-size: 100px;
        display: block;
        opacity: 0.5;
      }
      span {
        border-radius: 18px;
        background-color: #52535a;
        margin-top: 10px;
        padding: 6px 20px;
        display: inline-block;
        color: rgba(#fff, 0.7);
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
  @include element("table") {
    background-color: transparent;
    color: #fff;
    &::before {
      background-color: rgba(255, 255, 255, 0.1);
    }
    thead {
      color: #fff;
      tr {
        background-color: transparent;
      }
      th {
        border: none;
        background-color: #52535a;
      }
    }
    tbody {
      tr,
      tr:hover > td {
        background-color: transparent;
      }
      td {
        border-color: rgba(255, 255, 255, 0.1);
        padding: 20px 0;
      }
      tr:last-child td {
        border: none;
      }
    }
  }
  @include element("image") {
    width: 80px;
    height: 120px;
    background-color: #f5f7fa;
    font-size: 24px;
    color: #909399;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
  @include element("total") {
    width: 250px;
    background-color: #52535a;
    display: flex;
    color: #fff;
    padding: 11px 16px;
    border-radius: 4px;
    font-size: 14px;
  }
}
</style>
