<script setup>
import BoxTicTacToe from '@/components/BoxTicTacToe.vue'
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template>
  <main
    class="relative flex flex-col justify-center items-center bg-[#052240] text-white w-full h-screen"
  >
    <div class="flex flex-col justify-center items-center w-full py-4">
      <div class="flex items-start mb-4 text-xs">
        <div
          class="flex items-center justify-center gap-2"
          :class="{ 'font-bold text-green-400': store.player }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-round"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
          <h2>Player 1 (X)</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="{ hidden: !store.player }"
            class="lucide lucide-arrow-big-left text-white"
          >
            <path d="M18 15h-6v4l-7-7 7-7v4h6v6z" />
          </svg>
        </div>
      </div>

      <div class="flex flex-wrap w-[20rem] h-[20rem] sm:w-[28rem] sm:h-[28rem]">
        <BoxTicTacToe v-for="i in 9" :key="i" :index="i - 1" />
      </div>

      <div class="flex items-end mt-4 text-xs">
        <div
          class="flex items-center justify-center gap-2"
          :class="{ 'font-bold text-green-400': !store.player }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-round"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
          <h2>Player 2 (O)</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="{ hidden: store.player }"
            class="lucide lucide-arrow-big-left text-white"
          >
            <path d="M18 15h-6v4l-7-7 7-7v4h6v6z" />
          </svg>
        </div>
      </div>
    </div>

    <div
      :class="{ hidden: !store.winner }"
      class="absolute flex flex-col justify-center items-center bg-slate-900 w-full h-full backdrop-blur-md opacity-90"
    >
      <div
        v-if="store.winner"
        class="mb-4 text-xl sm:text-2xl animate-scale-down-once"
      >
        <p v-if="store.winner === 'Draw'">It's a draw!</p>
        <p v-else>
          Winner:
          {{
            store.winner === 'X'
              ? 'Player 1'
              : store.winner === 'O'
                ? 'Player 2'
                : null
          }}
        </p>
      </div>

      <button
        @click="store.resetGame()"
        class="text-xs mt-4 bg-[#95deff] text-slate-700 px-8 py-2 rounded-2xl shadow-md shadow-teal-300 transition duration-100 ease-in hover:bg-pink-500 hover:text-white hover:shadow-pink-400"
      >
        Reset Game
      </button>
    </div>
  </main>
</template>
