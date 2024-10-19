<script setup>
import { useStore } from '@/stores/store'

const store = useStore()

defineProps({
  index: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div
    :class="[
      store.board[index] === 'X-win'
        ? 'text-[#95deff] bg-green-400 bg-opacity-50 transition-colors duration-500'
        : store.board[index] === 'O-win'
          ? 'text-[#fa1593] bg-green-400 bg-opacity-50 transition-colors duration-500'
          : store.board[index] === 'X'
            ? 'text-[#95deff]'
            : store.board[index] === 'O'
              ? 'text-[#fa1593]'
              : '',
    ]"
    @click="store.insertValue(index)"
    class="flex justify-center items-center text-5xl w-1/3 h-1/3 border-2 border-dashed cursor-pointer hover:bg-slate-400 hover:bg-opacity-50"
  >
    {{ store.board[index] ? store.board[index].replace('-win', '') : '' }}
  </div>
</template>
