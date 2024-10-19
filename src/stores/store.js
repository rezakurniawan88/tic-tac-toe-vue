import { defineStore } from 'pinia'
import { ref } from 'vue'
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

export const useStore = defineStore('store', () => {
  const player = ref(true)
  const board = ref(Array(9).fill(null))
  const winner = ref(null)
  const modalOpen = ref(false)
  const winningLine = ref([])

  const handleModalOpen = inputValue => {
    modalOpen.value = inputValue
  }

  const changePlayer = () => {
    player.value = !player.value
  }

  const insertValue = index => {
    if (!board.value[index] && !winner.value) {
      board.value[index] = player.value ? 'X' : 'O'
      changePlayer()
      checkWinner()
    }
  }

  const animateWinningLine = line => {
    line.forEach((index, i) => {
      setTimeout(() => {
        board.value[index] += '-win'
      }, i * 500)
    })

    setTimeout(() => {
      handleModalOpen(true)
    }, line.length * 500)
  }

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        board.value[a] &&
        board.value[a] === board.value[b] &&
        board.value[a] === board.value[c]
      ) {
        winner.value = board.value[a]
        winningLine.value = [a, b, c]
        animateWinningLine(winningLine.value)
        jsConfetti.addConfetti()
        return
      }
    }
    if (board.value.every(cell => cell !== null)) {
      winner.value = 'Draw'
      handleModalOpen(true)
    }
  }

  const resetGame = () => {
    board.value = Array(9).fill(null)
    winner.value = null
    player.value = true
    winningLine.value = []
    jsConfetti.clearCanvas()
  }

  return {
    player,
    board,
    winner,
    winningLine,
    modalOpen,
    handleModalOpen,
    changePlayer,
    insertValue,
    checkWinner,
    resetGame,
  }
})
