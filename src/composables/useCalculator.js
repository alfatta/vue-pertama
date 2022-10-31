import { ref } from "vue";

export function useCalculator(initNumber) {
  const result = ref(initNumber);

  const tambah = (n) => {
    result.value += n;
  };

  const kurang = (n) => {
    result.value -= n;
  };

  const kali = (n) => {
    result.value *= n;
  };

  const bagi = (n) => {
    result.value /= n;
  };

  return { result, tambah, kurang, kali, bagi };
}
