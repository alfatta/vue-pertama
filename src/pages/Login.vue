<template>
  <MyCustomParagraph
    title="Ini Halaman Login"
    warna="success"
    pakaiKotak />

  <MyCustomParagraph
    v-for="(info, i) in informasi" :key="i"
    :title="info" />

  <MyCustomParagraph :title="undefined" />
  <MyCustomParagraph title="" />

  <input type="text" ref="username" v-model="username">
  <input type="text" ref="password">

  <p v-for="n in 10" ref="paragraf"> test </p>

  <Table>
    <template #head>
      <TableRow>
        <TableCell head>No</TableCell>
        <TableCell head>Nama</TableCell>
        <TableCell head>Usia</TableCell>
      </TableRow>
    </template>
    <template #default>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>Andi</TableCell>
        <TableCell>20</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>2</TableCell>
        <TableCell>Budi</TableCell>
        <TableCell>25</TableCell>
      </TableRow>
    </template>
  </Table>

  <table v-html="row" />

  <p>{{ kota }}</p>

  <Select :items="listKota" v-model="kota" />

</template>

<script>
// import Table from '../components/Table.vue';
// import TableRow from '../components/TableRow.vue';
// import TableCell from '../components/TableCell.vue';

import { Table, TableCell, TableRow } from '../components/Table.js'

import Select from '../components/Select.vue';

export default {
  data() {
    return {
      username: 'test',
      informasi: [
        "berita 1",
        "berita 2",
        "berita 3",
      ],
      row: '<tr><td>1</td><td>Caca</td><td>31</td></tr>',
      listKota: [
        { title: 'Jakarta Selatan', value: 'jakarta-selatan' },
        { title: 'Jakarta Barat', value: 'jakarta-barat' },
        { title: 'Jakarta Timur', value: 'jakarta-timur' },
        { title: 'Jakarta Utara', value: 'jakarta-utara' },
        { title: 'Jakarta Pusat', value: 'jakarta-pusat' },
      ],
      kota: 'jakarta-barat'
    }
  },
  mounted() {
    this.$refs.username.focus()
  },
  components: {
    Table,
    TableRow,
    TableCell,
    Select,
  }
}
</script>
