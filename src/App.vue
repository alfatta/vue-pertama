<template>
  <p>Usia saya : {{ usia }} tahun</p>
  <input type="number" v-model.number="usia" />

  <template v-if="usiaDiatas20">
    <p>Selamat Pagi Pak</p>
    <p>Usia anda diatas 20</p>
  </template>

  <template v-else>
    <p>Selamat Pagi Kak</p>
    <p>Usia anda tidak diatas 20</p>
  </template>

  <ul>
    <li v-for="(pegawai, i) in listPegawai">{{ pegawai }} - {{ i + 1 }}</li>
  </ul>

  <table border="1">
    <thead>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Usia</th>
        <th>Jumlah Anak</th>
      </tr>
    </thead>
    <tbody>
      <template
        v-for="(pegawai, i) in listPegawaiAdv"
        :key="pegawai.nip">
        <tr v-if="pegawai.jmlAnak > 0">
          <td>{{ i + 1 }}</td>
          <td>{{ pegawai.nama }}</td>
          <td>{{ pegawai.usia }}</td>
          <td align="center">{{ pegawai.jmlAnak }}</td>
        </tr>
      </template>
    </tbody>
  </table>

  <p>Terima kasih</p>
</template>

<script>
export default {
  data() {
    return {
      listPegawai: ["andi", "budi", "caca"],
      listPegawaiAdv: [
        { nip: "KX12", nama: "Andi", usia: 20, jmlAnak: 3 },
        { nip: "CD98", nama: "Budi", usia: 20, jmlAnak: 0 },
        { nip: "PQ52", nama: "Caca", usia: 20, jmlAnak: 2 },
      ],
      usia: 20,
    };
  },
  computed: {
    usiaDiatas20() {
      return this.usia > 20;
    },
  },
};
</script>
