<template>
    <button @click="connectWallet" class="wallet-button">
      {{ connected ? "Wallet Connected" : "Connect Wallet" }}
    </button>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const connected = ref(false);
  
  const connectWallet = () => {
    connected.value = !connected.value;
  };
  </script>
  
  <style scoped>
  .wallet-button {
    background-color: #008cff;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .wallet-button:hover {
    background-color: #005bbf;
  }
  </style>
  